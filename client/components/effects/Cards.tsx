import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => (
  <div
    className={`rounded-xl p-6 backdrop-blur-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

interface GradientCardProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  gradient = 'from-blue-500 to-purple-600',
  className = '',
}) => (
  <div
    className={`rounded-xl p-6 bg-gradient-to-br ${gradient} hover:shadow-lg transition-all duration-300 ${className}`}
  >
    <div className="text-white">{children}</div>
  </div>
);

interface MinimalCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const MinimalCard: React.FC<MinimalCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => (
  <div
    className={`rounded-lg p-4 bg-slate-900/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 ${className}`}
  >
    <div className="flex items-start gap-3">
      {icon && <div className="text-2xl">{icon}</div>}
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-slate-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  </div>
);

interface InteractiveCardProps {
  children: React.ReactNode;
  onHover?: () => void;
  className?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  onHover,
  className = '',
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-lg p-6 cursor-pointer transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        background: isHovered
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15))'
          : 'rgba(15, 23, 42, 0.6)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(59, 130, 246, 0.2)'
          : '0 10px 20px rgba(0, 0, 0, 0.1)',
        border: isHovered ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(100, 116, 139, 0.3)',
      }}
    >
      {children}
    </div>
  );
};
