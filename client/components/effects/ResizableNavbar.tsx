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
      <div className="px-6 py-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg flex items-center justify-between">
        <div className="text-white font-bold text-xl">Dashboard</div>
        <div className="hidden md:flex gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
