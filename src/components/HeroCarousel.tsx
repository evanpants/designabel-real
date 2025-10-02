import { useState, useEffect } from "react";

const images = [
  { src: "/assets/dc-anthem-earth-day-rcup-rounds.png", textColor: "text-foreground" },
  { src: "/assets/whstl-hero.jpg", textColor: "text-foreground" },
  { src: "/assets/ohnut-and-mold.jpg", textColor: "text-foreground" },
  { src: "/assets/wim-lid.jpg", textColor: "text-foreground" },
  { src: "/assets/walmart-replenish.jpg", textColor: "text-white" },
  { src: "/assets/buzzle.jpg", textColor: "text-foreground" },
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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-background/40"></div>
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