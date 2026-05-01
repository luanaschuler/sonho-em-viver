"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-16 md:py-2 px-6 overflow-hidden"
    >
      {/* Background Decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lilac-main/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Container Superior (Quem Somos) */}
        <div className="backdrop-blur-md bg-white/10 border border-white/40 shadow-2xs rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 w-full text-left">
            
            <h2
              className="text-3xl md:text-5xl font-bold text-slate-800 mt-2 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nossa jornada é movida por <br className="hidden lg:block" />
              <span className="italic text-[#37a9f0]">
                corações voluntários.
              </span>
            </h2>
            <p className="font-['Poppins'] text-slate-600 leading-relaxed mb-8 opacity-90 text-lg">
              A ONG Sonho em Viver nasceu da necessidade de apoiar crianças e
              famílias em situação de vulnerabilidade, oferecendo não apenas
              recursos, mas dignidade e perspectiva.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-[#37a9f0] shadow-[0_10px_20px_rgba(55,169,240,0.3)] border border-white/20"
              >
                <h4 className="font-black text-3xl text-white">+3.000</h4>
                <p className="text-sm font-bold text-white/90 uppercase tracking-wider">
                  Vidas Impactadas
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-lilac-main shadow-[0_10px_20px_rgba(180,150,255,0.3)] border border-white/20"
              >
                <h4 className="font-black text-3xl text-white">50+</h4>
                <p className="text-sm font-bold text-white/90 uppercase tracking-wider">
                  Instituições Parceiras
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white/50"
            >
              <Image
                src="/sabao.jpg"
                alt="Impacto social"
                width={400}
                height={450}
                className="w-full h-64 md:h-[450px] object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção Inferior: Importância de Sonhar + Notícias */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Texto Informativo */}
          <div>
            <span className="text-[#37a9f0] font-black tracking-[0.3em] lg:text-xl uppercase text-xs mb-3 inline-block">
              A importância de sonhar
            </span>
            <h3
              className="text-xl md:text-2xl font-bold text-slate-800 mt-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Você sabia que somente em SC, 1200 crianças e adolescentes vivem
              em serviços de acolhimento?
            </h3>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-['Poppins'] opacity-90 text-justify">
              Em todo o Brasil, 34 mil vozes aguardam uma oportunidade. Segundo
              o Instituto Mobilidade e Desenvolvimento Social, a jornada para
              superar a vulnerabilidade pode levar até nove gerações — um ciclo
              que muitas vezes silencia a capacidade de sonhar. Imagine esse
              desafio para quem vive em serviços de acolhimento, enfrentando a
              invisibilidade social diariamente.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#37a9f0] font-black text-justify">
              É aqui que o Instituto Sonho em Viver transforma essa realidade.
              Como diz nosso jingle: nós sonhamos com você. Atuamos para
              devolver a dignidade e o direito ao futuro, tornando visíveis
              aqueles que a sociedade escolheu ignorar e provando que, com
              apoio, todo sonho é alcançável.
            </p>
          </div>

          {/* Card de Notícias */}
          <div className="flex flex-col">
            {/* Título fora do card branco */}
            <span className="text-[#37a9f0] font-black tracking-[0.3em] lg:text-xl uppercase text-xs mb-4 block ml-2">
              Quem somos nós
            </span>

            {/* O Card Branco agora contém apenas os círculos */}
            <div className="relative h-[480px] w-full rounded-[2rem] overflow-hidden">
              <div className="relative h-full w-full flex items-center justify-center">
                {/* Logo Central */}
                <Image
                  src="/logo.png"
                  alt="Logo Sonho em Viver"
                  width={200}
                  height={80}
                  className="relative z-20 rounded-full p-2 "
                />

                {/* Notícias (Círculos) - Posicionados dentro do overflow-hidden */}
                <div className="absolute left-16 top-4 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#37a9f0]/20 border border-[#37a9f0]/30 flex flex-col items-center justify-center p-4 text-center shadow-lg">
                  <span className="font-bold text-slate-700 text-sm">
                    Fundado em 2014
                  </span>
                </div>

                <div className="absolute right-10 top-16 w-36 h-36 md:w-36 md:h-36 rounded-full bg-[#a78bfa]/20 border border-[#a78bfa]/30 flex flex-col items-center justify-center p-4 text-center shadow-lg">
                  <span className="font-bold text-slate-700 text-sm">
                    Presente em 12 cidades
                  </span>
                </div>

                <div className="absolute left-8 bottom-12 w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#a78bfa]/20 border border-[#a78bfa]/30 flex flex-col items-center justify-center p-4 text-center shadow-lg">
                  <span className="font-bold text-slate-700 text-sm">
                    Atua em SC e RS
                  </span>
                </div>

                <div className="absolute right-20 bottom-8 w-28 h-28 md:w-40 md:h-40 rounded-full bg-[#37a9f0]/20 border border-[#60a5fa]/30 flex flex-col items-center justify-center p-4 text-center shadow-lg">
                  <span className="font-bold text-slate-700 text-sm">
                    +10.000 sonhos realizados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
