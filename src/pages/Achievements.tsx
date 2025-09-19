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
                    <li>• VP of Product at multiple successful startups</li>
                    <li>• Led teams from concept to mass production</li>
                    <li>• Managed product portfolios exceeding $50M in revenue</li>
                    <li>• Successfully launched 15+ consumer products</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Industry Recognition</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Featured in major design publications</li>
                    <li>• Speaking engagements at industry conferences</li>
                    <li>• Advisor to emerging technology companies</li>
                    <li>• Mentor in accelerator programs</li>
                  </ul>
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