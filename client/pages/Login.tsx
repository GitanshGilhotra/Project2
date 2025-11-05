import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '@/lib/auth';

export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    if (!username || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const user = login(username, password);
    if (user) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    setLoading(true);
    setError('');

    if (!username || !email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const success = register(username, email, password);
    if (success) {
      const user = login(username, password);
      if (user) {
        navigate('/dashboard');
      }
    } else {
      setError('Username already exists');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black mb-4">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <h1 className="text-4xl font-bold text-black mb-2">
            {isRegister ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-600">
            {isRegister
              ? 'Join us to access your dashboard'
              : 'Sign in to your dashboard'}
          </p>
        </div>

        {/* Form Card */}
        <div className="border border-gray-200 rounded-2xl p-8 space-y-6 bg-white shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all disabled:opacity-50"
              />
            </div>

            {isRegister && (
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all disabled:opacity-50"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {error && (
            <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={isRegister ? handleRegister : handleLogin}
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 active:bg-black transition-all disabled:opacity-50 duration-200"
          >
            {loading ? 'Loading...' : isRegister ? 'Create Account' : 'Sign In'}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => {
                  setIsRegister(!isRegister);
                  setError('');
                }}
                className="text-black hover:text-gray-700 font-semibold transition-colors"
              >
                {isRegister ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-8 p-6 rounded-lg bg-gray-50 border border-gray-200">
          <p className="text-xs font-semibold text-gray-600 mb-4">DEMO CREDENTIALS</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Username:</span>
              <span className="text-black font-mono font-medium">admin</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Password:</span>
              <span className="text-black font-mono font-medium">admin123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
