'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
        isScrolled ? 'bg-residence-offwhite/80 dark:bg-residence-zinc/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center gap-0.5"
        >
          <span className="text-xl md:text-2xl font-playfair tracking-[0.1em] font-medium text-residence-zinc dark:text-residence-offwhite">Mona<span className="italic italic-residence-amber">Liza</span></span>
          <span className="text-[8px] uppercase tracking-[0.6em] font-bold opacity-40 text-residence-zinc dark:text-residence-offwhite">ESTATE</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-residence-zinc/60 dark:text-residence-offwhite/60">
          <a href="#conceito" className="hover:text-residence-amber transition-colors">Conceito</a>
          <a href="#galeria" className="hover:text-residence-amber transition-colors">Galeria</a>
          <a href="#contato" className="hover:text-residence-amber transition-colors">Contato</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-residence-zinc dark:text-residence-offwhite"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-residence-amber" />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-residence-zinc dark:text-residence-offwhite"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <button className="hidden md:block px-6 py-2 border border-residence-zinc/20 dark:border-residence-offwhite/20 text-[10px] uppercase tracking-widest font-bold hover:border-residence-amber hover:text-residence-amber transition-all dark:text-residence-offwhite">
            AGENDAR VISITA
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20, visibility: mobileMenuOpen ? 'visible' : 'hidden' }}
        className="fixed inset-0 top-[80px] z-40 bg-residence-offwhite dark:bg-residence-zinc md:hidden flex flex-col items-center justify-center gap-12 py-24 px-12 text-center"
      >
        <a onClick={() => setMobileMenuOpen(false)} href="#conceito" className="text-4xl font-playfair hover:italic transition-all">O Conceito</a>
        <a onClick={() => setMobileMenuOpen(false)} href="#galeria" className="text-4xl font-playfair hover:italic transition-all">Galeria Interativa</a>
        <a onClick={() => setMobileMenuOpen(false)} href="#contato" className="text-4xl font-playfair hover:italic transition-all">Contato</a>
        <button className="mt-8 px-12 py-4 border border-residence-zinc dark:border-residence-offwhite text-sm uppercase tracking-widest font-bold">AGENDAR VISITA</button>
      </motion.div>
    </nav>
  );
}
