export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-lilac-light py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4 text-slate-800">
            Sonho em Viver
          </h3>
          <p className="text-slate-500 text-sm">
            Transformando realidades através do amor e da educação.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-700">Links Rápidos</h4>
          <ul className="text-slate-500 space-y-2 text-sm">
            <li>Transparência</li>
            <li>Seja Voluntário</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-700">Contato</h4>
          <p className="text-slate-500 text-sm">contato@sonhoemviver.org.br</p>
          <p className="text-slate-500 text-sm">(00) 00000-0000</p>
        </div>
      </div>
    </footer>
  );
}
