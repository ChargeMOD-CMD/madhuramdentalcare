import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-dark-luxe text-secondary">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-smile grid place-items-center glow-accent">
              <span className="text-primary-foreground font-display font-bold">M</span>
            </div>
            <div>
              <div className="font-display text-xl font-semibold">Madhuram Dental Clinic</div>
              <div className="text-xs uppercase tracking-[0.18em] text-secondary/60">Precision Dentistry. Beautiful Smiles.</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-secondary/70 max-w-md">
            A next-generation dental ecosystem in Chennai — combining advanced clinical precision with calming, patient-centered comfort.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-secondary/60 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/doctors" className="hover:text-accent transition-colors">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-secondary/60 mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +91 98404 00867</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-highlight" /> WhatsApp</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@madhuramdental.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Chennai, Tamil Nadu</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary/50">
          <div>© {new Date().getFullYear()} Madhuram Dental Clinic. All rights reserved.</div>
          <div>Mon–Fri 9AM–8PM · Sat–Sun 10AM–5PM</div>
        </div>
      </div>
    </footer>
  );
}
