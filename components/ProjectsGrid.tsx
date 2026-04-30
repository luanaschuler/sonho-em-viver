"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const projetos = [
  {
    id: 1,
    titulo: "Sonho Genuíno",
    categoria: "EDUCAÇÃO",
    descricao:
      "Investigamos os sonhos genuínos de pessoas em vulnerabilidade social, identificando o que realmente desejam para suas vidas e criando um plano de ação personalizado.",
    imagem: "/diadesabao.jpeg",
  },
  {
    id: 2,
    titulo: "O que sonho ser",
    categoria: "INFANTIL",
    descricao:
      "Profissionais capacitados vão nas instituições que abriguem menores de idade para incentivar seus sonhos e mostrar novos horizontes.",
    imagem: "/minidjj.jpg",
  },
  {
    id: 3,
    titulo: "Sonhos eternos",
    categoria: "CUIDADOS",
    descricao:
      "Identifica, dentro de instituições de longa permanência, os desejos e memórias de idosos para realizar sonhos que tragam alegria e paz.",
    imagem: "/projeto3.jpg",
  },
  {
    id: 4,
    titulo: "Um dia de Sonho",
    categoria: "CAMPANHAS",
    descricao:
      "Campanhas especiais como Natal, Páscoa e Dia das Crianças, focadas em criar memórias inesquecíveis através de eventos temáticos.",
    imagem: "/projeto3.jpg",
  },
  {
    id: 5,
    titulo: "Sonho Mensal",
    categoria: "VOLUNTARIADO",
    descricao:
      "Arrecadação de fundos e apoio para um projeto específico todo mês, mobilizando voluntários para metas rápidas e eficazes.",
    imagem: "/projeto3.jpg",
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
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Decorativo Estilo Glass */}
      <div className="absolute inset-0 bg-white/20 -z-10" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-lilac-main/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-baby-blue/20 blur-[120px] rounded-full -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Container Central com Glassmorphism */}
        <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16">
          <div className="mb-16 text-center">
            <span className="text-[#37a9f0] font-black tracking-widest uppercase text-xs">
              Portfólio de Amor
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-800 mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Projetos em <span className="italic">Andamento</span>
            </h2>
            <div className="mx-auto h-1.5 w-20 rounded-full bg-[#37a9f0]" />
          </div>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projetos.map((projeto) => (
              <motion.div
                key={projeto.id}
                variants={cardVariants}
                className="relative h-[450px] w-full cursor-pointer group"
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
                    <div className="relative h-full w-full">
                      <img
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                      {/* Conteúdo da Frente */}
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                        <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-2 block">
                          {projeto.categoria}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {projeto.titulo}
                        </h3>

                        {/* Indicador de Clique/Giro */}
                        <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-white/20 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/30">
                          <span>Clique para ver detalhes</span>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 4,
                              ease: "linear",
                            }}
                          >
                            🔄
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* VERSO DO CARD (Forte e Vibrante) */}
                  <div
                    className="absolute inset-0 flex flex-col justify-center rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-[#37a9f0] to-lilac-main p-10 text-white shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {projeto.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90 mb-8 font-['Poppins']">
                      {projeto.descricao}
                    </p>

                    <button className="w-full py-4 bg-white text-[#37a9f0] font-black rounded-full shadow-lg hover:scale-105 transition-transform uppercase text-xs tracking-widest">
                      Quero Ajudar
                    </button>

                    <button
                      className="mt-4 w-full text-white/80 text-[10px] font-bold uppercase tracking-widest"
                      onClick={() => toggleFlip(projeto.id)}
                    >
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
