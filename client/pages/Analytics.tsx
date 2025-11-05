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
    <div className="min-h-screen bg-white">
      <ResizableNavbar items={navItems} />
      <div className="pt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-2">
              Advanced Analytics
            </h1>
            <p className="text-gray-700">
              Comprehensive insights into user behavior, conversions, and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👁️</div>
              <p className="text-gray-600 text-sm mb-1">Total Sessions</p>
              <p className="text-2xl font-bold text-black">2,234</p>
              <p className="text-gray-700 text-xs mt-2">sessions this month</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">✅</div>
              <p className="text-gray-600 text-sm mb-1">Conversion Rate</p>
              <p className="text-2xl font-bold text-black">4.23%</p>
              <p className="text-gray-700 text-xs mt-2">↑ 1.2% improvement</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">⏱️</div>
              <p className="text-gray-600 text-sm mb-1">Avg. Session Duration</p>
              <p className="text-2xl font-bold text-black">5m 42s</p>
              <p className="text-gray-700 text-xs mt-2">↑ 0.5m from last month</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📉</div>
              <p className="text-gray-600 text-sm mb-1">Bounce Rate</p>
              <p className="text-2xl font-bold text-black">24.5%</p>
              <p className="text-gray-700 text-xs mt-2">↓ 3.2% improvement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-black mb-6">Traffic Overview (24h)</h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#000000" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e5e7eb" />
                  <XAxis stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#000000"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-black mb-6">Weekly Conversion</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={conversionData}>
                  <CartesianGrid stroke="#e5e7eb" />
                  <XAxis stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="conversions"
                    stroke="#000000"
                    strokeWidth={3}
                    dot={{ fill: '#000000', r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#666666"
                    strokeWidth={3}
                    dot={{ fill: '#666666', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all mb-8">
            <h2 className="text-xl font-semibold text-black mb-6">User Engagement Scatter</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  dataKey="sessions"
                  stroke="#6b7280"
                  name="Sessions"
                />
                <YAxis
                  type="number"
                  dataKey="conversions"
                  stroke="#6b7280"
                  name="Conversions"
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#000000' }}
                />
                <Scatter
                  name="Daily Data"
                  data={conversionData}
                  fill="#000000"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-lg font-semibold text-black mb-4">Top Traffic Sources</h2>
              <div className="space-y-3">
                {[
                  { source: 'Organic Search', traffic: '42.5%' },
                  { source: 'Direct', traffic: '28.3%' },
                  { source: 'Social Media', traffic: '18.7%' },
                  { source: 'Referral', traffic: '10.5%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-white transition-colors">
                    <span className="text-gray-700">{item.source}</span>
                    <span className="text-black font-semibold">{item.traffic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-lg font-semibold text-black mb-4">Device Breakdown</h2>
              <div className="space-y-3">
                {[
                  { device: 'Desktop', percentage: '65.2%' },
                  { device: 'Mobile', percentage: '28.5%' },
                  { device: 'Tablet', percentage: '6.3%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-white transition-colors">
                    <span className="text-gray-700">{item.device}</span>
                    <span className="text-black font-semibold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-lg font-semibold text-black mb-4">Engagement Metrics</h2>
              <div className="space-y-3">
                {[
                  { metric: 'Avg. Pages/Session', value: '4.2' },
                  { metric: 'Users per Session', value: '1.8' },
                  { metric: 'Return Visitors', value: '34%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-white transition-colors">
                    <span className="text-gray-700">{item.metric}</span>
                    <span className="text-black font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </div>
  );
}
