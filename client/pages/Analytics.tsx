import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { CanvasRevealEffect } from '@/components/effects/CanvasRevealEffect';
import { GlassCard, MinimalCard } from '@/components/effects/Cards';
import { FloatingDock } from '@/components/effects/FloatingDock';
import { ResizableNavbar } from '@/components/effects/ResizableNavbar';

const analyticsData = [
  { time: '00:00', pageViews: 1200, uniqueUsers: 800, bounceRate: 35 },
  { time: '04:00', pageViews: 1390, uniqueUsers: 1000, bounceRate: 32 },
  { time: '08:00', pageViews: 1480, uniqueUsers: 1200, bounceRate: 28 },
  { time: '12:00', pageViews: 1890, uniqueUsers: 1800, bounceRate: 22 },
  { time: '16:00', pageViews: 2390, uniqueUsers: 2200, bounceRate: 18 },
  { time: '20:00', pageViews: 2290, uniqueUsers: 2100, bounceRate: 20 },
  { time: '24:00', pageViews: 2000, uniqueUsers: 1900, bounceRate: 25 },
];

const conversionData = [
  { day: 'Mon', sessions: 400, conversions: 120, revenue: 2400 },
  { day: 'Tue', sessions: 300, conversions: 139, revenue: 2210 },
  { day: 'Wed', sessions: 200, conversions: 180, revenue: 2290 },
  { day: 'Thu', sessions: 278, conversions: 239, revenue: 2000 },
  { day: 'Fri', sessions: 189, conversions: 221, revenue: 2181 },
  { day: 'Sat', sessions: 239, conversions: 250, revenue: 2500 },
  { day: 'Sun', sessions: 349, conversions: 210, revenue: 2100 },
];

export default function Analytics() {
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

  return (
    <CanvasRevealEffect containerClassName="min-h-screen">
      <ResizableNavbar items={navItems} />
      <div className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">
              Advanced Analytics 📈
            </h1>
            <p className="text-slate-400">
              Comprehensive insights into user behavior, conversions, and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <MinimalCard
              title="Total Sessions"
              description="2,234 sessions"
              icon="👁️"
              className="md:col-span-1"
            />
            <MinimalCard
              title="Conversion Rate"
              description="4.23%"
              icon="✅"
              className="md:col-span-1"
            />
            <MinimalCard
              title="Avg. Session Duration"
              description="5m 42s"
              icon="⏱️"
              className="md:col-span-1"
            />
            <MinimalCard
              title="Bounce Rate"
              description="24.5%"
              icon="📉"
              className="md:col-span-1"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <GlassCard>
              <h2 className="text-xl font-semibold text-white mb-6">Traffic Overview (24h)</h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold text-white mb-6">Weekly Conversion</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={conversionData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="conversions"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: '#10b981', r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ fill: '#f59e0b', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">User Engagement Scatter</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  type="number"
                  dataKey="sessions"
                  stroke="#94a3b8"
                  name="Sessions"
                />
                <YAxis
                  type="number"
                  dataKey="conversions"
                  stroke="#94a3b8"
                  name="Conversions"
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Scatter
                  name="Daily Data"
                  data={conversionData}
                  fill="#8b5cf6"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h2 className="text-lg font-semibold text-white mb-4">Top Traffic Sources</h2>
              <div className="space-y-3">
                {[
                  { source: 'Organic Search', traffic: '42.5%' },
                  { source: 'Direct', traffic: '28.3%' },
                  { source: 'Social Media', traffic: '18.7%' },
                  { source: 'Referral', traffic: '10.5%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-300">{item.source}</span>
                    <span className="text-blue-400 font-semibold">{item.traffic}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-lg font-semibold text-white mb-4">Device Breakdown</h2>
              <div className="space-y-3">
                {[
                  { device: 'Desktop', percentage: '65.2%' },
                  { device: 'Mobile', percentage: '28.5%' },
                  { device: 'Tablet', percentage: '6.3%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-300">{item.device}</span>
                    <span className="text-purple-400 font-semibold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-lg font-semibold text-white mb-4">Engagement Metrics</h2>
              <div className="space-y-3">
                {[
                  { metric: 'Avg. Pages/Session', value: '4.2' },
                  { metric: 'Avg. Session Duration', value: '5m 42s' },
                  { metric: 'Users per Session', value: '1.8' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-300">{item.metric}</span>
                    <span className="text-green-400 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </CanvasRevealEffect>
  );
}
