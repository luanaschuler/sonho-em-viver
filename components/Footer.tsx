import { Heart, Mail, Phone, Camera, RouteIcon } from "lucide-react";

const iconLinks = [
  {
    Icon: Camera,
    href: "https://www.instagram.com/sonhoemviver",
    label: "Instagram",
  },
  {
    Icon: Heart,
    href: "https://api.whatsapp.com/send/?phone=554784050409&text&type=phone_number&app_absent=0",
    label: "Doar",
  },
  {
    Icon: Mail,
    href: "mailto:instituosonhoemviver@gmail.com?subject=Sonho+Em+Viver&body=Quero+realizar+um+sonho",
    label: "Mail",
  },
];

const ctaLink = "https://api.whatsapp.com/send/?phone=554784050409&text&type=phone_number&app_absent=0";

export default function Footer() {
  return (
    <footer className="relative bg-white/60 backdrop-blur-xl border-t border-[--color-lilac-light] pt-16 pb-8 px-6">
      {/* Elemento Decorativo: Gradiente suave de fundo para reforçar o estilo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[--color-lilac-main] to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Branding */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-800">
              Sonho em <span className="text-[--color-blue]">Viver</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Transformando realidades através do amor e da educação. Um refúgio
              de esperança para quem mais precisa.
            </p>
            <div className="flex gap-3">
              {iconLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2.5 rounded-xl bg-[--color-lilac-light] text-[--color-blue] hover:bg-[--color-blue] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={label}
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="text-[--color-blue] bg-[#37a9f0]/20 rounded-full p-0.5"
                    stroke="#37a9f0"
                    fill="none"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="font-bold text-slate-700 mb-6 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="text-slate-500 space-y-4 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="hover:text-[--color-blue] transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="hover:text-[--color-blue] transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[--color-blue] transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#creators"
                  className="hover:text-[--color-blue] transition-colors"
                >
                  Conheça os Criadores
                </a>
              </li>
              <li>
                <a
                  href="#donos"
                  className="hover:text-[--color-blue] transition-colors"
                >
                  Donos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-bold text-slate-700 mb-6 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail size={16} className="text-[--color-lilac-main]" />
                <span>instituosonhoemviver@gmail.com</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone size={16} className="text-[--color-lilac-main]" />
                <span>
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <span>(47) 8405-0409</span>
                  </li>
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm text-slate-500">
                <RouteIcon size={24} className="text-[--color-lilac-main]" />
                <span>
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <span>
                      R. Evaldo Eskelsen, 408. Velha Central, Blumenau SC.
                      89046-240.
                    </span>
                  </li>
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Heart size={16} className="text-[--color-lilac-main]" />
                <span>
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <span>54.468.204/0001-80</span>
                  </li>
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: CTA Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[--color-lilac-main] to-[--color-baby-blue] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white p-6 rounded-2xl border border-[--color-lilac-light] shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 text-sm text-center">
                Apoie nossa causa
              </h4>
              <p className="text-slate-500 text-[13px] mb-4 text-center leading-snug">
                Sua ajuda é o combustível para nossos sonhos.
              </p>
              <a
                href={ctaLink}
                className="hidden lg:inline-flex w-full bg-[#37a9f0] text-white px-5 py-2.5 rounded-full text-md font-black items-center gap-2 justify-center
                    shadow-[0_4px_15px_rgba(55,169,240,0.4)] hover:bg-[#2d91d1]
                    hover:shadow-[0_6px_20px_rgba(55,169,240,0.6)] transition-all active:scale-95"
              >
                Quero Doar
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="border-t border-[--color-lilac-light]/50 pt-8 flex flex-col md:grid md:grid-cols-3 items-center gap-4 text-[11px] text-slate-400 font-medium uppercase tracking-[0.15em]">
          <span className="md:text-left">© 2026 Sonho em Viver</span>
          <span className="flex items-center justify-center gap-1.5">
            Feito com{" "}
            <Heart
              size={12}
              className="text-[--color-blue]"
              fill="currentColor"
            />{" "}
            para o mundo
          </span>
          <span className="md:text-right">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/luanaschuler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-lilac-main] hover:underline"
            >
              Luana Schüler
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
