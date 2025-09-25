import Navigation from "@/components/Navigation";

const Academia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center space-y-8">
              <h1 className="text-4xl font-bold text-foreground">Teaching</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Courses and educational programs focused on product development, sustainability, and design innovation.
              </p>
            </section>

            <section className="space-y-12">
              <div className="space-y-8">
                <div className="p-8 bg-secondary rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        NYU - Circular Economy <span className="text-lg font-normal text-muted-foreground">(Course Creator)</span>
                      </h3>
                    </div>
                    <div>
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930110468-6KZLHVX6HMRGD1VBH07Y/Screen+Shot+2022-01-11+at+11.41.41+AM.png" 
                        alt="NYU Circular Economy Course"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    This course introduces the circular economy, a system designed to minimize waste and maximize resource value by reusing materials and products. It explores strategies and challenges in implementing these changes across various industries, considering economic, cultural, and technological factors. By examining real-world examples and innovative business models, the course aims to foster a sustainable, regenerative, and zero-waste economic future.
                  </p>
                </div>

                <div className="p-8 bg-secondary rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        NYU - (Physical) Product Design and Development <span className="text-lg font-normal text-muted-foreground">(Course Creator)</span>
                      </h3>
                    </div>
                    <div>
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930162467-4MZMPQ1Q3IAOAFRYDM2K/Screen+Shot+2022-01-11+at+11.42.36+AM.png" 
                        alt="NYU Product Design Course"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    This course dives deep into physical product development and prototyping, building on ideation skills. You'll learn about various prototype types—Proof of Concept, Looks-like, Works-like, and Engineering Prototypes—and how to select the best methods and materials based on factors like cost and time. The course emphasizes iterative testing to meet stakeholder needs, balancing form and function throughout the product development lifecycle, from Product Requirements to Mass Production, while also considering aspects like Design-for-Manufacturing and intellectual property.
                  </p>
                </div>

                <div className="p-8 bg-secondary rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Pioneer Works - Design and Modeling <span className="text-lg font-normal text-muted-foreground">(Course Creator)</span>
                      </h3>
                    </div>
                    <div>
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/1641930198842-4UV85K0W7IISWPQFK38E/Screen+Shot+2022-01-11+at+11.43.12+AM.png" 
                        alt="Pioneer Works Design Course"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    This program teaches high school students about physics, design, and assembly techniques by guiding them through the process of modeling, 3D printing, and assembling small remote control boats. It offers hands-on experience in product creation and engineering principles.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Teaching Philosophy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">Hands-On Learning</h4>
                    <p className="text-muted-foreground">
                      Emphasis on practical application and real-world project experience to bridge the gap between theory and practice.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">Systems Thinking</h4>
                    <p className="text-muted-foreground">
                      Teaching students to consider the entire product lifecycle and its impact on society and the environment.
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

export default Academia;