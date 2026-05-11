import type { Service } from "@/lib/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <div
      className="group relative rounded-3xl bg-card border border-border p-7 hover-lift overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hero-glow pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-smile opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-secondary grid place-items-center border border-border group-hover:bg-smile transition-colors duration-500">
          <Icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors duration-500" />
        </div>
        <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {service.category}
        </div>
        <h3 className="mt-1 font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
          Learn more
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
