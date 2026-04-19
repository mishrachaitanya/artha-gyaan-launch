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
  X,
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

export type FormType = "curriculum" | "partner" | "sponsor";

function ArthaLanding() {
  const [formType, setFormType] = useState<FormType | null>(null);

  return (
    <div id="top" className="bg-background">
      <ArthaNav />
      <Hero onOpenForm={() => setFormType("curriculum")} />
      <Problem />
      <EmotionalHook />
      <WhyTheseYears />
      <Curriculum />
      <WorkshopDetails />
      <Credibility />
      <Traction />
      <FAQ />
      <FinalCTA onOpenForm={setFormType} />
      <Footer />
      {formType && <ContactFormModal type={formType} onClose={() => setFormType(null)} />}
    </div>
  );
}

/* 1. HERO */
function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50" />
      <div className="container-page relative z-10 grid items-center gap-12 pt-8 pb-16 md:grid-cols-2 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28">
        <Reveal>
          <div className="pr-4 lg:pr-12">
            <span className="inline-block border-b border-navy pb-1 text-xs font-bold uppercase tracking-widest text-navy">
              By Namaste Stocks
            </span>
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] text-navy md:text-5xl lg:text-[4rem] lg:leading-[1.05]">
              Your child will earn lakhs. <br className="hidden md:block" />
              <span className="relative inline-block text-navy">
                <span className="relative z-10">Who will teach them</span>
              </span>{" "}
              <span className="bg-saffron px-2 text-white">what to do with it?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Artha Gyaan is a 6-hour financial literacy workshop for students aged 16–18. Built by real investors with{" "}
              <strong className="font-bold text-navy">30+ years of experience</strong> and{" "}
              <strong className="font-bold text-navy">₹200 Cr+ under management</strong>.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <a
                href="#enroll"
                className="group relative inline-flex items-center justify-center font-bold uppercase tracking-widest text-navy"
              >
                <span className="absolute inset-0 border border-navy bg-navy transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                <span className="relative border-2 border-navy bg-saffron px-8 py-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Enroll Now — ₹999
                </span>
              </a>
              <button
                onClick={onOpenForm}
                className="group relative inline-flex w-full overflow-hidden sm:w-auto items-center justify-center font-bold uppercase tracking-widest text-navy text-left"
              >
                <span className="absolute inset-0 border border-border bg-warm-grey transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                <span className="relative w-full border-2 border-border bg-white px-8 py-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 text-center whitespace-nowrap">
                  View Curriculum
                </span>
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2 text-navy"><CheckCircle2 className="h-4 w-4 text-saffron" /> 30+ Years Experience</span>
              <span className="flex items-center gap-2 text-navy"><CheckCircle2 className="h-4 w-4 text-saffron" /> Pilot Running in Lucknow</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="group relative mx-auto max-w-[500px] md:ml-auto md:mr-0">
            <div className="absolute -left-6 -top-6 h-full w-full border border-saffron md:-left-8 md:-top-8 transition-all duration-700 group-hover:-left-4 group-hover:-top-4 group-hover:border-navy" />
            <img
              src={heroImg}
              alt="Indian mother and teenage daughter learning together at home"
              width={1280}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-[1.02]"
            />
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
    { value: 27, suffix: "%", label: "Financially Literate", sub: "India's adults vs 42% globally." },
    { value: 16.7, suffix: "%", label: "Basic Grasp", sub: "Of Indian students surveyed.", decimals: 1 },
    { value: 42, suffix: "%", label: "Blocked from Investing", sub: "Driven by the knowledge gap." },
  ];
  return (
    <section className="border-t border-border bg-warm-grey py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Baseline Fact</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy md:text-5xl">
                India's schools teach calculus. <br />
                <span className="text-saffron">Not how money works.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                By the time most young adults learn about compounding, debt traps, or inflation, they've already made their first lasting financial mistake. We are creating a systemic disadvantage by delaying this education.
              </p>
            </div>
          </Reveal>
          
          <div className="flex flex-col">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors duration-300 hover:border-navy sm:grid-cols-[140px_1fr] sm:items-center">
                  <p className="text-4xl font-extrabold text-navy transition-transform duration-300 group-hover:-translate-y-1 md:text-5xl lg:text-6xl">
                    <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </p>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <p className="text-lg font-extrabold text-navy">{s.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="border-t border-navy" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. EMOTIONAL HOOK */
function EmotionalHook() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, var(--saffron) 0, transparent 70%)" }} />
      <div className="container-page relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-[3.5rem]">
              Every year without this knowledge is a year of <span className="text-saffron">compounding</span> your child will never get back.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Ages 16–18 are peak habit-forming years. The financial behaviors built now last a lifetime.
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
    { title: "Peak Habit Formation", desc: "Ages 16–18 are the narrow window when financial behaviors solidify before adulthood." },
    { title: "75% Behavioral Shift", desc: "Post-workshop studies show students move permanently from impulsive spending to intentional planning." },
    { title: "Removing the Fear Gap", desc: "42% of young Indians cite 'not knowing enough' as their #1 barrier to investing. We remove it." },
    { title: "Decades of Advantage", desc: "Starting at 16 vs 26 unlocks the mathematical reality of exponential compounding." },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
              Why 16 is the critical age.
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-12 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="group flex flex-col cursor-default">
                <span className="mb-4 font-mono text-sm font-bold text-saffron transition-all duration-300 group-hover:scale-125 group-hover:origin-left">0{i + 1}</span>
                <h3 className="text-xl font-extrabold text-navy transition-colors duration-300 group-hover:text-saffron">{it.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{it.desc}</p>
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
    { title: "Wealth Generation", desc: "How money grows in the real world, distinguishing between active income and passive wealth creation vehicles." },
    { title: "Power of Compounding", desc: "The mathematical backbone of long-term wealth, taught intuitively without confusing jargon." },
    { title: "Money Management", desc: "Strategic budgeting, intelligent saving frameworks, and recognizing predatory debt traps before they happen." },
    { title: "Goal-Based Investing", desc: "Tying financial vehicles directly to life goals—from buying a car to achieving total financial independence." },
  ];
  return (
    <section id="curriculum" className="bg-cream py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-24">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Syllabus</span>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy md:text-5xl">
                  6 hours. <br />
                  <span className="text-saffron">Skills that last a lifetime.</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Built by investment professionals managing ₹200 Cr+. Delivered in plain language. Zero textbook theory.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col lg:col-span-7">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="group grid cursor-default grid-cols-[auto_1fr] gap-6 border-b border-border py-8 transition-colors duration-300 hover:border-navy sm:gap-12 md:py-12">
                  <span className="font-mono text-4xl font-extrabold text-navy/20 transition-all duration-500 group-hover:scale-110 group-hover:text-saffron md:text-6xl">
                    0{i + 1}
                  </span>
                  <div className="transition-transform duration-500 group-hover:translate-x-3">
                    <h3 className="text-2xl font-extrabold text-navy md:text-3xl">{m.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{m.desc}</p>
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

/* 6. WORKSHOP DETAILS */
function WorkshopDetails() {
  const facts = [
    { label: "Duration", value: "3 Hours × 2 Days", sub: "6 hours total" },
    { label: "Fee", value: "₹999", sub: "per student" },
    { label: "Format", value: "In-Person", sub: "At coaching centers" },
    { label: "Batch Size", value: "25–50", sub: "students per session" },
    { label: "Who", value: "Aged 16–18", sub: "school students" },
  ];
  return (
    <section className="bg-background py-20 px-4">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-none border border-border bg-card">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col p-8 text-center sm:p-6 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{f.label}</p>
                <p className="mt-3 text-lg font-extrabold text-navy">{f.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{f.sub}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border bg-warm-grey p-6 text-center">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center bg-transparent border-b border-navy px-2 py-1 text-sm font-bold uppercase tracking-widest text-navy transition-colors hover:text-saffron hover:border-saffron"
            >
              Reserve Your Child's Seat →
            </a>
          </div>
        </div>
      </Reveal>
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
    { tag: "Live", title: "LDA Colony", desc: "Partner coaching center already on board and supporting the pilot." },
    { tag: "In Progress", title: "Running", desc: "Real students enrolled and learning at our partner study center." },
    { tag: "Validated", title: "Demand", desc: "Confirmed by overwhelmingly positive parent and student feedback." },
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
    <section className="bg-background py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 border-y border-border py-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div>
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Already in the field.</h2>
            </div>
          </Reveal>
          {milestones.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.1}>
              <div className="flex flex-col border-l border-border pl-6">
                <span className="text-xs font-bold uppercase tracking-widest text-saffron">{m.tag}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-[1fr_500px] lg:gap-16 items-center">
          <Reveal delay={0.2}>
            <div className="group relative cursor-default">
              <div className="absolute -left-6 -top-6 h-full w-full border border-border transition-all duration-700 group-hover:-left-4 group-hover:-top-4 group-hover:border-saffron" />
              <img
                src={classroomImg}
                alt="Indian students learning in a classroom"
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
          <div className="mt-16 sm:px-8 lg:mt-0 lg:px-0">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What Parents Say</span>
            </Reveal>
            <div className="mt-8 flex flex-col gap-12 divide-y divide-border">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <div className="pt-8 first:pt-0">
                    <p className="font-serif text-xl italic leading-snug text-navy md:text-2xl">
                      "{t.quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <img src={t.img} alt={t.name} width={40} height={40} loading="lazy" decoding="async" className="h-12 w-12 rounded-full object-cover grayscale" />
                      <div>
                        <p className="font-bold text-navy">{t.name}</p>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{t.role}</p>
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
function FinalCTA({ onOpenForm }: { onOpenForm: (t: FormType) => void }) {
  const paths = [
    { type: "curriculum" as const, title: "Enroll Your Child", price: "₹999", desc: "Reserve a seat in the next workshop.", cta: "Enroll Now", primary: true },
    { type: "partner" as const, title: "Partner With Us", price: "Institutions", desc: "Bring Artha Gyaan to your school.", cta: "Become a Partner" },
    { type: "sponsor" as const, title: "Support the Mission", price: "Sponsor", desc: "Help us reach 5,000 students this summer.", cta: "Get Involved" },
  ];
  return (
    <section id="enroll" className="bg-navy py-20 text-white md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-[3.5rem]">
              Give your child the one advantage money can actually buy — <span className="text-saffron">the knowledge of how to use it.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-20 grid border-t border-white/20 sm:grid-cols-3 sm:divide-x sm:divide-white/20">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex flex-col p-8 md:p-12">
                <p className={`text-xl font-bold ${p.primary ? "text-saffron" : "text-white"}`}>
                  {p.price}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white/90">
                  {p.title}
                </h3>
                <p className="mt-4 flex-grow text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => onOpenForm(p.type)}
                    className="group relative inline-flex items-center justify-center font-bold uppercase tracking-widest text-left"
                  >
                    <span className={`absolute inset-0 border ${p.primary ? "border-navy bg-navy" : "border-saffron bg-saffron"} transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5`}></span>
                    <span className={`relative border-2 ${p.primary ? "border-navy bg-saffron text-navy" : "border-saffron bg-transparent text-white"} px-6 py-3 text-sm transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1`}>
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

function ContactFormModal({ type, onClose }: { type: FormType; onClose: () => void }) {
  const config = {
    curriculum: {
      title: "Get the Syllabus",
      desc: "Enter your details below and we'll instantly send you the comprehensive 6-hour curriculum breakdown.",
      hasMessage: false,
      btn: "Download Curriculum",
      successMsg: "Curriculum access sent to your email!",
      nameLabel: "Parent/Student Name"
    },
    partner: {
      title: "Become a Partner",
      desc: "Interested in bringing Artha Gyaan to your institution? Leave your details and we'll be in touch.",
      hasMessage: true,
      btn: "Request Partnership",
      successMsg: "Thanks for your interest! We'll reach out shortly.",
      nameLabel: "Name"
    },
    sponsor: {
      title: "Support the Mission",
      desc: "Help us teach 5,000 students compounding. Leave your details and our core team will reach out.",
      hasMessage: true,
      btn: "Get Involved",
      successMsg: "Thanks for your support! We'll reach out shortly.",
      nameLabel: "Name"
    }
  }[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white border-2 border-navy max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 z-10 border-b-2 border-navy bg-warm-grey px-6 py-4">
          <h3 className="text-xl font-extrabold text-navy">{config.title}</h3>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-navy transition-transform hover:scale-110 bg-warm-grey"
            aria-label="Close"
          >
            <X className="h-6 w-6" strokeWidth={2.5} />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {config.desc}
          </p>
          <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert(config.successMsg); }}>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy">{config.nameLabel}</label>
              <input required type="text" className="w-full border-2 border-border bg-background p-3 text-sm focus:border-navy focus:outline-none transition-colors" placeholder={type === "curriculum" ? "Ravi Kumar" : "Your Name"} />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy">Email Address</label>
              <input required type="email" className="w-full border-2 border-border bg-background p-3 text-sm focus:border-navy focus:outline-none transition-colors" placeholder="ravi@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy">Phone Number</label>
              <input required type="tel" className="w-full border-2 border-border bg-background p-3 text-sm focus:border-navy focus:outline-none transition-colors" placeholder="+91 98765 43210" />
            </div>
            {config.hasMessage && (
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-navy">Message (Optional)</label>
                <textarea className="w-full min-h-[100px] border-2 border-border bg-background p-3 text-sm focus:border-navy focus:outline-none transition-colors" placeholder="Tell us more about your interest..."></textarea>
              </div>
            )}
            <button
              type="submit"
              className="group relative mt-8 inline-flex w-full items-center justify-center font-bold uppercase tracking-widest"
            >
              <span className="absolute inset-0 border border-navy bg-navy transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
              <span className="relative w-full border-2 border-navy bg-saffron px-6 py-4 text-navy transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                {config.btn}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
