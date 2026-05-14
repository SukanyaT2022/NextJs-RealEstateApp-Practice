"use client";

import { useState } from "react";

// ---- ICONS ----
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
  </svg>
);

type Tab = "profile" | "security" | "notifications" | "privacy";

// ---- TOGGLE ----
function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-violet-500" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

// ---- FIELD ----
function Field({
  label,
  value,
  type = "text",
  editable = true,
  onChange,
}: {
  label: string;
  value: string;
  type?: string;
  editable?: boolean;
  onChange?: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
        {label}
      </label>
      {editable ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm
            placeholder-slate-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100
            transition-all duration-200 hover:border-slate-300 shadow-sm"
        />
      ) : (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-400 text-sm select-none shadow-sm">
          {value}
        </div>
      )}
    </div>
  );
}

// ---- SAVE BUTTON ----
function SaveButton({ onClick, saved }: { onClick: () => void; saved: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
        saved
          ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
          : "bg-violet-500 hover:bg-violet-600 text-white shadow-md shadow-violet-200 hover:shadow-violet-300"
      }`}
    >
      {saved ? (
        <>
          <IconCheck />
          Saved
        </>
      ) : (
        "Save changes"
      )}
    </button>
  );
}

// ---- MAIN PAGE ----
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [saved, setSaved] = useState(false);

  const [firstName, setFirstName] = useState("Henry");
  const [lastName, setLastName] = useState("S");
  const [username, setUsername] = useState("henrys");
  const [email, setEmail] = useState("henry@gmail.com");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionAlerts, setSessionAlerts] = useState(true);

  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  const [publicProfile, setPublicProfile] = useState(false);
  const [dataSharing, setDataSharing] = useState(false);
  const [activityTracking, setActivityTracking] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "profile", label: "Profile", icon: <IconUser /> },
    { id: "security", label: "Security", icon: <IconLock /> },
    { id: "notifications", label: "Notifications", icon: <IconBell /> },
    { id: "privacy", label: "Privacy", icon: <IconShield /> },
  ];

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400" />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-widest text-violet-500 uppercase font-semibold mb-2">Account</p>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your profile, security, and preferences.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-52 flex-shrink-0">
            <nav className="flex flex-row md:flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left w-full ${
                    activeTab === tab.id
                      ? "bg-white text-violet-600 border border-violet-100 shadow-sm"
                      : "text-slate-500 hover:text-slate-700 hover:bg-white/70"
                  }`}
                >
                  <span className={activeTab === tab.id ? "text-violet-500" : "text-slate-400"}>
                    {tab.icon}
                  </span>
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Content panel */}
          <main className="flex-1 min-w-0">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm">

              {/* ---- PROFILE ---- */}
              {activeTab === "profile" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Profile Information</h2>
                    <p className="text-slate-400 text-sm mt-1">Update your personal details.</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="relative group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-md shadow-violet-200">
                        {firstName[0]?.toUpperCase()}
                      </div>
                      <button className="absolute inset-0 rounded-2xl bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <IconCamera />
                      </button>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{firstName} {lastName}</p>
                      <p className="text-xs text-slate-400 mt-0.5">@{username}</p>
                      <button className="text-xs text-violet-500 hover:text-violet-600 mt-1.5 transition-colors font-medium">
                        Change avatar →
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="First name" value={firstName} onChange={setFirstName} />
                    <Field label="Last name" value={lastName} onChange={setLastName} />
                    <Field label="Username" value={username} onChange={setUsername} />
                    <Field label="Email address" value={email} type="email" onChange={setEmail} />
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Field label="Member ID" value="69f211d59f396e872430a33b" editable={false} />
                    <p className="text-xs text-slate-400 mt-2">Your unique identifier. Cannot be changed.</p>
                  </div>

                  <div className="flex justify-end">
                    <SaveButton onClick={handleSave} saved={saved} />
                  </div>
                </div>
              )}

              {/* ---- SECURITY ---- */}
              {activeTab === "security" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Security</h2>
                    <p className="text-slate-400 text-sm mt-1">Manage your password and account protection.</p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Change Password</h3>
                    <Field label="Current password" value={currentPassword} type="password" onChange={setCurrentPassword} />
                    <Field label="New password" value={newPassword} type="password" onChange={setNewPassword} />
                    <Field label="Confirm new password" value={confirmPassword} type="password" onChange={setConfirmPassword} />
                  </div>

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Protection</h3>
                    {[
                      { label: "Two-factor authentication", desc: "Add an extra layer of security to your account.", value: twoFactor, toggle: () => setTwoFactor(!twoFactor) },
                      { label: "Login alerts", desc: "Get notified of new sign-ins to your account.", value: sessionAlerts, toggle: () => setSessionAlerts(!sessionAlerts) },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="text-sm font-medium text-slate-700">{item.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                        <Toggle enabled={item.value} onChange={item.toggle} />
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">Danger Zone</h3>
                    <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200">
                      Delete account
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <SaveButton onClick={handleSave} saved={saved} />
                  </div>
                </div>
              )}

              {/* ---- NOTIFICATIONS ---- */}
              {activeTab === "notifications" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Notifications</h2>
                    <p className="text-slate-400 text-sm mt-1">Choose how and when you hear from us.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Email notifications", desc: "Receive updates and alerts via email.", value: emailNotifs, toggle: () => setEmailNotifs(!emailNotifs) },
                      { label: "Push notifications", desc: "Get real-time alerts on your device.", value: pushNotifs, toggle: () => setPushNotifs(!pushNotifs) },
                      { label: "Weekly digest", desc: "A summary of activity delivered every Monday.", value: weeklyDigest, toggle: () => setWeeklyDigest(!weeklyDigest) },
                      { label: "Security alerts", desc: "Critical updates about your account security.", value: securityAlerts, toggle: () => setSecurityAlerts(!securityAlerts) },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="text-sm font-medium text-slate-700">{item.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                        <Toggle enabled={item.value} onChange={item.toggle} />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <SaveButton onClick={handleSave} saved={saved} />
                  </div>
                </div>
              )}

              {/* ---- PRIVACY ---- */}
              {activeTab === "privacy" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Privacy</h2>
                    <p className="text-slate-400 text-sm mt-1">Control your data and visibility settings.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Public profile", desc: "Allow others to find and view your profile.", value: publicProfile, toggle: () => setPublicProfile(!publicProfile) },
                      { label: "Data sharing", desc: "Share anonymized usage data to improve the service.", value: dataSharing, toggle: () => setDataSharing(!dataSharing) },
                      { label: "Activity tracking", desc: "Track your activity for personalized recommendations.", value: activityTracking, toggle: () => setActivityTracking(!activityTracking) },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="text-sm font-medium text-slate-700">{item.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                        <Toggle enabled={item.value} onChange={item.toggle} />
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Data export</h3>
                    <p className="text-sm text-slate-400 mb-4">Download a copy of all your account data.</p>
                    <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm">
                      Request data export
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <SaveButton onClick={handleSave} saved={saved} />
                  </div>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}