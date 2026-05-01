"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const projetos = [
  {
    id: 1,
    titulo: "Sonho Genuíno",
    categoria: "EDUCAÇÃO",
    descricao:
      "Investigamos os sonhos genuínos de pessoas em vulnerabilidade social, identificando o que realmente desejam para suas vidas e criando um plano de ação personalizado.",
    imagem: "/aranha.webp",
  },
  {
    id: 2,
    titulo: "O que Sonho ser",
    categoria: "INFANTIL",
    descricao:
      "Profissionais capacitados vão nas instituições que abriguem menores de idade para incentivar seus sonhos e mostrar novos horizontes.",
    imagem: "/minidjj.webp",
  },
  {
    id: 3,
    titulo: "Sonhos eternos",
    categoria: "CUIDADOS",
    descricao:
      "Identifica, dentro de instituições de longa permanência, os desejos e memórias de idosos para realizar sonhos que tragam alegria e paz.",
    imagem: "/rosas.webp",
  },
  {
    id: 4,
    titulo: "Um dia de Sonho",
    categoria: "CAMPANHAS",
    descricao:
      "Campanhas especiais como Natal, Páscoa e Dia das Crianças, focadas em criar memórias inesquecíveis através de eventos temáticos.",
    imagem: "/coelho.webp",
  },
  {
    id: 5,
    titulo: "Sonho Mensal",
    categoria: "VOLUNTARIADO",
    descricao:
      "Arrecadação de fundos e apoio para um projeto específico todo mês, mobilizando voluntários para metas rápidas e eficazes.",
    imagem: "/mensal.webp",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjetosAndamento() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <section className="relative py-8 px-6 overflow-hidden">
      {/* Background Decorativo Estilo Glass */}
      <div className="absolute inset-0 bg-white/20 -z-10" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-lilac-main/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-baby-blue/20 blur-[120px] rounded-full -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Container Central com Glassmorphism */}
        <div className="backdrop-blur-s bg-lilac-main/30 border border-white/40 shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16">
          <div className="mb-16 text-center">
            <span className="text-[#37a9f0] font-black tracking-widest uppercase text-s">
              Portfólio de Amor
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-800 mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Projetos em{" "}
              <span className="italic font-[#37a9f0]">Andamento</span>
            </h2>
            <div className="mx-auto h-1.5 w-20 rounded-full bg-[#37a9f0]" />
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-10" // Mudança aqui: flexbox para centralizar
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projetos.map((projeto) => (
              <motion.div
                key={projeto.id}
                variants={cardVariants}
                // Definimos a largura baseada na coluna: 100% (mobile), 1/2 (tablet), 1/3 (desktop)
                className="relative h-[250px] w-full sm:w-[calc(80%-20px)] lg:w-[calc(33.333%-27px)] cursor-pointer group"
                onClick={() => toggleFlip(projeto.id)}
              >
                <motion.div
                  className="relative h-full w-full shadow-2xl rounded-[2.5rem]"
                  animate={{ rotateY: flippedCards.has(projeto.id) ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRENTE DO CARD */}
                  <div
                    className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/80 backdrop-blur-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      {" "}
                      {/* Adicionado overflow-hidden aqui */}
                      <Image
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        fill // Faz a imagem ocupar todo o espaço do pai relativo
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={projeto.id <= 3} // Carrega os 3 primeiros cards mais rápido
                      />
                      {/* Overlay Gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      {/* Conteúdo da Frente */}
                      <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {projeto.titulo}
                        </h3>
                        <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-white/20 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/30">
                          <span>CLIQUE AQUI</span>

                          <div className="w-4 h-4 border-t-2 border-r-2 border-white/90 transform rotate-45 animate-ping-slow rounded-sm" />
                        </div>

                        {/* ... restante do indicador de clique ... */}
                      </div>
                    </div>
                  </div>

                  {/* VERSO DO CARD (Forte e Vibrante) */}
                  <div
                    className="absolute inset-0 flex flex-col justify-center rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-[#37a9f0] to-lilac-main p-6 sm:p-10 text-white shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Título: Menor no mobile (2xl), maior no desktop (3xl) */}
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {projeto.titulo}
                    </h3>

                    {/* Texto: Menor (xs/sm) no mobile para caber tudo */}
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 mb-4 sm:mb-8 font-['Poppins'] overflow-y-auto">
                      {projeto.descricao}
                    </p>

                    {/* Botão: Padding menor no mobile */}
                    <button className="w-full py-3 sm:py-4 bg-white text-[#37a9f0] font-black rounded-full shadow-lg hover:scale-105 transition-transform uppercase text-[10px] sm:text-xs tracking-widest mt-auto">
                      Voltar
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
