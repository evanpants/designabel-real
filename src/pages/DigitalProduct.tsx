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

            {/* InHome Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                Walmart InHome
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-1">
                  <img 
                    src="/assets/inhome-full.jpg" 
                    alt="Walmart InHome App Interface"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 order-2 md:order-2">
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
              <div className="border-t border-border mt-12"></div>
            </section>

            {/* Frank Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                Frank
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Peer-to-peer money lending platform rooted in behavioral economics. Frank uses behavioral economics principles to replace legal contracts with social ones for proximate networks of friends.
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li>• Behavioral economics integration</li>
                    <li>• Social contract mechanisms</li>
                    <li>• User experience design for financial products</li>
                    <li>• Trust and reputation systems</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/assets/frank-1.png" 
                    alt="Frank App Interface"
                    className="w-full rounded-lg shadow-lg"
                  />
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