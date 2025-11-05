import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface ResizableNavbarProps {
  items: NavItem[];
}

export const ResizableNavbar: React.FC<ResizableNavbarProps> = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        width: isScrolled ? '90%' : '100%',
        margin: isScrolled ? '0 auto' : '0',
        left: isScrolled ? '5%' : '0',
        right: isScrolled ? '5%' : '0',
        borderRadius: isScrolled ? '12px' : '0',
        marginTop: isScrolled ? '10px' : '0',
      }}
    >
      <div className="px-6 py-4 bg-white border border-gray-200 rounded-lg flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-black font-bold text-lg hidden sm:block">Dashboard</span>
        </div>
        <div className="hidden md:flex gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
