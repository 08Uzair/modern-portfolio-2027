import type { IntentId } from "./intents";

export const replies: Record<IntentId, string> = {
  who: `I'm Uzer — a full-stack developer and BCA student at Amity University, Noida (CGPA 8.5/10).

I build web apps end to end with React.js, Next.js, and Node.js.

I've interned as a full-stack developer at Techchaze Inc. (multi-vendor e-commerce) and BharatKare (official hospital website).

Lately I've been shipping AI-powered tools — Blogii, an AI blog manager, and an AI Integration Generator that turns any existing API into an MCP server with a chat UI.`,

  work: `Recent projects:

• AI Integration Generator — turns any existing API into an MCP server with an AI chat backend and chat UI.
• Blogii — AI-powered blog platform. An n8n AI agent does CRUD through natural language.
• EC2 automation — one API request provisions an EC2 instance and deploys a Dockerized app from GitHub.
• Social media app — posts, stories, likes, bookmarks, follows.
• E-commerce store + its admin panel.

Pick one and I'll tell you more.`,

  experience: `Two full-stack internships so far.

Techchaze Inc. — Software Developer Intern, Mumbai. Oct 2024 – Apr 2025.
Multi-vendor e-commerce platform — React.js, Next.js, React Native, Strapi.
• Raised the Page Speed score from 30/100 to 85/100.
• Scalable frontend architecture with Strapi (headless CMS) on the backend.
• Optimized, maintainable, high-quality code aligned with modern web standards.

BharatKare — Full Stack Developer Intern, Gurgaon. Nov 2024 – Dec 2024.
Official hospital website — React.js frontend on WordPress CMS.
• Resolved 50+ critical frontend bugs, improving stability and performance.

Ask me about either one.`,

  education: `Amity University — Bachelor of Computer Applications (BCA), Noida, Delhi NCR.

CGPA: 8.5 / 10.0`,

  skills: `What I work with:

Languages: JavaScript.
Frontend: Next.js · React.js · React Redux · Tailwind CSS · Shadcn UI.
Backend: Node.js · Express.
Databases: MongoDB · Supabase · PostgreSQL.
CMS: Strapi · Sanity.
AWS: IAM · EC2 · Lambda · API Gateway · DynamoDB · CodeBuild · CodePipeline.
Automation: n8n (AI agent generator) · GitHub Actions · Docker.
Deploy & tools: Netlify · Vercel · Render · Postman · GitHub.`,

  achievements: `• Secured 4th place (3rd runner-up) in a Hackathon organized by MMCOE College, Pune.

• Successfully completed Hacktoberfest by contributing to open-source projects.`,

  techchaze: `Techchaze Inc. — Software Developer Intern, Mumbai. Oct 2024 – Apr 2025.

Full-stack developer on a Multi-Vendor E-commerce Platform built with React.js, Next.js, React Native, and Strapi.

• Improved the Page Speed score from 30/100 to 85/100 — a big jump in performance and user experience.
• Implemented scalable frontend architecture.
• Integrated Strapi (headless CMS) for flexible backend content management.
• Delivered optimized, maintainable, high-quality solutions aligned with modern web standards.`,

  bharatkare: `BharatKare — Full Stack Developer Intern, Gurgaon. Nov 2024 – Dec 2024.

Built the frontend with React.js for an official hospital website, with the backend managed through the WordPress CMS.

• Resolved 50+ critical frontend bugs, improving stability, performance, and user experience.`,

  blogii: `Blogii — AI-Powered Blog Management Platform.

An n8n AI Agent performs full CRUD blog operations — create, update, delete, retrieve — through natural-language prompts.

OpenAI API + n8n workflows interpret user intent and automatically trigger the right backend REST API operation.

The UI is responsive and modern — Next.js, React.js, and Tailwind CSS, with JWT-based authentication.

Video: https://youtu.be/uINd_sg_WIo
Code: https://github.com/08Uzair/Uzer-2025`,

  ec2: `EC2 Instance Automation with Docker Deployment.

Automated AWS EC2 provisioning and Dockerized app deployment from GitHub through a single API request.

EC2 User Data scripts install Docker, build images, and run containers automatically.

Video: https://youtu.be/jxxod8CJKP8
Code: https://github.com/08Uzair/aws-ec2-automation`,

  social: `Full-Stack Social Media Application.

Authentication, posts, stories, likes, bookmarks, and a follow system.

Responsive UI with Tailwind CSS, optimized backend APIs, and Cloudinary for media storage.

Deployed with Vercel and Render.

Video: https://youtu.be/MWrUsxIS_6w
Code: https://github.com/08Uzair/Social-Media-Application`,

  ecommerce: `E-Commerce Application (Client).

A customer-facing e-commerce storefront with product browsing, cart, and order flows.

Video: https://youtu.be/yDyqnpCzAOU
Code: https://github.com/08Uzair/Uzer-2024`,

  ecommerceAdmin: `E-Commerce Admin Panel.

Manages products, users, orders, and customer messages.

Includes an analytics dashboard and a full product management system.

Video: https://youtu.be/aHzWbpDV-KA
Code: https://github.com/08Uzair/Uzer-2024`,

  aig: `AI Integration Generator — turns any existing API into a working AI assistant.

Scan an application or API, and it generates a standalone project containing:
• an MCP server (endpoints become typed MCP tools),
• an AI chat backend with streaming (Groq),
• a drop-in AiChat.jsx chat component,
• Docker config and docs — all zipped, ready to download. Zero code required.

Everything runs through one 8-step wizard — a web UI (Next.js) or a terminal CLI (ai-generate). Generated projects are fully standalone. Node.js, Express, MongoDB, and the Model Context Protocol under the hood.

Code: https://github.com/08Uzair/CUSTOM-MCP
npm: ai-integration-generator-cli`,

  contact: `Email — uzerqureshi26@gmail.com
Phone — +91-8237416046

GitHub — https://github.com/08Uzair
LinkedIn — https://www.linkedin.com/in/uzairqureshi0803/
Portfolio — https://uzerqureshi-portfolio.netlify.app

Currently a BCA student at Amity University, Noida — open to internships and full-stack roles.`,
};

export const fallbackReply =
  "Ask me about my internships at Techchaze or BharatKare, the projects — the AI Integration Generator, Blogii, EC2 automation — or how to reach me.";
