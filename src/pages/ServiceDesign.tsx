import Navigation from "@/components/Navigation";

const ServiceDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Service Design</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Creating end-to-end experiences through design thinking methodologies that balance user needs with business objectives.
            </p>
          </section>

          {/* The Rounds Project */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Rounds</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Using <strong>DESIGN THINKING</strong> and service design to create an end-to-end system of 2-way logistics that meets organizational goals of lowering Customer Acquisition Cost (CAC) and increasing Lifetime Value (LTV), while offering a customer experience that 'surprises and delights' customers throughout the product journey.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Design Thinking Process</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">1. Empathize - Understanding User Needs</h4>
                        <p className="text-muted-foreground">Conducted user research to understand customer pain points in traditional delivery and returns, discovering frustration with single-use packaging and inconvenient return processes.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">2. Define - Problem Statement</h4>
                        <p className="text-muted-foreground">Defined opportunity: Create a sustainable delivery system that reduces packaging waste while improving customer convenience and business economics through reusable containers and scheduled pickups.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">3. Ideate - Solution Generation</h4>
                        <p className="text-muted-foreground">Brainstormed two-way logistics models, reusable packaging designs, and customer touchpoints across ordering, receiving, storing, using, and returning phases.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">4. Prototype - Building Solutions</h4>
                        <p className="text-muted-foreground">Developed prototypes for reusable containers, delivery workflow, and operational processes including receiving, filling, sorting, scanning, cleaning, and packing systems.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">5. Test - Validation</h4>
                        <p className="text-muted-foreground">Piloted service with early adopters to validate container durability, customer satisfaction with scheduled pickups, and operational efficiency metrics.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">6. Implement - Scale & Iterate</h4>
                        <p className="text-muted-foreground">Refined processes based on feedback, optimized cleaning and sorting workflows, and scaled operations while maintaining the 'surprise and delight' customer experience.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Customer Journey Touchpoints</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Ordering:</strong> Simple subscription management</li>
                      <li><strong>Receiving:</strong> Scheduled delivery in reusable containers</li>
                      <li><strong>Storing:</strong> Stackable, space-efficient container design</li>
                      <li><strong>Using:</strong> Premium product experience</li>
                      <li><strong>Returning:</strong> Effortless pickup on next delivery</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Operations Design</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Receiving: Intake and quality inspection</li>
                      <li>Filling: Efficient product assembly</li>
                      <li>Sorting: Optimized route planning</li>
                      <li>Scanning: Digital tracking system</li>
                      <li>Cleaning: Sanitization protocols</li>
                      <li>Packing: Container preparation</li>
                      <li>Delivery: Last-mile logistics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <img 
                  src="/assets/dc-anthem-earth-day-rcup-rounds.png" 
                  alt="The Rounds service design presentation"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Walmart InHome Delivery Project */}
          <section>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <img 
                  src="/assets/walmart-inhome-delivery.jpg" 
                  alt="Walmart InHome delivery service"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="/assets/inhome-app-main.jpg" 
                  alt="Walmart InHome app interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Walmart InHome Delivery</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Applied <strong>DESIGN THINKING</strong> and service design methodologies to create an innovative last-inch delivery solution that allows Walmart associates to deliver groceries directly to customers' refrigerators.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1. Empathize - Understanding User Needs</h3>
                    <p className="text-muted-foreground">
                      Conducted extensive user research to understand customer pain points with traditional delivery: being home for deliveries, groceries left outside in heat, and food safety concerns. Discovered customers' desire for convenience balanced with security concerns about home access.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">2. Define - Problem & Opportunity</h3>
                    <p className="text-muted-foreground">
                      Defined the challenge: Create a delivery service that provides ultimate convenience (direct-to-fridge delivery) while building trust and ensuring security. Key metrics to optimize: cost per delivery, average order value, CAC, and LTV.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">3. Ideate - Solution Generation</h3>
                    <p className="text-muted-foreground">
                      Brainstormed technology solutions and trust-building mechanisms. Explored IoT smart locks for secure home access, live-stream camera systems for transparency, and associate training programs for professionalism.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">4. Prototype - Technology & Process</h3>
                    <p className="text-muted-foreground mb-3">
                      Built technology infrastructure and operational processes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>IoT Smart Locks:</strong> Developed secure, time-limited access control system</li>
                      <li><strong>Live Stream Cameras:</strong> Implemented real-time video feed for customer peace of mind</li>
                      <li><strong>Walmart System Integration:</strong> Leveraged existing infrastructure with zero additional cost</li>
                      <li><strong>Associate Protocols:</strong> Created detailed training and quality standards</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">5. Test - Building Trust</h3>
                    <p className="text-muted-foreground">
                      Piloted service to test and reduce user friction around trusting delivery associates with home access. Measured customer comfort levels, security perception, and service satisfaction. Iterated on communication strategies and transparency features.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">6. Implement - Metrics & Scale</h3>
                    <p className="text-muted-foreground mb-3">
                      Tracked and optimized key business metrics:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>Cost per Delivery:</strong> Optimized routing and associate efficiency</li>
                      <li><strong>Average Order Value:</strong> Premium service drove larger basket sizes</li>
                      <li><strong>CAC (Customer Acquisition Cost):</strong> Word-of-mouth and PR reduced acquisition costs</li>
                      <li><strong>LTV (Lifetime Value):</strong> Subscription model increased customer retention and value</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Key Innovation</h3>
                    <p className="text-muted-foreground">
                      Successfully balanced cutting-edge convenience with trust-building through transparency technology, creating a differentiated service that transformed the grocery delivery experience while meeting business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ServiceDesign;
