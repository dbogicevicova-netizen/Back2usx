import { useState, useRef } from "react";
import { Shield, Heart, TrendingUp, Bell, Clock, MessageCircle, Users, ChevronDown, ArrowRight, Check } from "lucide-react";

const features = [
  { icon: Shield, title: "Block & Protect", body: "Your partner can block gambling apps and websites on your phone. Strict mode means the blocks can't quietly disappear." },
  { icon: Bell, title: "Real-Time Alerts", body: "If there's an attempt to remove blocks or install gambling apps, your partner is notified immediately — no hiding." },
  { icon: Clock, title: "Scheduled Lockouts", body: "Set automatic lockouts for high-risk moments — evenings, paydays, weekends — before the urge arrives." },
  { icon: TrendingUp, title: "Progress Together", body: "Gambling-free streaks, shared milestones, and savings recovered. Both of you can see what you're building." },
  { icon: MessageCircle, title: "Daily Check-Ins", body: "Log urges, moods, and what's going on. Not a confession — a way to stay connected and catch warning signs early." },
  { icon: Heart, title: "Emergency Support", body: "A single tap connects you to your partner or a trusted person when the urge feels too big to face alone." },
];

const steps = [
  { num: "01", title: "Connect as a couple", body: "Both partners join and link accounts. You set the rules together — what to block, when, and how strictly." },
  { num: "02", title: "Build your safety net", body: "Block gambling sites and apps, set high-risk lockout windows, and choose alert preferences that feel right for both of you." },
  { num: "03", title: "Rebuild day by day", body: "Check in, track your streak, celebrate milestones. Watch the trust come back — one honest day at a time." },
];

const milestones = [
  { days: 7, label: "One week", emoji: "🌱" },
  { days: 30, label: "One month", emoji: "🌿" },
  { days: 90, label: "Three months", emoji: "🌳" },
  { days: 365, label: "One year", emoji: "✨" },
];

function WaitlistForm({ variant = "hero" }: { variant?: "hero" | "footer" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 ${variant === "hero" ? "text-left" : "justify-center text-center"}`}>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 shrink-0">
          <Check className="w-4 h-4 text-primary" />
        </div>
        <p className="text-foreground/80 text-sm leading-snug">You're on the list. We'll be in touch as soon as Back2Us is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${variant === "footer" ? "flex-col sm:flex-row justify-center" : "flex-col sm:flex-row"} w-full max-w-md`}>
      <input
        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
      />
      <button
        type="submit" disabled={loading}
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-70 whitespace-nowrap cursor-pointer"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {loading ? "Joining…" : "Join the waitlist"}
      </button>
    </form>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);
  const scrollToWaitlist = () => waitlistRef.current?.scrollIntoView({ behavior: "smooth" });

  const faqs = [
    { q: "Is this only for the person struggling with gambling?", a: "No — it's built for both of you. The partner supporting recovery has tools too: alerts, lockout settings, and visibility into progress. Healing happens together, not in isolation." },
    { q: "What if the person struggling doesn't want to be monitored?", a: "The app works best when both partners opt in willingly. The accountability features are agreed upon together — not imposed. Many people in recovery actually want this kind of structure because it takes the decision out of their hands in vulnerable moments." },
    { q: "Can the blocks really be made strict?", a: "Yes. Strict mode requires the accountability partner to approve any changes. The person struggling can't simply turn off blocks when an urge hits — which is exactly the point." },
    { q: "When will Back2Us be available?", a: "We're gauging interest before building. If enough people join the waitlist, we'll begin development immediately. Early waitlist members will be first to access the app and will help shape its features." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-primary-foreground fill-current" />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "Lora, serif" }}>Back2Us</span>
        </div>
        <button onClick={scrollToWaitlist} className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
          Join waitlist
        </button>
      </nav>

      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6 tracking-wide uppercase">
              <Users className="w-3 h-3" />
              For couples navigating recovery together
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: "Lora, serif" }}>
              The app that helps you <em className="text-primary not-italic">rebuild trust</em>, not just block gambling.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-prose">
              Back2Us gives couples a shared space to fight gambling addiction together — accountability tools, honest check-ins, and a way to measure the trust you're rebuilding every single day.
            </p>
            <WaitlistForm variant="hero" />
            <p className="text-xs text-muted-foreground mt-3">Free to join. No spam. You'll be first to know when we launch.</p>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 h-[520px]">
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-border bg-card shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                  <span className="text-xs text-muted-foreground">9:41</span>
                  <div className="w-16 h-4 rounded-full bg-background" />
                  <div className="flex gap-1"><div className="w-3 h-3 rounded-full bg-muted" /></div>
                </div>
                <div className="px-4 pt-2 space-y-3">
                  <div className="text-center py-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Gambling-free</p>
                    <p className="text-4xl font-bold text-primary" style={{ fontFamily: "Lora, serif" }}>47</p>
                    <p className="text-xs text-muted-foreground">days</p>
                  </div>
                  <div className="bg-secondary rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "52%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">13 days to 60-day milestone</p>
                  <div className="bg-secondary rounded-xl p-3 border border-border">
                    <p className="text-xs font-medium mb-2">Today's check-in</p>
                    <p className="text-xs text-muted-foreground mb-3">How are you feeling right now?</p>
                    <div className="flex gap-2 flex-wrap">
                      {["Steady", "Anxious", "Grateful", "Struggling"].map((m) => (
                        <span key={m} className={`text-xs px-2 py-1 rounded-full border ${m === "Steady" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>{m}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-3 border border-primary/20 flex gap-2 items-start">
                    <Heart className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0 fill-current" />
                    <div>
                      <p className="text-xs font-medium text-primary">Sarah says</p>
                      <p className="text-xs text-foreground/70">"So proud of you. 47 days is huge."</p>
                    </div>
                  </div>
                  <button className="w-full py-3 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground/80">
                    🆘 I need support right now
                  </button>
                </div>
              </div>
              <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-y border-border bg-card/40">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-5 h-5 text-primary fill-current" />
          </div>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground" style={{ fontFamily: "Lora, serif" }}>
            "I'm a recovering gambling addict. I know what it's like to watch someone you love try to trust you again — and not know how to make it easier for them. If this app had existed, it would have changed everything for us."
          </blockquote>
          <p className="text-sm text-muted-foreground">— Founder of Back2Us</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">The reality</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "Lora, serif" }}>
              Gambling addiction doesn't just hurt the person gambling.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>It fractures trust. It makes the partner feel helpless — watching, waiting, unable to do anything but hope.</p>
              <p>Existing tools either block gambling silently (offering no visibility, no connection) or treat it as a purely individual problem. They miss the relationship entirely.</p>
              <p className="text-foreground font-medium">Back2Us is built on a different belief: recovery is strongest when you're not fighting alone.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "1 in 5", label: "people with gambling disorder attempt suicide" },
              { stat: "£1,200", label: "average monthly losses for problem gamblers in the UK" },
              { stat: "3–4", label: "people affected for every one person struggling" },
              { stat: "70%", label: "of problem gamblers hide it from their partner" },
            ].map((item) => (
              <div key={item.stat} className="bg-card rounded-xl p-5 border border-border">
                <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Lora, serif" }}>{item.stat}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">What Back2Us does</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "Lora, serif" }}>Everything a couple needs to face this together</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: "Lora, serif" }}>{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "Lora, serif" }}>Simple by design. Serious when it matters.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border -translate-x-8 z-0" />}
              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary/20 mb-4 leading-none" style={{ fontFamily: "Lora, serif" }}>{step.num}</div>
                <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: "Lora, serif" }}>{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">Progress</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "Lora, serif" }}>Milestones you'll celebrate together</h2>
          </div>
          <div className="relative">
            <div className="absolute top-8 left-8 right-8 h-px bg-border hidden sm:block" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {milestones.map((m) => (
                <div key={m.days} className="flex flex-col items-center text-center gap-2 relative">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center text-2xl relative z-10 hover:border-primary/50 transition-colors">{m.emoji}</div>
                  <p className="font-bold text-foreground text-sm" style={{ fontFamily: "Lora, serif" }}>{m.days} days</p>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">And beyond — savings recovered, goals set, trust rebuilt.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-4">Future features</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: "Lora, serif" }}>If you prove there's interest, we'll build much more</h2>
          <p className="text-muted-foreground">This is just the start. Your waitlist signup tells us what to build next.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "💰", title: "Shared savings goals", body: "See exactly how much you've saved by not gambling. Watch it grow together toward something real." },
            { icon: "📊", title: "Budgeting tools", body: "Understand where the money was going, and where it can go now that it stays with you." },
            { icon: "🤝", title: "Relationship exercises", body: "Structured activities for rebuilding trust — communication prompts, honesty exercises, small wins together." },
            { icon: "🌐", title: "Recovery community", body: "Connect with other couples who understand. Peer support, shared stories, professional resources." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "Lora, serif" }}>{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-card/30 border-y border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">Questions</p>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "Lora, serif" }}>Common questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium hover:bg-secondary/50 transition-colors cursor-pointer">
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section
