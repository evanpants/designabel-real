import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Sustainability Resources</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connecting innovators with opportunities in climate technology, circular economy, and sustainable design.
              </p>
            </section>

            {/* Circular Economy Section */}
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Circular Economy</h2>
                <div className="w-full max-w-2xl mx-auto">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/f6680f86-5f0f-4edc-90b2-2fa1df0b3f6d/circular-economy-smart-cities-social.jpeg" 
                    alt="Circular Economy Concept"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Ellen MacArthur Foundation", url: "https://ellenmacarthurfoundation.org/" },
                  { name: "Closed Loop Partners", url: "https://www.closedlooppartners.com/" },
                  { name: "GreenBiz", url: "https://www.greenbiz.com/collections/circular-economy" },
                  { name: "Upstream", url: "https://upstreamsolutions.org/" }
                ].map((link) => (
                  <Button key={link.name} variant="outline" className="h-auto p-4 justify-start" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full text-left">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </section>

            {/* Career Navigation Section */}
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Career Navigation</h2>
                <div className="w-full max-w-2xl mx-auto">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/6f697300-c42c-4c5d-95b8-9f6ce16502ef/officeinnature2-4.jpeg" 
                    alt="Office in Nature"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "ClimateBase", url: "https://climatebase.org/" },
                  { name: "SOSV", url: "https://sosvclimatetech.com/" },
                  { name: "Green Jobs Board", url: "https://www.greenjobsboard.us/" },
                  { name: "Terra.do Job Board", url: "https://terra.do/climate-jobs/job-board/" },
                  { name: "Climate Change Careers", url: "https://www.climatechangecareers.com/" },
                  { name: "Climate Jobs List", url: "https://www.climatejobslist.com/" },
                  { name: "CTVC", url: "https://climate-tech-vc.pallet.com/jobs" }
                ].map((link) => (
                  <Button key={link.name} variant="outline" className="h-auto p-4" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Education</h2>
                <div className="w-full max-w-2xl mx-auto">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/5d32244f-1a88-421d-b88d-b8d76d34269d/Nature_helps_kids_learn.jpg" 
                    alt="Nature Education"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "Climatebase Fellowship", url: "https://climatebase.org/fellowship" },
                  { name: "Terra.do", url: "https://terra.do/climate-education/" },
                  { name: "SOSV", url: "https://sosvclimatetech.com/" }
                ].map((link) => (
                  <Button key={link.name} variant="outline" className="h-auto p-4" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </section>

            {/* Investment Section */}
            <section className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Investment / Accelerator</h2>
                <div className="w-full max-w-2xl mx-auto">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/3969aac4-86f3-41bb-bcc5-a5f475d4f551/shutterstock_money_nature_DIY+13.jpeg" 
                    alt="Investment in Nature"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "Third Sphere", url: "https://thirdsphere.com/" },
                  { name: "Elemental Excelerator", url: "https://elementalexcelerator.com/" },
                  { name: "Remarkable Ventures", url: "https://www.remarkable.vc/" }
                ].map((link) => (
                  <Button key={link.name} variant="outline" className="h-auto p-4" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;