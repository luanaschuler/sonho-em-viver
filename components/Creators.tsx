"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const idealizadores = [
  {
    nome: "Marcio Volkmann",
    cargo: "Colaborador e Compositor",
    bio: "Colaborador do Projeto Sonho em Viver praticamente desde o seu início. É compositor e escritor, tendo composto o Hino Oficial da Cidade de Blumenau.",
    foto: "/marcio.jpeg",
  },
  {
    nome: "Adriana Constante",
    cargo: "Fundadora e Idealizadora",
    bio: "Empresária eleita a Blumenauense do Ano em 2023. Sua liderança perseverante é o pilar que sustenta e expande o alcance do Sonho em Viver.",
    foto: "/adri2.jpg",
  },
  {
    nome: "Cristian Constante",
    cargo: "Cofundador e Empresário",
    bio: "Responsável pela logística e operacionalização das ações. Leva alegria através da música e presença ativa em cada visita aos nossos idosos e crianças.",
    foto: "/cristian2.jpeg",
  },
];

export default function SectionIdealizadores() {
  return (
    <section id="donos" className="relative py-24 px-6 overflow-hidden">
      {/* Background Decorativo para o Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-baby-blue/10 blur-[150px] rounded-full -z-10" />

      <div className="relative mx-auto max-w-7xl">
        {/* CONTAINER PRINCIPAL GLASSMORPHISM */}
        <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-20">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-[#37a9f0] font-black tracking-[0.3em] uppercase text-xs">
              Propósito e Gestão
            </span>
            <h2
              className="mt-4 text-3xl md:text-5xl font-bold text-slate-800 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quem está por trás <br className="hidden md:block" />
              do <span className="italic">Sonho em Viver?</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#37a9f0]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {idealizadores.map((pessoa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center rounded-[2.5rem] border border-white/60 bg-white/50 p-8 pt-28 text-center shadow-xl backdrop-blur-xl group hover:bg-white/70 transition-all duration-500"
              >
                {/* Foto Aumentada sobreposta ao card */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-40 w-40 overflow-hidden rounded-full border-[6px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={pessoa.foto}
                    alt={pessoa.nome}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                  {pessoa.nome}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-black text-[#37a9f0] uppercase tracking-widest">
                  {pessoa.cargo}
                </p>

                <p className="mt-6 text-sm leading-relaxed text-slate-600 font-['Poppins'] opacity-90">
                  {pessoa.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
