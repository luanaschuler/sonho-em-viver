"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Larissa Souza",
    role: "Mãe atendida pelo projeto",
    quote:
      "O apoio do Sonho em Viver trouxe mais leveza e esperança para nossa família. Hoje vemos sonhos se tornando realidade todos os dias.",
  },
  {
    name: "Rafael Oliveira",
    role: "Voluntário há 2 anos",
    quote:
      "Participar das ações foi transformador. A energia das pessoas e o carinho das equipes mostram que este projeto faz o bem de verdade.",
  },
  {
    name: "Patrícia Lima",
    role: "Educadora Comunitária",
    quote:
      "Os projetos entregam cuidado e carinho de forma criativa. Ver cada criança brilhar mudou o meu jeito de ver o mundo.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 -z-10" />

      <div className="relative mx-auto max-w-7xl">
        {/* CONTAINER GLASSMORPHISM PARA DEPOIMENTOS */}
        <div className="backdrop-blur-md bg-baby-blue/30 border border-white/40 shadow-2xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 mb-16">
          <div className="mb-12 text-center">
            <span className="text-[#37a9f0] uppercase tracking-[0.4em] text-s font-black">
              Depoimentos
            </span>
            <h2
              className="mt-4 text-3xl md:text-5xl font-bold text-slate-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Histórias que{" "}
              <span className="italic text-[#37a9f0]">Inspiram</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={index}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/50 backdrop-blur-xl p-8 shadow-xl flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <span className="text-5xl text-[#37a9f0] opacity-40 font-serif leading-none">
                    “
                  </span>
                  <p className="text-slate-700 text-base md:text-lg italic leading-relaxed mb-6 -mt-4">
                    {item.quote}
                  </p>
                </div>
                <div className="border-t border-slate-200/50 pt-4">
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs font-bold text-[#37a9f0] uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CHAMADA PARA VOLUNTÁRIOS (LAYOUT 50/50) */}
        <div className="backdrop-blur-md bg-white/40 border border-white/50 shadow-2xl rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col md:flex-row items-center">
          {/* Lado Esquerdo: Imagem */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
            <Image
              src="/time.jpg"
              alt="Seja um voluntário"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="w-full md:w-1/2 p-10 md:p-16 text-left">
            <span className="text-lilac-main font-black tracking-widest uppercase text-s">
              Faça a diferença
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-slate-800 mt-4 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Torne-se um <span className="italic">Voluntário</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-['Poppins']">
              Precisamos de mãos dispostas e corações abertos. Não importa sua
              habilidade, seu tempo e carinho podem mudar o destino de alguém
              hoje mesmo.
            </p>

            <button className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#37a9f0] text-white font-black rounded-full shadow-lg hover:shadow-[#37a9f0]/40 transition-all hover:-translate-y-1">
              QUERO ME JUNTAR
              <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
