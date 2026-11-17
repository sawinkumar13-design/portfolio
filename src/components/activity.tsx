import { useEffect, useState } from "react";
import { getActivity, type Activity, type Day } from "@/lib/activity";

const levelClass = ["bg-white/10", "bg-accent/35", "bg-accent/55", "bg-accent/80", "bg-accent"];

function weeksOf(days: Day[]) {
  if (days.length === 0) return [];
  const first = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [...Array.from({ length: first }, () => null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let index = 0; index < cells.length; index += 7) weeks.push(cells.slice(index, index + 7));
  return weeks;
}

function monthLabels(weeks: (Day | null)[][]) {
  let last = "";
  return weeks.map((week) => {
    const dated = week.find((day) => day);
    if (!dated) return "";
    const month = new Date(`${dated.date}T00:00:00Z`).toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
    if (month === last) return "";
    last = month;
    return month;
  });
}

export function Activity() {
  const [data, setData] = useState<Activity | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getActivity()
      .then((next) => {
        if (!cancelled) setData(next);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = weeksOf(data?.github.days ?? []);
  const months = monthLabels(weeks);
  const solved = data?.leetcode.solved ?? 0;
  const acceptance = data && data.leetcode.submissions ? Math.round((solved / data.leetcode.submissions) * 1000) / 10 : 0;

  return (
    <div className="mt-5 grid gap-5">
      <section id="certificates" className="pane p-6 md:p-10">
        <p className="text-xs tracking-widest text-faint uppercase">Certificate</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">NPTEL Elite</h2>
        <p className="mt-3 max-w-xl text-muted">
          Ethics in Engineering Practice, an 8-week course from IIT Kharagpur. Consolidated score 78%. Aug–Oct 2026. Roll NPTEL26MG158S450302096.
        </p>
        <a href="/nptel-ethics.png" target="_blank" rel="noreferrer" className="mt-6 block overflow-hidden rounded-2xl border border-white/10">
          <img src="/nptel-ethics.png" alt="NPTEL Elite certificate awarded to Sawin Kumar for Ethics in Engineering Practice" className="w-full" />
        </a>
      </section>

      <section id="leetcode" className="pane p-6 md:p-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-faint uppercase">LeetCode</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Questions, as they land.</h2>
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-accent">{data?.live ? "Live" : failed ? "Offline" : "Loading"}</span>
        </div>
        {data ? (
          <>
            <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-display text-6xl font-medium tracking-tight">{data.leetcode.solved}</p>
                <p className="text-muted">problems solved</p>
                <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-white/10">
                  <span className="bg-accent" style={{ width: `${(data.leetcode.easy / solved) * 100}%` }} />
                  <span className="bg-[#c4b48a]" style={{ width: `${(data.leetcode.medium / solved) * 100}%` }} />
                  <span className="bg-[#c4897a]" style={{ width: `${(data.leetcode.hard / solved) * 100}%` }} />
                </div>
                <p className="mt-3 text-sm text-faint">
                  Easy {data.leetcode.easy} · Medium {data.leetcode.medium} · Hard {data.leetcode.hard}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Acceptance", `${acceptance}%`],
                  ["Ranking", `#${data.leetcode.ranking.toLocaleString("en-IN")}`],
                  ["Streak", `${data.leetcode.streak} days`],
                  ["Badge", "50 days, 2026"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-faint">{label}</p>
                    <p className="mt-2 font-display text-2xl font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <ol className="mt-6 divide-y divide-white/10">
              {data.leetcode.recent.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`https://leetcode.com/problems/${item.slug}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 py-3 text-sm hover:text-accent"
                  >
                    <span>
                      <span className="text-accent">Accepted</span> {item.title}
                    </span>
                    <span className="shrink-0 text-faint">
                      {item.lang} · {item.when}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <a href={data.leetcode.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm text-accent">
              View LeetCode profile
            </a>
          </>
        ) : (
          <p className="mt-6 text-muted">{failed ? "LeetCode did not respond." : "Fetching the latest accepted questions."}</p>
        )}
      </section>

      <section id="github" className="pane min-w-0 overflow-hidden p-6 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-widest text-faint uppercase">GitHub</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Contribution grid</h2>
          </div>
          {data ? <p className="text-sm text-accent">{data.github.contributions} contributions in the last year</p> : null}
        </div>
        {data ? (
          <>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["Repositories", data.github.repos],
                ["Followers", data.github.followers],
                ["Following", data.github.following],
                ["Streak", `${data.github.streak} days`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-faint">{label}</p>
                  <p className="mt-2 font-display text-3xl font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-x-auto">
              <div className="w-max">
                <div className="mb-2 grid grid-flow-col gap-1 text-[10px] text-faint" style={{ gridTemplateRows: "1rem" }}>
                  {months.map((month, index) => (
                    <span key={`${month}-${index}`} className="w-3">
                      {month}
                    </span>
                  ))}
                </div>
                <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: "repeat(7, 0.75rem)" }}>
                  {weeks.flat().map((day, index) => (
                    <span
                      key={day?.date ?? `pad-${index}`}
                      title={day ? `${day.date}: ${day.count} contributions` : ""}
                      className={`h-3 w-3 rounded-sm ${day ? levelClass[day.level] ?? levelClass[0] : "bg-transparent"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {data.github.recent.map((repo) => (
                <li key={repo.name}>
                  <a href={repo.url} target="_blank" rel="noreferrer" className="lift block rounded-2xl border border-white/10 bg-black/20 p-4 hover:border-accent">
                    <span className="font-medium">{repo.name}</span>
                    <span className="mt-2 block text-sm text-muted">{repo.description}</span>
                    <span className="mt-3 block text-xs text-faint">
                      {repo.language} · {repo.pushedAt}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={data.github.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm text-accent">
              View GitHub profile
            </a>
          </>
        ) : (
          <p className="mt-6 text-muted">{failed ? "GitHub did not respond." : "Drawing the contribution grid."}</p>
        )}
      </section>
    </div>
  );
}
