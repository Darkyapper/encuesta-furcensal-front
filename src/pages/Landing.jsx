import Navbar from "../components/layout/TNavbar";
import Footer from "../components/layout/Footer";
import mainLogo from '../assets/illustrations/logo-name.png';


export default function Landing() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-8 pt-24 pb-16 bg-gradient-to-b from-[#4B9CEB12] to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-title)" }}>
          Bienvenido a
        </h1>
        <img src={mainLogo} alt="Encuesta FurCensal" className="md:h-[8rem] md:mt-2" />

        <p className="text-lg md:text-xl md:mt-10 text-gray-700 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
          Un proyecto seguro y transparente para conocer la realidad demográfica de la comunidad furry en México.
          Tus datos están protegidos y ayudan a fortalecer eventos, asociaciones y esfuerzos comunitarios.
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href="/encuesta"
            className="px-6 py-3 bg-[var(--primary-color)] duration-300 ease-in-out md:rounded-4xl text-[var(--white-color)] font-medium hover:bg-[var(--primary-color-sel)]"
            style={{
              fontFamily: "var(--font-title)",
              fontWeight: "bold",
            }}
          >
            Participar en la encuesta
          </a>

          <a
            href="#about"
            className="px-6 py-3 border md:rounded-4xl duration-300 text-[var(--primary-color-dont)] hover:bg-[var(--primary-color-dont)] hover:text-[var(--white-color)] font-medium"
            style={{
              fontFamily: "var(--font-title)",
              fontWeight: "bold",
            }}
          >
            Saber más
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-title)" }}>¿Qué es FurCensal?</h2>

        <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          FurCensal es una iniciativa sin fines de lucro dedicada a recopilar
          información demográfica y social sobre la comunidad furry en México.
          Nuestro objetivo es ofrecer datos reales, verificados y útiles para
          apoyar a convenciones, investigadores, creadores y miembros de la comunidad.
        </p>
      </section>

      {/* GOALS */}
      <section id="goals" className="px-8 pb-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-title)" }}>
          ¿Por qué es importante?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-sm border" style={{ borderColor: "#4B9CEB30" }}>
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-title)" }}>Transparencia</h3>
            <p className="text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
              Datos claros para entender el crecimiento y distribución de la comunidad.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-sm border" style={{ borderColor: "#5CEACC30" }}>
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-title)" }}>Apoyo a eventos</h3>
            <p className="text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
              Información clave para organizaciones y convenciones.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-sm border" style={{ borderColor: "#EB9A4B30" }}>
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-title)" }}>Investigación</h3>
            <p className="text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
              Base sólida para estudios sociales sobre la comunidad furry.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
