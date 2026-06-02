"use client";

import NextImage from "next/image";
import Link from "next/link";

// Importações das imagens
//  

export default function TopBanners() {
  return (
    <section className="flex w-full flex-col leading-[0] z-[100]">
      {/* Primeiro Banner */}
      <div className="relative w-full">
        {/* Desktop */}
        <Link
          href="https://institutosonhoemviver.doardigital.com.br/doacao"
          target="_blank" // Abre em nova aba (opcional)
          className="relative w-full block hover:opacity-90 transition-opacity"
        >
          <NextImage
            src="/novo-sonho-desktop.webp"
            alt="Banner Principal"
            width={1920} // Dimensão original
            height={330} // Dimensão original
            priority
            className="hidden w-full h-auto md:block"
          />
          {/* Mobile */}
          <NextImage
            src="/novo-sonho-mobile.webp"
            alt="Banner Principal Mobile"
            width={1920} // Dimensão original
            height={330} // Dimensão original
            priority
            className="block w-full h-auto md:hidden"
          />
        </Link>
      </div>
    </section>
  );
}
