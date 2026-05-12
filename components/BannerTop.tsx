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
            src="/Desktop_Banner1_1920x330.webp"
            alt="Banner Principal"
            width={1920} // Dimensão original
            height={330} // Dimensão original
            priority
            className="hidden w-full h-auto md:block"
          />
          {/* Mobile */}
          <NextImage
            src="/Mobile_Banner1_900x930.webp"
            alt="Banner Principal Mobile"
            width={1920} // Dimensão original
            height={330} // Dimensão original
            priority
            className="block w-full h-auto md:hidden"
          />
        </Link>
      </div>
      {/* Segundo Banner */}
      <div className="relative w-full">
        {/* Desktop */}
        <NextImage
          src="/Desktop_Patrocinadores_1920x220.webp"
          alt="Banner Patrocinadores"
          width={1920} // Dimensão original
          height={220} // Dimensão original
          className="hidden w-full h-auto md:block"
        />
        {/* Mobile */}
        <NextImage
          src="/Mobile_Patrocinadores_900x930.webp"
          alt="Banner Patrocinadores Mobile"
          width={1920} // Dimensão original
          height={220} // Dimensão original
          className="block w-full h-auto md:hidden"
        />
      </div>
    </section>
  );
}
