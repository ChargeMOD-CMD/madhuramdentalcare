import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors & Specialists — Madhuram Dental Clinic" },
      { name: "description", content: "Meet the specialists behind Madhuram — award-winning dentists in cosmetic, implant and advanced dental care." },
      { property: "og:title", content: "Our Specialists — Madhuram Dental Clinic" },
      { property: "og:description", content: "Award-winning dental specialists, internationally trained." },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  { n: "Dr. Madhuram Sharma", r: "Chief Dental Surgeon · Implantologist", e: "20+ yrs", b: "Specialist in 3D-guided dental implants and full-mouth rehabilitation." },
  { n: "Dr. Anika Rao", r: "Cosmetic & Smile Design Specialist", e: "12+ yrs", b: "Digital smile design, veneers, and aesthetic restorations." },
  { n: "Dr. Rohan Iyer", r: "Endodontist · Root Canal Specialist", e: "10+ yrs", b: "Single-sitting microscopic root canal therapy." },
  { n: "Dr. Priya Menon", r: "Orthodontist · Aligners & Braces", e: "9+ yrs", b: "Invisible aligners and modern orthodontic correction for all ages." },
];

function DoctorsPage() {
  return (
    <>
      <section className="pt-32 pb-12 text-center relative">
        <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Our Specialists</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight">
            Masters of the <span className="text-gradient">modern smile.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Internationally trained specialists who combine clinical precision with genuine warmth.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d, i) => (
            <div key={d.n} className="group rounded-3xl bg-card border border-border overflow-hidden hover-lift">
              <div className="relative aspect-[4/5] bg-dark-luxe overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-80" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-32 h-32 rounded-full bg-smile glow-accent grid place-items-center">
                    <span className="font-display text-5xl font-bold text-primary-foreground">{d.n.split(" ")[1][0]}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-secondary/80 bg-background/10 border border-secondary/20 rounded-full px-2.5 py-1 backdrop-blur">
                  #{i + 1}
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-secondary/80 bg-background/10 border border-secondary/20 rounded-full px-2.5 py-1 backdrop-blur">
                  {d.e}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{d.n}</h3>
                <div className="text-xs text-accent mt-1">{d.r}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.b}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-smile text-primary-foreground font-semibold glow-accent">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
