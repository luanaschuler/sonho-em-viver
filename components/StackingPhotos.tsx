"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fotos = [
  { id: 1, src: "/capahero.jpg", rotacao: "-12deg", offset: "-30px" },
  { id: 2, src: "/natal-asilo.jpg", rotacao: "8deg", offset: "0px" },
  { id: 3, src: "/capahero2.jpg", rotacao: "-6deg", offset: "30px" },
  {
    id: 4,
    src: "/natal-kids.jpg",
    rotacao: "10deg",
    offset: "60px",
  }, // Adicionei mais uma para testar
];

// 1. ANIMAÇÃO BEM MAIS LENTA (Configuração do Pai)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Aumentamos o atraso para 0.8s entre cada foto
      staggerChildren: 0.5,
    },
  },
};

// 2. ANIMAÇÃO INDIVIDUAL MAIS SUAVE (Configuração dos Filhos)
const fotoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80, // Começa mais baixo
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
    y: customOffset, // Move para o seu deslocamento vertical único
    scale: 1,
    rotate: customRotate, // Aplica a rotação única
    transition: {
      type: "spring",
      stiffness: 60, // Menos rígido (mais lento)
      damping: 18, // Mais amortecimento (evita balanço excessivo)
      // Opcional: usar 'tween' para controle total da duração
      // type: "tween", ease: "easeInOut", duration: 1.5
    },
  }),
};

export default function SpacedStackedPhotos() {
  return (
    <section className="pt-8 pb-24 bg-[#FAFBFF] flex justify-center items-center overflow-hidden border-[#37a9f0]/20 border-4">
      <div className="relative w-full max-w-7xl px-6 flex flex-col items-center">
        <h2 className="mb-16 text-center text-5xl font-bold text-[#2D2A4A] font-[Poppins]">
          Momentos que{" "}
          <span className="text-[#37a9f0] font-['Playfair_Display'] italic">
            Transformam
          </span>
        </h2>

        {/* CONTAINER PAI (Grid para espalhar as fotos) */}
        {/* Usamos grid e gap para que todas fiquem visíveis lateralmente */}
        <motion.div
          className="relative grid grid-cols-1 s:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {fotos.map((foto) => (
            <motion.div
              key={foto.id}
              className="relative flex justify-center items-center"
              variants={fotoVariants}
              // Passamos rotação e offset vertical para a variante
              custom={{ customRotate: foto.rotacao, customOffset: foto.offset }}
            >
              {/* A MOLDURA DA FOTO (Glassmorphism sutil) */}
              <div className="bg-white p-2 md:p-3 pb-6 md:pb-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-black/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Image
                  src={foto.src}
                  alt={`Foto ${foto.id}`}
                  width={240}
                  height={320}
                  className="h-48 w-40 md:h-72 md:w-56 lg:h-80 lg:w-60 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
