'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { motion, useScroll } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#F5F5F1]/90 dark:bg-[#18181B]/90 backdrop-blur-xl border-b border-[#18181B]/10 dark:border-[#FBBF24]/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Minimalist Logo */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 bg-[#FBBF24] flex items-center justify-center rounded-sm shadow-sm transition-transform group-hover:scale-105 duration-500 dark:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
            <span className="font-playfair text-2xl font-bold text-[#18181B]">M</span>
          </div>
          <span className={`font-inter text-xs tracking-[0.2em] font-semibold uppercase hidden md:block transition-colors duration-500 ${
            isScrolled ? 'text-[#18181B] dark:text-[#F5F5F1]' : 'text-white'
          }`}>
            Mantovani
          </span>
        </div>

        {/* Night/Day Interactive Toggle */}
        <div className="flex items-center">
          <button 
            onClick={toggleTheme}
            className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-500 ${
              isScrolled 
                ? 'text-[#18181B] dark:text-[#FBBF24] hover:bg-[#18181B]/5 dark:hover:bg-[#FBBF24]/10' 
                : 'text-white hover:bg-white/10 dark:text-[#FBBF24]'
            }`}
            aria-label="Alternar Iluminação Noturna"
          >
            <span className="text-[10px] uppercase font-inter tracking-widest hidden sm:block font-medium opacity-80">
              {theme === 'dark' ? 'Iluminação Cênica' : 'Luz Natural'}
            </span>
            {theme === 'dark' ? (
              <Moon size={20} className="drop-shadow-[0_0_12px_rgba(251,191,36,1)] transition-transform duration-500 rotate-12" />
            ) : (
              <Sun size={20} className="transition-transform duration-500 hover:rotate-90" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
