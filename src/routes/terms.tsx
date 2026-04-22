import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white px-6 py-4">
        <div className="container-page mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy font-bold text-saffron"
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
          </Link>
          <Link to="/" className="font-sans text-sm font-semibold text-navy hover:text-saffron">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main className="container-page mx-auto py-16 px-6 max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
          Terms & Conditions
        </h1>
        <div className="space-y-6 font-sans text-foreground/80">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>

          <p>
            Welcome to ArthGyaan. These terms and conditions outline the rules and regulations for the use of our website and enrollment in our workshops. 
            By accessing this website and enrolling in our programs, we assume you accept these terms and conditions in full. 
            Do not continue to use ArthGyaan's website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">1. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, ArthGyaan and/or its licensors own the intellectual property rights for all material on ArthGyaan. 
            All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Republish material, curriculum, or workshop content from ArthGyaan</li>
            <li>Sell, rent, or sub-license material from ArthGyaan</li>
            <li>Reproduce, duplicate, or copy material from ArthGyaan for commercial purposes</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">2. Workshop Enrollment</h2>
          <p>
            Enrollment in the ArthGyaan workshop is subject to seat availability. The workshop is specifically designed for students aged 16-18. 
            We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">3. Code of Conduct</h2>
          <p>
            Students enrolled in the workshop are expected to maintain professional and respectful behavior. Any form of harassment, disruption, or inappropriate conduct may result in immediate dismissal from the workshop without a refund.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">4. Limitation of Liability</h2>
          <p>
            The information provided in the ArthGyaan workshop is for educational and informational purposes only and does not constitute financial, investment, or legal advice. 
            Neither ArthGyaan nor its instructors shall be held liable for any financial decisions made by students or their parents based on the educational content provided.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">5. Contact Information</h2>
          <p>
            If you have any questions regarding our Terms and Conditions, please contact us at:
          </p>
          <p className="mt-2">
            <strong>ArthGyaan</strong><br/>
            Lucknow, Uttar Pradesh<br/>
            Email: support@arth-gyaan.com
          </p>
        </div>
      </main>
    </div>
  );
}
