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
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Filed Patents</h3>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-secondary rounded-lg">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Convertible Carrying Device
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">US Patent Application</p>
                      <p className="text-muted-foreground">
                        Innovation in strap mechanism allowing seamless conversion between briefcase and backpack modes without detachable components.
                      </p>
                    </div>

                    <div className="p-6 bg-secondary rounded-lg">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Child Safety Seat Mechanism
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">US Patent Pending</p>
                      <p className="text-muted-foreground">
                        Novel approach to stroller-to-car-seat conversion system with enhanced safety features and user interface design.
                      </p>
                    </div>

                    <div className="p-6 bg-secondary rounded-lg">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Breathable Infant Mattress Design
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">US Patent Application</p>
                      <p className="text-muted-foreground">
                        Innovative airflow system for infant sleep safety with enhanced comfort and temperature regulation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Patent Strategy</h3>
                <p className="text-muted-foreground">
                  Focus on user-centered innovations that solve real-world problems while creating defensible intellectual property. 
                  Emphasis on safety, sustainability, and functional design improvements.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Patents;