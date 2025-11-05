import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`rounded-xl p-6 backdrop-blur-lg border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800/60 transition-all duration-300 shadow-lg ${className}`}
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
  gradient = "from-cyan-500 to-blue-600",
  className = "",
}) => (
  <div
    className={`rounded-xl p-6 bg-gradient-to-br ${gradient} hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ${className}`}
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
  className = "",
}) => (
  <div
    className={`rounded-lg p-4 bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 ${className}`}
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
  className = "",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-lg p-6 cursor-pointer transition-all duration-300 border border-slate-700/50 ${className}`}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        background: isHovered
          ? "rgba(71, 85, 105, 0.2)"
          : "rgba(30, 41, 59, 0.5)",
        boxShadow: isHovered
          ? "0 12px 24px rgba(6, 182, 212, 0.1)"
          : "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};
