import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Patents = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const PatentCard = ({ src, alt, title, patentNumber }: { src: string, alt: string, title: string, patentNumber: string }) => (
    <div className="p-6 bg-secondary rounded-lg text-center">
      <Dialog>
        <DialogTrigger asChild>
          <img 
            src={src} 
            alt={alt}
            className="w-full h-48 object-contain rounded-lg mb-4 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-2">
          <div className="flex items-center justify-center">
            <img 
              src={src}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
      <h4 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">{patentNumber}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Patents</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Intellectual property and innovations in product design and manufacturing.
              </p>
            </section>

            <section className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Filed Patents</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PatentCard 
                    src="/assets/egg-beater-patent.png" 
                    alt="Egg beater patent"
                    title="Egg beater"
                    patentNumber="US D641587"
                  />

                  <PatentCard 
                    src="/assets/kernel-removal-patent.png" 
                    alt="Kernel removal device patent"
                    title="Kernel removal device"
                    patentNumber="US D620326"
                  />

                  <PatentCard 
                    src="/assets/baby-safety-seat-patent.png" 
                    alt="Baby safety seat patent"
                    title="Baby safety seat and a wheel for use therein"
                    patentNumber="EP2848460B1 / USD791024S1"
                  />

                  <PatentCard 
                    src="/assets/corn-holder-patent.png" 
                    alt="Corn holder storage system patent"
                    title="Corn holder storage system"
                    patentNumber="US20120097575A1"
                  />

                  <PatentCard 
                    src="/assets/frozen-food-vessel-patent.png" 
                    alt="Vessel for preparing frozen food patent"
                    title="Vessel, system, and method for preparing a frozen food"
                    patentNumber="US20170188600A1"
                  />

                  <PatentCard 
                    src="/assets/separable-scissors-patent.png" 
                    alt="Separable scissors patent"
                    title="Separable scissors with elastic stoppers"
                    patentNumber="WO2012030451A1"
                  />

                  <PatentCard 
                    src="/assets/serving-unit-patent.png" 
                    alt="Serving unit and serving kit patent"
                    title="Serving unit and serving kit"
                    patentNumber="US20170225879A1"
                  />

                  <PatentCard 
                    src="/assets/corn-holder-storage-patent.png" 
                    alt="Corn holder storage device patent"
                    title="Corn holder storage device"
                    patentNumber="US D618969 S1"
                  />

                  <PatentCard 
                    src="/assets/container-655582-patent.png" 
                    alt="Container patent"
                    title="Container"
                    patentNumber="US D655582 S1"
                  />

                  <PatentCard 
                    src="/assets/container-694584-patent.png" 
                    alt="Container configuration patent"
                    title="Container configuration"
                    patentNumber="US D694584 S1"
                  />

                  <PatentCard 
                    src="/assets/interlocking-container-patent.png" 
                    alt="Interlocking container patent"
                    title="Interlocking container"
                    patentNumber="US D681395 S1"
                  />

                  <PatentCard 
                    src="/assets/container-694628-patent.png" 
                    alt="Container configuration patent"
                    title="Container configuration"
                    patentNumber="US D694628 S1"
                  />

                  <PatentCard 
                    src="/assets/container-694585-patent.png" 
                    alt="Container configuration patent"
                    title="Container configuration"
                    patentNumber="US D694585 S1"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Patent Strategy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Innovation Focus</h4>
                    <p className="text-muted-foreground">
                      Patents center on user-centered innovations that solve real-world problems while creating defensible intellectual property around safety, functionality, and manufacturing efficiency.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Market Protection</h4>
                    <p className="text-muted-foreground">
                      Strategic patent filing to protect key innovations while enabling continued product development and market expansion across multiple product categories.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Patents;