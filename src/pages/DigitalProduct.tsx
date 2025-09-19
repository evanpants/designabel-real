import Navigation from "@/components/Navigation";

const DigitalProduct = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Digital Products</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leading digital product development and user experience design across platforms.
              </p>
            </section>

            {/* InHome App Section */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/src/assets/inhome-app.jpg" 
                    alt="Walmart InHome App Interface"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Walmart InHome App
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Revolutionary grocery delivery service allowing deliveries directly into customers' homes and refrigerators.
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li>• User experience design and product strategy</li>
                    <li>• IoT integration and smart home connectivity</li>
                    <li>• Safety and security protocol development</li>
                    <li>• Cross-platform mobile application development</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Digital Products */}
            <section className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Mobile Applications</h3>
                <p className="text-muted-foreground">
                  Native iOS and Android applications with focus on user-centered design and seamless experiences.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">IoT Integration</h3>
                <p className="text-muted-foreground">
                  Smart device connectivity and integration for enhanced user experiences and operational efficiency.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalProduct;