import React from 'react';

export const SpinnerLoader: React.FC = () => (
  <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
);

export const DotLoader: React.FC = () => (
  <div className="flex gap-1.5">
    <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
    <div
      className="w-2 h-2 bg-black rounded-full animate-pulse"
      style={{ animationDelay: '0.2s' }}
    />
    <div
      className="w-2 h-2 bg-black rounded-full animate-pulse"
      style={{ animationDelay: '0.4s' }}
    />
  </div>
);

export const BarLoader: React.FC = () => (
  <div className="flex gap-1.5 items-center">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="w-1 h-5 bg-gradient-to-t from-gray-700 to-black rounded animate-pulse"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

export const RingLoader: React.FC = () => (
  <div className="relative w-6 h-6">
    <div className="absolute inset-0 border-2 border-gray-300 rounded-full animate-spin" />
    <div className="absolute inset-1 border-2 border-transparent border-t-black rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
  </div>
);

export const PulseLoader: React.FC = () => (
  <div className="relative w-6 h-6 bg-gray-400/40 rounded-full animate-pulse shadow-lg shadow-gray-400/20" />
);
