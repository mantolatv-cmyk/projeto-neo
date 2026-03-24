import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F1] text-[#18181B] selection:bg-[#18181B] selection:text-[#F5F5F1]">
      {/* 1 & 2. Seção Hero com Título Central */}
      <section 
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{ 
          // Imagem placeholder para a fachada enviada - adicione a foto real na pasta public
          backgroundImage: "url('/facade.jpg')" 
        }}
      >
        {/* Overlay translúcido elegante para garantir leitura do título */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        <h1 className="relative z-10 font-playfair text-3xl md:text-5xl lg:text-7xl text-white text-center max-w-5xl leading-tight font-medium drop-shadow-xl">
          Residência Mantovani:<br className="hidden md:block" /> O Encontro entre o Clássico e o Contemporâneo
        </h1>
      </section>

      {/* 3. Seção Conceito (Duas Colunas) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#18181B]">
              O Projeto
            </h2>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 flex items-center">
            <p className="font-inter text-lg md:text-xl lg:text-2xl leading-relaxed text-[#18181B]/80 font-light max-w-3xl">
              Uma verdadeira obra-prima arquitetônica onde a proporção impecável do estilo neoclássico abraça o minimalismo contemporâneo. Sua fachada imponente é delineada por uma iluminação monumental que destaca as colunas clássicas e os grandes vãos de vidro, compondo uma atmosfera única de sofisticação, conforto e exclusividade.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Rodapé Minimalista */}
      <footer className="border-t border-[#18181B]/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Logotipo M */}
          <div className="flex items-center justify-center w-14 h-14 bg-[#FBBF24] text-[#18181B] rounded-sm font-playfair text-3xl font-bold shadow-sm">
            M
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col items-center md:items-end text-sm md:text-base font-inter text-[#18181B]/70 space-y-2">
            <span className="font-medium text-[#18181B] tracking-widest uppercase text-xs mb-1">Contato</span>
            <a href="mailto:contato@residenciamantovani.com.br" className="hover:text-[#18181B] transition-colors">
              contato@residenciamantovani.com.br
            </a>
            <a href="tel:+5511999999999" className="hover:text-[#18181B] transition-colors">
              +55 (11) 99999-9999
            </a>
          </div>

        </div>
      </footer>
    </main>
  );
}
