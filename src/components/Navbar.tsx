'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { motion, useScroll } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        isScrolled ? (theme === 'dark' ? "glass-dark" : "glass") : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Minimalist Logo */}
        <div className="flex items-center gap-6 group cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center border border-neo-gold/30 rounded-full transition-all duration-700 group-hover:bg-neo-gold group-hover:scale-105">
            <span className={cn(
              "font-playfair text-2xl font-bold transition-colors duration-700",
              isScrolled ? "text-neo-charcoal dark:text-neo-pearl group-hover:text-neo-pearl" : "text-neo-pearl group-hover:text-neo-charcoal"
            )}>
              M
            </span>
          </div>
          <span className={cn(
            "font-montserrat text-[10px] md:text-xs tracking-[0.25em] font-light uppercase transition-colors duration-700",
            isScrolled ? "text-neo-charcoal dark:text-neo-pearl" : "text-neo-pearl"
          )}>
            Estúdio Mantovani
          </span>
        </div>

        {/* Night/Day Interactive Toggle */}
        <div className="flex items-center">
          <button 
            onClick={toggleTheme}
            className={cn(
              "flex items-center gap-4 px-5 py-3 rounded-full transition-all duration-700 border border-transparent",
              isScrolled 
                ? "text-neo-charcoal dark:text-neo-gold hover:border-neo-charcoal/10 dark:hover:border-neo-gold/30" 
                : "text-neo-pearl hover:border-neo-pearl/30"
            )}
            aria-label="Alternar Iluminação Noturna"
          >
            <span className="text-[10px] uppercase font-montserrat tracking-[0.2em] hidden sm:block font-medium opacity-80">
              {theme === 'dark' ? 'Iluminação Cênica' : 'Luz Natural'}
            </span>
            {theme === 'dark' ? (
              <Moon size={18} className="drop-shadow-soft-gold transition-transform duration-700 rotate-12" />
            ) : (
              <Sun size={18} className="transition-transform duration-700 hover:rotate-90" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
