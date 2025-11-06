import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import resumeQR from "@/assets/resume-qr-code.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative pt-20">
        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 items-start">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="relative">
                    <img 
                      src="/assets/evan-profile.jpg" 
                      alt="Evan Abel Profile"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                    />
                    {/* LinkedIn Link */}
                    <div className="mt-6 space-y-4">
                      <a 
                        href="https://www.linkedin.com/in/evanabel/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
                      >
                        <img 
                          src="/assets/linkedin-icon.png" 
                          alt="LinkedIn" 
                          className="w-6 h-6 flex-shrink-0"
                        />
                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                      </a>
                      
                      {/* Interactive Resume Link */}
                      <a 
                        href="https://id-preview--edabc21d-9065-49a5-8cde-ed01aa7eab7d.lovable.app/view/evan-abel-1762381597516" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
                      >
                        <div className="w-6 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-full h-auto" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-medium">Interactive Resume!</span>
                        <img 
                          src={resumeQR} 
                          alt="QR Code for Interactive Resume" 
                          className="w-[18px] h-[18px] flex-shrink-0 ml-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* About Content */}
                <div className="md:col-span-2 space-y-6">
                  <h1 className="text-4xl font-bold text-foreground mb-8">About</h1>
                  
                  <div className="prose prose-lg max-w-none text-foreground space-y-6">
                    <p>
                      I have 20 years of experience bringing innovative products to life. As a mechanical engineer and MBA who founded three companies (two acquired), I've driven product and operations excellence at VC-backed startups and Walmart alike. I'm comfortable bringing complex ideas to scale.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        ⇾ (Physical) Product: Design and Manufacturing
                      </h3>
                      <p>
                        I've developed hundreds of innovative products, ranging from a hand mixer and folding colander to an ingenious car seat/stroller and a countertop frozen yogurt machine. I'm equally comfortable uncovering user needs and prototyping as I am sourcing manufacturing partners, optimizing assembly lines, and writing quality assurance plans. I also teach Product Development at NYU's Tandon School of Engineering.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        ⇾ (Digital) Product: Multidisciplinary Collaboration at Walmart and Frank
                      </h3>
                      <p>
                        I've managed digital product development including websites, customer-facing apps and communications, internal team tools, and KPI reporting systems. I led multidisciplinary teams - design, copy, frontend and backend developers, data, QA - and coordinated with operations, marketing, and the C-suite to align with business goals.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        ⇾ Service and Strategy
                      </h3>
                      <p>
                        At Walmart and The Rounds, I focused on improving the customer experience across the entire journey, with the understanding that today's customers and markets will evolve. Building robust business strategy means understanding market trends, user cohorts, behavioral psychology (i.e. willingness to pay and convenience), competitors, regulation, and compliance. I align teams around shared goals to balance current product releases with long-term innovation - essential for building a sustainable competitive edge.
                      </p>
                    </div>
                    
                    <p>
                      I'm based in Brooklyn and am an avid cyclist, zealous backpacker, novice surfer, and proud Brooklyn Botanic Garden Master Composter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;