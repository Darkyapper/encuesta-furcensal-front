import '@material/web/iconbutton/icon-button.js';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="FurCensal" className="w-10 h-10" />
        <h1 className="text-xl font-semibold" style={{ fontFamily: "var(--font-title)" }}>
          FurCensal México
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="#about" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          ¿Qué es?
        </a>
        <a href="#goals" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          Objetivo
        </a>
        <a href="#join" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          Participar
        </a>
      </div>

      <md-icon-button class="md:hidden">
        <span slot="icon">menu</span>
      </md-icon-button>
    </nav>
  );
}
