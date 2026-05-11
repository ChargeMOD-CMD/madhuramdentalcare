import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const initial: Msg[] = [
  { role: "bot", text: "Hi! I'm MADHURAM AI — your Smile Guide. How can I help today?" },
];

const quick = [
  "Book an appointment",
  "Teeth whitening cost",
  "Dental implants info",
  "Clinic timings",
];

const canned: Record<string, string> = {
  "Book an appointment": "Lovely! You can book instantly on our Contact page, or call +91 98404 00867. Which day works best for you?",
  "Teeth whitening cost": "Our LED whitening starts at ₹4,999 and brightens up to 8 shades in a single visit. Want to schedule a free consult?",
  "Dental implants info": "We offer 3D-guided titanium implants with lifetime smile assurance. A free consultation includes a digital scan and treatment plan.",
  "Clinic timings": "We're open Mon–Fri 9AM–8PM and Sat–Sun 10AM–5PM. Walk-ins welcome — but bookings get priority.",
};

export function SmileChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const reply = canned[text] ?? "Thanks for your message! Our team will respond shortly. You can also reach us on WhatsApp at +91 98404 00867.";
    setMsgs((m) => [...m, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  };

  return (
    <>
      {/* Floating orb */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-smile grid place-items-center glow-accent animate-pulse-glow"
        aria-label="Open Smile Chat"
        data-cursor="hover"
      >
        {open ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-highlight border-2 border-background" />
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 origin-bottom-right transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-3xl bg-card border border-border shadow-luxe overflow-hidden flex flex-col h-[520px]">
          <div className="bg-dark-luxe text-secondary p-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-glow opacity-70" />
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-smile grid place-items-center glow-accent">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-semibold">MADHURAM AI</div>
                <div className="text-xs text-secondary/70 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-highlight glow-highlight" /> Smile Guide · Online
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-smile text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {quick.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-accent hover:text-accent transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-border p-3 flex items-center gap-2 bg-background"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about treatments, pricing, timings…"
              className="flex-1 bg-secondary rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="w-10 h-10 rounded-full bg-smile grid place-items-center glow-accent">
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
