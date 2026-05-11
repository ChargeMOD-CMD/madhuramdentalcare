import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Madhuram Dental Clinic" },
      { name: "description", content: "Schedule your dental consultation in Chennai. Call, WhatsApp or book online with Madhuram Dental Clinic." },
      { property: "og:title", content: "Book your Smile — Madhuram Dental Clinic" },
      { property: "og:description", content: "Book a complimentary dental consultation today." },
    ],
  }),
  component: ContactPage,
});

const treatments = ["General Check-up", "Teeth Whitening", "Smile Design", "Dental Implants", "Root Canal", "Braces & Aligners", "Other"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-12 text-center relative">
        <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Book your Visit</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold tracking-tight">
            Begin your <span className="text-gradient">smile journey.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Tell us about your smile and we'll respond within minutes during clinic hours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-smile mx-auto grid place-items-center glow-accent">
                  <Check className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">Appointment request received</h3>
                <p className="mt-2 text-muted-foreground">Our team will reach out shortly to confirm your visit.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-accent">Submit another</button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid sm:grid-cols-2 gap-5"
              >
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input required className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input required type="tel" className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent" placeholder="+91 ..." />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input type="email" className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent" placeholder="you@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Treatment</label>
                  <select className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent">
                    {treatments.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred Date</label>
                  <input type="date" className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred Time</label>
                  <input type="time" className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea rows={4} className="mt-2 w-full bg-secondary rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent" placeholder="Tell us about your smile goals…" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-smile text-primary-foreground font-semibold glow-accent hover:opacity-95 transition">
                    <Send className="w-4 h-4" /> Request Appointment
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {[
              { i: Phone, t: "Call us", d: "+91 98404 00867", h: "tel:+919840400867" },
              { i: MessageCircle, t: "WhatsApp", d: "Chat instantly", h: "https://wa.me/919840400867" },
              { i: Mail, t: "Email", d: "info@madhuramdental.com", h: "mailto:info@madhuramdental.com" },
              { i: MapPin, t: "Visit us", d: "Chennai, Tamil Nadu, India" },
              { i: Clock, t: "Hours", d: "Mon–Fri 9AM–8PM · Sat–Sun 10AM–5PM" },
            ].map(({ i: Icon, t, d, h }) => {
              const Comp: any = h ? "a" : "div";
              return (
                <Comp key={t} href={h} target={h?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block rounded-2xl bg-card border border-border p-5 hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-smile grid place-items-center glow-accent">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                      <div className="font-medium">{d}</div>
                    </div>
                  </div>
                </Comp>
              );
            })}
          </div>
        </div>

        <div className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border aspect-[16/6] bg-dark-luxe relative">
            <div className="absolute inset-0 bg-hero-glow opacity-70" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 grid place-items-center text-secondary text-sm">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto text-accent" />
                <div className="mt-3 font-display text-2xl">Chennai · Tamil Nadu · India</div>
                <div className="mt-1 text-secondary/70 text-xs">Google Maps embed coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
