import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlassCard, MinimalCard } from "@/components/effects/Cards";
import { FloatingDock } from "@/components/effects/FloatingDock";
import { ResizableNavbar } from "@/components/effects/ResizableNavbar";

export default function Settings() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Effects", href: "/effects" },
    { label: "Analytics", href: "/analytics" },
  ];

  const dockItems = [
    { icon: "📊", label: "Dashboard", path: "/dashboard" },
    { icon: "✨", label: "Effects", path: "/effects" },
    { icon: "📈", label: "Analytics", path: "/analytics" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
    { icon: "🚪", label: "Logout", path: "/", onClick: handleLogout },
  ];

  return (
    <AuroraBackground>
      <ResizableNavbar items={navItems} />
      <div className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Settings ⚙️</h1>
            <p className="text-slate-400">
              Manage your account and application preferences
            </p>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Account Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-sm">Username</label>
                <p className="text-white text-lg font-semibold">
                  {user.username}
                </p>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Email Address</label>
                <p className="text-white text-lg font-semibold">{user.email}</p>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Account Status</label>
                <p className="text-green-400 text-lg font-semibold">✓ Active</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <h3 className="text-white font-semibold">Dark Mode</h3>
                  <p className="text-slate-400 text-sm">Enable dark theme</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    darkMode
                      ? "bg-blue-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {darkMode ? "On" : "Off"}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <h3 className="text-white font-semibold">Notifications</h3>
                  <p className="text-slate-400 text-sm">
                    Receive email updates
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    notifications
                      ? "bg-blue-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {notifications ? "On" : "Off"}
                </button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Application Info
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-slate-400">
                <span>Version</span>
                <span className="text-white font-semibold">1.0.0</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 border-t border-white/10 pt-3">
                <span>Build</span>
                <span className="text-white font-semibold">Production</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 border-t border-white/10 pt-3">
                <span>Last Updated</span>
                <span className="text-white font-semibold">Today</span>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-4">
            <button
              onClick={handleLogout}
              className="w-full px-6 py-3 rounded-lg bg-red-500/20 text-red-400 font-semibold hover:bg-red-500/30 transition-colors border border-red-500/30"
            >
              Logout
            </button>
            <p className="text-center text-slate-500 text-sm">
              All your data is stored locally in your browser
            </p>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </AuroraBackground>
  );
}
