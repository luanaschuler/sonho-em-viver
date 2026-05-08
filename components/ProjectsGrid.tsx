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
    modal:
      "Um dos projetos mais emocionantes do instituto. Através de um trabalho cuidadoso e investigativo, realizado com apoio de voluntários e profissionais parceiros, descobrimos os verdadeiros sonhos de pessoas em situação de vulnerabilidade — especialmente crianças e pacientes em cuidados paliativos — para transformá-los em momentos inesquecíveis de amor, acolhimento e felicidade.",
  },
  {
    id: 2,
    titulo: "O que Sonho ser",
    categoria: "INFANTIL",
    descricao:
      "Profissionais capacitados vão nas instituições que abriguem menores de idade para incentivar seus sonhos e mostrar novos horizontes.",
    imagem: "/minidjj.webp",
    modal:
      "Projeto voltado ao incentivo dos sonhos e da construção de futuro para crianças e adolescentes. A iniciativa busca despertar talentos, autoestima e perspectivas de vida, profissionalmente falando, mostrando que acreditar em si mesmo é o primeiro passo para transformar a própria história. ",
  },
  {
    id: 3,
    titulo: "Sonhos eternos",
    categoria: "CUIDADOS",
    descricao:
      "Identifica, dentro de instituições de longa permanência, os desejos e memórias de idosos para realizar sonhos que tragam alegria e paz.",
    imagem: "/rosas.webp",
    modal:
      "A pergunta que nos fizemos antes de criar este programa foi simples, mas extremamente importante: por que um idoso deveria deixar de fazer aquilo que ama apenas por estar vivendo em uma instituição de acolhimento? Todos nós sabemos que realizar atividades que nos dão prazer aumenta significativamente nossa alegria, autoestima, saúde mental e vontade de viver. Pensando nisso, o Instituto Sonho em Viver desenvolveu um projeto voltado especialmente à valorização da vida e da individualidade dos idosos. Através da atuação de profissionais capacitados, buscamos identificar quais atividades, hábitos e momentos eles mais sentem falta — coisas simples, mas cheias de significado, que faziam parte de suas rotinas antes da institucionalização. A partir dessa escuta sensível, promovemos oficinas, cursos, interações e experiências que resgatam memórias afetivas, estimulam habilidades e devolvem propósito, alegria e qualidade de vida. Porque acreditamos que nunca é tarde para sonhar, viver novas experiências e sentir-se verdadeiramente acolhido. ",
  },
  {
    id: 4,
    titulo: "Sonho Cultural",
    categoria: "CAMPANHAS",
    descricao:
      "Campanhas especiais como Natal, Páscoa e Dia das Crianças, focadas em criar memórias inesquecíveis através de eventos temáticos.",
    imagem: "/coelho.webp",
    modal: "O projeto Sonho Cultural nasceu para levar emoção, inclusão e acesso à cultura para pessoas em situação de vulnerabilidade social. Através de parcerias com produtores culturais, artistas, empresas e organizadores de eventos, o Instituto Sonho em Viver proporciona a crianças, idosos e famílias acolhidas por instituições sociais a oportunidade de vivenciarem momentos especiais em espetáculos culturais, apresentações artísticas, shows e outras experiências enriquecedoras nas cidades onde atuamos. Mais do que assistir a um evento, essas pessoas passam a sentir-se incluídas, valorizadas e parte da sociedade, fortalecendo sua autoestima e criando memórias inesquecíveis. Além disso, o projeto também estimula a solidariedade através do “ingresso solidário”, promovendo a arrecadação de donativos que posteriormente são destinados às instituições parceiras atendidas pelo Sonho em Viver. Assim, a cultura se transforma também em uma poderosa ferramenta de amor, impacto social e transformação de vidas. "
  },
  {
    id: 5,
    titulo: "Um Dia de Sonho",
    categoria: "VOLUNTARIADO",
    descricao:
      "Arrecadação de fundos e apoio para um projeto específico todo mês, mobilizando voluntários para metas rápidas e eficazes.",
    imagem: "/mensal.webp",
    modal: "Mais do que um simples evento ou entrega de presentes, este projeto oferece experiências únicas e inesquecíveis para crianças, idosos e famílias atendidas pelo instituto. São dias preparados com muito amor, repletos de surpresas, diversão, acolhimento e felicidade. Entram nesse projeto, as campanhas de Páscoa, Natal, Dia das Crianças, Dia das mulheres, dentre outros."
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjetosAndamento() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [modalCardId, setModalCardId] = useState<number | null>(null);

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

                    {/* Botões */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalCardId(projeto.id);
                        }}
                        className="flex-1 py-2 bg-white/20 text-white font-black rounded-full shadow-lg hover:scale-105 transition-transform uppercase text-[10px] sm:text-xs tracking-widest"
                      >
                        SAIBA MAIS
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(projeto.id);
                        }}
                        className="flex-1 py-2 bg-white text-[#37a9f0] font-black rounded-full shadow-lg hover:scale-105 transition-transform uppercase text-[10px] sm:text-xs tracking-widest"
                      >
                        Voltar
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {modalCardId && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 w-full h-full"
          onClick={() => setModalCardId(null)}
        >
          <div
            className="bg-lilac-main/90 p-10 rounded-lg max-w-2xl w-full mx-4 shadow-2xl max-h-[80vh] overflow-y-auto "
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4 font-black tracking-widest text-[#37a9f0] uppercase">
              {projetos.find((p) => p.id === modalCardId)?.titulo}
            </h3>
            <p className="text-lg font-medium mb-4 font-black tracking-widest text-black/90 text-justify font-['Poppins']">
              {projetos.find((p) => p.id === modalCardId)?.modal}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setModalCardId(null)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
