import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Lock, LogOut, UploadCloud, Users, CheckCircle2, FileText, Plus, Calendar, MapPin, Trash2, X } from "lucide-react";

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
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showAddWorkshop, setShowAddWorkshop] = useState(false);
  const [addingWorkshop, setAddingWorkshop] = useState(false);
  const [newWorkshop, setNewWorkshop] = useState({
    title: "",
    venue: "",
    date: "",
    capacity: 50,
    priceINR: 999,
    status: "UPCOMING",
  });

  useEffect(() => {
    fetchRegistrations();
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    const { data } = await supabase.from("workshops").select("*").order("date", { ascending: false });
    if (data) setWorkshops(data);
  };

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

  const handleAddWorkshop = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingWorkshop(true);
    const { error } = await supabase.from("workshops").insert([
      {
        title: newWorkshop.title,
        venue: newWorkshop.venue,
        date: new Date(newWorkshop.date).toISOString(),
        capacity: newWorkshop.capacity,
        price_paise: Math.round(newWorkshop.priceINR * 100),
        status: newWorkshop.status,
      },
    ]);

    setAddingWorkshop(false);
    if (error) {
      alert("Failed to add workshop: " + error.message);
    } else {
      setShowAddWorkshop(false);
      fetchWorkshops();
      setNewWorkshop({
        title: "",
        venue: "",
        date: "",
        capacity: 50,
        priceINR: 999,
        status: "UPCOMING",
      });
    }
  };

  const handleDeleteWorkshop = async (id: string) => {
    if (!confirm("Are you sure? This will fail if there are registrations for this workshop.")) return;
    const { error } = await supabase.from("workshops").delete().eq("id", id);
    if (error) {
      alert("Failed to delete: " + error.message);
    } else {
      fetchWorkshops();
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

        {/* Main Content Area */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Workshop Management */}
          <div className="space-y-8 lg:col-span-4">
            {/* Workshop Creation Card */}
            <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Calendar className="h-5 w-5 text-saffron" /> Workshops
                </h3>
                <button
                  onClick={() => setShowAddWorkshop(!showAddWorkshop)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white transition-transform hover:scale-110"
                >
                  {showAddWorkshop ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </button>
              </div>

              {showAddWorkshop ? (
                <form onSubmit={handleAddWorkshop} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Title
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lucknow Pilot Batch"
                      value={newWorkshop.title}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })}
                      className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-2.5 text-sm focus:border-saffron focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Venue
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Gomti Nagar Hall"
                      value={newWorkshop.venue}
                      onChange={(e) => setNewWorkshop({ ...newWorkshop, venue: e.target.value })}
                      className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-2.5 text-sm focus:border-saffron focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Date & Time
                      </label>
                      <input
                        required
                        type="datetime-local"
                        value={newWorkshop.date}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })}
                        className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-2.5 text-sm focus:border-saffron focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Status
                      </label>
                      <select
                        value={newWorkshop.status}
                        onChange={(e) => setNewWorkshop({ ...newWorkshop, status: e.target.value })}
                        className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-2.5 text-sm focus:border-saffron focus:bg-white focus:outline-none"
                      >
                        <option value="UPCOMING">Upcoming</option>
                        <option value="SOLD_OUT">Sold Out</option>
                        <option value="COMPLETED">Completed</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Price (INR)
                      </label>
                      <input
                        required
                        type="number"
                        value={newWorkshop.priceINR}
                        onChange={(e) =>
                          setNewWorkshop({ ...newWorkshop, priceINR: parseInt(e.target.value) })
                        }
                        className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-2.5 text-sm focus:border-saffron focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Capacity
                      </label>
                      <input
                        required
                        type="number"
                        value={newWorkshop.capacity}
                        onChange={(e) =>
                          setNewWorkshop({ ...newWorkshop, capacity: parseInt(e.target.value) })
                        }
                        className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 p-2.5 text-sm focus:border-saffron focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                  <button
                    disabled={addingWorkshop}
                    type="submit"
                    className="w-full rounded-xl bg-saffron p-3 text-sm font-bold text-navy shadow-lg transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                  >
                    {addingWorkshop ? "Adding..." : "Save Workshop"}
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  {workshops.map((ws) => (
                    <div
                      key={ws.id}
                      className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-saffron/30 hover:bg-white"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-navy">{ws.title}</p>
                          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                            <MapPin className="h-3 w-3" /> {ws.venue}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                            <Calendar className="h-3 w-3" />{" "}
                            {new Date(ws.date).toLocaleDateString()} at{" "}
                            {new Date(ws.date).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteWorkshop(ws.id)}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <Trash2 className="h-4 w-4 text-red-400 hover:text-red-500" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-widest ${
                            ws.status === "UPCOMING"
                              ? "bg-green-100 text-green-700"
                              : ws.status === "SOLD_OUT"
                                ? "bg-red-100 text-red-700"
                                : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {ws.status}
                        </span>
                        <p className="font-display text-sm font-bold text-navy">
                          ₹{ws.price_paise / 100}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Existing File Uploader moved here */}
            <div className="flex flex-col items-start rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 rounded-xl bg-blue-50 p-3 text-blue-600">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Curriculum PDF</h3>
              <div className="relative w-full">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <div className="rounded-xl border-2 border-dashed border-slate-300 p-6 text-center transition-colors hover:border-saffron hover:bg-saffron/10">
                  {uploading ? (
                    <span className="font-bold text-saffron">Uploading...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2 text-xs font-bold text-slate-600">
                      <UploadCloud className="h-4 w-4" /> Replace PDF
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Data */}
          <div className="space-y-8 lg:col-span-8">
            {/* Stats Card */}
            <div className="flex items-center justify-between rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-green-50 p-4 text-green-600">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Total Enrollments</h3>
                  <p className="text-sm text-slate-500">Across all active workshops</p>
                </div>
              </div>
              <div
                className="font-display text-5xl font-bold text-[#1A2E44]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {registrations.length}
              </div>
            </div>

            {/* Registrations Table */}
            <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-sm">
              <div className="border-b-2 border-slate-100 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  Enrolled Students
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {registrations.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-500">
                          No registrations found
                        </td>
                      </tr>
                    ) : (
                      registrations.map((reg) => (
                        <tr key={reg.id} className="hover:bg-slate-50">
                          <td className="p-4 font-semibold">
                            {reg.student_name}
                            <span className="ml-1 text-[10px] text-slate-400">({reg.student_age}y)</span>
                          </td>
                          <td className="p-4">
                            <div className="font-bold">{reg.parent_name}</div>
                            <div className="text-[10px] text-slate-500">{reg.parent_email}</div>
                          </td>
                          <td className="p-4 text-xs font-bold text-slate-600">
                            {reg.workshops?.title}
                          </td>
                          <td className="p-4 font-bold text-navy">₹{reg.amount / 100}</td>
                          <td className="p-4">
                            <span
                              className={`rounded px-2 py-0.5 text-[10px] font-black ${
                                reg.status === "SUCCESS"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {reg.status}
                            </span>
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
      </div>
    </div>
  );
}
