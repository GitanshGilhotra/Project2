import React from "react";
import { useNavigate } from "react-router-dom";
import { GradientCard } from "@/components/effects/Cards";
import { isAuthenticated } from "@/lib/auth";

export default function Home() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 backdrop-blur-sm border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="text-xl font-bold text-white">Dashboard</span>
          </div>
          {authenticated ? (
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
            >
              Go to Dashboard
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
            >
              Sign In
            </button>
          )}
        </nav>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Modern Dashboard with <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Premium UI Effects
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            A professional, production-ready dashboard featuring beautiful CSS
            effects, real-time analytics, secure authentication, and responsive
            design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            {authenticated ? (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Open Dashboard
                </button>
                <button
                  onClick={() => navigate("/effects")}
                  className="px-8 py-4 rounded-lg bg-slate-700/50 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-600"
                >
                  Explore Effects
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/effects")}
                  className="px-8 py-4 rounded-lg bg-slate-700/50 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-600"
                >
                  View Effects
                </button>
              </>
            )}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Premium Effects
              </h3>
              <p className="text-slate-400">
                Beautiful UI effects including animations, gradients, and
                interactions—all built with pure CSS and Canvas.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure Auth
              </h3>
              <p className="text-slate-400">
                Complete authentication system with user registration, login,
                and local storage. Ready for backend integration.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Real Analytics
              </h3>
              <p className="text-slate-400">
                Comprehensive dashboards with live charts, graphs, and detailed
                metrics using Recharts.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12">
              Everything You Need
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Background Beams",
                "Aurora Background",
                "Card Spotlight",
                "Canvas Reveal",
                "Evervault Card",
                "Gradient Animation",
                "Floating Dock",
                "Resizable Navbar",
                "Stateful Button",
                "Multiple Loaders",
                "Glass Cards",
                "Analytics Charts",
                "User Auth",
                "Responsive",
                "TypeScript",
                "Tailwind CSS",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 rounded-lg bg-slate-800/30 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-12 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700/50 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to explore?
            </h2>
            <p className="text-slate-400 mb-6">
              Start with demo credentials or create your own account.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Sign In Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
