import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Container com formato "Cloudy" e Glassmorphism */}
      <div
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] 
                      rounded-[2rem] md:rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300"
      >
        {/* --- LOGO REDUZIDA --- */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo Sonho em Viver"
              width={100} // Reduzido para um visual mais clean
              height={100}
              className="object-contain hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* --- LINKS --- */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-bold text-slate-700 tracking-wide">
          <Link href="#sobre" className="hover:text-[#37a9f0] transition">
            SOBRE
          </Link>
          <Link href="#projetos" className="hover:text-[#37a9f0] transition">
            PROJETOS
          </Link>
          <Link href="#contato" className="hover:text-[#37a9f0] transition">
            CONTATO
          </Link>
          <Link href="#novidades" className="hover:text-[#37a9f0] transition">
            NOVIDADES
          </Link>
          <Link href="#donos" className="hover:text-[#37a9f0] transition">
            DONOS
          </Link>
        </div>

        {/* --- BOTÃO CTA (Azul do Hero) --- */}
        <button
          className="bg-[#37a9f0] text-white px-5 py-2.5 rounded-full text-xs font-black 
                           shadow-[0_4px_15px_rgba(55,169,240,0.4)] hover:bg-[#2d91d1] 
                           hover:shadow-[0_6px_20px_rgba(55,169,240,0.6)] transition-all active:scale-95"
        >
          DOE AGORA
        </button>
      </div>
    </nav>
  );
}
