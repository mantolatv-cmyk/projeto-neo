'use client';

import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section id="conceito" className="py-32 md:py-48 px-4 flex flex-col items-center justify-center bg-residence-offwhite dark:bg-residence-zinc transition-colors duration-700">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <span className="text-sm uppercase tracking-[0.4em] font-medium mb-10 block text-residence-amber">
          A Dialética Arquitetônica
        </span>
        <h2 className="text-4xl md:text-7xl font-playfair mb-12 leading-tight tracking-tight text-residence-zinc dark:text-residence-offwhite">
          Onde o Legado <br /> 
          <span className="italic">Transcende</span> a Matéria
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left mt-16 font-inter font-light leading-relaxed text-residence-zinc/80 dark:text-residence-offwhite/80">
          <p className="text-lg md:text-xl">
            A fusão entre o classicismo das colunas monumentais e as molduras esculpidas sob medida com a ousadia das janelas em fita e a iluminação LED circular não é apenas uma escolha estética, mas um manifesto de atemporalidade. Revisitamos as proporções clássicas para dar vida a um lar que respira inovação sem abrir mão da alma.
          </p>
          <div className="flex flex-col gap-8">
            <p className="text-lg md:text-xl italic border-l-2 border-residence-amber pl-8">
              "A arquitetura não deve apenas abrigar corpos, mas elevar o espírito através da harmonia entre o antigo e o novo."
            </p>
            <div className="flex gap-4">
              <span className="w-12 h-[1px] bg-residence-amber mt-3" />
              <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-50">
                Studio de Arquitetura de Luxo
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
