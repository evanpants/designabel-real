import Navigation from "@/components/Navigation";
import { HeroCarousel, useCurrentCarouselTextColor } from "@/components/HeroCarousel";
import { Link } from "react-router-dom";

const Index = () => {
  const textColor = useCurrentCarouselTextColor();

  const bulletLinks = [
    { text: "Physical Products and Manufacturing", path: "/portfolio" },
    { text: "Digital Product", path: "/digital-product" },
    { text: "Service Design", path: "/service-design" },
    { text: "Sustainability", path: "/sustainability" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <HeroCarousel />
          
          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-8 text-center">
                <h1 className={`text-4xl md:text-6xl font-bold leading-tight hero-text-transition ${textColor} [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]`}>
                  Product,<br />
                  Operations,<br />
                  Leadership
                </h1>
                
                <div className={`space-y-3 text-lg text-left md:text-left max-w-md mx-auto md:mx-0 hero-text-transition font-bold ${textColor} [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]`}>
                  {bulletLinks.map((link) => (
                    <Link 
                      key={link.path}
                      to={link.path}
                      className="block hover:underline hover:translate-x-2 transition-transform"
                    >
                      • {link.text}
                    </Link>
                  ))}
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
                    src="/assets/walmart-inhome-delivery.jpg" 
                    alt="Walmart InHome Delivery"
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
