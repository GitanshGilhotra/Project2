import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '@/lib/auth';
import { AuroraBackground } from '@/components/effects/AuroraBackground';
import { GlassCard } from '@/components/effects/Cards';
import { StatefulButton } from '@/components/effects/StatefulButton';

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
    <AuroraBackground>
      <div className="min-h-screen flex items-center justify-center px-4">
        <GlassCard className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isRegister ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-slate-400">
              {isRegister
                ? 'Join us to access the dashboard'
                : 'Sign in to your account'}
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />

            {isRegister && (
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              onClick={isRegister ? handleRegister : handleLogin}
              disabled={loading}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Loading...' : isRegister ? 'Register' : 'Login'}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => {
                  setIsRegister(!isRegister);
                  setError('');
                }}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                {isRegister ? 'Login' : 'Register'}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-slate-500 text-center mb-3">Demo Credentials:</p>
            <div className="space-y-2">
              <p className="text-xs text-slate-400">
                <span className="text-blue-300">Username:</span> admin
              </p>
              <p className="text-xs text-slate-400">
                <span className="text-blue-300">Password:</span> admin123
              </p>
              <p className="text-xs text-slate-400 mt-3">Or register a new account</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </AuroraBackground>
  );
}
