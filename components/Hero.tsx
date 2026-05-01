"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundClouds from "./BackgroundClouds";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 px-6 py-8 md:py-8 overflow-hidden">
      <BackgroundClouds />

      {/* LADO ESQUERDO: TEXTO (50% da largura no desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 flex flex-col items-start md:items-end md:text-right p-4 lg:p-12 pt-24 md:pt-4"
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-[72px] text-slate-800 leading-[1.1] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Crie Sonhos, <br />
          <span className="italic">Mude Vidas.</span>
        </h1>

        <p className="font-['Poppins'] text-sm md:text-base lg:text-lg text-slate-600 max-w-md mb-6 opacity-90">
          Conheça o projeto{" "}
          <strong className="font-['Playfair_Display'] font-bold text-[#37a9f0]">
            Sonho em Viver
          </strong>{" "}
          e saiba como nós ajudamos crianças e idosos a realizarem sonhos de
          vida.
        </p>

        {/* GRUPO DE BOTÕES (Menores para caberem lado a lado) */}
        <div className="flex flex-row flex-wrap gap-3 md:justify-end w-full">
          {/* Botão 1 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-lilac-main to-baby-blue rounded-full blur-md opacity-60" />
            <a
              href="https://api.whatsapp.com/send/?phone=554784050409&text&type=phone_number&app_absent=0"
              target="_blank"
              className="relative px-6 py-3 bg-white text-slate-800 text-xs md:text-sm font-bold rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap"
            >
              <span className="w-5 h-5 rounded-full bg-[#37a9f0] flex items-center justify-center text-white text-[10px]">
                ★
              </span>
              AJUDE AGORA
            </a>
          </div>

          {/* Botão 2 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-lilac-main to-baby-blue rounded-full blur-md opacity-40" />
            <a
              href="https://instagram.com/sonhoemviver"
              target="_blank"
              className="relative px-6 py-3 bg-white text-slate-800 text-xs md:text-sm font-bold rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap"
            >
              <span className="w-5 h-5 rounded-full bg-[#37a9f0] flex items-center justify-center text-white text-[10px]">
                ♥
              </span>
              SAIBA MAIS
            </a>
          </div>
        </div>
      </motion.div>

      {/* LADO DIREITO: IMAGEM (50% da largura no desktop) */}
      <div className="relative z-10 flex justify-center md:justify-start w-full px-4">
        <div className="w-full max-w-full lg:max-w-[90%] h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
          <Image
            src="/fotohero.webp"
            alt="foto hero"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ORBES COLORIDAS */}
      <div className="absolute top-0 left-[-5%] w-[500px] h-[500px] bg-lilac-main blur-[120px] opacity-30 rounded-full" />
      <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] bg-baby-blue blur-[120px] opacity-70 rounded-full" />
    </section>
  );
}
