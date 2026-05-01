"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fotos = [
  { id: 1, src: "/capahero.webp", rotacao: "-6deg", offset: "-10px" },
  { id: 2, src: "/natal-asilo.webp", rotacao: "4deg", offset: "0px" },
  { id: 3, src: "/capahero2.webp", rotacao: "-4deg", offset: "10px" },
  { id: 4, src: "/natal-kids.webp", rotacao: "6deg", offset: "20px" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fotoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotate: 0,
  },
  visible: ({
    customRotate,
    customOffset,
  }: {
    customRotate: string;
    customOffset: string;
  }) => ({
    opacity: 1,
    y: customOffset,
    scale: 1,
    rotate: customRotate,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  }),
};

export default function SpacedStackedPhotos() {
  return (
    <section className="pt-8 pb-24 bg-[#FAFBFF] flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-7xl px-4 md:px-6 flex flex-col items-center">
        <h2 className="mb-12 text-center text-3xl md:text-5xl font-bold text-[#2D2A4A] font-[Poppins]">
          Momentos que{" "}
          <span className="text-[#37a9f0] font-['Playfair_Display'] italic">
            Transformam
          </span>
        </h2>

        {/* 
            GRID AJUSTADO: 
            grid-cols-2 garante dois cards por linha no mobile.
            lg:grid-cols-4 volta para 4 colunas em telas grandes.
        */}
        <motion.div
          className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {fotos.map((foto) => (
            <motion.div
              key={foto.id}
              className="relative flex justify-center items-center"
              variants={fotoVariants}
              custom={{ customRotate: foto.rotacao, customOffset: foto.offset }}
            >
              {/* 
                  MOLDURA ESTILIZADA:
                  - Removida a borda border-black/50
                  - Adicionada shadow-lg e shadow-blue-900/10 para profundidade
              */}
              <div className="bg-white p-1.5 md:p-3 pb-4 md:pb-8 rounded-xl md:rounded-2xl shadow-lg shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Image
                  src={foto.src}
                  alt={`Foto ${foto.id}`}
                  width={240}
                  height={320}
                  className="h-40 w-full md:h-72 md:w-56 lg:h-80 lg:w-60 object-cover rounded-lg md:rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
