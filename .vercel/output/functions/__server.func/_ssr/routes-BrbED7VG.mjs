import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BrbED7VG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = {
	github: "https://github.com/sawinkumar13-design",
	linkedin: "https://www.linkedin.com/in/sawin-kumar-5941763a1",
	leetcode: "https://leetcode.com/u/sawin_kumar",
	resume: "https://sawinkumar13-design.github.io/project-/assets/Sawin_Kumar_Resume.pdf",
	email: "sawinkumar13@gmail.com",
	campus: "sawin.kumar_cs25@gla.ac.in"
};
var nav = [
	{
		id: "projects",
		label: "Work"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var filters = [
	{
		id: "All",
		label: "All"
	},
	{
		id: "Python",
		label: "Python & data"
	},
	{
		id: "Java",
		label: "Java & OOP"
	}
];
var projects = [
	{
		title: "Employee Data Analysis",
		detail: "Python work that ingests employee records, imputes missing values, groups across columns, and charts the pattern that is actually there.",
		tags: ["Python"],
		stack: [
			"Python",
			"Pandas",
			"NumPy",
			"Matplotlib"
		]
	},
	{
		title: "Banking System",
		detail: "A Java console app for deposit, withdrawal, balance inquiry, and account checks. Each action stays in its own method.",
		tags: ["Java"],
		stack: ["Java", "OOP"]
	},
	{
		title: "Predictive Modeling Pipeline",
		detail: "A short pipeline: load tabular data, keep the cleaning visible, and fit a model on what remains.",
		tags: ["Python", "ML"],
		stack: [
			"Python",
			"NumPy",
			"Pandas"
		]
	},
	{
		title: "DSA Practice Suite",
		detail: "Arrays, strings, two pointers, and recursion in Java and Python, practiced on LeetCode.",
		tags: ["Java", "Python"],
		stack: [
			"Java",
			"Python",
			"LeetCode"
		],
		href: links.leetcode,
		linkLabel: "View on LeetCode"
	}
];
var skillGroups = [
	{
		label: "Languages",
		items: ["Python", "Java"]
	},
	{
		label: "Data",
		items: [
			"Pandas",
			"NumPy",
			"Matplotlib"
		]
	},
	{
		label: "Practice",
		items: ["Data structures", "OOP"]
	},
	{
		label: "Tools",
		items: [
			"Git",
			"GitHub",
			"Jupyter",
			"DBMS"
		]
	}
];
var focus = [
	[
		"01",
		"Data cleanup",
		"Missing values, grouping, and charts in Python."
	],
	[
		"02",
		"Console systems",
		"Java menu apps with a small class model."
	],
	[
		"03",
		"Algorithms",
		"Arrays, strings, two pointers, and recursion."
	],
	[
		"04",
		"Writing it down",
		"A readable README and a public GitHub trail."
	]
];
var education = [
	{
		school: "GLA University, Mathura",
		years: "2025 — 2029",
		note: "B.Tech Computer Science & Engineering · 7.9 CPI"
	},
	{
		school: "St. Paul’s Senior Secondary School, Etah",
		years: "2024 — 2025",
		note: "CBSE · Physics, Chemistry, Mathematics"
	},
	{
		school: "Dr. Lokman Singh Higher Secondary School, Etah",
		years: "2022 — 2023",
		note: "CBSE · Science and Mathematics"
	}
];
function External({ href, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className,
		children
	});
}
function Portfolio() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [section, setSection] = (0, import_react.useState)("about");
	const [sent, setSent] = (0, import_react.useState)(false);
	const visible = projects.filter((project) => filter === "All" || project.tags.includes(filter));
	(0, import_react.useEffect)(() => {
		const nodes = nav.map((item) => document.getElementById(item.id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (current?.target.id) setSection(current.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [.1, .25]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	function submit(event) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "font-display text-base font-medium tracking-tight",
							children: "Sawin Kumar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Page",
							className: "hidden items-center gap-7 md:flex",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${item.id}`,
								"aria-current": section === item.id ? "true" : void 0,
								className: section === item.id ? "text-sm text-accent" : "text-sm text-faint hover:text-accent",
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex h-11 items-center px-2 text-sm text-muted md:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen((value) => !value),
							children: open ? "Close" : "Menu"
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "mobile-nav",
					"aria-label": "Mobile",
					className: "border-t border-line px-5 py-3 md:hidden",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: "flex h-11 items-center text-base text-muted",
						onClick: () => setOpen(false),
						children: item.label
					}, item.id))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				className: "mx-auto max-w-5xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid items-end gap-12 py-16 md:grid-cols-12 md:py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise md:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-faint uppercase",
									children: "Open for internships"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 max-w-xl font-display text-5xl leading-none font-medium tracking-tight text-ink md:text-7xl",
									children: "Sawin Kumar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-md text-lg leading-relaxed text-muted",
									children: "Second-year computer science student at GLA University. I work in Python when the question is about data, and in Java when it wants a clear object."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#projects",
										className: "inline-flex h-11 items-center bg-accent px-5 text-sm font-medium text-bg hover:bg-accent-hover",
										children: "View projects"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#about",
										className: "inline-flex h-11 items-center border border-line px-5 text-sm text-ink hover:border-accent hover:text-accent",
										children: "About me"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rise md:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/portrait.jpg",
								alt: "Portrait of Sawin Kumar",
								className: "portrait aspect-4/5 w-full object-cover object-top"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 text-sm text-faint",
								children: "Mathura · GLA University · 7.9 CPI"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "about",
						className: "border-t border-line py-16 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 md:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-faint uppercase",
									children: "About"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-3xl font-medium tracking-tight",
									children: "Between software and data."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl space-y-4 text-muted md:col-span-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I am in the second year of the 2025–2029 batch, currently at a 7.9 CPI. The work I care about is a table that tells the truth, or a Java class that stays easy to read." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Campus notes sit next to BridgeLabz training repos. I would rather show a small finished program than a long list of tools." })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-14 border-t border-line",
							children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-2 border-b border-line py-5 md:grid-cols-12 md:items-baseline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-faint md:col-span-3",
									children: item.years
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-9",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-ink",
										children: item.school
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: item.note
									})]
								})]
							}, item.school))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "skills",
						className: "border-t border-line py-16 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-faint uppercase",
								children: "Skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-medium tracking-tight",
								children: "What I actually use."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
							children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm text-accent",
								children: group.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-t border-line pt-2 text-ink",
									children: item
								}, item))
							})] }, group.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "focus",
						className: "border-t border-line py-16 md:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-faint uppercase",
								children: "Focus"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-medium tracking-tight",
								children: "The kind of work I take on."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8",
								children: focus.map(([num, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5 md:grid-cols-[4rem_14rem_1fr]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-faint",
											children: num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-medium text-ink",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "col-start-2 text-muted md:col-start-3",
											children: copy
										})
									]
								}, num))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "projects",
						className: "border-t border-line py-16 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-faint uppercase",
								children: "Projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-medium tracking-tight",
								children: "Selected work."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								role: "group",
								"aria-label": "Filter projects",
								children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": filter === item.id,
									onClick: () => setFilter(item.id),
									className: filter === item.id ? "h-11 px-3 text-sm text-accent" : "h-11 px-3 text-sm text-faint hover:text-ink",
									children: item.label
								}, item.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-2",
							children: visible.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: filter === "All" && index === 0 ? "border border-line bg-surface p-6 transition-colors hover:border-neutral md:col-span-2 md:p-8" : "border border-line bg-card p-6 transition-colors hover:border-neutral",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-medium tracking-tight",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-2xl text-muted",
										children: project.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm text-faint",
										children: project.stack.join(" · ")
									}),
									project.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
										href: project.href,
										className: "mt-5 inline-flex text-sm text-accent hover:text-accent-hover",
										children: project.linkLabel
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm text-faint",
										children: "Coursework — no public repository yet."
									})
								]
							}, project.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "achievement",
						className: "border-t border-line py-16 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-faint uppercase",
							children: "Achievement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 border border-line bg-surface p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-medium tracking-tight",
								children: "LeetCode 50 days"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-lg text-muted",
								children: "Kept in one place. The streak is on the profile, not repeated through the page."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
								href: links.leetcode,
								className: "inline-flex h-11 items-center text-sm text-accent hover:text-accent-hover",
								children: "Open profile"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						className: "border-t border-line py-16 md:py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-faint uppercase",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-3xl font-medium tracking-tight",
									children: "Write if you want to work together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-sm text-muted",
									children: "Email is the public line. The phone number stays on the resume."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-8 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-ink hover:text-accent",
											href: `mailto:${links.email}`,
											children: links.email
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-ink hover:text-accent",
											href: `mailto:${links.campus}`,
											children: links.campus
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-faint",
											children: "Mathura & Etah, Uttar Pradesh"
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "grid gap-4",
								onSubmit: submit,
								noValidate: false,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-sm text-muted",
										children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "name",
											required: true,
											suppressHydrationWarning: true,
											className: "h-11 border border-line bg-surface px-3 text-ink outline-none focus:border-accent"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-sm text-muted",
										children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "from",
											type: "email",
											required: true,
											suppressHydrationWarning: true,
											className: "h-11 border border-line bg-surface px-3 text-ink outline-none focus:border-accent"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-sm text-muted",
										children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "message",
											required: true,
											rows: 5,
											suppressHydrationWarning: true,
											className: "border border-line bg-surface px-3 py-2 text-ink outline-none focus:border-accent"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "h-11 bg-accent text-sm font-medium text-bg hover:bg-accent-hover",
										children: sent ? "Opening your email…" : "Send message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-faint",
										role: "status",
										children: sent ? "Your mail app should open with the note filled in." : "This opens your email app. Nothing is stored on the site."
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Sawin Kumar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-5 gap-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
								href: links.github,
								className: "hover:text-accent",
								children: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
								href: links.linkedin,
								className: "hover:text-accent",
								children: "LinkedIn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
								href: links.leetcode,
								className: "hover:text-accent",
								children: "LeetCode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
								href: links.resume,
								className: "hover:text-accent",
								children: "Resume"
							})
						]
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {});
}
//#endregion
export { Home as component };
