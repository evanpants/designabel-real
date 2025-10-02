import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  mainImage: string;
  carouselImages: string[];
}

const products: Product[] = [
  {
    id: "egg-beater",
    name: "Egg Beater",
    mainImage: "/assets/egg-beater-main.jpg",
    carouselImages: [
      "/assets/egg-beater-mixer4.jpg",
      "/assets/egg-beater-cycle-test.jpg",
      "/assets/egg-beater-options.jpg",
      "/assets/egg-beater-010.jpg",
      "/assets/egg-beater-012.jpg",
      "/assets/egg-beater-018.jpg",
      "/assets/egg-beater-025.jpg",
      "/assets/egg-beater-tooling.jpg",
    ],
  },
];

export const ProductMosaic = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Other Physical Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProduct.carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="flex items-center justify-center p-4">
                        <img
                          src={image}
                          alt={`${selectedProduct.name} - Image ${index + 1}`}
                          className="max-h-[60vh] w-auto object-contain rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
