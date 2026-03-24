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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center p-6 bg-[#18181B]"
    >
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/65 z-10 transition-colors duration-700 pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
        {/* Usando next/image para otimização e evitar erro no Vercel */}
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl text-white leading-tight font-medium drop-shadow-2xl dark:drop-shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-700">
          Residência Mantovani:<br className="hidden md:block" /> O Encontro entre o <span className="text-[#FBBF24] transition-colors duration-700 drop-shadow-md">Clássico</span> e o Contemporâneo
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-12 text-[#FBBF24] uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold flex flex-col items-center gap-4"
        >
          <span>Explore a Excelência Arquitetônica</span>
          <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ duration: 2, repeat: Infinity }}
             className="w-[1px] h-12 bg-gradient-to-b from-[#FBBF24] to-transparent dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
