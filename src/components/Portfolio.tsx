'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

const portfolioImages = [
  "/images/facade.jpg",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
];

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioImages.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 md:mb-32">
         <motion.span 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-neo-gold text-[10px] uppercase tracking-[0.4em] font-montserrat font-semibold block drop-shadow-sm mb-6"
         >
           Galeria de Obras
         </motion.span>
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="font-playfair text-4xl md:text-5xl lg:text-6xl text-neo-charcoal dark:text-neo-pearl leading-[1.1]"
         >
           Espaços que <span className="italic font-light text-neo-gold">Inspiram</span>.
         </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {portfolioImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openLightbox(index)}
            className={`relative group cursor-pointer overflow-hidden rounded-sm shadow-soft dark:shadow-soft-gold border border-neo-charcoal/5 dark:border-neo-pearl/10 ${index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-video' : 'aspect-square lg:aspect-[4/5]'}`}
          >
            <div className="absolute inset-0 bg-neo-charcoal/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <Image
              src={src}
              alt={`Galeria Projeto Neo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      <Lightbox 
        images={portfolioImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
