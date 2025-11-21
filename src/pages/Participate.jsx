import Navbar from "../components/layout/TNavbar";
import Footer from "../components/layout/Footer";
import mainLogo from '../assets/illustrations/logo-name.png';


export default function Participate() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-white">

            <Navbar />

            {/* HERO SECTION */}
            <section className="flex flex-col items-center text-center px-8 pt-24 pb-16 bg-gradient-to-b from-[#4B9CEB12] to-transparent">
                <h1 className="text-4xl md:text-[2.5rem] font-bold mb-6 md:mb-4 text-lgs" style={{ fontFamily: "var(--font-title)" }}>
                    Participa en la Encuesta FurCensal
                </h1>
                <p className="text-lg md:text-xl mt-5 md:mt-10 text-gray-700 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                    ¡Gracias por tu interés en contribuir a la comunidad furry en México! Al participar en la Encuesta FurCensal,
                    estarás ayudando a recopilar datos valiosos que fortalecerán eventos, asociaciones y esfuerzos comunitarios.
                </p>

                <h3 className="md:text-2xl text-xl font-bold mt-4 text-gray-700" style={{ fontFamily: "var(--font-title)" }}>
                    Elije una opción para participar:
                </h3>
                <div className="flex gap-4 rounded mt-8 md:mt-12 flex-wrap justify-center ">
                    <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-4xl bg-[var(--secondary-color)] rounded-base shadow-xs">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8" style={{ fontFamily: "var(--font-title)" }}>
                            Encuesta FurCensal Yucatán 2025
                        </h5>
                        <p className="text-body mb-6 font-semibold text-gray-800" style={{ fontFamily: "var(--font-body)" }}>
                            Here are the biggest technology acquisitions of 2025 so far, in reverse
                            chronological order.
                        </p>

                        <a
                            href="/participar"
                            className="px-6 py-3 bg-[var(--primary-color-dont)] duration-300 ease-in-out rounded-4xl text-[var(--white-color)] font-medium hover:bg-[var(--primary-color)]"
                            style={{
                                fontFamily: "var(--font-title)",
                                fontWeight: "bold",
                            }}
                        >
                            Participar en la encuesta
                        </a>
                    </div>


                </div>
            </section>
            <Footer />
        </div>
    );
}
