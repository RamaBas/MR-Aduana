import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-underline">
            ¿Quiénes Somos?
          </h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-background-light p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 mb-4">
              Somos un equipo profesional dedicado al asesoramiento y gestión
              aduanera para operaciones de importación y exportación, con más de
              15 años de experiencia en el rubro aduanero, brindando soluciones
              eficientes a importadores y exportadores de todo el país.
            </p>
            <p className="text-gray-700 mb-4">
              A lo largo de nuestra trayectoria, hemos acompañado tanto a
              grandes empresas como a particulares en la gestión integral de sus
              operaciones, desde la liberación de mercaderías en depósitos
              fiscales y couriers como FedEx, DHL, IMEX, TCA o Correo Argentino,
              hasta el despacho de cargas complejas en puertos, aeropuertos y
              terminales.
            </p>
            <p className="text-gray-700 mb-4">
              Actualmente, nos encontramos en una etapa de expansión, enfocados
              en ofrecer un servicio aún más personalizado, con el objetivo de
              construir relaciones de confianza y largo plazo con nuestros
              clientes. Nuestra misión es simplificar los procesos aduaneros y
              garantizar que cada operación se realice de forma segura,
              transparente y en tiempo.
            </p>
            <p className="text-gray-700 mb-4">
              Contamos con un profundo conocimiento del marco normativo y
              operativo que rige el comercio exterior argentino, y trabajamos
              con compromiso, responsabilidad y una atención cercana,
              entendiendo que detrás de cada carga hay un proyecto, un negocio o
              un sueño por concretar.
            </p>
            <p className="text-gray-700">
              Estamos para ayudarte a que tu operación llegue a destino sin
              complicaciones.
              <br />
              <strong>Consultanos y empecemos a trabajar juntos.</strong>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutUsSection;
