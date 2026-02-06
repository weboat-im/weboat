import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
           <span className="font-['Pretendard'] font-black text-3xl tracking-tighter text-black pb-1 group-hover:text-lime-600 transition-colors transform translate-y-0.5">weboat</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-lime-600 transition-colors">Services</a>
          <a href="#faq" className="hover:text-lime-600 transition-colors">FAQ</a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 font-bold"
          >
            상담 바로가기
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden">
          <a href="#services" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#faq" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="text-lg font-bold text-lime-600" onClick={() => setIsMobileMenuOpen(false)}>상담 신청하기</a>
        </div>
      )}
    </nav>
  );
};