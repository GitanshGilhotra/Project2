import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";
import { GlassCard } from "@/components/effects/Cards";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ResizableNavbar items={navItems} />
      <div className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-slate-400">
              Manage your account and application preferences
            </p>
          </div>

          <GlassCard className="bg-slate-800/50 backdrop-blur border border-slate-700/50 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Account Information
            </h2>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-700/50">
                <label className="text-slate-400 text-sm font-medium">
                  Username
                </label>
                <p className="text-white text-lg font-semibold mt-2">
                  {user.username}
                </p>
              </div>
              <div className="pb-6 border-b border-slate-700/50">
                <label className="text-slate-400 text-sm font-medium">
                  Email Address
                </label>
                <p className="text-white text-lg font-semibold mt-2">
                  {user.email}
                </p>
              </div>
              <div>
                <label className="text-slate-400 text-sm font-medium">
                  Account Status
                </label>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-green-400 font-semibold">Active</span>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="bg-slate-800/50 backdrop-blur border border-slate-700/50 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-slate-600/50">
                <div>
                  <h3 className="text-white font-semibold">Dark Mode</h3>
                  <p className="text-slate-400 text-sm">
                    Enable dark theme for the interface
                  </p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    darkMode
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-600 text-slate-300"
                  }`}
                >
                  {darkMode ? "On" : "Off"}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-slate-600/50">
                <div>
                  <h3 className="text-white font-semibold">Notifications</h3>
                  <p className="text-slate-400 text-sm">
                    Receive email updates and alerts
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    notifications
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-600 text-slate-300"
                  }`}
                >
                  {notifications ? "On" : "Off"}
                </button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="bg-slate-800/50 backdrop-blur border border-slate-700/50 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Application Info
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
                <span className="text-slate-400">Version</span>
                <span className="text-white font-semibold">1.0.0</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
                <span className="text-slate-400">Build</span>
                <span className="text-white font-semibold">Production</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
                <span className="text-slate-400">Last Updated</span>
                <span className="text-white font-semibold">Today</span>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-4">
            <button
              onClick={handleLogout}
              className="w-full px-6 py-4 rounded-lg bg-red-500/20 text-red-400 font-semibold hover:bg-red-500/30 transition-colors border border-red-500/30 text-base"
            >
              Sign Out
            </button>
            <p className="text-center text-slate-500 text-sm">
              All your data is stored securely in local storage
            </p>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </div>
  );
}
