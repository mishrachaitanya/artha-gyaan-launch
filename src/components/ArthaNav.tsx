import { useEffect, useRef, useState } from "react";

export function ArthaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 40);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-white/90 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[2px] bg-saffron transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="container-page flex h-16 items-center justify-between md:h-[68px]">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-saffron font-black text-sm select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            अ
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="text-base font-bold tracking-tight text-navy group-hover:text-saffron transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Artha Gyaan
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:block">
              by Namaste Stocks
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-navy md:flex">
          {[
            ["About", "#top"],
            ["Curriculum", "#curriculum"],
            ["Testimonials", "#testimonials"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-saffron after:transition-all after:duration-300 hover:text-saffron hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#enroll"
          className="inline-flex items-center justify-center rounded-full bg-saffron px-5 py-2.5 text-sm font-bold text-saffron-foreground shadow-amber transition-all duration-200 hover:scale-[1.04] hover:shadow-glow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:px-6"
          style={{ animation: "pulse-ring 2.5s ease-in-out infinite" }}
        >
          Enroll — ₹999
        </a>
      </div>
    </header>
  );
}
