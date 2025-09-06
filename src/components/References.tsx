import React from "react";
import Carousel from "./Carousel";
import ScrollAnimation from "./ScrollAnimation";
import references from "../data/references.json";

const References = () => {
  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-underline">
            Referencias
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <Carousel items={references} />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default References;
