import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  image: string; // p.ej. "/assets/deAnchorena.png"
  name: string;
  message: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
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
    <div id="coments" className="relative w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {currentItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex flex-col items-center"
          >
            <img
              src={item.image || defaultAvatar}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = defaultAvatar;
              }}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
              loading="lazy"
            />
            <p className="text-gray-600 mb-2">&quot;{item.message}&quot;</p>
            <p className="font-semibold text-text-default">{item.name}</p>
          </div>
        ))}
      </div>

      {items.length > itemsPerPage && (
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
