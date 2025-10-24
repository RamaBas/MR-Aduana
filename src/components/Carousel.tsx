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
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const nextSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="text-gray-600 mb-2">&quot;{item.message}&quot;</p>
            <p className="font-semibold text-text-default">{item.name}</p>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Carousel;
