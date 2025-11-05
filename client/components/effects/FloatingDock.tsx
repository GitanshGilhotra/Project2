import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  onClick?: () => void;
}

interface FloatingDockProps {
  items: DockItem[];
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleItemClick = (item: DockItem) => {
    if (item.onClick) {
      item.onClick();
    } else {
      navigate(item.path);
    }
  };

  return (
    <div
      ref={dockRef}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-end justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-3xl shadow-2xl">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            title={item.label}
            className="relative p-3 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              transform:
                hoveredIndex === index
                  ? 'translateY(-20px) scale(1.3)'
                  : 'translateY(0) scale(1)',
              backgroundColor:
                hoveredIndex === index
                  ? '#f3f4f6'
                  : 'transparent',
            }}
          >
            <div className="text-2xl text-black">{item.icon}</div>
            {hoveredIndex === index && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none border border-gray-400">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
