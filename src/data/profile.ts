export type TimelineKind = "intern" | "project";

export type TimelineItemId =
  | "techchaze"
  | "bharatkare"
  | "aig"
  | "blogii"
  | "ec2"
  | "social"
  | "ecommerce"
  | "ecommerceAdmin";

export type TimelineItem = {
  id: TimelineItemId;
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
    {
      id: "aig",
      year: "2025",
      title: "AI Integration Generator",
      kind: "project",
      dates: "2025",
      blurb: "Turns any API into a working AI assistant",
      stack: "Next.js · Node.js · Express · Groq · MCP · Docker",
    },
    {
      id: "blogii",
      year: "2025",
      title: "Blogii",
      kind: "project",
      dates: "2025",
      blurb: "n8n AI agent manages blogs via natural language",
      stack: "Next.js · n8n · OpenAI · Tailwind CSS",
    },
    {
      id: "ec2",
      year: "2025",
      title: "EC2 automation",
      kind: "project",
      dates: "2025",
      blurb: "One API request provisions EC2 + deploys a Dockerized app",
      stack: "AWS EC2 · Docker · User Data",
    },
    {
      id: "social",
      year: "2024",
      title: "Social media app",
      kind: "project",
      dates: "2024",
      blurb: "Posts · stories · likes · bookmarks · follows",
      stack: "Node.js · Express · Cloudinary · Tailwind CSS",
    },
    {
      id: "ecommerce",
      year: "2024",
      title: "E-commerce store",
      kind: "project",
      dates: "2024",
      blurb: "Customer storefront with cart and order flows",
      stack: "React.js · Node.js · REST API",
    },
    {
      id: "ecommerceAdmin",
      year: "2024",
      title: "E-commerce admin",
      kind: "project",
      dates: "2024",
      blurb: "Products, orders & analytics dashboard",
      stack: "React.js · Redux · REST API",
    },
  ] satisfies TimelineItem[],
} as const;
