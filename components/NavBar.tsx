"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Container com formato "Cloudy" e Glassmorphism */}
      <div
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] 
                      rounded-[2rem] md:rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300"
      >
        {/* --- LOGO REDUZIDA --- */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Logo Sonho em Viver"
              width={100}
              height={100}
              className="object-contain hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* --- LINKS (Desktop) --- */}
        <div className="hidden lg:flex gap-6 lg:gap-8 text-xs lg:text-sm font-bold text-slate-700 tracking-wide">
          <Link href="#sobre" className="hover:text-[#37a9f0] transition">
            SOBRE
          </Link>
          <Link href="#projetos" className="hover:text-[#37a9f0] transition">
            PROJETOS
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-[#37a9f0] transition"
          >
            DEPOIMENTOS
          </Link>
          <Link href="#creators" className="hover:text-[#37a9f0] transition">
            CONHEÇA OS CRIADORES
          </Link>
        </div>

        {/* --- BOTÃO CTA (Desktop) --- */}
        <a
        href="https://api.whatsapp.com/send/?phone=554784050409&text&type=phone_number&app_absent=0" target='_blank'
          className="hidden lg:block bg-[#37a9f0] text-white px-5 py-2.5 rounded-full text-xs font-black 
            shadow-[0_4px_15px_rgba(55,169,240,0.4)] hover:bg-[#2d91d1] 
            hover:shadow-[0_6px_20px_rgba(55,169,240,0.6)] transition-all active:scale-95"
        >
          DOE AGORA
        </a>

        {/* --- HAMBURGER BUTTON (Mobile/Tablet) --- */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 relative w-8 h-8"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* --- MENU MOBILE/TABLET --- */}
      {isOpen && (
        <div
          className="absolute top-full mt-4 left-0 right-0 backdrop-blur-md bg-white/40 border border-white/50 
                        rounded-3xl shadow-2xl overflow-hidden lg:hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {/* Links */}
            <Link
              href="#sobre"
              className="py-3 px-4 text-sm font-bold text-slate-700 hover:text-[#37a9f0] hover:bg-white/30 rounded-lg transition"
              onClick={closeMenu}
            >
              SOBRE
            </Link>
            <Link
              href="#projetos"
              className="py-3 px-4 text-sm font-bold text-slate-700 hover:text-[#37a9f0] hover:bg-white/30 rounded-lg transition"
              onClick={closeMenu}
            >
              PROJETOS
            </Link>
            <Link
              href="#testimonials"
              className="py-3 px-4 text-sm font-bold text-slate-700 hover:text-[#37a9f0] hover:bg-white/30 rounded-lg transition"
              onClick={closeMenu}
            >
              DEPOIMENTOS
            </Link>
            <Link
              href="#creators"
              className="py-3 px-4 text-sm font-bold text-slate-700 hover:text-[#37a9f0] hover:bg-white/30 rounded-lg transition"
              onClick={closeMenu}
            >
              CONHEÇA OS CRIADORES
            </Link>
            <Link
              href="#donos"
              className="py-3 px-4 text-sm font-bold text-slate-700 hover:text-[#37a9f0] hover:bg-white/30 rounded-lg transition"
              onClick={closeMenu}
            >
              DONOS
            </Link>

            {/* Divider */}
            <div className="h-px bg-white/30" />

            {/* CTA Button */}
            <button
              className="w-full bg-[#37a9f0] text-white px-5 py-3 rounded-full text-sm font-black 
                         shadow-[0_4px_15px_rgba(55,169,240,0.4)] hover:bg-[#2d91d1] 
                         hover:shadow-[0_6px_20px_rgba(55,169,240,0.6)] transition-all active:scale-95"
              onClick={closeMenu}
            >
              DOE AGORA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
