import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-smile grid place-items-center glow-accent">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M4 11c0-3 2-6 8-6s8 3 8 6c0 2-1 4-3 5l-1 4c0 1-1 2-2 2h-4c-1 0-2-1-2-2l-1-4c-2-1-3-3-3-5z" />
              <path d="M8 14c1 2 7 2 8 0" strokeLinecap="round" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-tight">Madhuram</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Dental Clinic</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919840400867"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/70 transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            +91 98404 00867
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-smile text-primary-foreground text-sm font-semibold hover:opacity-90 transition glow-accent"
          >
            Book Visit
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-smile text-primary-foreground text-sm font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
