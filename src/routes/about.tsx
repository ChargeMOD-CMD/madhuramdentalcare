import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HeartPulse, Sparkles, Award, Microscope, Smile } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Madhuram Dental Clinic" },
      { name: "description", content: "Our philosophy: where clinical precision meets cinematic comfort. Discover the Madhuram approach to dental care." },
      { property: "og:title", content: "About — Madhuram Dental Clinic" },
      { property: "og:description", content: "Precision-led, patient-first dentistry in Chennai." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { i: ShieldCheck, t: "Safety First", d: "ISO-grade sterilization, single-use instruments, and surgical-suite protocols on every visit." },
  { i: HeartPulse, t: "Patient Comfort", d: "Acoustic-treated suites, sedation options, and zero-rush appointments." },
  { i: Sparkles, t: "Advanced Technology", d: "Digital imaging, AI diagnostics, intraoral scanners, and 3D-guided surgical planning." },
  { i: Microscope, t: "Precision Mastery", d: "Magnification-assisted dentistry for restorations crafted to micron-level accuracy." },
  { i: Award, t: "Award-Winning Team", d: "Specialists trained across India, Europe, and the US." },
  { i: Smile, t: "Lifetime Smile Care", d: "Long-term care plans, not one-time fixes — we grow with your smile." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Madhuram Philosophy</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight">
            Dentistry, <span className="text-gradient">reimagined.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We built Madhuram around a simple idea — that exceptional dental care should feel less like a clinic and more like a sanctuary. Where every chair, every conversation, every detail is designed to earn your trust.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {values.map((v) => {
            const Icon = v.i;
            return (
              <div key={v.t} className="rounded-3xl bg-card border border-border p-7 hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-smile grid place-items-center glow-accent">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 rounded-3xl bg-dark-luxe text-secondary p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-10 text-center">
            {[
              { v: "20+", l: "Years of clinical excellence" },
              { v: "15,000+", l: "Smiles transformed" },
              { v: "4.9★", l: "Average patient rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-6xl font-bold text-gradient">{s.v}</div>
                <div className="mt-2 text-sm text-secondary/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
