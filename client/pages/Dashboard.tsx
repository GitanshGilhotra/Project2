import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getCurrentUser, logout } from '@/lib/auth';
import { FloatingDock } from '@/components/effects/FloatingDock';
import { ResizableNavbar } from '@/components/effects/ResizableNavbar';

const COLORS = ['#000000', '#333333', '#666666', '#999999', '#cccccc'];

const chartData = [
  { month: 'Jan', revenue: 4000, users: 2400, growth: 24 },
  { month: 'Feb', revenue: 3000, users: 1398, growth: 22 },
  { month: 'Mar', revenue: 2000, users: 9800, growth: 29 },
  { month: 'Apr', revenue: 2780, users: 3908, growth: 20 },
  { month: 'May', revenue: 1890, users: 4800, growth: 25 },
  { month: 'Jun', revenue: 2390, users: 3800, growth: 21 },
];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 300 },
  { name: 'Other', value: 100 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/login');
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
    { icon: '⚙️', label: 'Settings', path: '/settings' },
    { icon: '🚪', label: 'Logout', path: '/', onClick: handleLogout },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ResizableNavbar items={navItems} />
      <div className="pt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-2">
              Welcome back, <span>{user?.username}</span>!
            </h1>
            <p className="text-gray-700">
              Here's your analytics dashboard with real-time insights and performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💰</div>
              <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-black">$45,231.89</p>
              <p className="text-gray-700 text-xs mt-2">↑ 12.5% from last month</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👥</div>
              <p className="text-gray-600 text-sm mb-1">Active Users</p>
              <p className="text-2xl font-bold text-black">2,543</p>
              <p className="text-gray-700 text-xs mt-2">↑ 8.2% from last month</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📈</div>
              <p className="text-gray-600 text-sm mb-1">Growth Rate</p>
              <p className="text-2xl font-bold text-black">+23.5%</p>
              <p className="text-gray-700 text-xs mt-2">↑ 5.3% from last month</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <p className="text-gray-600 text-sm mb-1">Conversion Rate</p>
              <p className="text-2xl font-bold text-black">3.24%</p>
              <p className="text-gray-700 text-xs mt-2">↑ 0.8% from last month</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-black mb-6">Revenue Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
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
                    dataKey="revenue"
                    stroke="#000000"
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#666666"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-black mb-6">Device Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#000000"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#000000' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-black mb-6">User Metrics</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
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
                  <Bar dataKey="users" fill="#000000" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-black mb-6">Top Insights</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-white transition-colors">
                  <h3 className="text-black font-semibold">Peak Traffic Hours</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Monday to Friday: 2 PM - 6 PM EST
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-white transition-colors">
                  <h3 className="text-black font-semibold">Most Engaged Content</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Video tutorials generate 3.5x more engagement
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-white transition-colors">
                  <h3 className="text-black font-semibold">User Retention</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    90-day retention rate: 76.8% (↑ 12% YoY)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold text-black mb-6">Recent Activity</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-white transition-colors border border-gray-200"
                >
                  <div>
                    <p className="text-black font-medium">User Activity #{item}</p>
                    <p className="text-gray-600 text-sm">2 hours ago</p>
                  </div>
                  <span className="text-2xl">📊</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </div>
  );
}
