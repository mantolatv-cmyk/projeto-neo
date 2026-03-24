'use client';

import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section className="relative py-28 md:py-40 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Lado Esquerdo - Título */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[#FBBF24] text-xs uppercase tracking-[0.3em] font-semibold mb-6 block drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
              Visão Arquitetônica
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#18181B] dark:text-[#F5F5F1] leading-[1.1] transition-colors duration-700 dark:drop-shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              A Fusão do <br/> 
              <span className="italic font-light">Eterno</span> e do <br/>
              Moderno.
            </h2>
          </motion.div>
        </div>

        {/* Lado Direito - Texto Explicativo Elegante */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 text-[#18181B]/70 dark:text-[#F5F5F1]/70 font-inter text-lg md:text-xl font-light leading-relaxed transition-colors duration-700"
          >
            <p>
              A Residência Mantovani surge como um testamento de que a imponência clássica não precisa conflitar com o minimalismo. O <strong className="font-normal text-[#18181B] dark:text-[#F5F5F1]">pórtico monumental</strong>, abraçado por colunas e molduras tradicionais, ancora o projeto na escala do tempo atemporal. 
            </p>
            <p>
              Costurando essa narrativa de legado, elegantes painéis esotéricos e <strong className="font-normal text-[#18181B] dark:text-[#F5F5F1]">janelas em fita</strong> escurecidas injetam respiro, amplitude visual e uma precisão nitidamente contemporânea a todo o volume.
            </p>
            <p className="dark:text-[#FBBF24]/90 transition-colors duration-700 italic pt-4">
              Sob a transição do dia para a noite, a cênica iluminação LED circular de teto desperta a alma sutil dos revestimentos, guiando o olhar e banhando a fachada com uma aura singular e indescritivelmente luxuosa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
