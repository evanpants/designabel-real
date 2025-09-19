import Navigation from "@/components/Navigation";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Achievements</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Recognition and milestones in product development and innovation.
              </p>
            </section>

            <section className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Product Leadership</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• VP of Product at Doona - Revolutionary infant car seat/stroller system</li>
                    <li>• Led Newton Baby to breakthrough breathable mattress technology</li>
                    <li>• Founded Whstl - Premium convertible bag design company</li>
                    <li>• Product lead for Walmart InHome - Last-mile delivery innovation</li>
                    <li>• Co-founded Wim - Commercial frozen yogurt machine</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Industry Recognition</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Featured in Fast Company, Core77, and Industrial Design Magazine</li>
                    <li>• Keynote speaker at design and manufacturing conferences</li>
                    <li>• Adjunct Professor at NYU teaching product development</li>
                    <li>• Advisor to emerging technology and design companies</li>
                    <li>• Patent holder for innovative product mechanisms</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Academic Contributions</h3>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Teaching Excellence</h4>
                    <p className="text-muted-foreground">
                      Curriculum development for Physical Product Design & Development, Circular Economy, 
                      and Design & Modeling courses at NYU and Pioneer Works. Recognized for innovative 
                      hands-on teaching methods that bridge theory with real-world application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Innovation Impact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Safety Innovation</h4>
                    <p className="text-muted-foreground">
                      Led development of products that have enhanced safety for thousands of families 
                      through breakthrough design and engineering solutions.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Sustainable Design</h4>
                    <p className="text-muted-foreground">
                      Champion of circular economy principles in product development, focusing on 
                      materials innovation and lifecycle thinking.
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

export default Achievements;