import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BagCarousel } from "@/components/BagCarousel";

const Bags = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit">
                  FEATURED PRODUCT
                </Badge>
                <h1 className="text-4xl font-bold text-foreground">
                  GOOSE: Brief-Pack
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The ultimate convertible bag that transforms from professional briefcase to comfortable backpack with an innovative strap solution. No parts to lose, maximum versatility.
                </p>
                <div className="space-y-4">
                  <p className="text-3xl font-bold text-foreground">$295.00</p>
                  <Button size="lg" className="w-full md:w-auto" disabled>
                    SOLD OUT
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/assets/bag-hero-main.webp" 
                  alt="GOOSE Brief-Pack convertible bag"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </section>

            {/* Product Features */}
            <section className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Designed for Modern Professionals
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every detail crafted for those who demand both style and functionality in their daily carry.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Convertible Design</h3>
                  <p className="text-muted-foreground">
                    Seamlessly switches between briefcase and backpack modes without any detachable parts.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Professional Aesthetic</h3>
                  <p className="text-muted-foreground">
                    Premium materials and clean lines suitable for any business environment.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Innovative Engineering</h3>
                  <p className="text-muted-foreground">
                    Patented strap system ensures durability and ease of conversion.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Images Carousel */}
            <section className="mt-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">Product Gallery</h3>
              </div>
              <BagCarousel />
            </section>

            {/* Product Details */}
            <section className="mt-20 bg-secondary rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Specifications</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Dimensions: 16" x 12" x 4"</li>
                    <li>• Materials: Premium waxed canvas and leather</li>
                    <li>• Laptop compartment fits up to 15" devices</li>
                    <li>• Multiple interior pockets for organization</li>
                    <li>• Water-resistant treatment</li>
                    <li>• Lifetime warranty on hardware</li>
                  </ul>
                </div>
                
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bags;