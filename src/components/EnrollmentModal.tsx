import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { supabase } from "../lib/supabase";

function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function EnrollmentModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    student_name: "",
    student_age: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await loadRazorpay();
    if (!res) {
      setError("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    try {
      // 1. Call Supabase edge function to create order
      const { data: orderData, error: orderError } = await supabase.functions.invoke("create-order", {
        body: {
          amount: 99900, // ₹999
          ...formData,
          student_age: parseInt(formData.student_age),
        },
      });

      if (orderError || !orderData) throw new Error(orderError?.message || "Failed to create order");

      // 2. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
        amount: 99900,
        currency: "INR",
        name: "Artha Gyaan",
        description: "Financial Literacy Workshop Enrollment",
        order_id: orderData.order_id,
        handler: async function (response: any) {
          // 3. Verify Payment
          const { data: verifyData, error: verifyError } = await supabase.functions.invoke("verify-payment", {
            body: {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              registration_id: orderData.registration_id,
            },
          });

          if (verifyError || !verifyData?.success) {
            setError("Payment verification failed. Please contact support.");
          } else {
            setSuccess(true);
          }
        },
        prefill: {
          name: formData.parent_name,
          email: formData.parent_email,
          contact: formData.parent_phone,
        },
        theme: {
          color: "#ED8936", // Saffron color
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        setError(`Payment failed: ${response.error.description}`);
      });
      
      paymentObject.open();

    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center justify-center p-6 gap-4">
            <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="text-2xl font-bold text-navy">Enrollment Confirmed!</DialogTitle>
            <DialogDescription className="text-base">
              Thank you, {formData.parent_name}. Your payment was successful. We have sent the workshop joining details to {formData.parent_email}.
            </DialogDescription>
            <Button onClick={() => onOpenChange(false)} className="mt-4 bg-navy hover:bg-navy/90 text-white w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-navy">Secure Your Seat</DialogTitle>
          <DialogDescription>
            Complete the form below to enroll in the upcoming pilot batch for ₹999.
          </DialogDescription>
        </DialogHeader>
        
        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handlePayment} className="flex flex-col gap-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="parent_name">Parent Name <span className="text-red-500">*</span></Label>
            <Input id="parent_name" required value={formData.parent_name} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parent_email">Email <span className="text-red-500">*</span></Label>
              <Input id="parent_email" type="email" required value={formData.parent_email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parent_phone">Phone (WhatsApp) <span className="text-red-500">*</span></Label>
              <Input id="parent_phone" type="tel" required value={formData.parent_phone} onChange={handleChange} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="student_name">Student Name</Label>
              <Input id="student_name" value={formData.student_name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student_age">Student Age <span className="text-red-500">*</span></Label>
              <Input id="student_age" type="number" min="10" max="25" required value={formData.student_age} onChange={handleChange} />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="w-full mt-4 bg-saffron hover:bg-saffron/90 text-navy font-bold text-base h-12">
            {loading ? "Processing..." : "Pay ₹999 via Razorpay"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
