import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const faqs = [
  { 
    question: '¿Qué es el despacho aduanero?', 
    answer: 'El despacho aduanero es el proceso mediante el cual se gestionan los trámites necesarios para importar o exportar mercancías, asegurando el cumplimiento de las normativas vigentes.' 
  },
  { 
    question: '¿Cuánto tiempo demora una importación?', 
    answer: 'El tiempo de importación varía según el tipo de producto y el país de origen, pero en promedio puede tardar entre 7 y 15 días hábiles.' 
  },
  { 
    question: '¿Cuáles son los costos asociados al despacho aduanero?', 
    answer: 'Los costos incluyen aranceles, honorarios del despachante, almacenamiento, transporte y otros cargos adicionales dependiendo de la operación.' 
  },
  { 
    question: '¿Qué documentos necesito para importar?', 
    answer: 'Los documentos más comunes son la factura comercial, lista de empaque, certificado de origen y la declaración aduanera de importación.' 
  },
  { 
    question: '¿Cómo puedo evitar que mi carga sea retenida en aduana?', 
    answer: 'Es clave contar con una correcta clasificación arancelaria, documentación completa y cumplir con todas las regulaciones de importación vigentes.' 
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-underline">
            Preguntas Frecuentes
          </h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index}>
              <div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                <button 
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    {faq.question}
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
