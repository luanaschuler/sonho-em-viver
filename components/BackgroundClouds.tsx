"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BackgroundClouds() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Nuvem esquerda */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative top-[10%] left-[5%] w-[35%] opacity-90 blur-sm"
      >
        <Image
          src="/nuvens-fofas.png"
          alt="Nuvem Perfeita"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Nuvem direita (igual à esquerda) */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] right-[5%] w-[35%] opacity-90 blur-sm"
      >
        <Image
          src="/nuvens-fofas.png"
          alt="Nuvem Perfeita"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
