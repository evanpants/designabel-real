import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import doonaMain from "@/assets/doona-main.jpg";
import doonaGif from "@/assets/doona-gif.gif";
import newton from "@/assets/newton.png";
import wimGif from "@/assets/wim-gif.gif";
import wimSide from "@/assets/wim-side.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Doona Section */}
            <section className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <img 
                    src={doonaMain} 
                    alt="Doona: Stroller to Car Seat conversion"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <img 
                    src={doonaGif} 
                    alt="Doona conversion animation"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">
                    Doona: Stroller → Car Seat + ISOfix Base
                  </h2>
                  <p className="text-lg text-muted-foreground">VP of Product</p>
                  <p className="text-foreground leading-relaxed">
                    As VP of Product at Doona, I led the development of this revolutionary infant car seat that transforms into a stroller with the click of a button. This groundbreaking product required extensive engineering innovation to meet stringent safety standards while maintaining ease of use. I managed complex certification processes including ASTM F833 for stability, brakes, and safety features, plus ASTM F3317 crash testing. The project involved coordinating cross-functional teams through prototyping, design for manufacturing, pilot production, and scaling to mass production across global markets.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <a href="https://www.doona.com/" target="_blank" rel="noopener noreferrer">
                      Doona Website
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Newton Section */}
            <section className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">Newton: Crib Mattress</h2>
                  <p className="text-foreground leading-relaxed">
                    The Newton crib mattress represents a breakthrough in infant sleep safety through innovative breathable design. Unlike traditional mattresses, Newton's unique structure allows for unrestricted airflow, reducing the risk of CO2 rebreathing. I led the product development process from concept through manufacturing, focusing on creating a mattress that could be completely washable while maintaining structural integrity. The design required extensive material testing and safety validation to meet CPSC standards while delivering superior comfort and peace of mind for parents.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <a href="https://newtonbaby.com/" target="_blank" rel="noopener noreferrer">
                      Newton Website
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src={newton} 
                    alt="Newton breathable crib mattress"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Wim Section */}
            <section className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <img 
                    src={wimGif} 
                    alt="Wim frozen yogurt machine mixing"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <img 
                    src={wimSide} 
                    alt="Wim machine open view"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">Wim: Froyo Machine</h2>
                  <p className="text-foreground leading-relaxed">
                    The Wim frozen yogurt machine revolutionizes commercial soft-serve production through advanced mixing technology and user-friendly design. I spearheaded the development of this sophisticated system that combines precision temperature control with innovative mixing mechanisms to deliver consistently perfect texture. The project required extensive food safety compliance, thermal engineering, and user interface design to create a machine that could operate reliably in high-volume commercial environments while maintaining product quality throughout extended operation cycles.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <a href="https://archive.curbed.com/2017/8/9/16119664/frozen-yogurt-machine-home-buy-wim" target="_blank" rel="noopener noreferrer">
                      Wim Launch
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Whstl Brief-Pack Section */}
            <section className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">
                    Whstl Brief-Pack
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    The Whstl Brief-Pack represents the perfect fusion of professional aesthetics and functional versatility. This innovative convertible bag seamlessly transforms from an elegant briefcase to a comfortable backpack through a patented strap mechanism that eliminates detachable parts. I led the comprehensive product development process, from initial concept through manufacturing scale-up, focusing on premium materials, durability testing, and ergonomic design. The bag features thoughtful organizational elements and is constructed with high-quality waxed canvas and leather to ensure it ages beautifully while maintaining its professional appearance.
                  </p>
                  <Button variant="outline">
                    <a href="/bags">Whstl Website</a>
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