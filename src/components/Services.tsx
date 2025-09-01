import React from "react";
import {
  Globe,
  Truck,
  FileText,
  DollarSign,
  ClipboardCheck,
  Layers,
  ScanEye,
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const services = [
  {
    icon: ClipboardCheck,
    title: "Liberación de envíos retenidos",
    desc: "¿Tenés un envío retenido en Aduana? No pierdas tu mercadería. Te asesoramos sobre la viabilidad real de la operación y gestionamos la liberación de tu envío conforme a la normativa vigente, asegurando un proceso ágil y seguro.",
  },
  {
    icon: Globe,
    title: "Gestión de Importaciones y Exportaciones",
    desc: "Brindamos servicios completos de asesoramiento en clasificación arancelaria, valoración, liquidación aduanera e intervenciones previas necesarias según las características de la mercadería. Garantizamos un manejo eficiente y profesional de cada operación.",
  },
  {
    icon: Truck,
    title: "Asesoría en Logística Internacional",
    desc: "Elaboramos presupuestos optimizados para seleccionar el transporte más adecuado según las características específicas de tu mercadería. Garantizamos eficiencia, seguridad y rentabilidad en cada etapa del proceso logístico.",
  },
  {
    icon: FileText,
    title: "Tramitación de Documentación Aduanera",
    desc: "Nos encargamos de gestionar toda la documentación aduanera de forma eficiente. Te brindamos información detallada sobre requisitos, organismos intervinientes y normativas vigentes, asegurando el cumplimiento legal en cada operación.",
  },
  {
    icon: ScanEye,
    title: "Seguimiento y Representación en TCA y otros depósitos fiscales",
    desc: "Brindamos representación profesional en terminales como TCA (Terminal de Cargas Argentina) y otros depósitos fiscales del país. Realizamos el seguimiento presencial de tus operaciones, coordinamos con transportistas, operadores logísticos y organismos de control para asegurar una liberación ágil, ordenada y sin contratiempos.",
  },
  {
    icon: DollarSign,
    title: "Optimización de Costos en Comercio Exterior",
    desc: "Diseñamos estrategias para maximizar la rentabilidad de tus operaciones internacionales. Identificamos eficiencias en logística, trámites aduaneros y operaciones globales, reduciendo costos y mejorando la competitividad.",
  },
  {
    icon: Layers,
    title: "Soluciones de Transporte Multimodal",
    desc: "Ofrecemos alternativas integrales de transporte multimodal, combinando medios de transporte de forma estratégica para lograr la mejor relación costo-beneficio, tiempos de entrega ajustados y seguridad en el manejo de la carga.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría de Procesos en Comercio Exterior",
    desc: "Realizamos auditorías exhaustivas de procesos de importación y exportación. Identificamos áreas de mejora, aseguramos el cumplimiento normativo y optimizamos la eficiencia operativa de tus operaciones internacionales.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-underline">
            Nuestros Servicios
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-between min-h-[300px]">
                <service.icon className="w-12 h-12 text-primary mb-4 [color:var(--primary-blue)]" />
                <h3 className="text-xl font-semibold mb-2 text-text-default text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
