"use client";
import { motion } from "framer-motion";

export default function BackgroundClouds() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Nuvem esquerda */}
      <motion.img
        src="/perfect-clouds.png"
        alt="Nuvem Perfeita"
        animate={{
          x: [-50, 50, -50],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[5%] w-[35%] opacity-50 blur-none"
      />

      {/* Nuvem direita (igual à esquerda) */}
      <motion.img
        src="/perfect-clouds.png"
        alt="Nuvem Perfeita"
        animate={{
          x: [-50, 50, -50],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] right-[5%] w-[35%] opacity-50 blur-none"
      />
    </div>
  );
}
