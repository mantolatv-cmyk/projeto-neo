'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const hotspots = [
  {
    id: 1,
    x: "25%",
    y: "45%",
    title: "Esquadrias em Alumínio Preto",
    description: "Janelas em fita com perfis minimalistas de alto desempenho termoacústico, garantindo luz natural e controle climático superior.",
  },
  {
    id: 2,
    x: "50%",
    y: "55%",
    title: "Pórtico Monumental",
    description: "Um elemento central que reinterpreta o clássico com colunas esculpidas e uma porta imponente em madeira nobre e puxadores dourados.",
  },
  {
    id: 3,
    x: "75%",
    y: "80%",
    title: "Paisagismo Integrado",
    description: "A natureza abraça a arquitetura com espécies selecionadas para harmonizar com as linhas verticais da fachada e iluminação cênica.",
  },
  {
    id: 4,
    x: "50%",
    y: "25%",
    title: "Iluminação LED Circular",
    description: "O detalhe que define a modernidade: um halo de luz indireta no teto do pórtico, criando um efeito flutuante e acolhedor.",
  }
];

export default function Gallery() {
  const [activeHotspot, setActiveHotspot] = useState<typeof hotspots[0] | null>(null);

  return (
    <section id="galeria" className="py-16 md:py-24 px-4 bg-residence-offwhite dark:bg-residence-zinc transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.4em] font-medium mb-4 block text-residence-amber">Exploração Detalhada</span>
          <h2 className="text-4xl md:text-6xl font-playfair mb-8 leading-tight tracking-tight text-residence-zinc dark:text-residence-offwhite">Morfologia do <span className="italic">Design</span></h2>
        </div>

        <div className="relative aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden shadow-2xl group">
          {/* Main Facade Image */}
          <img 
            src="/images/facade.jpg" 
            alt="Fachada Principal" 
            className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0"
          />
          
          {/* Hotspots Mapping */}
          {hotspots.map((spot) => (
            <motion.button
              key={spot.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: spot.x, top: spot.y }}
              className="absolute z-30 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-residence-amber/80 backdrop-blur-md rounded-full flex items-center justify-center pulse-circle border-2 border-white/50 group/spot"
            >
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-residence-zinc text-white px-3 py-1 text-[10px] rounded opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {spot.title}
              </div>
            </motion.button>
          ))}

          {/* Modal Overlay */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
                onClick={() => setActiveHotspot(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="bg-residence-offwhite dark:bg-residence-zinc p-8 md:p-12 max-w-lg w-full rounded-2xl relative shadow-2xl border border-residence-amber/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setActiveHotspot(null)}
                    className="absolute top-4 right-4 text-residence-zinc dark:text-residence-offwhite opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <X size={24} />
                  </button>
                  <span className="text-xs uppercase tracking-widest text-residence-amber mb-4 block font-medium">Elemento Arquitetônico</span>
                  <h3 className="text-3xl font-playfair mb-6 text-residence-zinc dark:text-residence-offwhite">{activeHotspot.title}</h3>
                  <p className="text-lg font-light leading-relaxed text-residence-zinc/70 dark:text-residence-offwhite/70 font-inter">
                    {activeHotspot.description}
                  </p>
                  
                  <div className="mt-10 border-t border-residence-amber/10 pt-8 flex justify-between items-center text-xs opacity-50 font-medium tracking-[0.2em] font-inter">
                    <span>DETALHE TÉCNICO 04/22</span>
                    <span className="italic">LUXURY RESIDENCE</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
