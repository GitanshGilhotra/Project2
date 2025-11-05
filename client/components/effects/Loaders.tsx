import React from 'react';

export const SpinnerLoader: React.FC = () => (
  <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin" />
);

export const DotLoader: React.FC = () => (
  <div className="flex gap-1">
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
    <div
      className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
      style={{ animationDelay: '0.2s' }}
    />
    <div
      className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
      style={{ animationDelay: '0.4s' }}
    />
  </div>
);

export const BarLoader: React.FC = () => (
  <div className="flex gap-1 items-center">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="w-1 h-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded animate-pulse"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

export const RingLoader: React.FC = () => (
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 border-2 border-slate-200 rounded-full animate-spin" />
    <div className="absolute inset-1 border-2 border-transparent border-t-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
  </div>
);

export const PulseLoader: React.FC = () => (
  <div className="relative w-8 h-8 bg-blue-500 rounded-full animate-pulse shadow-lg" />
);
