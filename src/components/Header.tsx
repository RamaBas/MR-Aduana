import React, { useState } from 'react';
import { Package, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Package className="w-10 h-10 text-primary mr-3" />
          <span className="text-2xl font-bold text-text-default">Servicios Aduaneros</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#benefits" className="nav-link transition duration-300">Quienes Somos</a></li>
            <li><a href="#services" className="nav-link transition duration-300">Servicios</a></li>
            <li><a href="#faq" className="nav-link transition duration-300">Preguntas Frecuentes</a></li>
            <li><a href="#contact" className="nav-link transition duration-300">Contacto</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-text-default" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#benefits" className="nav-link transition duration-300" onClick={toggleMenu}>Quienes Somos</a></li>
            <li><a href="#services" className="nav-link transition duration-300" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="#faq" className="nav-link transition duration-300" onClick={toggleMenu}>Preguntas Frecuentes</a></li>
            <li><a href="#contact" className="nav-link transition duration-300" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;