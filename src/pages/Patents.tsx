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
                
                <div className="space-y-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Convertible Carrying Device
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">US Patent Application No. 16/XXX,XXX</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Innovation in strap mechanism allowing seamless conversion between briefcase and backpack modes without detachable components. The patent covers the unique pivot and locking system that enables single-handed operation while maintaining structural integrity and professional aesthetics.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Child Safety Seat with Integrated Mobility System
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">US Patent No. 10,XXX,XXX</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Novel approach to stroller-to-car-seat conversion system with enhanced safety features and user interface design. Includes innovations in wheel retraction mechanisms, safety locking systems, and ergonomic handle design that meets ASTM and FMVSS safety standards.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Breathable Infant Sleep Surface
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">US Patent Application No. 17/XXX,XXX</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Innovative airflow system for infant sleep safety with enhanced comfort and temperature regulation. The patent covers the unique three-dimensional structure that allows for unrestricted airflow while maintaining proper support and washability.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Automated Frozen Dessert Preparation System
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">US Patent Pending</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced mixing and temperature control system for commercial frozen yogurt production. Covers innovations in precision temperature management, mixing blade design, and automated cleaning cycles for consistent product quality.
                    </p>
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