import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <div className="space-y-6 font-sans text-foreground/80">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>

          <p>
            Welcome to ArthGyaan. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about our policy, or our practices with regards to your personal 
            information, please contact us at <strong>support@arth-gyaan.com</strong>.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when registering for the 
            workshop expressing an interest in obtaining information about us or our products and services, 
            or otherwise contacting us. The personal information that we collect depends on the context of your 
            interactions with us and the website, and may include the following:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Name and Contact Data (such as email address, phone number)</li>
            <li>Payment Data (processed securely by our payment gateway providers; we do not store full credit card numbers)</li>
            <li>Student Information (such as age or grade level, for cohort organization)</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To facilitate workshop enrollment and communication</li>
            <li>To send administrative information to you (e.g., changes to our terms, conditions, and policies)</li>
            <li>To fulfill and manage your purchases and payments</li>
            <li>To request feedback and to contact you about your use of our website</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">3. Sharing Your Information</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. 
            Specifically, we may need to process your data or share your personal information with third-party service providers (such as payment processors) required for workshop registration.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">4. Data Retention and Security</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. 
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">5. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <strong>support@arth-gyaan.com</strong> or by post to:
          </p>
          <p className="mt-2">
            <strong>ArthGyaan</strong><br/>
            Lucknow, Uttar Pradesh<br/>
            India
          </p>
        </div>
      </main>
    </div>
  );
}
