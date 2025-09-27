import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <HeroCarousel />
          
          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="space-y-6 text-right ml-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Product & Operations<br />
                  Leadership
                </h2>
                
                <div className="space-y-3 text-lg text-foreground">
                  <p>• Physical Product & Manufacturing</p>
                  <p>• Digital Product</p>
                  <p>• Service Design</p>
                  <p>• Sustainability</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end pt-6">
                  <Button size="lg" className="px-8" asChild>
                    <Link to="/portfolio">Physical Products</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8" asChild>
                    <Link to="/digital-product">Digital Products</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-4">Featured Work</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leading product development from concept to scale across physical and digital experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/assets/doona-main.jpg" 
                    alt="Doona Car Seat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Doona Car Seat</h4>
                <p className="text-muted-foreground">Revolutionary stroller-to-car-seat conversion system</p>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/assets/brief-pack.jpg" 
                    alt="Brief Pack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Whstl Brief-Pack</h4>
                <p className="text-muted-foreground">Convertible briefcase-to-backpack design</p>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="/assets/inhome-app-main.jpg" 
                    alt="InHome App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Walmart InHome</h4>
                <p className="text-muted-foreground">Last-inch delivery and 2-way logistics to the fridge!</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Index;
