import { useState, useEffect } from "react";
import { bannerSlides } from "../../data/banner";

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = bannerSlides[current];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 md:p-7 overflow-hidden gap-4 text-center md:text-left">

      {/* Content */}
      <div className="max-w-full md:max-w-[50%]">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
          {slide.title}
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-4">
          {slide.description}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          {slide.buttonText}
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src={slide.image}
          alt="banner"
          className="w-[150px] md:w-[180px] lg:w-[220px] object-contain"
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerSlides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Banner;