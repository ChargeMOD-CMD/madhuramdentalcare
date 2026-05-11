import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services — Madhuram Dental Clinic" },
      { name: "description", content: "Explore general, cosmetic and advanced dental treatments — from smile design to implants and aligners." },
      { property: "og:title", content: "Services — Madhuram Dental Clinic" },
      { property: "og:description", content: "General, cosmetic and advanced dentistry, engineered around your smile." },
    ],
  }),
  component: ServicesPage,
});

const categories = ["All", "General", "Cosmetic", "Advanced"] as const;

function ServicesPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? services : services.filter((s) => s.category === cat);

  return (
    <>
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Treatments</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight">
            Every smile, <span className="text-gradient">engineered.</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            From routine care to full-mouth transformations — explore our complete spectrum of futuristic dental services.
          </p>

          <div className="mt-10 inline-flex p-1 rounded-full bg-secondary border border-border">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  cat === c ? "bg-smile text-primary-foreground glow-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto px-6 lg:px-8 rounded-3xl bg-dark-luxe text-secondary p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-70" />
          <div className="relative">
            <h3 className="font-display text-3xl font-bold">Not sure which treatment is right?</h3>
            <p className="mt-3 text-secondary/70 max-w-xl mx-auto">Book a free 15-minute consultation and our specialists will guide you.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-smile text-primary-foreground font-semibold glow-accent">
              Talk to a Specialist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
