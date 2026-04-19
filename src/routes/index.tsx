import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  TrendingUp,
  Building2,
  Sparkles,
  BookOpen,
  Wallet,
  Target,
  LineChart,
  Clock,
  Users,
  IndianRupee,
  MapPin,
  CheckCircle2,
  Star,
  ChevronDown,
  GraduationCap,
  Handshake,
  Heart,
} from "lucide-react";
import { ArthaNav } from "@/components/ArthaNav";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero-parent-student.jpg";
import classroomImg from "@/assets/classroom.jpg";
import parent1 from "@/assets/parent-1.jpg";
import parent2 from "@/assets/parent-2.jpg";
import parent3 from "@/assets/parent-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artha Gyaan — Financial Literacy for Students Aged 16–18 | Namaste Stocks" },
      {
        name: "description",
        content:
          "A 6-hour financial literacy workshop for Indian students aged 16–18. Built by investment professionals with 30+ years of experience and ₹200 Cr+ AUM. Enroll for ₹999.",
      },
      { property: "og:title", content: "Artha Gyaan — Financial Literacy Workshop for Students" },
      {
        property: "og:description",
        content:
          "Give your child the one advantage money can buy — the knowledge of how to use it. 6 hours, ₹999, built by real investors.",
      },
    ],
  }),
  component: ArthaLanding,
});

function ArthaLanding() {
  return (
    <div id="top" className="bg-background">
      <ArthaNav />
      <Hero />
      <Problem />
      <EmotionalHook />
      <WhyTheseYears />
      <Curriculum />
      <WorkshopDetails />
      <Credibility />
      <Traction />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* 1. HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-background">
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-saffron-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
              <Sparkles className="h-3.5 w-3.5 text-saffron" /> By Namaste Stocks
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy md:text-5xl lg:text-[3.5rem]">
              Your child will earn lakhs.{" "}
              <span className="text-saffron">But has anyone taught them what to do with it?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Artha Gyaan is a 6-hour financial literacy workshop designed for students aged 16–18 — built by
              investment professionals with{" "}
              <strong className="text-navy">30+ years of experience</strong> and{" "}
              <strong className="text-navy">₹200 Cr+ under management</strong>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enroll"
                className="inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-semibold text-saffron-foreground shadow-amber transition-transform hover:scale-[1.03]"
              >
                Enroll Your Child — ₹999
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy bg-transparent px-7 py-4 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
              >
                See What They'll Learn
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <TrustBadge icon={<Award className="h-4 w-4" />} text="30+ Years Experience" />
              <TrustBadge icon={<TrendingUp className="h-4 w-4" />} text="₹200 Cr+ AUM" />
              <TrustBadge icon={<Building2 className="h-4 w-4" />} text="Pilot Running in Lucknow" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-saffron-soft via-cream to-transparent blur-2xl" />
            <img
              src={heroImg}
              alt="Indian mother and teenage daughter learning together at home"
              width={1280}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="rounded-[1.75rem] shadow-card"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-5 py-4 shadow-card md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Pilot live at</p>
                  <p className="text-sm font-bold text-navy">LDA Colony, Lucknow</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-navy">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-saffron-soft text-saffron">
        {icon}
      </span>
      <span className="font-semibold">{text}</span>
    </div>
  );
}

/* 2. PROBLEM */
function Problem() {
  const stats = [
    { value: 27, suffix: "%", label: "Financially literate", sub: "India's adults vs 42% globally" },
    { value: 16.7, suffix: "%", label: "Basic money grasp", sub: "of Indian students surveyed", decimals: 1 },
    { value: 5, prefix: "<", suffix: "%", label: "Reached today", sub: "of 250M school-going children" },
    { value: 42, suffix: "%", label: "Blocked from investing", sub: "young Indians citing knowledge gap" },
  ];
  return (
    <section className="bg-warm-grey py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">The Problem</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
              India's schools teach calculus.{" "}
              <span className="text-saffron">Not how money works.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-card p-7 shadow-soft transition-shadow hover:shadow-card">
                <div className="absolute inset-x-0 top-0 h-1 bg-saffron" />
                <p className="text-4xl font-extrabold text-navy md:text-5xl">
                  <Counter
                    to={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </p>
                <p className="mt-3 text-base font-bold text-navy">{s.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg italic text-muted-foreground">
            "By the time most students learn about money, they've already made their first mistake."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 3. EMOTIONAL HOOK */
function EmotionalHook() {
  return (
    <section className="relative overflow-hidden bg-saffron py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron via-saffron to-[oklch(0.7_0.18_55)]" />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.75rem]" style={{ color: "white" }}>
              Every year without this knowledge is a year of compounding your child will never get back.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Ages 16–18 are peak habit-forming years. The financial habits built now last a lifetime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 4. WHY THESE YEARS */
function WhyTheseYears() {
  const items = [
    { icon: GraduationCap, title: "Peak habit-forming years", desc: "Ages 16–18 are when financial behaviours solidify for a lifetime." },
    { icon: TrendingUp, title: "75% shift to structured planning", desc: "Post-workshop studies show students move from impulsive to intentional." },
    { icon: BookOpen, title: "Knowledge gap removed", desc: "42% of young Indians cite this as their #1 barrier to investing." },
    { icon: LineChart, title: "Decades of wealth advantage", desc: "Starting early unlocks the math of compounding for life." },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">Why Now</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
              Why financial literacy at 16 changes everything
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-soft">
                  <it.icon className="h-6 w-6 text-saffron" strokeWidth={2.25} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. CURRICULUM */
function Curriculum() {
  const modules = [
    { icon: TrendingUp, title: "Wealth Generation", desc: "How money grows and why starting early matters more than how much." },
    { icon: LineChart, title: "Power of Compounding", desc: "The math behind long-term wealth, made simple and intuitive." },
    { icon: Wallet, title: "Money Management", desc: "Budgeting, saving, and spotting debt traps before they close in." },
    { icon: Target, title: "Goal-Based Investing", desc: "College, a car, financial freedom — money aligned with real goals." },
  ];
  return (
    <section id="curriculum" className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">Curriculum</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
              6 hours. <span className="text-saffron">Skills that last a lifetime.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built by investment professionals. Delivered in plain language. No textbook theory.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="group flex h-full gap-5 rounded-2xl bg-card p-7 shadow-soft transition-all hover:shadow-card md:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-saffron transition-colors group-hover:bg-saffron group-hover:text-navy">
                  <m.icon className="h-7 w-7" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. WORKSHOP DETAILS */
function WorkshopDetails() {
  const facts = [
    { icon: Clock, label: "Duration", value: "3 Hours × 2 Days", sub: "6 hours total" },
    { icon: IndianRupee, label: "Fee", value: "₹999", sub: "per student" },
    { icon: MapPin, label: "Format", value: "In-Person", sub: "Coaching center model" },
    { icon: Users, label: "Batch Size", value: "25–50", sub: "students per session" },
    { icon: GraduationCap, label: "Who", value: "Aged 16–18", sub: "school students" },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">Workshop Details</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">Quick facts for parents</h2>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-4 rounded-3xl bg-warm-grey p-6 sm:grid-cols-2 md:p-8 lg:grid-cols-5">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-card p-5 text-center shadow-soft">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-soft">
                  <f.icon className="h-5 w-5 text-saffron" strokeWidth={2.25} />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{f.label}</p>
                <p className="mt-1 text-lg font-extrabold text-navy">{f.value}</p>
                <p className="text-xs text-muted-foreground">{f.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center rounded-full bg-saffron px-8 py-4 text-base font-semibold text-saffron-foreground shadow-amber transition-transform hover:scale-[1.03]"
            >
              Reserve Your Child's Seat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 7. CREDIBILITY */
function Credibility() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--saffron) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--saffron) 0, transparent 40%)",
        }}
      />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-saffron">Credibility</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl" style={{ color: "white" }}>
                We are not new to this.
              </h2>
              <div className="mt-10 space-y-8">
                <BigStat value="30+" label="Years in investment management" />
                <BigStat value="₹200 Cr+" label="Assets Under Management" />
                <BigStat value="100%" label="Real investors. Not theorists." />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-10">
              <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                This isn't a startup looking for validation. These are{" "}
                <span className="font-bold text-saffron">experienced investors</span> choosing to give the next
                generation a meaningful head start — with the same rigour applied to managing wealth.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron text-navy">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">Namaste Stocks</p>
                  <p className="text-xs text-white/60">Investment professionals · Lucknow, India</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-5xl font-extrabold text-saffron md:text-6xl">{value}</p>
      <p className="mt-1 text-base text-white/80 md:text-lg">{label}</p>
    </div>
  );
}

/* 8. TRACTION */
function Traction() {
  const milestones = [
    { tag: "Live", title: "LDA Colony, Lucknow", desc: "Partner coaching center already on board and supporting the pilot." },
    { tag: "In Progress", title: "Pilot sessions running", desc: "Real students enrolled and learning at our partner study center." },
    { tag: "Validated", title: "Strong early demand", desc: "Confirmed by overwhelmingly positive parent and student feedback." },
  ];
  const testimonials = [
    {
      quote: "I wish someone had taught me this at 16. Truly grateful this exists for my daughter.",
      name: "Priya Sharma",
      role: "Parent · Lucknow",
      img: parent1,
    },
    {
      quote: "Practical, clear, and rooted in real experience. Exactly what our schools should have been teaching.",
      name: "Rajesh Verma",
      role: "Parent · Lucknow",
      img: parent2,
    },
    {
      quote: "My son came home and explained compounding to his younger brother. That alone was worth ₹999.",
      name: "Anjali Mehta",
      role: "Parent · Lucknow",
      img: parent3,
    },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">Traction</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
              We're already in the field
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/10">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  </div>
                  <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-success">
                    {m.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-3xl bg-cream">
            <div className="grid lg:grid-cols-2">
              <img
                src={classroomImg}
                alt="Indian students learning in a classroom"
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-extrabold text-navy md:text-3xl">What parents are saying</h3>
                <div className="mt-6 space-y-5">
                  {testimonials.map((t) => (
                    <div key={t.name} className="rounded-2xl bg-card p-5 shadow-soft">
                      <div className="flex gap-1 text-saffron">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-saffron" />
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-navy">"{t.quote}"</p>
                      <div className="mt-4 flex items-center gap-3">
                        <img src={t.img} alt={t.name} width={40} height={40} loading="lazy" decoding="async" className="h-10 w-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-bold text-navy">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 9. FAQ */
function FAQ() {
  const faqs = [
    { q: "Who is this workshop for?", a: "Students aged 16–18, regardless of stream or prior knowledge of finance. Parents are welcome to attend the orientation session." },
    { q: "What exactly will my child learn?", a: "Four core modules: wealth generation, the power of compounding, money management (budgeting, saving, debt traps), and goal-based investing — all delivered in plain language with real examples." },
    { q: "Why ₹999? What does it include?", a: "₹999 covers all 6 hours of in-person instruction across 2 days, workshop materials, a personal goal-planning workbook, and post-workshop resources for continued learning." },
    { q: "Is it available in our city?", a: "Our pilot is currently live in Lucknow at our LDA Colony partner center. We are expanding rapidly — share your city via the enrollment form to be notified first." },
    { q: "How is this different from YouTube or free content?", a: "Curated, structured, age-appropriate, and built by investors managing ₹200 Cr+ — not generic creators. Plus an in-person classroom format that drives accountability and real behaviour change." },
  ];
  return (
    <section className="bg-warm-grey py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">FAQ</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">
              Questions parents ask us
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <FAQItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-bold text-navy md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-saffron transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* 10. FINAL CTA */
function FinalCTA() {
  const paths = [
    { icon: GraduationCap, title: "Enroll Your Child", price: "₹999", desc: "Reserve a seat in the next workshop.", cta: "Enroll Now", primary: true },
    { icon: Handshake, title: "Partner With Us", price: "Institutions", desc: "Bring Artha Gyaan to your coaching center or school.", cta: "Become a Partner" },
    { icon: Heart, title: "Support the Mission", price: "Sponsor", desc: "Help us reach 5,000 students this summer.", cta: "Get Involved" },
  ];
  return (
    <section id="enroll" className="bg-gradient-to-b from-cream to-saffron-soft py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-navy md:text-4xl lg:text-[2.75rem]">
              Give your child the one advantage money can actually buy —{" "}
              <span className="text-saffron">the knowledge of how to use it.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-3xl p-8 shadow-card transition-transform hover:-translate-y-1 ${
                  p.primary ? "bg-navy text-white ring-4 ring-saffron/40" : "bg-card"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    p.primary ? "bg-saffron text-navy" : "bg-saffron-soft text-saffron"
                  }`}
                >
                  <p.icon className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <h3 className={`mt-5 text-xl font-bold ${p.primary ? "" : "text-navy"}`} style={p.primary ? { color: "white" } : undefined}>
                  {p.title}
                </h3>
                <p className={`mt-1 text-2xl font-extrabold ${p.primary ? "text-saffron" : "text-navy"}`}>
                  {p.price}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${p.primary ? "text-white/80" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href="#enroll"
                    className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      p.primary
                        ? "bg-saffron text-saffron-foreground shadow-amber"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-navy-foreground"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. FOOTER */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xl font-extrabold text-navy">Artha Gyaan <span className="text-saffron">|</span> Namaste Stocks</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Empowering India's youth with financial intelligence.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-navy md:justify-end">
            <a href="#" className="hover:text-saffron">About</a>
            <a href="#curriculum" className="hover:text-saffron">Curriculum</a>
            <a href="#enroll" className="hover:text-saffron">Partner With Us</a>
            <a href="#" className="hover:text-saffron">Contact</a>
          </nav>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Namaste Stocks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
