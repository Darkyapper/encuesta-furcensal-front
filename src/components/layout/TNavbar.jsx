import logoSm from '../../assets/illustrations/logo-sm.png';
import { IoIosMenu } from "react-icons/io";
import logoSmLong from '../../assets/illustrations/logo-name.png';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <a href="/">
          <img src={logoSmLong} alt="FurCensal" className="w-[10rem] pd-2 md:pl-6" />
        </a>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="#about" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          ¿Qué es?
        </a>
        <a href="#goals" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          Objetivo
        </a>
        <a href="#data" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          Datos
        </a>
        <a href="/participar" className="text-gray-700 hover:text-black" style={{ fontFamily: "var(--font-body)" }}>
          Participar
        </a>
      </div>

      <button className="md:hidden text-2xl text-gray-700 hover:text-black">
        <IoIosMenu />
      </button>
    </nav>
  );
}
