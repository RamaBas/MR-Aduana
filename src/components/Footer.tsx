import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background-light text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="w-36 h-12 flex items-center">
              <img
                src={logo}
                alt="MR Servicios Aduaneros"
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex space-x-6">
            {/* <a href="#" className="hover:text-primary transition duration-300 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="hover:text-primary transition duration-300 transform hover:scale-110">
              <Instagram size={28} />
            </a> */}
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <p className="text-center text-gray-600">
          &copy; 2024 MR. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
