'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-neo-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-neo-pearl hover:text-neo-gold transition-colors z-[110]">
            <X size={36} strokeWidth={1} />
          </button>
          
          <button onClick={onPrev} className="absolute left-2 md:left-8 text-neo-pearl hover:text-neo-gold transition-colors z-[110]">
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button onClick={onNext} className="absolute right-2 md:right-8 text-neo-pearl hover:text-neo-gold transition-colors z-[110]">
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full max-w-7xl max-h-[85vh]"
          >
            <Image
              src={images[currentIndex]}
              alt={`Projeto Neo ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neo-pearl font-montserrat tracking-widest text-[10px] md:text-xs font-light">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
