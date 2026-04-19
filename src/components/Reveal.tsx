import { useEffect, useRef, type ReactNode } from "react";

const revealStyle = `
.reveal-wrap {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-wrap.revealed {
  opacity: 1;
  transform: translateY(0);
}
`;

let styleInjected = false;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Inject shared CSS once
  if (typeof document !== "undefined" && !styleInjected) {
    const tag = document.createElement("style");
    tag.textContent = revealStyle;
    document.head.appendChild(tag);
    styleInjected = true;
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      el.style.transitionDelay = `${delay}s`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-wrap${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
