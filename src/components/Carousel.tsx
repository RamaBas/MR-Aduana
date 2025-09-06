import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  image: string;
  name: string;
  message: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <p className="text-gray-600 mb-2">&quot;{currentItem.message}&quot;</p>
        <p className="font-semibold text-text-default">{currentItem.name}</p>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
};

export default Carousel;
