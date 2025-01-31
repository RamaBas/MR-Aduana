import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-light text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">MR</h3>
            <p className="text-gray-600">DESPACHO ADUANERO Y COMERCIO EXTERIOR</p>
          </div>
          <div className="flex space-x-6">
           {/*  <a href="#" className="hover:text-primary transition duration-300 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="hover:text-primary transition duration-300 transform hover:scale-110">
              <Instagram size={28} />
            </a> */}
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <p className="text-center text-gray-600">&copy; 2024 MR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;