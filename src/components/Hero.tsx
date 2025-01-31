import React from 'react';
import contenedores from "../../assets/contenedores.jpg";

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center">
      {/* Imagen de fondo */}
      <img
        src={contenedores}
        alt="Comercio exterior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Sección de texto con diseño curvo */}
      <div 
        className="relative z-10 w-full md:w-1/2 h-full bg-gray-100 flex flex-col justify-center px-8 md:px-20 py-12 md:py-20"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center md:text-left">
          Despacho Aduanero y Comercio Exterior
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center md:text-left md:w-3/4">
          Asesoramiento y soluciones en tus operatorias aduaneras.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="mt-6 bg-blue-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-600 transition">
            <a href="#contact">Contáctanos</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
