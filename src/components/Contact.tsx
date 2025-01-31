import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', company: '', email: '', message: '' });
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-underline">Contacto</h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-text-default font-bold mb-2">Nombre y Apellido</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-default"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-text-default font-bold mb-2">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-default"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-text-default font-bold mb-2">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-default"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-text-default font-bold mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-text-default"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
            >
              Enviar <Send className="inline-block ml-2" />
            </button>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;