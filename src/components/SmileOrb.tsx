export function SmileOrb() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* outer glow */}
      <div className="absolute inset-0 rounded-full bg-smile opacity-30 blur-3xl animate-float-slow" />

      {/* rings */}
      <div className="absolute inset-6 rounded-full border border-accent/30" />
      <div className="absolute inset-12 rounded-full border border-highlight/30" />
      <div className="absolute inset-20 rounded-full border border-accent/20" />

      {/* orbit dots */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "22s" }}>
        <span className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent glow-accent" />
      </div>
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-highlight glow-highlight" />
      </div>

      {/* core */}
      <div className="absolute inset-24 rounded-full bg-gradient-to-br from-background to-secondary border border-border shadow-luxe grid place-items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-60" />
        <svg viewBox="0 0 200 200" className="relative w-40 h-40 text-accent" fill="none" stroke="currentColor" strokeWidth="3">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="oklch(0.74 0.14 230)" />
              <stop offset="1" stopColor="oklch(0.71 0.12 185)" />
            </linearGradient>
          </defs>
          <path
            d="M40 80c0-22 18-40 60-40s60 18 60 40c0 16-8 28-22 36l-8 30c-1 6-6 10-12 10H82c-6 0-11-4-12-10l-8-30c-14-8-22-20-22-36z"
            stroke="url(#g)"
          />
          <path d="M70 110c10 14 50 14 60 0" stroke="url(#g)" strokeLinecap="round" />
          <circle cx="100" cy="60" r="3" fill="url(#g)" />
        </svg>
      </div>

      {/* sparkles */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-accent animate-float-slow"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${15 + Math.random() * 70}%`,
            animationDelay: `${i * 0.6}s`,
            boxShadow: "0 0 12px currentColor",
          }}
        />
      ))}
    </div>
  );
}
