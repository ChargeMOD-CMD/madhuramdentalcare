import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Smile, Star, Quote } from "lucide-react";
import { SmileOrb } from "@/components/SmileOrb";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhuram Dental Clinic — Precision Dentistry. Beautiful Smiles." },
      { name: "description", content: "Futuristic dental care in Chennai. Cosmetic smile design, implants, aligners and premium patient-centered comfort." },
      { property: "og:title", content: "Madhuram Dental Clinic — Intelligent Smile Care" },
      { property: "og:description", content: "Where clinical precision meets cinematic comfort. Book your smile journey today." },
    ],
  }),
  component: Index,
});

const stats = [
  { v: "20+", l: "Years of care" },
  { v: "15K+", l: "Smiles transformed" },
  { v: "4.9★", l: "Patient rating" },
  { v: "13+", l: "Specialist treatments" },
];

const testimonials = [
  { n: "Aarav P.", r: "Smile Design", q: "I walked in nervous and walked out with the smile I'd dreamed of. The team is incredible — every detail felt curated." },
  { n: "Meera S.", r: "Invisible Aligners", q: "Cleanest, most calming clinic I've visited. The aligner journey was practically invisible — and so were my results." },
  { n: "Karthik R.", r: "Dental Implant", q: "Painless, precise, and surprisingly elegant. Madhuram made implant surgery feel like a spa visit." },
];

const journey = [
  { n: "01", t: "Digital Smile Scan", d: "AI-assisted intraoral scanning maps your smile in 3D." },
  { n: "02", t: "Personalized Plan", d: "Treatment options visualized — see your future smile before committing." },
  { n: "03", t: "Precision Treatment", d: "Microscope-assisted, sterile, sedation-friendly care." },
  { n: "04", t: "Lifetime Care", d: "Ongoing maintenance and smile assurance — for years to come." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-highlight glow-highlight" />
              Now accepting new smile journeys
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Precision dentistry.<br />
              <span className="text-gradient">Beautiful smiles.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Madhuram is Chennai's next-generation dental sanctuary — where clinical precision meets cinematic comfort, and every smile is engineered around you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-smile text-primary-foreground font-semibold glow-accent hover:opacity-95 transition">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/70 transition">
                Explore Treatments
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4 max-w-lg">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <SmileOrb />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-highlight" /> ISO-grade Sterilization</span>
          <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent" /> AI-Assisted Diagnostics</span>
          <span className="flex items-center gap-2"><Smile className="w-4 h-4 text-accent" /> Digital Smile Design</span>
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-highlight" /> 4.9★ Patient Rating</span>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Signature Treatments</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
                Every smile, <span className="text-gradient">engineered.</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              View all 13 treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 bg-dark-luxe text-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Madhuram Journey</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              A smile, in <span className="text-gradient">four precise steps.</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((j) => (
              <div key={j.n} className="relative rounded-3xl border border-secondary/15 bg-background/5 backdrop-blur p-6 hover-lift">
                <div className="font-display text-5xl font-bold text-gradient">{j.n}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{j.t}</h3>
                <p className="mt-2 text-sm text-secondary/70 leading-relaxed">{j.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SMILE ANALYTICS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-luxe relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-glow opacity-60" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                  <span className="w-2 h-2 rounded-full bg-highlight glow-highlight animate-pulse" />
                  Smile Health Index
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { l: "Enamel", v: 92 },
                    { l: "Alignment", v: 78 },
                    { l: "Gum Health", v: 88 },
                  ].map((m) => (
                    <div key={m.l} className="rounded-2xl bg-background border border-border p-4">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
                      <div className="mt-1 font-display text-3xl font-bold text-gradient">{m.v}<span className="text-base">%</span></div>
                      <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full bg-smile" style={{ width: `${m.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-background border border-border p-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">AI Recommendation</div>
                  <div className="mt-2 text-sm">Schedule a professional cleaning in 4 weeks. Consider clear aligners for improved bite alignment.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">AI Smile Analytics</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              See your smile <span className="text-gradient">before it's yours.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our AI-powered smile analytics generate a personalized health index, simulate treatment outcomes, and recommend a preventive roadmap — all before you sit in the chair.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["3D intraoral scan in under 3 minutes", "Predictive smile simulation", "Personalized prevention plan", "Lifetime smile tracking"].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent glow-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-smile text-primary-foreground font-semibold glow-accent">
                Book a Free Scan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Patient Smile Stories</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Smiles, <span className="text-gradient">remembered.</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-3xl bg-card border border-border p-7 hover-lift relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-smile grid place-items-center glow-accent">
                    <span className="text-sm font-semibold text-primary-foreground">{t.n[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-dark-luxe text-secondary p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-hero-glow opacity-80" />
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-highlight/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Ready for your <span className="text-gradient">best smile yet?</span>
              </h2>
              <p className="mt-5 text-secondary/70 max-w-xl mx-auto">
                Book a complimentary consultation. We'll handle the rest — start to finish, painless and precise.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-smile text-primary-foreground font-semibold glow-accent">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+919840400867" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-secondary/30 text-secondary font-semibold hover:bg-secondary/10 transition">
                  Call +91 98404 00867
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
