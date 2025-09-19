import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Doona Section */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/src/assets/doona.jpg" 
                    alt="Doona: Stroller to Car Seat conversion"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Doona: Stroller → Car Seat + ISOfix Base
                  </h2>
                  <p className="text-lg text-muted-foreground">VP of Product</p>
                  <ul className="space-y-2 text-foreground">
                    <li>• Developed innovative car seat and stroller</li>
                    <li>• Managed BOM, schedule, ASTM F833 certification testing (including stability, brakes, restraints, sharp edges, small parts, entrapment hazards), ASTM F3317 (crash test)</li>
                    <li>• Oversaw prototyping, DFM, pilot production, and ramp to scale mass-production</li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    <a href="https://www.doona.com/" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Newton Section */}
            <section className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-8">Newton: Crib Mattress</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Revolutionary breathable crib mattress design focused on safety and comfort.
                </p>
              </div>
            </section>

            {/* Wim Section */}
            <section className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-8">Wim: Froyo Machine Mixing</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Innovative frozen yogurt machine with advanced mixing technology.
                </p>
              </div>
            </section>

            {/* Whstl Brief-Pack Section */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Whstl Brief-Pack
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    The Whstl Brief-Pack easily converts between a professional briefcase and comfortable backpack via an innovative strap solution with no parts to lose.
                  </p>
                  <Button>
                    <a href="/bags">View Details</a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="/src/assets/brief-pack.jpg" 
                    alt="Whstl Brief-Pack convertible bag"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;