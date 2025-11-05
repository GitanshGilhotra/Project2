import React from "react";
import { BackgroundBeams } from "@/components/effects/BackgroundBeams";
import { CardSpotlight } from "@/components/effects/CardSpotlight";
import { EvervaultCard } from "@/components/effects/EvervaultCard";
import {
  GlassCard,
  GradientCard,
  InteractiveCard,
} from "@/components/effects/Cards";
import { FloatingDock } from "@/components/effects/FloatingDock";
import { ResizableNavbar } from "@/components/effects/ResizableNavbar";
import { StatefulButton } from "@/components/effects/StatefulButton";

export default function Effects() {
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
    { icon: "🏠", label: "Home", path: "/" },
  ];

  const handleAction = async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <BackgroundBeams>
      <ResizableNavbar items={navItems} />
      <div className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">
              UI Effects Showcase ✨
            </h1>
            <p className="text-slate-400">
              Explore our collection of beautiful, interactive CSS effects and
              components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CardSpotlight className="p-6 h-full">
              <h2 className="text-xl font-bold text-white mb-3">
                Card Spotlight
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Move your cursor over the card to see the spotlight effect that
                follows your mouse position.
              </p>
              <div className="text-3xl">🎯</div>
            </CardSpotlight>

            <EvervaultCard className="p-6 h-full">
              <h2 className="text-xl font-bold text-white mb-3">
                Evervault Card
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Hover to reveal the encrypted text effect. Creates an amazing
                encrypted look with animated scrambled characters.
              </p>
              <div className="text-3xl">🔐</div>
            </EvervaultCard>

            <GradientCard
              gradient="from-pink-500 to-rose-600"
              className="p-6 h-full"
            >
              <h2 className="text-xl font-bold mb-3">Gradient Card</h2>
              <p className="text-sm mb-4">
                Beautiful gradient backgrounds with smooth transitions and hover
                effects for maximum visual appeal.
              </p>
              <div className="text-3xl">🎨</div>
            </GradientCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GlassCard>
              <h2 className="text-xl font-bold text-white mb-3">
                Glass Morphism
              </h2>
              <p className="text-slate-300 text-sm mb-6">
                Frosted glass effect with backdrop blur creates a modern,
                elegant UI aesthetic.
              </p>
              <StatefulButton onClick={handleAction} className="w-full">
                Try Action
              </StatefulButton>
            </GlassCard>

            <InteractiveCard className="h-full">
              <h2 className="text-xl font-bold text-white mb-3">
                Interactive Card
              </h2>
              <p className="text-slate-300 text-sm">
                Hover to see the lift effect. Cards respond to mouse
                interactions with smooth animations and transformations.
              </p>
            </InteractiveCard>
          </div>

          <GlassCard>
            <h2 className="text-2xl font-bold text-white mb-6">
              Available Effects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Background Beams
                </h3>
                <p className="text-slate-400 text-sm">
                  Animated beam collision effects with particles
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Aurora Background
                </h3>
                <p className="text-slate-400 text-sm">
                  Northern lights animation in the background
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Canvas Reveal</h3>
                <p className="text-slate-400 text-sm">
                  Dot grid that expands on hover interaction
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Floating Dock</h3>
                <p className="text-slate-400 text-sm">
                  Mac OS style navigation dock at the bottom
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Resizable Navbar
                </h3>
                <p className="text-slate-400 text-sm">
                  Navbar that changes width on scroll
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Gradient Animation
                </h3>
                <p className="text-slate-400 text-sm">
                  Smooth background gradient position shifts
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </BackgroundBeams>
  );
}
