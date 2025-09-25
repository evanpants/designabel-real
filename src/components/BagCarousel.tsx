import { useState, useEffect } from "react";
import bagCarousel1 from "@/assets/bag-carousel-1.jpg";
import bagGalleryFull from "@/assets/bag-gallery-full.jpg";

const images = [
  bagGalleryFull,
  bagCarousel1,
  // Add more bag images here as they become available
];

export const BagCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Whstl bag view ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};