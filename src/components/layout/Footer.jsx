export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-gray-100 text-center">
      <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
        © {new Date().getFullYear()} FurCensal México — Proyecto comunitario sin fines de lucro
      </p>
      <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "var(--font-body)" }}>
        Información recopilada con estándares de privacidad y seguridad.
      </p>
    </footer>
  );
}
