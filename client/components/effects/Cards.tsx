import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => (
  <div
    className={`rounded-xl p-6 backdrop-blur-lg border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-lg transition-all duration-300 ${className}`}
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
  gradient = 'from-gray-900 to-black',
  className = '',
}) => (
  <div
    className={`rounded-xl p-6 bg-gradient-to-br ${gradient} hover:shadow-lg hover:shadow-black/20 transition-all duration-300 text-white ${className}`}
  >
    {children}
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
    className={`rounded-lg p-4 bg-white border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300 ${className}`}
  >
    <div className="flex items-start gap-3">
      {icon && <div className="text-2xl">{icon}</div>}
      <div>
        <h3 className="text-black font-semibold">{title}</h3>
        <p className="text-gray-700 text-sm mt-1">{description}</p>
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
      className={`rounded-lg p-6 cursor-pointer transition-all duration-300 border border-gray-200 ${className}`}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        background: isHovered ? '#f9fafb' : '#ffffff',
        boxShadow: isHovered
          ? '0 12px 24px rgba(0, 0, 0, 0.1)'
          : '0 4px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      {children}
    </div>
  );
};
