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
    </section>
  );
}
