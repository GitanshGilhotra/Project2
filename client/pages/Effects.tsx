import React from 'react';
import { BackgroundBeams } from '@/components/effects/BackgroundBeams';
import { CardSpotlight } from '@/components/effects/CardSpotlight';
import { EvervaultCard } from '@/components/effects/EvervaultCard';
import { GlassCard, GradientCard, InteractiveCard } from '@/components/effects/Cards';
import { FloatingDock } from '@/components/effects/FloatingDock';
import { ResizableNavbar } from '@/components/effects/ResizableNavbar';
import { StatefulButton } from '@/components/effects/StatefulButton';

export default function Effects() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Effects', href: '/effects' },
    { label: 'Analytics', href: '/analytics' },
  ];

  const dockItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '✨', label: 'Effects', path: '/effects' },
    { icon: '📈', label: 'Analytics', path: '/analytics' },
    { icon: '🏠', label: 'Home', path: '/' },
  ];

  const handleAction = async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ResizableNavbar items={navItems} />
      <div className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">
              UI Effects Showcase
            </h1>
            <p className="text-slate-400">
              Explore our collection of beautiful, interactive effects and components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CardSpotlight className="p-6 bg-slate-800/50 border border-slate-700/50 h-full">
              <h2 className="text-xl font-bold text-white mb-3">Card Spotlight</h2>
              <p className="text-slate-300 text-sm mb-4">
                Move your cursor to reveal the spotlight effect that follows your mouse position.
              </p>
              <div className="text-3xl">🎯</div>
            </CardSpotlight>

            <EvervaultCard className="p-6 bg-slate-800/50 border border-slate-700/50 h-full">
              <h2 className="text-xl font-bold text-white mb-3">Evervault Card</h2>
              <p className="text-slate-300 text-sm mb-4">
                Hover to reveal the encrypted text effect with animated scrambled characters.
              </p>
              <div className="text-3xl">🔐</div>
            </EvervaultCard>

            <GradientCard gradient="from-cyan-500 to-blue-600" className="p-6 h-full">
              <h2 className="text-xl font-bold mb-3">Gradient Card</h2>
              <p className="text-sm mb-4">
                Beautiful gradient backgrounds with smooth transitions and hover effects.
              </p>
              <div className="text-3xl">🎨</div>
            </GradientCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="bg-slate-800/50 backdrop-blur border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-3">Glass Morphism</h2>
              <p className="text-slate-300 text-sm mb-6">
                Frosted glass effect with backdrop blur creates a modern, elegant UI aesthetic.
              </p>
              <StatefulButton onClick={handleAction} className="w-full">
                Try Action
              </StatefulButton>
            </GlassCard>

            <InteractiveCard className="bg-slate-800/50 border border-slate-700/50 h-full">
              <h2 className="text-xl font-bold text-white mb-3">Interactive Card</h2>
              <p className="text-slate-300 text-sm">
                Hover to see the lift effect. Cards respond to mouse interactions with smooth animations.
              </p>
            </InteractiveCard>
          </div>

          <GlassCard className="bg-slate-800/50 backdrop-blur border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Available Effects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '✨', title: 'Background Beams', desc: 'Animated beam collision effects' },
                { icon: '🌌', title: 'Aurora Background', desc: 'Northern lights animation' },
                { icon: '🎯', title: 'Canvas Reveal', desc: 'Dot grid that expands on hover' },
                { icon: '🪟', title: 'Floating Dock', desc: 'Mac OS style navigation dock' },
                { icon: '📏', title: 'Resizable Navbar', desc: 'Navbar that changes width on scroll' },
                { icon: '🌈', title: 'Gradient Animation', desc: 'Smooth background gradient shifts' },
              ].map((effect, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="text-2xl mb-2">{effect.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{effect.title}</h3>
                  <p className="text-slate-400 text-sm">{effect.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </div>
  );
}
