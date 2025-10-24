import React from "react";
import contenedores from "../../assets/contenedores.png";

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <div
      className={`relative w-full h-[500px] md:h-[600px] flex items-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Imagen de fondo */}
      <img
        src={contenedores}
        alt="Comercio exterior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa de opacidad solo para móviles */}
      <div className="absolute inset-0 bg-black/25 md:hidden"></div>

      {/* Sección de texto con diseño curvo (desktop) o full (mobile) */}
      <div
        className="relative z-10 w-full md:w-1/2 h-full bg-gray-100/90 md:bg-gray-100 flex flex-col justify-center px-8 md:px-20 py-12 md:py-20"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center md:text-left">
          Despacho Aduanero y Comercio Exterior
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center md:text-left md:w-3/4">
          Asesoramiento y soluciones en tus operatorias aduaneras.
        </p>

        {/* Botones */}
        <div className="flex justify-center md:justify-start flex-wrap">
          <button className="mt-6 bg-[color:var(--primary-blue)] text-white py-3 px-8 rounded-full font-semibold hover:opacity-90 transition">
            <a href="#contact">Contáctanos</a>
          </button>

          <a
            href="https://wa.me/5492213195299"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition ml-2"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.4 3.6C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.5 6L0 24l6.2-1.5c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4zM12 22.1c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8.9.9-3.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.3-.3.2-1 .9-1 2.3s1 2.7 1.2 2.9c.2.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.1-.3-.4-.4z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
