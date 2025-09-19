import Navigation from "@/components/Navigation";

const Academia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Academia</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Educational background and academic contributions to product design and engineering.
              </p>
            </section>

            <section className="space-y-12">
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-secondary rounded-lg">
                      <h4 className="text-xl font-semibold text-foreground mb-2">Master of Science in Product Design</h4>
                      <p className="text-muted-foreground">Focus on sustainable design and manufacturing processes</p>
                    </div>
                    <div className="p-6 bg-secondary rounded-lg">
                      <h4 className="text-xl font-semibold text-foreground mb-2">Bachelor of Engineering</h4>
                      <p className="text-muted-foreground">Mechanical Engineering with emphasis on materials science</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Research & Publications</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Contributions to academic journals on sustainable product development, 
                    materials innovation, and user-centered design methodologies.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Published research on circular economy in product design</li>
                    <li>• Guest lectures on sustainable manufacturing</li>
                    <li>• Peer reviewer for design and engineering journals</li>
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

export default Academia;