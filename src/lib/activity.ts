import { createServerFn } from "@tanstack/react-start";

export type Day = { date: string; count: number; level: number };

export type RepoCard = {
  name: string;
  description: string;
  language: string;
  url: string;
  pushedAt: string;
};

export type Solve = {
  title: string;
  slug: string;
  lang: string;
  when: string;
};

export type Activity = {
  live: boolean;
  github: {
    repos: number;
    followers: number;
    following: number;
    contributions: number;
    streak: number;
    url: string;
    days: Day[];
    recent: RepoCard[];
  };
  leetcode: {
    solved: number;
    easy: number;
    medium: number;
    hard: number;
    submissions: number;
    ranking: number;
    streak: number;
    url: string;
    recent: Solve[];
  };
};

const notes: Record<string, string> = {
  "leetcode-Questions": "Daily LeetCode solutions, algorithm implementations, and data-structure practice in Java.",
  "project-": "Personal developer portfolio.",
  python2: "Python exploratory scripts, data work, and small algorithmic tools.",
  "Bridgelabz-Training-2Y": "BridgeLabz training work from the second year.",
  "Bridgelabz-Training-1Y": "BridgeLabz training work from the first year.",
};

function streakFrom(days: Day[]) {
  let index = days.length - 1;
  while (index >= 0 && days[index].count === 0) index -= 1;
  let streak = 0;
  while (index >= 0 && days[index].count > 0) {
    streak += 1;
    index -= 1;
  }
  return streak;
}

function ago(iso: string) {
  const then = new Date(iso).getTime();
  const hours = Math.max(0, Math.round((Date.now() - then) / 36e5));
  if (hours < 24) return hours <= 1 ? "Just now" : `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", day: "numeric" });
}

function agoUnix(seconds: string) {
  return ago(new Date(Number(seconds) * 1000).toISOString());
}

export const getActivity = createServerFn({ method: "GET" }).handler(async (): Promise<Activity> => {
  const [github, contribRes, lcRes] = await Promise.all([
    githubRest(),
    fetch("https://github-contributions-api.jogruber.de/v4/sawinkumar13-design?y=last"),
    fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json", Referer: "https://leetcode.com", "User-Agent": "sawin-portfolio" },
      body: JSON.stringify({
        query: `query { matchedUser(username: "sawin_kumar") { profile { ranking } submitStatsGlobal { acSubmissionNum { difficulty count submissions } } userCalendar { streak } } recentAcSubmissionList(username: "sawin_kumar", limit: 5) { title titleSlug timestamp lang statusDisplay } }`,
      }),
    }),
  ]);

  if (!contribRes.ok || !lcRes.ok) throw new Error("Activity sources unavailable");

  const contrib = (await contribRes.json()) as { total: { lastYear: number }; contributions: Day[] };
  const lc = (await lcRes.json()) as {
    data: {
      matchedUser: {
        profile: { ranking: number };
        submitStatsGlobal: { acSubmissionNum: { difficulty: string; count: number; submissions: number }[] };
        userCalendar: { streak: number };
      };
      recentAcSubmissionList: { title: string; titleSlug: string; timestamp: string; lang: string }[];
    };
  };

  const counts = Object.fromEntries(lc.data.matchedUser.submitStatsGlobal.acSubmissionNum.map((row) => [row.difficulty, row]));
  const days = contrib.contributions;

  return {
    live: true,
    github: {
      repos: github.repos,
      followers: github.followers,
      following: github.following,
      contributions: contrib.total.lastYear,
      streak: streakFrom(days),
      url: github.url,
      days,
      recent: github.list.map((repo) => ({
        name: repo.name,
        description: repo.description || notes[repo.name] || "Public repository.",
        language: repo.language || "Mixed",
        url: repo.html_url,
        pushedAt: ago(repo.pushed_at),
      })),
    },
    leetcode: {
      solved: counts.All?.count ?? 0,
      easy: counts.Easy?.count ?? 0,
      medium: counts.Medium?.count ?? 0,
      hard: counts.Hard?.count ?? 0,
      submissions: counts.All?.submissions ?? 0,
      ranking: lc.data.matchedUser.profile.ranking,
      streak: lc.data.matchedUser.userCalendar.streak,
      url: "https://leetcode.com/u/sawin_kumar",
      recent: lc.data.recentAcSubmissionList.map((item) => ({
        title: item.title,
        slug: item.titleSlug,
        lang: item.lang,
        when: agoUnix(item.timestamp),
      })),
    },
  };
});
