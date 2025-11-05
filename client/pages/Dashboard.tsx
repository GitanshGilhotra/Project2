import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
} from "recharts";
import { getCurrentUser, logout } from "@/lib/auth";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import {
  GlassCard,
  InteractiveCard,
  MinimalCard,
} from "@/components/effects/Cards";
import { FloatingDock } from "@/components/effects/FloatingDock";
import { ResizableNavbar } from "@/components/effects/ResizableNavbar";

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];

const chartData = [
  { month: "Jan", revenue: 4000, users: 2400, growth: 24 },
  { month: "Feb", revenue: 3000, users: 1398, growth: 22 },
  { month: "Mar", revenue: 2000, users: 9800, growth: 29 },
  { month: "Apr", revenue: 2780, users: 3908, growth: 20 },
  { month: "May", revenue: 1890, users: 4800, growth: 25 },
  { month: "Jun", revenue: 2390, users: 3800, growth: 21 },
];

const pieData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 300 },
  { name: "Other", value: 100 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null,
  );

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

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
    { icon: "⚙️", label: "Settings", path: "/settings", onClick: handleLogout },
    { icon: "🚪", label: "Logout", path: "/", onClick: handleLogout },
  ];

  return (
    <AuroraBackground>
      <ResizableNavbar items={navItems} />
      <div className="min-h-screen pt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome, {user?.username}! 👋
            </h1>
            <p className="text-slate-400">
              Here's your analytics dashboard with real-time insights and
              performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <MinimalCard
              title="Total Revenue"
              description="$45,231.89"
              icon="💰"
              className="md:col-span-1"
            />
            <MinimalCard
              title="Active Users"
              description="2,543 users"
              icon="👥"
              className="md:col-span-1"
            />
            <MinimalCard
              title="Growth Rate"
              description="+23.5% from last month"
              icon="📈"
              className="md:col-span-1"
            />
            <MinimalCard
              title="Conversion"
              description="3.24% average"
              icon="🎯"
              className="md:col-span-1"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <GlassCard className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-white mb-6">
                Revenue Trend
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold text-white mb-6">
                Device Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <GlassCard>
              <h2 className="text-xl font-semibold text-white mb-6">
                User Metrics
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="users" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold text-white mb-6">
                Top Insights
              </h2>
              <div className="space-y-4">
                <InteractiveCard>
                  <h3 className="text-white font-semibold">
                    Peak Traffic Hours
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Monday to Friday: 2 PM - 6 PM EST
                  </p>
                </InteractiveCard>
                <InteractiveCard>
                  <h3 className="text-white font-semibold">
                    Most Engaged Content
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Video tutorials generate 3.5x more engagement
                  </p>
                </InteractiveCard>
                <InteractiveCard>
                  <h3 className="text-white font-semibold">User Retention</h3>
                  <p className="text-slate-400 text-sm mt-2">
                    90-day retention rate: 76.8% (↑ 12% YoY)
                  </p>
                </InteractiveCard>
              </div>
            </GlassCard>
          </div>

          <GlassCard>
            <h2 className="text-xl font-semibold text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div>
                    <p className="text-white font-medium">
                      User Activity #{item}
                    </p>
                    <p className="text-slate-400 text-sm">2 hours ago</p>
                  </div>
                  <span className="text-2xl">{"📊"}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </AuroraBackground>
  );
}
