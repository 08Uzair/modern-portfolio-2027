import { useEffect, useState, type Ref } from "react";
import { profile, type TimelineKind } from "../data/profile";
import type { IntentId } from "../data/intents";

type TimelineProps = {
  active: IntentId | null;
  onSelect: (id: IntentId) => void;
  listRef?: Ref<HTMLOListElement>;
  elevated?: boolean;
};

const tabs: { id: TimelineKind; label: string }[] = [
  { id: "intern", label: "Internship" },
  { id: "project", label: "Projects" },
];

export function Timeline({
  active,
  onSelect,
  listRef,
  elevated,
}: TimelineProps) {
  const [tab, setTab] = useState<TimelineKind>("intern");
  const [hovered, setHovered] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(false);
  const items = profile.timeline.filter((item) => item.kind === tab);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!active) return;
    const kind = profile.timeline.find((item) => item.id === active)?.kind;
    if (kind === "intern" || kind === "project") setTab(kind);
  }, [active]);

  return (
    <div className={`mt-7 lg:mt-10 ${elevated ? "relative z-50" : ""}`}>
      <div
        role="tablist"
        aria-label="Show internships or projects"
        className="relative grid grid-cols-2 rounded-full bg-chip p-1"
      >
        <span
          aria-hidden="true"
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-send transition-transform duration-300 ease-out ${
            tab === "project" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        {tabs.map((item) => {
          const isOpen = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isOpen}
              onClick={() => {
                setTab(item.id);
                setHovered(null);
              }}
              className={`relative z-10 min-h-8 rounded-full py-1.5 text-center text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                isOpen ? "text-send-fg" : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <ol
        key={tab}
        ref={listRef}
        className="animate-in mt-5 lg:mt-6"
        onMouseLeave={() => setHovered(null)}
      >
        {items.map((item, index) => {
          const isActive = active === item.id;
          const isOpen = canHover && hovered ? hovered === item.id : isActive;
          const isLast = index === items.length - 1;

          return (
            <li key={item.id} className="relative">
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                onMouseEnter={() => setHovered(item.id)}
                className={`grid w-full min-h-11 grid-cols-[3.25rem_12px_1fr] items-start gap-3 text-left transition-colors duration-150 lg:min-h-0 ${
                  isLast ? "pb-0" : "pb-6"
                } ${isOpen ? "text-ink" : "text-ink-muted hover:text-ink"}`}
              >
                <span className="pt-px text-[13px] font-medium tabular-nums tracking-[0.02em]">
                  {item.year}
                </span>
                <span className="relative flex min-h-4 w-3 justify-center self-stretch">
                  {!isLast ? (
                    <span className="absolute top-2.5 bottom-[-1.5rem] w-px bg-line" />
                  ) : null}
                  <span
                    className={`relative z-10 mt-1 h-2 w-2 rounded-full ${
                      isOpen ? "bg-ink" : "bg-ink-faint"
                    }`}
                  />
                </span>
                <span className="min-w-0 text-[13px] leading-5">
                  <span className="block">
                    {item.title}
                    <span className="text-ink-faint"> · {item.kind}</span>
                  </span>
                  <span
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <span className="min-h-0">
                      <span className="mt-1.5 block text-[12px] leading-5 text-ink-faint">
                        {item.blurb}
                        <br />
                        {item.stack}
                        <br />
                        <span className="text-ink-muted">→ Ask Uzer</span>
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
