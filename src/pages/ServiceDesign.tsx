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
              Creating end-to-end systems and experiences that 'surprise and delight' through design thinking methodologies that balance user needs with business objectives.
            </p>
          </section>

          {/* The Rounds Project */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Rounds</h2>
            <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
              <div className="order-2 md:order-1">
                <p className="text-lg text-muted-foreground mb-6">
                  Created a 2-way logistics system to meet organizational goals of lowering Customer Acquisition Cost (CAC) and increasing Lifetime Value (LTV).
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Design Thinking Process</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">1. Empathize</h4>
                        <p className="text-muted-foreground">Conducted user research via interviews and surveys to understand customer pain points in traditional delivery and returns, discovering frustration with single-use packaging and inconvenient return processes. Opportunities to offer services such as compost and recycling pickup, as well as dry cleaning and christmas tree pickup were discovered.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">2. Define</h4>
                        <p className="text-muted-foreground">Defined opportunity: Create a sustainable delivery system that reduces packaging waste while improving customer convenience and business economics through reusable containers and scheduled pickups.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">3. Ideate</h4>
                        <p className="text-muted-foreground">Brainstormed two-way logistics models, reusable packaging designs, and customer touchpoints across ordering, receiving, storing, using, and returning phases. We discovered partnerships with apartment buildings allowed delivery to the customer door, where other services delivered to the lobby.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">4. Prototype</h4>
                        <p className="text-muted-foreground">Developed prototypes for reusable containers, delivery workflow, and operational processes including receiving, filling, sorting, scanning, cleaning, and packing systems.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">5. Test</h4>
                        <p className="text-muted-foreground">Piloted service with cohort of customers on a targeted delivery day to validate container durability, customer satisfaction with scheduled pickups, and operational efficiency metrics. This was done to minimize impact to the general business as it required training of only 2 staff. We also discovered opportunities to improve the return process and offered return bins in central locations in addition to the door pickup on delivery day.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">6. Implement</h4>
                        <p className="text-muted-foreground">Refined processes based on feedback, optimized scanning, cleaning and sorting workflows, and scaled operations while maintaining the 'surprise and delight' customer experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <img 
                  src="/assets/rounds-bags-and-compost.jpg" 
                  alt="The Rounds delivery bags and compost service"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="/assets/rounds-mason.png" 
                  alt="The Rounds reusable containers with products"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="/assets/rounds-dc-bicycle.jpg" 
                  alt="The Rounds delivery bicycle in Washington DC"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Separator line */}
            <div className="border-t border-foreground/20 mt-16"></div>
          </section>

          {/* Walmart InHome Delivery Project */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Walmart InHome Delivery</h2>
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="space-y-6 order-1 md:order-1">
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
                <img 
                  src="/assets/walmart-survey.png" 
                  alt="Walmart InHome customer survey"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="order-2 md:order-2">
                <p className="text-lg text-muted-foreground mb-6">
                  Developed an innovative last-inch delivery system enabling Walmart associates to deliver groceries directly to customers' refrigerators.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1. Understanding User Needs</h3>
                    <p className="text-muted-foreground">
                      Conducted extensive user research to understand customer pain points with traditional delivery: being home for deliveries, groceries left outside in heat, and porch piracy. Discovered customers' desire for convenience balanced with security concerns about home access.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">2. Problem & Opportunity</h3>
                    <p className="text-muted-foreground">
                      Defined the challenge: Create a delivery service that provides ultimate convenience (direct-to-fridge delivery) while building trust and ensuring security. Key metrics to optimize: cost per delivery, average order value, CAC, and LTV.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">3. Solution Generation</h3>
                    <p className="text-muted-foreground">
                      Brainstormed technology solutions and trust-building mechanisms. Explored IoT smart locks, garage doors and lock boxes for delivery options; live-stream camera systems for transparency, tight delivery windows to manage expectations, and associate training programs for professionalism and consistency.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">4. Prototype Technology & Process</h3>
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
                    <h3 className="text-xl font-semibold text-foreground mb-2">5. Test Technology and Customer Experience</h3>
                    <p className="text-muted-foreground">
                      Piloted service to measure customer comfort levels, security perception, service satisfaction and willingness to pay. Iterated on communication strategies and transparency features.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">6. Implement → Metrics & Scale</h3>
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
