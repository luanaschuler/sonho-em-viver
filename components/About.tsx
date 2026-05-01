"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-16 md:py-28 px-6 overflow-hidden"
    >
      {/* Background Decorativo para realçar o Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lilac-main/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Container Principal com Glassmorphism */}
        <div className="backdrop-blur-md bg-white/10 border border-white/40 shadow-2xs rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 w-full text-left">
            <span className="text-[#37a9f0] font-black tracking-[0.2em] uppercase text-xs mb-3 block">
              Quem Somos
            </span>
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

            {/* Cards com Cores Fortes */}
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

          {/* Lado da Imagem */}
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

            {/* Detalhe flutuante para reforçar o tema mágico */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-baby-blue/20 blur-2xl rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-[#37a9f0] font-black tracking-[0.3em] uppercase text-xs mb-3 inline-block">
              Novidades
            </span>
            <h3
              className="text-3xl md:text-4xl font-bold text-slate-800 mt-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Fique por dentro das últimas ações
            </h3>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-['Poppins'] opacity-90">
              Aqui você pode compartilhar notícias rápidas, atualizações de
              eventos e pequenas vitórias que mostram como o Sonho em Viver
              transforma realidades.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#37a9f0] font-black">
              Conteúdo novo em destaque
            </p>
          </div>

          <div className="relative min-h-[360px] rounded-[2rem] bg-white/80 border border-white/50 shadow-2xl p-6 md:p-8 overflow-hidden">
            <span className="text-[#37a9f0] font-black tracking-[0.3em] uppercase text-xs mb-3 block">
              Destaque visual
            </span>

            <div className="relative h-full pt-4 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo Sonho em Viver"
                width={80}
                height={80}
                className="relative z-20 rounded-full bg-white p-2 shadow-xl"
              />

              <div className="absolute left-4 top-8 w-36 h-36 rounded-full bg-[#37a9f0]/10 border border-[#37a9f0]/30 flex items-center justify-center p-4 text-center text-sm text-slate-700 shadow-lg">
                <span className="font-bold block">Notícia 1</span>
                <span className="block text-xs mt-1">Novo projeto</span>
              </div>

              <div className="absolute right-4 top-16 w-44 h-44 rounded-full bg-[#eff6ff] border border-[#37a9f0]/30 flex items-center justify-center p-4 text-center text-sm text-slate-700 shadow-lg">
                <span className="font-bold block">Notícia 2</span>
                <span className="block text-xs mt-1">Evento em breve</span>
              </div>

              <div className="absolute left-8 bottom-10 w-36 h-36 rounded-full bg-[#ede9fe] border border-[#a78bfa]/30 flex items-center justify-center p-4 text-center text-sm text-slate-700 shadow-lg">
                <span className="font-bold block">Notícia 3</span>
                <span className="block text-xs mt-1">Gestos de carinho</span>
              </div>

              <div className="absolute right-10 bottom-12 w-32 h-32 rounded-full bg-[#f8fafc] border border-[#60a5fa]/30 flex items-center justify-center p-4 text-center text-sm text-slate-700 shadow-lg">
                <span className="font-bold block">Notícia 4</span>
                <span className="block text-xs mt-1">História viva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
