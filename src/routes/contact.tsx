import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
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
        <div className="rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
            Contact Us
          </h1>
          <p className="mt-4 font-sans text-muted-foreground">
            Have questions about the workshop? Our team is ready to help you ensure ArthGyaan is the right fit for your child.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-saffron">General & Support</h3>
              <p className="mt-3 font-sans text-navy font-medium">
                Email Customer Support
              </p>
              <a href="mailto:support@arth-gyaan.com" className="mt-1 block font-sans text-muted-foreground hover:text-navy transition-colors">
                support@arth-gyaan.com
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                We generally reply within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-saffron">Headquarters</h3>
              <p className="mt-3 font-sans text-navy font-medium">
                ArthGyaan
              </p>
              <address className="mt-1 block font-sans not-italic text-muted-foreground">
                Lucknow<br />
                Uttar Pradesh<br />
                India
              </address>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-saffron">Grievance Officer</h3>
            <p className="mt-3 font-sans text-muted-foreground text-sm">
              In accordance with the Information Technology Act, 2000 and rules made there under, the contact details of the Grievance Officer are provided below.
            </p>
            <p className="mt-3 font-sans text-navy font-medium">
              Grievance Officer
            </p>
            <a href="mailto:support@arth-gyaan.com" className="mt-1 block font-sans text-muted-foreground hover:text-navy transition-colors">
              support@arth-gyaan.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
