'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Placeholder image for now, replacing with actual background */}
        <img 
          src="/images/facade.jpg" 
          alt="Fachada Residencial Neoclássica" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="relative z-20 text-center text-white px-4 max-w-5xl"
      >
        <span className="text-sm uppercase tracking-[0.3em] font-medium mb-4 block animate-fade-in text-residence-amber">
          Apresentação Oficial
        </span>
        <h1 className="text-5xl md:text-8xl font-playfair mb-8 leading-tight tracking-tight">
          O Reencontro da <br/>
          <span className="italic">Proporção Áurea</span>
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-90 font-inter">
          Onde a herança do neoclassicismo encontra a precisão da tecnologia contemporânea.
        </p>
        
        <div className="mt-12">
          <button className="residence-btn border-white text-white hover:bg-white hover:text-residence-zinc">
            Descubra o Legado
          </button>
        </div>
      </motion.div>

      {/* Down Arrow / Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-residence-amber"
          />
        </div>
      </motion.div>
    </section>
  );
}
