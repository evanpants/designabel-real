import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

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

            {/* Fast Company Feature */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641929394798-WDNLB66QXPYSWJYZ60NX/Screen+Shot+2022-01-11+at+11.29.41+AM.png?format=1000w" 
                    alt="Fast Company Innovation by Design Feature"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Fast Company Innovation by Design
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Featured in Fast Company's Innovation by Design awards for breakthrough product development.
                  </p>
                  <Button variant="outline">
                    <a href="https://www.fastcompany.com/90698019/innovation-by-design-2021-products-finalists-and-honorable-mentions" target="_blank" rel="noopener noreferrer">
                      Read Article
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Core77 Design Awards */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Core77 Design Awards
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Recognition from Core77 for excellence in industrial design and innovation.
                  </p>
                  <Button variant="outline">
                    <a href="https://designawards.core77.com/" target="_blank" rel="noopener noreferrer">
                      View Awards
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641929501651-7RFQOHR4VHCDH4GQHVXX/Screen+Shot+2022-01-11+at+11.31.32+AM.png?format=1000w" 
                    alt="Core77 Design Awards"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* NYU Teaching Excellence */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641929567089-MRNBEMFKMFIMYQWI8Z2W/Screen+Shot+2022-01-11+at+11.32.39+AM.png?format=1000w" 
                    alt="NYU Teaching"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    NYU Adjunct Professor
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Teaching product development, circular economy, and design innovation at NYU.
                  </p>
                  <Button variant="outline">
                    <a href="/academia" rel="noopener noreferrer">
                      View Courses
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Industrial Design Magazine */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Industrial Design Magazine
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Featured coverage of innovative product development and manufacturing processes.
                  </p>
                  <Button variant="outline">
                    <a href="https://www.industrialdesignmag.com/" target="_blank" rel="noopener noreferrer">
                      Read Coverage
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641929631788-N55MBYNYB77W6BG32RJ7/Screen+Shot+2022-01-11+at+11.33.43+AM.png?format=1000w" 
                    alt="Industrial Design Magazine"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Impact Metrics */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center">Innovation Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-foreground mb-2">5+</h4>
                  <p className="text-muted-foreground">Products Brought to Market</p>
                </div>
                
                <div className="p-6 bg-secondary rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-foreground mb-2">$100M+</h4>
                  <p className="text-muted-foreground">Revenue Generated</p>
                </div>
                
                <div className="p-6 bg-secondary rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-foreground mb-2">4</h4>
                  <p className="text-muted-foreground">Patents Filed</p>
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