import type { ReactNode } from "react";
import { profile } from "../data/profile";

const hrefByLabel: Record<string, string> = Object.fromEntries(
  profile.links.map((link) => [link.label, link.href]),
);

hrefByLabel["uzerqureshi26@gmail.com"] = "mailto:uzerqureshi26@gmail.com";
hrefByLabel["08Uzair"] = "https://github.com/08Uzair";

const tokenPattern =
  /(LinkedIn|GitHub|Portfolio|Resume|Email|uzerqureshi26@gmail\.com|08Uzair|https?:\/\/\S+)/g;

export function linkify(text: string): ReactNode[] {
  const parts: string[] = [];
  let last = 0;
  for (const match of text.matchAll(tokenPattern)) {
    const token = match[0];
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(token);
    last = index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));

  const nodes: ReactNode[] = [];
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const mapped = hrefByLabel[part];
    const rawUrl = !mapped && /^https?:\/\//.test(part) ? part : null;

    if (!mapped && !rawUrl) {
      nodes.push(part);
      continue;
    }

    const href = rawUrl ?? mapped;
    let label = rawUrl ?? part;
    let tail = "";
    if (rawUrl) {
      const cut = rawUrl.match(/[.,;:!?)\]}"']+$/)?.[0] ?? "";
      if (cut) {
        tail = cut;
        label = rawUrl.slice(0, -cut.length);
      }
    }

    const external = !href.startsWith("mailto:");
    nodes.push(
      <a
        key={`${part}-${index}`}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="underline decoration-ink-faint underline-offset-3 transition-colors duration-150 hover:decoration-ink"
      >
        {label}
      </a>,
    );
    if (tail) nodes.push(tail);
  }
  return nodes;
}
