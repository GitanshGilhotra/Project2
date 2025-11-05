import React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/effects/BackgroundGradientAnimation";
import { GradientCard } from "@/components/effects/Cards";
import { FloatingDock } from "@/components/effects/FloatingDock";
import { isAuthenticated } from "@/lib/auth";

export default function Home() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  const dockItems = [
    { icon: "📊", label: "Dashboard", path: "/dashboard" },
    { icon: "✨", label: "Effects", path: "/effects" },
    { icon: "📈", label: "Analytics", path: "/analytics" },
    ...(authenticated ? [] : [{ icon: "🚀", label: "Login", path: "/login" }]),
  ];

  return (
    <BackgroundGradientAnimation>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Modern UI Effects & Dashboard
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            A comprehensive collection of beautiful, interactive CSS effects and
            a fully functional dashboard with authentication, graphs, and
            analytics.
          </p>
          <p className="text-lg text-slate-400 mb-12">
            Built with React, Vite, TypeScript, and Tailwind CSS. No heavy
            animation libraries required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {authenticated ? (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={() => navigate("/effects")}
                  className="px-8 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Explore Effects
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/effects")}
                  className="px-8 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  View Effects
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GradientCard gradient="from-blue-500 to-cyan-600" className="p-6">
              <h2 className="text-2xl font-bold mb-3">✨ Effects</h2>
              <p className="text-sm">
                Beautiful UI effects including background beams, aurora
                animations, card spotlights, and more—all built with pure CSS
                and Canvas.
              </p>
            </GradientCard>
            <GradientCard
              gradient="from-purple-500 to-pink-600"
              className="p-6"
            >
              <h2 className="text-2xl font-bold mb-3">🔐 Authentication</h2>
              <p className="text-sm">
                Secure login system with localStorage. Register new accounts or
                use demo credentials to explore the full application.
              </p>
            </GradientCard>
            <GradientCard
              gradient="from-green-500 to-emerald-600"
              className="p-6"
            >
              <h2 className="text-2xl font-bold mb-3">📊 Analytics</h2>
              <p className="text-sm">
                Comprehensive dashboard with real-time charts, graphs, and
                analytics powered by Recharts for data visualization.
              </p>
            </GradientCard>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">
              Features Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Background Beams with Collision",
                "Aurora Background Animation",
                "Card Spotlight Effect",
                "Canvas Reveal Effect",
                "Evervault Card",
                "Background Gradient Animation",
                "Floating Dock Navigation",
                "Resizable Navbar",
                "Stateful Button",
                "Multiple Loaders",
                "Glass Morphism Cards",
                "Interactive Cards",
                "User Authentication",
                "Revenue & Analytics Charts",
                "Device Distribution Pie Chart",
                "User Metrics Bar Chart",
                "Traffic Area Chart",
                "Conversion Line Chart",
                "Scatter Plot Analytics",
                "Responsive Design",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </BackgroundGradientAnimation>
  );
}
