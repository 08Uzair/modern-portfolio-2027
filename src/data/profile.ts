export type TimelineKind = "intern";

export type TimelineItem = {
  id: "techchaze" | "bharatkare";
  year: string;
  title: string;
  kind: TimelineKind;
  dates: string;
  blurb: string;
  stack: string;
};

export const profile = {
  fullName: "Mohammad Uzer Qureshi",
  mark: "Uzer Qureshi",
  intro: "Hi, I'm Uzer.",
  role: "Full-stack developer building web apps with React, Next.js, and Node.js — and the occasional AI agent.",
  askMe: "Ask me anything",
  resume: "/resume.html",
  links: [
    { label: "Resume", href: "/resume.html" },
    { label: "Portfolio", href: "https://uzerqureshi-portfolio.netlify.app" },
    { label: "GitHub", href: "https://github.com/08Uzair" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/uzairqureshi0803/" },
    { label: "Email", href: "mailto:uzerqureshi26@gmail.com" },
  ],
  timeline: [
    {
      id: "techchaze",
      year: "2024–25",
      title: "Techchaze Inc.",
      kind: "intern",
      dates: "Oct 2024 – Apr 2025",
      blurb: "Multi-vendor e-commerce platform",
      stack: "React.js · Next.js · React Native · Strapi",
    },
    {
      id: "bharatkare",
      year: "2024",
      title: "BharatKare",
      kind: "intern",
      dates: "Nov 2024 – Dec 2024",
      blurb: "Official hospital website",
      stack: "React.js · WordPress CMS",
    },
  ] satisfies TimelineItem[],
} as const;
