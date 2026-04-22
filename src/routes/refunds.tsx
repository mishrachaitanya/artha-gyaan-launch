import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/refunds")({
  component: RefundsPage,
});

function RefundsPage() {
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
          Refund & Cancellation Policy
        </h1>
        <div className="space-y-6 font-sans text-foreground/80">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>

          <p>
            At ArthGyaan, we operate with a limited batch size to ensure the highest quality of education and personalized attention for every student. Because seats are extremely limited, last-minute cancellations prevent other eager students from participating.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">1. Cancellation Policy</h2>
          <p>
            You may request to cancel your enrollment up to <strong>24 hours before the scheduled start time</strong> of the workshop. Cancellations made prior to this 24-hour window will be eligible for a full refund or a free transfer to a future batch (subject to availability).
          </p>
          <p>
            Cancellations made within 24 hours of the workshop start time will not be eligible for a refund.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">2. Refund Process</h2>
          <p>
            If you meet the cancellation criteria and request a refund:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Refunds will be processed back to the original payment method.</li>
            <li>Please allow 5-7 business days for the refunded amount to reflect in your bank account or credit card statement, depending on your bank's processing times.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">3. Transfers</h2>
          <p>
            If you cannot attend but wish to transfer the seat to another student (who meets the 16-18 age criteria), please contact us at least 12 hours before the workshop. We will accommodate such requests wherever possible without any additional fee.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">4. Workshop Cancellation by Us</h2>
          <p>
            In the rare event that ArthGyaan must postpone or cancel a workshop due to unforeseen circumstances (e.g., instructor emergency or technical issues), all enrolled students will be offered the choice of a full immediate refund or guaranteed placement in the next available batch.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">5. Contact</h2>
          <p>
            To request a cancellation, refund, or transfer, please immediately email our support team at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> support@arth-gyaan.com<br/>
            Please include your registration details and transaction ID in the email.
          </p>
        </div>
      </main>
    </div>
  );
}
