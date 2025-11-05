import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '@/lib/auth';
import { FloatingDock } from '@/components/effects/FloatingDock';
import { ResizableNavbar } from '@/components/effects/ResizableNavbar';

export default function Settings() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

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
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-2">Settings</h1>
            <p className="text-gray-700">Manage your account and application preferences</p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Account Information</h2>
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <label className="text-gray-600 text-sm font-medium">Username</label>
                <p className="text-black text-lg font-semibold mt-2">{user.username}</p>
              </div>
              <div className="pb-6 border-b border-gray-200">
                <label className="text-gray-600 text-sm font-medium">Email Address</label>
                <p className="text-black text-lg font-semibold mt-2">{user.email}</p>
              </div>
              <div>
                <label className="text-gray-600 text-sm font-medium">Account Status</label>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span className="text-green-700 font-semibold">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-white transition-colors border border-gray-200">
                <div>
                  <h3 className="text-black font-semibold">Dark Mode</h3>
                  <p className="text-gray-600 text-sm">Enable dark theme for the interface</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    darkMode
                      ? 'bg-black text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {darkMode ? 'On' : 'Off'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-white transition-colors border border-gray-200">
                <div>
                  <h3 className="text-black font-semibold">Notifications</h3>
                  <p className="text-gray-600 text-sm">Receive email updates and alerts</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    notifications
                      ? 'bg-black text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {notifications ? 'On' : 'Off'}
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Application Info</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-gray-600">Version</span>
                <span className="text-black font-semibold">1.0.0</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-gray-600">Build</span>
                <span className="text-black font-semibold">Production</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-gray-600">Last Updated</span>
                <span className="text-black font-semibold">Today</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleLogout}
              className="w-full px-6 py-4 rounded-lg bg-red-50 text-red-700 font-semibold hover:bg-red-100 transition-colors border border-red-200 text-base"
            >
              Sign Out
            </button>
            <p className="text-center text-gray-600 text-sm">
              All your data is stored securely in local storage
            </p>
          </div>
        </div>
      </div>

      <FloatingDock items={dockItems} />
    </div>
  );
}
