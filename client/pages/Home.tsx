import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@/lib/auth';

export default function Home() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <span className="text-xl font-bold text-black">Dashboard</span>
        </div>
        {authenticated ? (
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition-colors"
          >
            Go to Dashboard
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition-colors"
          >
            Sign In
          </button>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Professional Dashboard <br />
          with Modern Effects
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
          A clean, minimal dashboard featuring beautiful CSS effects, 
          real-time analytics, secure authentication, and responsive design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {authenticated ? (
            <>
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition-all"
              >
                Open Dashboard
              </button>
              <button
                onClick={() => navigate('/effects')}
                className="px-8 py-4 rounded-lg bg-gray-200 text-black font-semibold hover:bg-gray-300 transition-colors border border-gray-300"
              >
                Explore Effects
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/effects')}
                className="px-8 py-4 rounded-lg bg-gray-200 text-black font-semibold hover:bg-gray-300 transition-colors border border-gray-300"
              >
                View Effects
              </button>
            </>
          )}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-black mb-3">Premium Effects</h3>
            <p className="text-gray-700">
              Beautiful UI effects including animations, gradients, and interactions built with pure CSS.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-black mb-3">Secure Auth</h3>
            <p className="text-gray-700">
              Complete authentication system with user registration and login functionality.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-black mb-3">Real Analytics</h3>
            <p className="text-gray-700">
              Comprehensive dashboards with live charts and detailed metrics using Recharts.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Everything You Need</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Background Beams',
              'Aurora Background',
              'Card Spotlight',
              'Canvas Reveal',
              'Evervault Card',
              'Gradient Animation',
              'Floating Dock',
              'Resizable Navbar',
              'Stateful Button',
              'Multiple Loaders',
              'Glass Cards',
              'Analytics Charts',
              'User Auth',
              'Responsive',
              'TypeScript',
              'Tailwind CSS',
            ].map((feature, idx) => (
              <div
                key={idx}
                className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-white hover:border-black transition-all"
              >
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-12 rounded-2xl bg-gray-50 border border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-4">Ready to explore?</h2>
          <p className="text-gray-700 mb-6">Start with demo credentials or create your own account.</p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition-all"
          >
            Sign In Now
          </button>
        </div>
      </div>
    </div>
  );
}
