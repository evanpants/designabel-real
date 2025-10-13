import { useState, useEffect } from "react";

const images = [
  { src: "/assets/dc-anthem-earth-day-rcup-rounds.png", textColor: "text-[#0ea5e9]" }, // electric blue
  { src: "/assets/whstl-hero.jpg", textColor: "text-[#ff6b35]" }, // bold bright orange
  { src: "/assets/ohnut-and-mold.jpg", textColor: "text-[#ef4444]" }, // bright bold red
  { src: "/assets/wim-lid.jpg", textColor: "text-[#22c55e]" }, // neon green
  { src: "/assets/walmart-flir-milk-1.png", textColor: "text-white" },
  { src: "/assets/buzzle.jpg", textColor: "text-[#a855f7]" }, // bold purple
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Product showcase ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain lg:object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
      </div>
      {/* Return current text color for parent to use */}
      <style>{`
        .hero-text-transition {
          transition: color 1000ms ease-in-out;
        }
      `}</style>
    </>
  );
};

export const useCurrentCarouselTextColor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return images[currentIndex].textColor;
};