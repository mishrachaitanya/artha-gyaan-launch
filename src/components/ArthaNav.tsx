export function ArthaNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-18">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold tracking-tight text-navy md:text-xl">
            Artha Gyaan
          </span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
            | Namaste Stocks
          </span>
        </a>
        <a
          href="#enroll"
          className="inline-flex items-center justify-center rounded-full bg-saffron px-4 py-2.5 text-sm font-semibold text-saffron-foreground shadow-amber transition-transform hover:scale-[1.03] md:px-6 md:text-base"
        >
          Enroll Now — ₹999
        </a>
      </div>
    </header>
  );
}
