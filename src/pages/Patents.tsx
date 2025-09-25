import Navigation from "@/components/Navigation";

const Patents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Patents</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Intellectual property and innovations in product design and manufacturing.
              </p>
            </section>

            <section className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Filed Patents</h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Convertible Carrying Device
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">US Patent Application No. 16/253,416</p>
                      </div>
                      <div>
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930449838-EKR6VFGDP2SXJL2F7PHL/Screen+Shot+2022-01-11+at+11.47.24+AM.png" 
                          alt="Convertible Carrying Device Patent"
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      A convertible carrying device includes a body portion having a front side and a back side, and a pair of straps coupled to the back side of the body portion. Each strap includes a first segment and a second segment that are hingedly coupled together at a hinge. The straps are reconfigurable between a briefcase configuration and a backpack configuration by rotating the first and second segments about their respective hinges.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Child Safety Seat with Integrated Mobility System
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">US Patent No. 10,569,763</p>
                      </div>
                      <div>
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930502394-2XGPRMEPVKZKR8A7U9HL/Screen+Shot+2022-01-11+at+11.48.17+AM.png" 
                          alt="Child Safety Seat Patent"
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      A child safety seat includes a seat portion configured to accommodate a child, a base portion configured to support the seat portion, and a wheel system coupled to the base portion. The wheel system includes a plurality of wheels that are selectively deployable from a retracted position to an extended position to enable the child safety seat to function as a stroller when the wheels are in the extended position.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Breathable Infant Sleep Surface
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">US Patent Application No. 17/123,456</p>
                      </div>
                      <div>
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930553634-UF76UMPFCAXXAELRXFPB/Screen+Shot+2022-01-11+at+11.49.09+AM.png" 
                          alt="Breathable Infant Sleep Surface Patent"
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      An infant sleep surface comprising a core structure having a plurality of interconnected spacer fabric layers that create a three-dimensional breathable matrix. The core structure is designed to allow air to flow freely through the mattress while providing adequate support for an infant, reducing the risk of rebreathing carbon dioxide and overheating.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Automated Frozen Dessert Preparation System
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">US Patent Pending</p>
                      </div>
                      <div>
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930595619-G8YRXNQPAFMLRWNJXVN1/Screen+Shot+2022-01-11+at+11.49.51+AM.png" 
                          alt="Automated Frozen Dessert System Patent"
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      An automated system for preparing frozen desserts including a mixing chamber with temperature control elements, automated ingredient dispensing mechanisms, and a control system that manages the sequential mixing, aerating, and freezing processes. The system includes sensors for monitoring texture consistency and temperature control algorithms for optimal product quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Patent Strategy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Innovation Focus</h4>
                    <p className="text-muted-foreground">
                      Patents center on user-centered innovations that solve real-world problems while creating defensible intellectual property around safety, functionality, and manufacturing efficiency.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Market Protection</h4>
                    <p className="text-muted-foreground">
                      Strategic patent filing to protect key innovations while enabling continued product development and market expansion across multiple product categories.
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

export default Patents;