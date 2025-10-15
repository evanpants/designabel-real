import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
        <section className="relative">
          {/* Mobile/Tablet Layout - Text Above Images */}
          <div className="lg:hidden bg-white pt-20 pb-1">
            <div className="px-6">
              <h1 className="text-4xl font-brand font-light leading-tight text-black mb-3">
                Product,<br />
                Operations,<br />
                Leadership
              </h1>
              
              <div className="space-y-2 text-lg font-brand font-light text-black">
                {bulletLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className="block transition-all duration-200 hover:font-semibold hover:translate-x-2"
                  >
                    • {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[50vh] lg:h-[85vh] flex">
            <div className="absolute inset-0 hidden lg:flex">
              <div className="flex-1 relative overflow-hidden">
                <HeroCarousel />
              </div>
              <div className="w-[35%] bg-white"></div>
            </div>
            
            {/* Mobile/Tablet Carousel - Full Images */}
            <div className="absolute inset-0 lg:hidden">
              <HeroCarousel />
            </div>
            
            {/* Desktop Text Panel */}
            <div className="relative w-full hidden lg:flex">
              <div className="flex-1"></div>
              <div className="w-[35%] flex items-center justify-center px-8 py-20">
                <div className="space-y-12">
                  <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-brand font-light leading-tight text-black">
                    Product,<br />
                    Operations,<br />
                    Leadership
                  </h1>
                  
                  <div className="space-y-3 text-lg font-brand font-light text-black">
                    {bulletLinks.map((link) => (
                      <Link 
                        key={link.path}
                        to={link.path}
                        className="block transition-all duration-200 hover:font-semibold hover:translate-x-2"
                      >
                        • {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="pt-8 lg:pt-20 pb-8 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 lg:mb-16">
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
      <Footer />
    </div>
  );
};

export default Index;
