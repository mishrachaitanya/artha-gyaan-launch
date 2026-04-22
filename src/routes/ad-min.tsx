import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Lock, LogOut, UploadCloud, Users, CheckCircle2, FileText } from "lucide-react";

export const Route = createFileRoute("/ad-min")({
  component: AdminRoute,
});

export function AdminRoute() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F9F7F5]">
        <div className="font-sans font-bold uppercase tracking-widest text-[#1A2E44]">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return <Login />;
  }

  return <Dashboard onLogout={() => supabase.auth.signOut()} />;
}

/* ═══════════════════════════════════════════
   LOGIN COMPONENT
═══════════════════════════════════════════ */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9F7F5] p-4 text-[#1A2E44]">
      <div className="w-full max-w-md rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A2E44]">
            <Lock className="h-8 w-8 text-saffron" />
          </div>
        </div>
        <h2
          className="mb-8 text-center text-2xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Admin Access
        </h2>
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-500">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-slate-200 p-3 focus:border-saffron focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-slate-200 p-3 focus:border-saffron focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group relative mt-2 inline-flex w-full items-center justify-center font-sans font-bold uppercase tracking-widest disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="absolute inset-0 translate-y-1.5 translate-x-1.5 border border-navy bg-navy transition-transform duration-300 group-hover:translate-x-1 whitespace-nowrap group-hover:translate-y-1" />
            <span className="relative w-full border-2 border-navy bg-saffron px-6 py-4 text-navy transition-transform duration-300">
              {loading ? "Signing in..." : "Sign In"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   DASHBOARD COMPONENT
═══════════════════════════════════════════ */
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    const { data } = await supabase
      .from("registrations")
      .select("*, workshops(title)")
      .order("created_at", { ascending: false });
    if (data) setRegistrations(data);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setUploading(true);
    setUploadSuccess(false);

    const { error } = await supabase.storage.from("assets").upload("curriculum.pdf", file, {
      upsert: true,
      cacheControl: "3600",
    });

    setUploading(false);
    if (error) {
      alert("Failed to upload: " + error.message);
    } else {
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] p-6 text-[#1A2E44] md:p-12">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1
              className="font-display text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Admin Dashboard
            </h1>
            <p className="text-slate-500">Manage curriculum assets and view enrolled students.</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 rounded-full border-2 border-[#1A2E44] bg-[#1A2E44] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* File Uploader */}
          <div className="flex flex-col items-start rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 rounded-xl bg-blue-50 p-3 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Curriculum PDF</h3>
            <p className="mb-6 text-sm text-slate-500">
              Upload the latest PDF file to be downloaded by parents when they submit the syllabus
              form.
            </p>

            <div className="relative w-full">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                disabled={uploading}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
              />
              <div className="rounded-xl border-2 border-dashed border-slate-300 p-6 text-center transition-colors hover:border-saffron hover:bg-saffron/10">
                {uploading ? (
                  <span className="font-bold text-saffron">Uploading...</span>
                ) : uploadSuccess ? (
                  <span className="flex items-center justify-center gap-2 font-bold text-green-600">
                    <CheckCircle2 className="h-4 w-4" /> Uploaded Successfully
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 font-bold text-slate-600">
                    <UploadCloud className="h-4 w-4" /> Click to Replace PDF
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col items-start rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 rounded-xl bg-green-50 p-3 text-green-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Total Enrollments</h3>
            <p className="mb-6 text-sm text-slate-500">
              Overview of successful and pending transactions for workshops.
            </p>
            <div
              className="font-display text-5xl font-bold text-[#1A2E44]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {registrations.length}
            </div>
          </div>
        </div>

        {/* Registrations Table */}
        <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-sm">
          <div className="border-b-2 border-slate-100 p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              Registered Candidates
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <th className="p-4">Student</th>
                  <th className="p-4">Parent</th>
                  <th className="p-4">Workshop</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500">
                      No registrations found
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-slate-50">
                      <td className="p-4 font-semibold">
                        {reg.student_name}{" "}
                        <span className="ml-1 text-xs font-normal text-slate-400">
                          ({reg.student_age}yo)
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold">{reg.parent_name}</div>
                        <div className="text-xs text-slate-500">{reg.parent_email}</div>
                        <div className="text-xs text-slate-500">{reg.parent_phone}</div>
                      </td>
                      <td className="p-4 font-semibold text-slate-600">
                        {reg.workshops?.title}
                      </td>
                      <td className="p-4 font-bold text-navy">
                        ₹{(reg.amount / 100).toFixed(2)}
                      </td>
                      <td className="p-4">
                        <span
                          className={`rounded px-2 flex inline-block w-fit py-1 text-xs font-bold ${
                            reg.status === "SUCCESS"
                              ? "bg-green-100 text-green-700"
                              : reg.status === "PENDING"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {reg.status}
                        </span>
                      </td>
                      <td className="p-4 font-medium text-slate-500 whitespace-nowrap">
                        {new Date(reg.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
