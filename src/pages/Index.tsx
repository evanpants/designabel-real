import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bag.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Professional briefcase convertible to backpack"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/40"></div>
          </div>
          
          <div className="relative container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="space-y-6 text-right ml-auto">
                <h1 className="text-sm font-medium tracking-widest text-foreground uppercase">
                  DESIGNABEL LLC - EVAN ABEL
                </h1>
                
                <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Product & Operations<br />
                  Leadership
                </h2>
                
                <div className="space-y-3 text-lg text-foreground">
                  <p>• Physical Product & Manufacturing</p>
                  <p>• Digital Product</p>
                  <p>• Service Design & Sustainability</p>
                </div>
                
                <div className="flex gap-4 justify-end pt-6">
                  <Button size="lg" className="px-8">
                    <a href="/portfolio">Physical Products</a>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    <a href="/digital-product">Digital Products</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
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
                    src="/src/assets/doona.jpg" 
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
                    src="/src/assets/brief-pack.jpg" 
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
                    src="/src/assets/inhome-app.jpg" 
                    alt="InHome App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Walmart InHome</h4>
                <p className="text-muted-foreground">Digital grocery delivery platform</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Index;
