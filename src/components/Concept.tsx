'use client';

import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section className="relative py-32 md:py-48 px-6 max-w-7xl mx-auto overflow-hidden bg-marble">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
        
        {/* Left - Title (38% Golden Ratio approximate) */}
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-neo-gold text-[10px] uppercase tracking-[0.4em] font-montserrat font-semibold mb-8 block drop-shadow-sm">
              Visão Arquitetônica
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-neo-charcoal dark:text-neo-pearl leading-[1.1] transition-colors duration-700">
              A Fusão do <br/> 
              <span className="italic font-light text-neo-gold">Eterno</span> e do <br/>
              Moderno.
            </h2>
            
            {/* Minimalist Deco Line */}
            <div className="w-24 h-[1px] bg-neo-gold/50 mt-12" />
          </motion.div>
        </div>

        {/* Right - Description (62% Golden Ratio approximate) */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-neo-charcoal/70 dark:text-neo-pearl/70 font-montserrat text-lg md:text-xl font-light leading-[1.8] transition-colors duration-700"
          >
            <p>
              A Residência Mantovani surge como um testamento de que a imponência clássica não precisa conflitar com o minimalismo. O <strong className="font-medium text-neo-charcoal dark:text-neo-pearl">pórtico monumental</strong>, abraçado por colunas e molduras tradicionais, ancora o projeto na escala do tempo atemporal. 
            </p>
            <p>
              Costurando essa narrativa de legado, elegantes painéis esotéricos e <strong className="font-medium text-neo-charcoal dark:text-neo-pearl">janelas em fita</strong> escurecidas injetam respiro, amplitude visual e uma precisão nitidamente contemporânea a todo o volume.
            </p>
            <p className="dark:text-neo-gold/90 text-neo-gold transition-colors duration-700 italic pt-6 border-l pl-6 border-neo-gold/30">
              Sob a transição do dia para a noite, a cênica iluminação LED circular de teto desperta a alma sutil dos revestimentos, guiando o olhar e banhando a fachada com uma aura singular e indescritivelmente luxuosa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
