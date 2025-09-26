import Navigation from "@/components/Navigation";

const Patents = () => {
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
                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/egg-beater-patent.png" 
                      alt="Egg beater patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Egg beater
                    </h4>
                    <p className="text-sm text-muted-foreground">US D641587</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/kernel-removal-patent.png" 
                      alt="Kernel removal device patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Kernel removal device
                    </h4>
                    <p className="text-sm text-muted-foreground">US D620326</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/baby-safety-seat-patent.png" 
                      alt="Baby safety seat patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Baby safety seat and a wheel for use therein
                    </h4>
                    <p className="text-sm text-muted-foreground">EP2848460B1 / USD791024S1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/corn-holder-patent.png" 
                      alt="Corn holder storage system patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Corn holder storage system
                    </h4>
                    <p className="text-sm text-muted-foreground">US20120097575A1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/frozen-food-vessel-patent.png" 
                      alt="Vessel for preparing frozen food patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Vessel, system, and method for preparing a frozen food
                    </h4>
                    <p className="text-sm text-muted-foreground">US20170188600A1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/separable-scissors-patent.png" 
                      alt="Separable scissors patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Separable scissors with elastic stoppers
                    </h4>
                    <p className="text-sm text-muted-foreground">WO2012030451A1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/serving-unit-patent.png" 
                      alt="Serving unit and serving kit patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Serving unit and serving kit
                    </h4>
                    <p className="text-sm text-muted-foreground">US20170225879A1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/corn-holder-storage-patent.png" 
                      alt="Corn holder storage device patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Corn holder storage device
                    </h4>
                    <p className="text-sm text-muted-foreground">US D618969 S1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/container-655582-patent.png" 
                      alt="Container patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Container
                    </h4>
                    <p className="text-sm text-muted-foreground">US D655582 S1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/container-694584-patent.png" 
                      alt="Container configuration patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Container configuration
                    </h4>
                    <p className="text-sm text-muted-foreground">US D694584 S1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/interlocking-container-patent.png" 
                      alt="Interlocking container patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Interlocking container
                    </h4>
                    <p className="text-sm text-muted-foreground">US D681395 S1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/container-694628-patent.png" 
                      alt="Container configuration patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Container configuration
                    </h4>
                    <p className="text-sm text-muted-foreground">US D694628 S1</p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg text-center">
                    <img 
                      src="/assets/container-694585-patent.png" 
                      alt="Container configuration patent"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Container configuration
                    </h4>
                    <p className="text-sm text-muted-foreground">US D694585 S1</p>
                  </div>
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