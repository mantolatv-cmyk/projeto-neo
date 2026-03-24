'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center p-6 bg-neo-charcoal"
    >
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-neo-charcoal/30 dark:bg-neo-charcoal/60 z-10 transition-colors duration-1000 pointer-events-none mix-blend-multiply" />
        <Image 
          src="/images/facade.jpg" 
          alt="Residência Mantovani - Fachada Neoclássica" 
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl text-neo-pearl leading-[1.1] font-medium drop-shadow-2xl dark:drop-shadow-soft-gold transition-all duration-1000">
          Residência Mantovani:<br className="hidden md:block" /> O Encontro entre o <br className="block md:hidden" /><span className="text-neo-gold italic font-light transition-colors duration-1000">Clássico</span> e o Contemporâneo
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          className="mt-16 text-neo-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-montserrat font-light flex flex-col items-center gap-6"
        >
          <span>Explore a Excelência Arquitetônica</span>
          <motion.div 
             animate={{ height: ["0px", "60px", "0px"], opacity: [0, 1, 0], y: [0, 30, 60] }} 
             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
             className="w-[1px] bg-gradient-to-b from-neo-gold to-transparent"
          />
        </motion.div>
      </motion.div>
      
      {/* Decorative Blur Border */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neo-pearl dark:from-neo-charcoal to-transparent z-10 transition-colors duration-700" />
    </section>
  );
}
