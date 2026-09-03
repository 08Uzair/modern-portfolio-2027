export type IntentId =
  | "who"
  | "work"
  | "experience"
  | "education"
  | "skills"
  | "achievements"
  | "contact"
  | "techchaze"
  | "bharatkare"
  | "blogii"
  | "ec2"
  | "social"
  | "ecommerce"
  | "ecommerceAdmin"
  | "aig";

export type Intent = {
  id: IntentId;
  aliases: string[];
  prompt: string;
  timeline: IntentId | null;
  followUps: IntentId[];
};

export const defaultChips: IntentId[] = ["who", "work", "experience"];

export const timelineAsk: Partial<Record<IntentId, string>> = {
  techchaze: "What did you build at Techchaze?",
  bharatkare: "What did you build at BharatKare?",
  aig: "What is the AI Integration Generator?",
  blogii: "What is Blogii?",
  ec2: "How does the EC2 automation work?",
  social: "What is the social media app about?",
  ecommerce: "Tell me about the e-commerce store",
  ecommerceAdmin: "Tell me about the e-commerce admin panel",
};

export const intents: Intent[] = [
  {
    id: "who",
    aliases: [
      "who are you",
      "who is uzer",
      "who is mohammad",
      "about",
      "yourself",
      "my story",
      "know more",
      "about me",
      "introduce yourself",
    ],
    prompt: "Who are you?",
    timeline: null,
    followUps: ["work", "experience", "contact"],
  },
  {
    id: "work",
    aliases: [
      "recent work",
      "my work",
      "what do you build",
      "projects",
      "selected work",
      "showcase",
      "live links",
      "demos",
    ],
    prompt: "Recent work",
    timeline: null,
    followUps: ["aig", "blogii", "social"],
  },
  {
    id: "experience",
    aliases: ["experience", "where have you worked", "career", "internships", "internship", "timeline"],
    prompt: "Experience",
    timeline: null,
    followUps: ["techchaze", "bharatkare", "achievements"],
  },
  {
    id: "education",
    aliases: ["education", "university", "college", "amity", "bca", "degree", "cgpa", "academics"],
    prompt: "Education",
    timeline: null,
    followUps: ["skills", "experience", "contact"],
  },
  {
    id: "skills",
    aliases: ["skills", "stack", "tech stack", "tech", "languages", "tools", "mern", "mongodb"],
    prompt: "My skills",
    timeline: null,
    followUps: ["work", "education", "contact"],
  },
  {
    id: "achievements",
    aliases: ["achievements", "hackathon", "hacktoberfest", "awards", "accomplishments"],
    prompt: "Achievements",
    timeline: null,
    followUps: ["experience", "work", "contact"],
  },
  {
    id: "techchaze",
    aliases: ["techchaze", "tech chaze", "techchaze inc", "techchaze inc.", "chaze"],
    prompt: "Tell me about Techchaze",
    timeline: "techchaze",
    followUps: ["bharatkare", "work", "contact"],
  },
  {
    id: "bharatkare",
    aliases: ["bharatkare", "bharat kare", "bharatkare hospital", "hospital website"],
    prompt: "Tell me about BharatKare",
    timeline: "bharatkare",
    followUps: ["techchaze", "work", "contact"],
  },
  {
    id: "blogii",
    aliases: ["blogii", "blog", "ai blog", "ai-powered blog", "blog management", "n8n", "openai", "ai blog platform"],
    prompt: "Blogii — AI blog",
    timeline: "blogii",
    followUps: ["ec2", "social", "work"],
  },
  {
    id: "ec2",
    aliases: ["ec2", "ec2 automation", "aws ec2", "aws automation", "docker deployment", "user data", "infrastructure"],
    prompt: "EC2 automation",
    timeline: "ec2",
    followUps: ["blogii", "social", "work"],
  },
  {
    id: "social",
    aliases: ["social", "social media", "social media app", "posts", "stories", "cloudinary", "social application"],
    prompt: "Social media app",
    timeline: "social",
    followUps: ["ecommerce", "blogii", "work"],
  },
  {
    id: "ecommerce",
    aliases: ["ecommerce", "e commerce", "e-commerce", "storefront", "online store", "shopping", "client app"],
    prompt: "E-commerce store",
    timeline: "ecommerce",
    followUps: ["ecommerceAdmin", "social", "work"],
  },
  {
    id: "ecommerceAdmin",
    aliases: ["admin panel", "admin", "ecommerce admin", "e-commerce admin", "analytics dashboard", "dashboard"],
    prompt: "E-commerce admin",
    timeline: "ecommerceAdmin",
    followUps: ["ecommerce", "aig", "work"],
  },
  {
    id: "aig",
    aliases: [
      "ai integration generator",
      "integration generator",
      "mcp",
      "mcp server",
      "mcp tool",
      "custom mcp",
      "ai generator",
      "ai-generate",
      "ai assistant generator",
      "claude",
      "npx",
      "groq",
    ],
    prompt: "AI Integration Generator",
    timeline: "aig",
    followUps: ["blogii", "ec2", "contact"],
  },
  {
    id: "contact",
    aliases: ["contact", "email", "reach", "reach you", "hello", "linkedin", "github", "phone", "resume", "hire"],
    prompt: "How to reach you",
    timeline: null,
    followUps: ["who", "work", "experience"],
  },
];

export function getIntent(id: IntentId): Intent {
  const found = intents.find((item) => item.id === id);
  if (!found) {
    throw new Error(`Unknown intent: ${id}`);
  }
  return found;
}
