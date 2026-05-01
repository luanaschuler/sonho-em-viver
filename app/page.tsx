"use client";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StackedPhotos from "@/components/StackingPhotos";
import StackedPhotosPart2 from "@/components/StackingPhotosPart2";
import StackedPhotosPart3 from "@/components/StackingPhotosPart3";

import ProjectsGrid from "@/components/ProjectsGrid";
import Testimonials from "@/components/Testimonials";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // Removi a cor de fundo daqui para garantir que as nuvens negativas apareçam
    <div className="relative min-h-screen bg-[#FAFBFF]">
      {/* 1. CAMADA DE FUNDO (NUVENS) */}
      {/* Usamos -z-50 para empurrar bem para trás de tudo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
        <motion.div
          animate={{ x: [-100, 100, -100], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-lilac-main/20 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ x: [100, -100, 100], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-baby-blue/20 blur-[120px] rounded-full"
        />
      </div>

      {/* 2. CAMADA DE CONTEÚDO (TEXTOS E FOTOS) */}
      {/* O segredo: relative + z-index positivo ALTO */}
      <main className="relative z-20 w-full">
        <Navbar />
        <Hero />
        <About />
        <StackedPhotos />
        <ProjectsGrid />
        <StackedPhotosPart2 />
        <Testimonials />
        <StackedPhotosPart3 />
        {/* Garanta que dentro do componente Creators, as fotos não tenham z-index negativo */}
        <Creators />
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto backdrop-blur-none bg-linear-to-br from-lilac-main/40 to-baby-blue/40 p-12 rounded-[3rem] text-center border border-white/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#7d148b] mb-6 font-['Playfair_Display'] italic">
              Pronto para fazer parte dessa história?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://api.whatsapp.com/send/?phone=554784050409&text&type=phone_number&app_absent=0" target='_blank' className="bg-transparent text-[#7d148b] px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform cursor-pointer font-['Poppins']">
                Seja Voluntário
              </a>
              <a href="https://api.whatsapp.com/send/?phone=554784050409&text&type=phone_number&app_absent=0" target='_blank' className="bg-transparent text-[#7d148b] px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform font-['Poppins'] cursor-pointer">
                Quero Doar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
