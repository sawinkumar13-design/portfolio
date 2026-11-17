import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Activity } from "@/components/activity";

const links = {
  github: "https://github.com/sawinkumar13-design",
  linkedin: "https://www.linkedin.com/in/sawin-kumar-5941763a1",
  leetcode: "https://leetcode.com/u/sawin_kumar",
  resume: "https://sawinkumar13-design.github.io/project-/assets/Sawin_Kumar_Resume.pdf",
  email: "sawinkumar13@gmail.com",
  campus: "sawin.kumar_cs25@gla.ac.in",
};

const nav = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

const filters = [
  { id: "All", label: "All" },
  { id: "Python", label: "Python & data" },
  { id: "Java", label: "Java & OOP" },
] as const;
type Filter = (typeof filters)[number]["id"];

const projects: {
  title: string;
  detail: string;
  tags: ("Python" | "Java" | "ML")[];
  stack: string[];
  href?: string;
  linkLabel?: string;
}[] = [
  {
    title: "Employee Data Analysis",
    detail:
      "Python work that ingests employee records, imputes missing values, groups across columns, and charts the pattern that is actually there.",
    tags: ["Python"],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Banking System",
    detail:
      "A Java console app for deposit, withdrawal, balance inquiry, and account checks. Each action stays in its own method.",
    tags: ["Java"],
    stack: ["Java", "OOP"],
  },
  {
    title: "Predictive Modeling Pipeline",
    detail: "A short pipeline: load tabular data, keep the cleaning visible, and fit a model on what remains.",
    tags: ["Python", "ML"],
    stack: ["Python", "NumPy", "Pandas"],
  },
  {
    title: "DSA Practice Suite",
    detail: "Arrays, strings, two pointers, and recursion in Java and Python, practiced on LeetCode.",
    tags: ["Java", "Python"],
    stack: ["Java", "Python", "LeetCode"],
    href: links.leetcode,
    linkLabel: "View on LeetCode",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "Java"] },
  { label: "Data", items: ["Pandas", "NumPy", "Matplotlib"] },
  { label: "Practice", items: ["Data structures", "OOP"] },
  { label: "Tools", items: ["Git", "GitHub", "Jupyter", "DBMS"] },
];

const focus = [
  ["01", "Data cleanup", "Missing values, grouping, and charts in Python."],
  ["02", "Console systems", "Java menu apps with a small class model."],
  ["03", "Algorithms", "Arrays, strings, two pointers, and recursion."],
  ["04", "Writing it down", "A readable README and a public GitHub trail."],
];

const education = [
  {
    school: "GLA University, Mathura",
    years: "2025 — 2029",
    note: "B.Tech Computer Science & Engineering · 7.9 CPI",
  },
  {
    school: "St. Paul’s Senior Secondary School, Etah",
    years: "2024 — 2025",
    note: "CBSE · Physics, Chemistry, Mathematics",
  },
  {
    school: "Dr. Lokman Singh Higher Secondary School, Etah",
    years: "2022 — 2023",
    note: "CBSE · Science and Mathematics",
  },
];

function External({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("about");
  const [sent, setSent] = useState(false);
  const visible = projects.filter((project) => filter === "All" || project.tags.includes(filter));

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current?.target.id) setSection(current.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("from") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !from || !message) return;
    const body = `${message}\n\nFrom: ${name} <${from}>`;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(`Note from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="space min-h-screen text-ink">
      <div className="atmosphere" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <header className="layer sticky top-4 z-20 px-4">
        <div className="pane pane-near mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto] items-center px-3 md:grid-cols-[1fr_auto_1fr] md:px-4">
          <a href="#top" className="nav-item flex items-center gap-3 px-2 py-1">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 font-display text-xs text-accent">SK</span>
            <span className="font-display text-sm font-medium tracking-tight">Sawin Kumar</span>
          </a>
          <nav aria-label="Page" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const current = section === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={current ? "true" : undefined}
                  className="nav-item px-3 py-2 text-sm text-faint"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center justify-end gap-2">
            <External
              href={links.resume}
              className="nav-item hidden h-9 items-center border border-white/15 px-4 text-sm text-ink md:inline-flex"
            >
              Resume
            </External>
            <button
              type="button"
              className="nav-item grid h-11 w-11 place-items-center border border-white/15 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="flex w-4 flex-col gap-1.5" aria-hidden>
                <span className={open ? "h-px w-4 origin-center translate-y-[3.5px] rotate-45 bg-ink" : "h-px w-4 bg-ink"} />
                <span className={open ? "h-px w-4 origin-center -translate-y-[3.5px] -rotate-45 bg-ink" : "h-px w-4 bg-ink"} />
              </span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" aria-label="Mobile" className="pane mx-auto mt-2 max-w-5xl px-3 py-2 md:hidden">
            {nav.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={section === item.id ? "true" : undefined}
                className="menu-row flex h-14 items-center justify-between px-3"
                onClick={() => setOpen(false)}
              >
                <span className={section === item.id ? "font-display text-2xl text-accent" : "font-display text-2xl text-ink"}>
                  {item.label}
                </span>
                <span className="text-xs text-faint">0{index + 1}</span>
              </a>
            ))}
            <External href={links.resume} className="menu-row flex h-14 items-center px-3 text-sm text-accent">
              Resume
            </External>
          </nav>
        ) : null}
      </header>

      <main id="top" className="layer mx-auto max-w-5xl px-4 pb-10">
        <section className="grid items-stretch gap-5 py-8 md:grid-cols-12 md:py-12">
          <div className="pane rise p-7 md:col-span-7 md:p-10">
            <p className="text-xs tracking-widest text-faint uppercase">Open for internships</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl leading-none font-medium tracking-tight text-ink md:text-7xl">
              Sawin Kumar
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Second-year computer science student at GLA University. I work in Python when the question is about data, and in Java when it wants a clear object.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="nav-item inline-flex h-11 items-center bg-accent px-5 text-sm font-medium text-bg hover:bg-accent-hover">
                View projects
              </a>
              <a href="#about" className="nav-item inline-flex h-11 items-center border border-white/15 px-5 text-sm text-ink">
                About me
              </a>
            </div>
          </div>
          <figure className="pane pane-near lift rise overflow-hidden md:col-span-5">
            <img
              src="/portrait.jpg"
              alt="Portrait of Sawin Kumar"
              className="portrait aspect-4/5 w-full object-cover object-top"
            />
            <figcaption className="px-5 py-4 text-sm text-faint">Mathura · GLA University · 7.9 CPI</figcaption>
          </figure>
        </section>

        <section id="about" className="pane lift p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs tracking-widest text-faint uppercase">About</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Between software and data.</h2>
            </div>
            <div className="max-w-xl space-y-4 text-muted md:col-span-8">
              <p>
                I am in the second year of the 2025–2029 batch, currently at a 7.9 CPI. The work I care about is a table that tells the truth, or a Java class that stays easy to read.
              </p>
              <p>Campus notes sit next to BridgeLabz training repos. I would rather show a small finished program than a long list of tools.</p>
            </div>
          </div>

          <ol className="mt-14 border-t border-line">
            {education.map((item) => (
              <li key={item.school} className="grid gap-2 border-b border-white/10 py-5 last:border-0 md:grid-cols-12 md:items-baseline">
                <p className="text-sm text-faint md:col-span-3">{item.years}</p>
                <div className="md:col-span-9">
                  <p className="font-medium text-ink">{item.school}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="pane mt-5 p-6 md:p-10">
          <div className="max-w-xl">
            <p className="text-xs tracking-widest text-faint uppercase">Skills</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">What I actually use.</h2>
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="lift rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm text-accent">{group.label}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-line pt-2 text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="focus" className="pane lift mt-5 p-6 md:p-10">
          <p className="text-xs tracking-widest text-faint uppercase">Focus</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">The kind of work I take on.</h2>
          <ol className="mt-8">
            {focus.map(([num, title, copy]) => (
              <li key={num} className="menu-row grid grid-cols-[3rem_1fr] gap-4 border-t border-white/10 px-2 py-5 md:grid-cols-[4rem_14rem_1fr]">
                <span className="text-sm text-faint">{num}</span>
                <h3 className="font-medium text-ink">{title}</h3>
                <p className="col-start-2 text-muted md:col-start-3">{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="pane mt-5 p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-widest text-faint uppercase">Projects</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Selected work.</h2>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                  className={
                    filter === item.id
                      ? "nav-item inline-flex h-11 items-center bg-accent/20 px-3 text-sm text-ink"
                      : "nav-item inline-flex h-11 items-center px-3 text-sm text-faint"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visible.map((project) => (
              <article
                key={project.title}
                className="pane lift p-6"
              >
                <h3 className="font-display text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-muted">{project.detail}</p>
                <p className="mt-5 text-sm text-faint">{project.stack.join(" · ")}</p>
                {project.href ? (
                  <External href={project.href} className="mt-5 inline-flex text-sm text-accent hover:text-accent-hover">
                    {project.linkLabel}
                  </External>
                ) : (
                  <p className="mt-5 text-sm text-faint">Coursework — no public repository yet.</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <Activity />

        <section id="achievement" className="mt-5">
          <p className="text-xs tracking-widest text-faint uppercase">Achievement</p>
          <div className="pane lift grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tight">LeetCode 50 days</h2>
              <p className="mt-2 max-w-lg text-muted">Kept in one place. The streak is on the profile, not repeated through the page.</p>
            </div>
            <External href={links.leetcode} className="inline-flex h-11 items-center text-sm text-accent hover:text-accent-hover">
              Open profile
            </External>
          </div>
        </section>

        <section id="contact" className="pane mt-5 p-6 md:p-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-faint uppercase">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Write if you want to work together.</h2>
              <p className="mt-4 max-w-sm text-muted">Email is the public line. The phone number stays on the resume.</p>
              <ul className="mt-8 space-y-3 text-sm">
                <li>
                  <a className="text-ink hover:text-accent" href={`mailto:${links.email}`}>
                    {links.email}
                  </a>
                </li>
                <li>
                  <a className="text-ink hover:text-accent" href={`mailto:${links.campus}`}>
                    {links.campus}
                  </a>
                </li>
                <li className="text-faint">Mathura & Etah, Uttar Pradesh</li>
              </ul>
            </div>
            <form className="grid gap-4" onSubmit={submit} noValidate={false}>
              <label className="grid gap-2 text-sm text-muted">
                Name
                <input
                  name="name"
                  required
                  suppressHydrationWarning
                  className="h-11 rounded-xl border border-white/10 bg-black/20 px-3 text-ink outline-none focus:border-accent"
                />
              </label>
              <label className="grid gap-2 text-sm text-muted">
                Email
                <input
                  name="from"
                  type="email"
                  required
                  suppressHydrationWarning
                  className="h-11 rounded-xl border border-white/10 bg-black/20 px-3 text-ink outline-none focus:border-accent"
                />
              </label>
              <label className="grid gap-2 text-sm text-muted">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  suppressHydrationWarning
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-ink outline-none focus:border-accent"
                />
              </label>
              <button type="submit" className="nav-item h-11 bg-accent text-sm font-medium text-bg hover:bg-accent-hover">
                {sent ? "Opening your email…" : "Send message"}
              </button>
              <p className="text-sm text-faint" role="status">
                {sent ? "Your mail app should open with the note filled in." : "This opens your email app. Nothing is stored on the site."}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="layer px-4 pb-8">
        <div className="pane mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sawin Kumar</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <External href={links.github} className="nav-item px-2 py-1">
              GitHub
            </External>
            <External href={links.linkedin} className="nav-item px-2 py-1">
              LinkedIn
            </External>
            <External href={links.leetcode} className="nav-item px-2 py-1">
              LeetCode
            </External>
            <External href={links.resume} className="nav-item px-2 py-1">
              Resume
            </External>
          </div>
        </div>
      </footer>
    </div>
  );
}
