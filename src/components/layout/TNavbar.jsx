import logoSm from '../../assets/illustrations/logo-sm.png';
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img src={logoSm} alt="FurCensal" className="w-[1.1rem]" />
        <h1 className="text-xl font-bold" style={{ fontFamily: "var(--font-title)" }}>
          FurCensal
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
          Datos
        </a>
        <a href="#join" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          Participar
        </a>
      </div>

      <button className="md:hidden text-2xl text-gray-700 hover:text-black">
        <IoIosMenu />
      </button>
    </nav>
  );
}
