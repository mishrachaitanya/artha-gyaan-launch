import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  Sparkles,
  BookOpen,
  Wallet,
  Target,
  LineChart,
  Clock,
  IndianRupee,
  MapPin,
  CheckCircle2,
  Star,
  ChevronDown,
  GraduationCap,
  Handshake,
  Heart,
  X,
  Flame,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  PiggyBank,
  Landmark,
} from "lucide-react";
import { ArthaNav } from "@/components/ArthaNav";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { supabase } from "@/lib/supabase";
import heroImg from "@/assets/hero-parent-student.jpg";
import classroomImg from "@/assets/classroom.jpg";
import parent1 from "@/assets/parent-1.jpg";
import parent2 from "@/assets/parent-2.jpg";
import parent3 from "@/assets/parent-3.jpg";

export const Route = createFileRoute("/")(({
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
}));

export type FormType = "curriculum" | "partner" | "sponsor";

function ArthaLanding() {
  const [formType, setFormType] = useState<FormType | null>(null);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  return (
    <div id="top" className="bg-background">
      <ArthaNav onEnroll={() => setEnrollModalOpen(true)} />
      <Hero onOpenForm={() => setFormType("curriculum")} onEnroll={() => setEnrollModalOpen(true)} />
      <TrustBar />
      <Problem />
      <EmotionalHook />
      <WhyTheseYears />
      <Curriculum />
      <WorkshopDetails />
      <Credibility />
      <Traction />
      <FAQ />
      <FinalCTA onOpenForm={setFormType} onEnroll={() => setEnrollModalOpen(true)} />
      <Footer />
      {formType && <ContactFormModal type={formType} onClose={() => setFormType(null)} />}
      <EnrollmentModal open={enrollModalOpen} onOpenChange={setEnrollModalOpen} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   1. HERO — Cinematic editorial layout
═══════════════════════════════════════════ */
function Hero({ onOpenForm, onEnroll }: { onOpenForm: () => void; onEnroll: () => void }) {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background texture */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-40" />
      {/* Saffron radial glow top-right */}
      <div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "var(--saffron)" }}
      />

      {/* Urgency banner */}
      <div
        className="relative z-20 flex items-center justify-center gap-2.5 bg-navy px-4 py-2.5 text-center"
        style={{ animation: "urgency-pulse 3s ease-in-out infinite" }}
      >
        <Flame className="h-3.5 w-3.5 shrink-0 text-saffron" />
        <p className="text-xs font-bold uppercase tracking-widest text-white/90 sm:text-sm">
          Lucknow Pilot Batch — Limited Seats Remaining · Register Today
        </p>
        <Flame className="h-3.5 w-3.5 shrink-0 text-saffron" />
      </div>

      <div className="container-page relative z-10 grid items-center gap-12 pt-10 pb-16 md:grid-cols-2 md:pt-14 md:pb-24 lg:pt-18 lg:pb-32">
        {/* Left copy */}
        <Reveal>
          <div className="pr-0 lg:pr-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[2px] w-8 bg-saffron" />
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy/70">
                <span className="text-saffron">By Namaste Stocks</span> <span className="opacity-50 mx-1">•</span> Real Investors
              </p>
            </div>

            <h1
              className="mt-6 text-4xl font-bold leading-[1.07] text-navy md:text-5xl lg:text-[3.75rem] lg:leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your child will earn{" "}
              <em className="not-italic text-navy">lakhs.</em>
              <br />
              <span className="text-navy">Who will teach them</span>{" "}
              <span className="text-saffron">
                what to do with it?
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
              Artha Gyaan is a{" "}
              <strong className="font-semibold text-navy">6-hour financial literacy workshop</strong>{" "}
              for students aged 16–18. Built by investment professionals with{" "}
              <strong className="font-semibold text-navy">30+ years of experience</strong> and{" "}
              <strong className="font-semibold text-navy">₹200 Cr+ under management</strong>.
            </p>

            {/* Trust micro-badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: <ShieldCheck className="h-4 w-4" />, text: "30+ Yrs Experience" },
                { icon: <BarChart3 className="h-4 w-4" />, text: "₹200 Cr+ AUM" },
                { icon: <MapPin className="h-4 w-4" />, text: "Lucknow Pilot Live" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-warm-grey px-3 py-1.5 text-xs font-semibold text-navy"
                >
                  <span className="text-saffron">{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onEnroll}
                className="group relative inline-flex items-center justify-center font-bold uppercase tracking-widest text-navy cursor-pointer"
              >
                <span className="absolute inset-0 border border-navy bg-navy transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                <span className="relative border-2 border-navy bg-saffron px-8 py-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Enroll Now — ₹999
                </span>
              </button>
              <button
                onClick={onOpenForm}
                className="group relative inline-flex w-full items-center justify-center font-bold uppercase tracking-widest text-navy sm:w-auto"
              >
                <span className="absolute inset-0 border border-border bg-warm-grey transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                <span className="relative w-full whitespace-nowrap border-2 border-border bg-white px-8 py-4 text-center transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  View Curriculum
                </span>
              </button>
            </div>

            {/* Social proof mini-row */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[parent1, parent2, parent3].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Parent"
                    className="h-8 w-8 rounded-full border-2 border-white object-cover grayscale"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-saffron text-saffron" />
                ))}
              </div>
              <span className="text-xs font-semibold text-muted-foreground">
                Loved by 500+ Lucknow parents
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right image */}
        <Reveal delay={0.15}>
          <div className="group relative mx-auto max-w-[520px] md:ml-auto md:mr-0">
            {/* Decorative corner accent */}
            <div className="absolute -right-3 -top-3 z-20 h-16 w-16 border-t-2 border-r-2 border-saffron opacity-70 transition-all duration-700 group-hover:-right-5 group-hover:-top-5" />
            <div className="absolute -left-3 -bottom-3 z-20 h-16 w-16 border-b-2 border-l-2 border-saffron opacity-70 transition-all duration-700 group-hover:-left-5 group-hover:-bottom-5" />
            {/* Shadow frame */}
            <div className="absolute -left-5 -top-5 h-full w-full border border-navy/20 transition-all duration-700 group-hover:-left-3 group-hover:-top-3" />
            <img
              src={heroImg}
              alt="Indian mother and teenage daughter learning finance together"
              width={1280}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 z-20 flex items-center gap-2.5 border-2 border-saffron bg-white px-4 py-3 shadow-elevated"
              style={{ animation: "float-up 3s ease-in-out infinite" }}
            >
              <GraduationCap className="h-5 w-5 text-saffron" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-navy">Workshop</p>
                <p className="text-[11px] text-muted-foreground">6 Hrs · ₹999 Only</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. TRUST BAR — Social proof strip
═══════════════════════════════════════════ */
function TrustBar() {
  const items = [
    { value: "500+", label: "Parents Enrolled" },
    { value: "₹200 Cr+", label: "AUM Managed" },
    { value: "30+", label: "Years Experience" },
    { value: "4.9 ★", label: "Parent Rating" },
  ];
  return (
    <section className="border-y border-border bg-warm-grey">
      <div className="container-page">
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.07}>
              <div className="flex flex-col items-center py-6 px-4 text-center">
                <p
                  className="text-2xl font-bold text-saffron md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. PROBLEM — Glass stat cards + pull-quote
═══════════════════════════════════════════ */
function Problem() {
  const stats = [
    { value: 27, suffix: "%", label: "Financially Literate", sub: "India's adults vs 42% globally." },
    { value: 16.7, suffix: "%", label: "Basic Grasp", sub: "Of Indian students surveyed.", decimals: 1 },
    { value: 42, suffix: "%", label: "Blocked from Investing", sub: "Driven by the knowledge gap." },
  ];
  return (
    <section className="border-t border-border bg-background py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="max-w-xl">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                The Baseline Fact
              </span>
              <h2
                className="mt-5 text-3xl font-bold leading-tight text-navy md:text-[2.75rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                India's schools teach calculus.{" "}
                <br />
                <em className="italic text-saffron">Not how money works.</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                By the time most young adults learn about compounding, debt traps, or inflation,
                they've already made their first lasting financial mistake.
              </p>

              {/* Pull quote */}
              <blockquote className="relative mt-10 border-l-4 border-saffron pl-6">
                <span
                  className="absolute -left-2 -top-4 font-black text-saffron opacity-25"
                  style={{ fontSize: "4rem", fontFamily: "Georgia, serif", lineHeight: 1 }}
                >
                  "
                </span>
                <p className="text-base italic leading-relaxed text-navy/80 md:text-lg">
                  We are creating a systemic disadvantage by delaying this education. Every year costs
                  a child years of compounding they'll never recover.
                </p>
              </blockquote>
            </div>
          </Reveal>

          {/* Stat cards */}
          <div className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.12}>
                <div className="group flex items-center gap-6 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-elevated">
                  <p
                    className="shrink-0 font-bold text-navy/20 transition-colors duration-300 group-hover:text-saffron"
                    style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", lineHeight: 1 }}
                  >
                    <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </p>
                  <div>
                    <p className="font-sans text-base font-bold text-navy">{s.label}</p>
                    <p className="mt-1 font-sans text-sm text-muted-foreground">{s.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. EMOTIONAL HOOK — Cinematic full-bleed
═══════════════════════════════════════════ */
function EmotionalHook() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.07]" />
      {/* Saffron arc — top */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--saffron), transparent)" }}
      />
      {/* Radial orb */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--saffron) 0%, transparent 70%)" }}
      />
      <div className="container-page relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            {/* Bespoke Editorial Eyebrow */}
            <div className="mb-2 flex flex-col items-center gap-3">
              <div className="flex gap-[0.35rem]">
                <div className="h-1.5 w-1.5 rounded-full bg-saffron opacity-30" />
                <div className="h-1.5 w-1.5 rounded-full bg-saffron opacity-60" />
                <div className="h-1.5 w-1.5 rounded-full bg-saffron opacity-100" />
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-saffron/90">
                The Compounding Truth
              </span>
            </div>
            <h2
              className="mt-8 text-[2rem] font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every year without this knowledge is a year of{" "}
              <em className="italic text-saffron">compounding</em>{" "}
              your child will never get back.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
              Ages 16–18 are peak habit-forming years. The financial behaviors built now last a
              lifetime — for better or for worse.
            </p>

            {/* Two proof points */}
            <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                { icon: <Zap className="h-5 w-5" />, text: "Starting at 16 vs 26 = 10 extra years of compounding" },
                { icon: <ShieldCheck className="h-5 w-5" />, text: "Habits formed now drive 75% of adult financial behavior" },
              ].map((p) => (
                <div
                  key={p.text}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-5 text-left backdrop-blur"
                >
                  <span className="mt-0.5 shrink-0 text-saffron">{p.icon}</span>
                  <p className="font-sans text-sm leading-relaxed text-white/80">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      {/* Bottom arc */}
      <div
        className="absolute inset-x-0 bottom-0 h-[1px] opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, var(--saffron), transparent)" }}
      />
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. WHY THESE YEARS — Icon cards
═══════════════════════════════════════════ */
function WhyTheseYears() {
  const items = [
    {
      icon: <Zap className="h-6 w-6" />,
      number: "01",
      title: "Peak Habit Formation",
      desc: "Ages 16–18 are the narrow window when financial behaviors solidify before adulthood.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: "02",
      title: "75% Behavioral Shift",
      desc: "Post-workshop studies show students move from impulsive spending to intentional planning.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      number: "03",
      title: "Removing the Fear Gap",
      desc: "42% of young Indians cite 'not knowing enough' as their #1 barrier to investing. We remove it.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      number: "04",
      title: "Decades of Advantage",
      desc: "Starting at 16 vs 26 unlocks the mathematical reality of exponential compounding.",
    },
  ];
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
              The Science of Timing
            </span>
            <h2
              className="mt-5 text-3xl font-bold text-navy md:text-[2.75rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why <em className="italic text-saffron">16</em> is the critical age.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-saffron/30 hover:shadow-elevated">
                {/* Saffron glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.96 0.04 75) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <span
                    className="font-mono text-sm font-bold text-saffron opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {it.number}
                  </span>
                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-soft text-saffron transition-all duration-300 group-hover:bg-saffron group-hover:text-white">
                    {it.icon}
                  </div>
                  <h3
                    className="mt-5 text-lg font-bold text-navy transition-colors duration-300 group-hover:text-navy"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {it.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {it.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. CURRICULUM — Magazine editorial layout
═══════════════════════════════════════════ */
function Curriculum() {
  const modules = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Wealth Generation",
      desc: "How money grows in the real world, distinguishing between active income and passive wealth creation vehicles.",
      tag: "Module 01",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Power of Compounding",
      desc: "The mathematical backbone of long-term wealth, taught intuitively without confusing jargon.",
      tag: "Module 02",
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Money Management",
      desc: "Strategic budgeting, intelligent saving frameworks, and recognizing predatory debt traps before they happen.",
      tag: "Module 03",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal-Based Investing",
      desc: "Tying financial vehicles directly to life goals—from buying a car to achieving total financial independence.",
      tag: "Module 04",
    },
  ];
  return (
    <section id="curriculum" className="bg-background py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Sticky left */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-24">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  The Syllabus
                </span>
                <h2
                  className="mt-5 text-3xl font-bold leading-tight text-navy md:text-[2.75rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  6 hours.{" "}
                  <br />
                  <em className="italic text-saffron">Skills that last a lifetime.</em>
                </h2>
                <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
                  Built by investment professionals managing ₹200 Cr+. Delivered in plain language.
                  Zero textbook theory.
                </p>
                {/* Mini credential box */}
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-warm-grey p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-saffron">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-navy">Real investors. Not theorists.</p>
                    <p className="font-sans text-xs text-muted-foreground">
                      30+ years · ₹200 Cr+ AUM · Lucknow, India
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Module list */}
          <div className="flex flex-col lg:col-span-7">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="group relative grid cursor-default grid-cols-[auto_1fr] gap-6 border-b border-border py-9 transition-all duration-300 hover:border-saffron/50 sm:gap-10">
                  {/* Left saffron bar on hover */}
                  <div className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-saffron transition-transform duration-300 group-hover:scale-y-100" />

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron transition-all duration-300 group-hover:bg-saffron group-hover:text-white">
                    {m.icon}
                  </div>

                  {/* Content */}
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-saffron">
                      {m.tag}
                    </span>
                    <h3
                      className="mt-2 text-xl font-bold text-navy md:text-2xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {m.title}
                    </h3>
                    <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. WORKSHOP DETAILS — Premium spec card
═══════════════════════════════════════════ */
function WorkshopDetails() {
  const facts = [
    { icon: <Clock className="h-5 w-5" />, label: "Duration", value: "3 Hrs × 2 Days", sub: "6 hours total" },
    { icon: <IndianRupee className="h-5 w-5" />, label: "Fee", value: "₹999", sub: "per student" },
    { icon: <MapPin className="h-5 w-5" />, label: "Format", value: "In-Person", sub: "Coaching centers" },
    { icon: <Users className="h-5 w-5" />, label: "Batch Size", value: "25–50", sub: "students per session" },
    { icon: <GraduationCap className="h-5 w-5" />, label: "Who", value: "Aged 16–18", sub: "school students" },
  ];
  return (
    <section className="bg-cream py-20 px-4">
      <div className="container-page max-w-5xl">
        <Reveal>
          {/* Editorial Heading Accent */}
          <div className="mb-1 flex items-center justify-center gap-5">
            <div className="relative h-px w-16 bg-border">
              <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-saffron" />
            </div>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-navy opacity-80">
              Workshop At a Glance
            </span>
            <div className="relative h-px w-16 bg-border">
              <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-saffron" />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-elevated">
            {/* Spec grid */}
            <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
              {facts.map((f) => (
                <div key={f.label} className="group flex flex-col items-center gap-3 p-8 text-center transition-colors duration-200 hover:bg-saffron-soft md:p-7 lg:p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron-soft text-saffron transition-all duration-200 group-hover:bg-saffron group-hover:text-white">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {f.label}
                    </p>
                    <p
                      className="mt-1.5 text-xl font-bold text-navy"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {f.value}
                    </p>
                    <p className="mt-0.5 font-sans text-xs text-muted-foreground">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA footer */}
            <div className="border-t border-border bg-navy px-6 py-5 text-center">
              <a
                href="#enroll"
                className="font-sans text-sm font-bold uppercase tracking-widest text-saffron transition-all duration-200 hover:text-white"
              >
                Reserve Your Child's Seat →
              </a>
              <p className="mt-2 font-sans text-[11px] text-white/40">
                Satisfaction guaranteed · No-risk enrollment
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. CREDIBILITY — Serif stats + glass card
═══════════════════════════════════════════ */
function Credibility() {
  const stats = [
    { value: "30+", label: "Years in investment management" },
    { value: "₹200 Cr+", label: "Assets Under Management" },
    { value: "100%", label: "Real investors. Not theorists." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-32">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, var(--saffron) 0, transparent 40%), radial-gradient(circle at 85% 75%, var(--saffron) 0, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-saffron">
                Credibility
              </span>
              <h2
                className="mt-4 text-3xl font-bold leading-tight text-white md:text-[2.75rem]"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                We are not{" "}
                <em className="italic text-saffron">new</em> to this.
              </h2>
              <div className="mt-10 space-y-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p
                      className="font-bold text-saffron"
                      style={{ fontFamily: "var(--font-display)", fontSize: "3.25rem", lineHeight: 1 }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-2 font-sans text-base text-white/75">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Glass card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md md:p-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-saffron text-saffron" />
                ))}
              </div>
              <p className="font-sans text-lg leading-relaxed text-white/90 md:text-xl">
                This isn't a startup looking for validation. These are{" "}
                <span className="font-bold text-saffron">experienced investors</span> choosing to
                give the next generation a meaningful head start — with the same rigour applied to
                managing real wealth.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron text-navy">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-white">Namaste Stocks</p>
                  <p className="font-sans text-xs text-white/50">
                    Investment professionals · Lucknow, India
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   9. TRACTION — Milestones + star-rated cards
═══════════════════════════════════════════ */
function Traction() {
  const milestones = [
    { tag: "Live", title: "LDA Colony", desc: "Partner coaching center on board and supporting the pilot." },
    { tag: "Running", title: "Students Enrolled", desc: "Real students learning at our partner study center." },
    { tag: "Validated", title: "Parent Demand", desc: "Confirmed by overwhelmingly positive parent feedback." },
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
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="container-page">
        {/* Milestones strip */}
        <div className="grid gap-8 border-y border-border py-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div>
              <h2
                className="text-2xl font-bold text-navy md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Already in the field.
              </h2>
            </div>
          </Reveal>
          {milestones.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.1}>
              <div className="flex flex-col border-l-2 border-saffron pl-6">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-saffron">
                  {m.tag}
                </span>
                <h3
                  className="mt-2 text-lg font-bold text-navy"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Classroom image + testimonials */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1fr_480px] lg:items-start">
          <Reveal delay={0.1}>
            <div className="group relative cursor-default">
              <div className="absolute -left-5 -top-5 h-full w-full border border-border transition-all duration-700 group-hover:-left-3 group-hover:-top-3 group-hover:border-saffron" />
              <img
                src={classroomImg}
                alt="Indian students learning financial literacy"
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />
              {/* Overlay quote */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-navy/80 to-transparent p-8">
                <p
                  className="font-sans text-sm font-semibold italic text-white/90"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  "The classroom where futures are built."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Testimonial card grid */}
          <div>
            <Reveal>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                What Parents Say
              </span>
              <h2
                className="mt-3 text-2xl font-bold text-navy md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Trusted by <em className="italic text-saffron">Lucknow parents.</em>
              </h2>
            </Reveal>
            <div className="mt-8 flex flex-col gap-5">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-saffron/30 hover:shadow-elevated">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-saffron text-saffron" />
                      ))}
                    </div>
                    <p
                      className="mt-3 text-[0.95rem] leading-relaxed text-navy/85"
                      style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                    >
                      "{t.quote}"
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                      <img
                        src={t.img}
                        alt={t.name}
                        width={40}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-10 rounded-full object-cover grayscale"
                      />
                      <div>
                        <p className="font-sans text-sm font-bold text-navy">{t.name}</p>
                        <p className="font-sans text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   10. FAQ — Polished accordion
═══════════════════════════════════════════ */
function FAQ() {
  const faqs = [
    {
      q: "Who is this workshop for?",
      a: "Students aged 16–18, regardless of stream or prior knowledge of finance. Parents are welcome to attend the orientation session.",
    },
    {
      q: "What exactly will my child learn?",
      a: "Four core modules: wealth generation, the power of compounding, money management (budgeting, saving, debt traps), and goal-based investing — all delivered in plain language with real examples.",
    },
    {
      q: "Why ₹999? What does it include?",
      a: "₹999 covers all 6 hours of in-person instruction across 2 days, workshop materials, a personal goal-planning workbook, and post-workshop resources for continued learning.",
    },
    {
      q: "Is it available in our city?",
      a: "Our pilot is currently live in Lucknow at our LDA Colony partner center. We are expanding rapidly — share your city via the enrollment form to be notified first.",
    },
    {
      q: "How is this different from YouTube or free content?",
      a: "Curated, structured, age-appropriate, and built by investors managing ₹200 Cr+ — not generic creators. Plus an in-person classroom format that drives accountability and real behaviour change.",
    },
  ];
  return (
    <section id="faq" className="bg-warm-grey py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-saffron">
              FAQ
            </span>
            <h2
              className="mt-4 text-3xl font-bold text-navy md:text-[2.5rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
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
    <div
      className={`overflow-hidden rounded-2xl border bg-card shadow-soft transition-colors duration-300 ${
        open ? "border-saffron/40 bg-saffron-soft" : "border-border"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-sans text-base font-bold text-navy md:text-[1.05rem]">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-saffron transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex gap-3 px-6 pb-6">
            <div className="mt-0.5 h-full w-[3px] shrink-0 rounded-full bg-saffron" />
            <p className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   11. FINAL CTA — Full-bleed navy
═══════════════════════════════════════════ */
function FinalCTA({ onOpenForm, onEnroll }: { onOpenForm: (t: FormType) => void; onEnroll: () => void }) {
  const paths = [
    {
      type: "curriculum" as const,
      icon: <GraduationCap className="h-7 w-7" />,
      title: "Enroll Your Child",
      price: "₹999",
      desc: "Reserve a seat in the next workshop. Only 50 seats per batch.",
      cta: "Enroll Now",
      primary: true,
    },
    {
      type: "partner" as const,
      icon: <Handshake className="h-7 w-7" />,
      title: "Partner With Us",
      price: "Institutions",
      desc: "Bring Artha Gyaan to your school or coaching center.",
      cta: "Become a Partner",
      primary: false,
    },
    {
      type: "sponsor" as const,
      icon: <Heart className="h-7 w-7" />,
      title: "Support the Mission",
      price: "Sponsor",
      desc: "Help us reach 5,000 students this summer.",
      cta: "Get Involved",
      primary: false,
    },
  ];
  return (
    <section id="enroll" className="relative overflow-hidden bg-navy py-20 text-white md:py-32">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--saffron) 0, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-saffron">
              Take the first step
            </span>
            <h2
              className="mt-5 text-[2rem] font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Give your child the one advantage money can actually buy —{" "}
              <em className="italic text-saffron">the knowledge of how to use it.</em>
            </h2>
          </div>
        </Reveal>

        {/* 3 cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div
                className="group flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 md:p-10"
                style={{
                  borderColor: p.primary ? "oklch(0.76 0.16 65 / 0.4)" : "oklch(1 0 0 / 0.12)",
                  backgroundColor: p.primary ? "oklch(1 0 0 / 0.08)" : "oklch(1 0 0 / 0.03)",
                }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: p.primary ? "var(--saffron)" : "oklch(1 0 0 / 0.12)",
                    color: p.primary ? "var(--navy)" : "var(--saffron)",
                  }}
                >
                  {p.icon}
                </div>
                <p
                  className="mt-5 text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: p.primary ? "var(--saffron)" : "white",
                  }}
                >
                  {p.price}
                </p>
                <h3 className="mt-1 font-sans text-lg font-bold" style={{ color: "oklch(1 0 0 / 0.92)" }}>{p.title}</h3>
                <p className="mt-4 flex-grow font-sans text-sm leading-relaxed" style={{ color: "oklch(1 0 0 / 0.6)" }}>{p.desc}</p>
                <div className="mt-8">
                  <button
                    onClick={() => p.primary ? onEnroll() : onOpenForm(p.type)}
                    className="group/btn relative inline-flex items-center justify-center font-sans font-bold uppercase tracking-widest"
                  >
                    <span
                      className="absolute inset-0 border transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:translate-y-1.5"
                      style={{
                        borderColor: p.primary ? "var(--navy)" : "var(--saffron)",
                        backgroundColor: p.primary ? "var(--navy)" : "var(--saffron)",
                      }}
                    />
                    <span
                      className="relative border-2 px-6 py-3 text-sm transition-transform duration-300 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1"
                      style={{
                        borderColor: p.primary ? "var(--navy)" : "var(--saffron)",
                        backgroundColor: p.primary ? "var(--saffron)" : "transparent",
                        color: p.primary ? "var(--navy)" : "white",
                      }}
                    >
                      {p.cta}
                    </span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   12. FOOTER
═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <a href="#top" className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-saffron font-black text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                अ
              </span>
              <span
                className="text-lg font-bold text-navy"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ArthGyaan
              </span>
            </a>
            <p className="mt-3 max-w-sm font-sans text-sm text-muted-foreground">
              Empowering India's youth with financial intelligence. Built by real investors, for
              real futures.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-items-end">
            <div>
              <h3 className="font-bold text-navy mb-4 font-sans text-sm uppercase tracking-wider text-saffron" style={{ fontFamily: "var(--font-display)" }}>Navigation</h3>
              <nav className="flex flex-col gap-y-3 font-sans text-sm font-semibold text-navy">
                {[
                  ["About", "#top"],
                  ["Curriculum", "#curriculum"],
                  ["Testimonials", "#testimonials"],
                  ["FAQ", "#faq"],
                  ["Enroll", "#enroll"],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="transition-colors hover:text-saffron">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="font-bold text-navy mb-4 font-sans text-sm uppercase tracking-wider text-saffron" style={{ fontFamily: "var(--font-display)" }}>Information</h3>
              <nav className="flex flex-col gap-y-3 font-sans text-sm font-semibold text-navy">
                {[
                  ["Terms & Conditions", "/terms"],
                  ["Privacy Policy", "/privacy"],
                  ["Refund Policy", "/refunds"],
                  ["Contact Us", "/contact"],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="transition-colors hover:text-saffron">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} ArthGyaan. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Made with ❤️ for India's future
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   MODAL
═══════════════════════════════════════════ */
function ContactFormModal({ type, onClose }: { type: FormType; onClose: () => void }) {
  const config = {
    curriculum: {
      title: "Get the Syllabus",
      desc: "Enter your details and we'll instantly send you the comprehensive 6-hour curriculum breakdown.",
      hasMessage: false,
      btn: "Download Curriculum",
      successMsg: "Curriculum access sent to your email!",
      nameLabel: "Parent / Student Name",
    },
    partner: {
      title: "Become a Partner",
      desc: "Interested in bringing Artha Gyaan to your institution? Leave your details and we'll be in touch.",
      hasMessage: true,
      btn: "Request Partnership",
      successMsg: "Thanks for your interest! We'll reach out shortly.",
      nameLabel: "Name",
    },
    sponsor: {
      title: "Support the Mission",
      desc: "Help us teach 5,000 students compounding. Leave your details and our core team will reach out.",
      hasMessage: true,
      btn: "Get Involved",
      successMsg: "Thanks for your support! We'll reach out shortly.",
      nameLabel: "Name",
    },
  }[type];

  const inputCls =
    "w-full rounded-xl border-2 border-border bg-background p-3.5 font-sans text-sm text-navy placeholder:text-muted-foreground focus:border-saffron focus:outline-none transition-colors duration-200";

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('leads').insert({
      type,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: config.hasMessage ? formData.message : null
    });

    if (error) {
      alert("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    if (type === "curriculum") {
      const { data } = supabase.storage.from("assets").getPublicUrl("curriculum.pdf");
      const a = document.createElement("a");
      a.href = data.publicUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-navy bg-white shadow-elevated max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-navy bg-warm-grey px-6 py-5">
          <h3
            className="text-xl font-bold text-navy"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {config.title}
          </h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-navy transition-all hover:bg-border hover:scale-110"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="mb-3 font-display text-2xl font-bold text-navy">
                {type === "curriculum" ? "Curriculum Found!" : "Request Received!"}
              </h4>
              <p className="mb-8 font-sans text-muted-foreground leading-relaxed">
                {config.successMsg}
              </p>
              <button
                onClick={onClose}
                className="group relative inline-flex w-full items-center justify-center font-sans font-bold uppercase tracking-widest"
              >
                <span className="absolute inset-0 border border-navy bg-navy transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                <span className="relative w-full border-2 border-navy bg-white px-6 py-4 text-navy transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Close
                </span>
              </button>
            </div>
          ) : (
            <>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">{config.desc}</p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-navy">
                    {config.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className={inputCls}
                    placeholder="Ravi Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-navy">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    className={inputCls}
                    placeholder="ravi@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-navy">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    className={inputCls}
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                {config.hasMessage && (
                  <div>
                    <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-navy">
                      Message (Optional)
                    </label>
                    <textarea
                      className={`${inputCls} min-h-[100px] resize-none`}
                      placeholder="Tell us more about your interest..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative mt-6 inline-flex w-full items-center justify-center font-sans font-bold uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 border border-navy bg-navy transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                  <span className="relative w-full border-2 border-navy bg-saffron px-6 py-4 text-navy transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    {loading ? "Processing..." : config.btn}
                  </span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
