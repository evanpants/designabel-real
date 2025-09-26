import { useState, useEffect } from "react";

const images = [
  "/assets/carousel-1.jpg",
  "/assets/carousel-2.jpg",
  "/assets/carousel-3.jpg",
  "/assets/carousel-4.jpg",
  "/assets/carousel-5.jpg",
  "/assets/carousel-6.jpg",
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product showcase ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-background/40"></div>
    </div>
  );
};