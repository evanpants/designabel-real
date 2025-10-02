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
                Speaking engagements, media coverage, and industry recognition.
              </p>
            </section>

            {/* 2022 Reusies Winner */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    2022 Reusies Winner
                  </h2>
                  <p className="text-muted-foreground">Most Innovative Reuse Company - Enabling Technology</p>
                  <p className="text-muted-foreground">
                    Recognized for creating a reusable packaging service at The Rounds that eliminates tons of consumer packaging waste.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://upstreamsolutions.org/blog/reusies-2022-press-release" target="_blank" rel="noopener noreferrer">
                      Read Press Release
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="/assets/rounds-mason.png" 
                    alt="The Rounds reusable packaging"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Terra.do */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/07e7398e-721a-46c8-b6f2-77e38c3786d9/Screen+Shot+2023-10-02+at+11.19.30+PM.png" 
                    alt="Terra.do"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Terra.do
                  </h2>
                  <p className="text-muted-foreground">October 2023</p>
                  <Button variant="outline">
                    <a href="https://app.terra.do/events/Dxg57oaty4hfjOJWDw1s" target="_blank" rel="noopener noreferrer">
                      How to Navigate a Career in Climate
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Earth Day 2023 - Upstream */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Earth Day 2023 - Upstream
                  </h2>
                  <p className="text-muted-foreground">April 2023</p>
                  <Button variant="outline">
                    <a href="https://upstreamsolutions.org/blog/earth-day-2023" target="_blank" rel="noopener noreferrer">
                      Event Video Recording
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/b028a7f6-d5eb-4f29-ba9b-ba3defb6bbb7/Screen+Shot+2023-10-02+at+11.29.20+PM.png" 
                    alt="Earth Day 2023 - Upstream"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* 2023 Sustainability in Packaging US */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/ef82610c-e119-41f7-88ce-14d57acb34ba/sustainability+in+packaging+2023.jpeg" 
                    alt="2023 Sustainability in Packaging US"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    2023 Sustainability in Packaging US
                  </h2>
                  <p className="text-muted-foreground">March 2023</p>
                  <Button variant="outline">
                    <a href="https://www.sustainability-in-packaging.com/sustainability-in-packaging-us/agenda?EventId=4943" target="_blank" rel="noopener noreferrer">
                      Fireside Chat: The Age of #Refillution
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* FoodHacks Panel Moderator */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    FoodHacks Panel Moderator
                  </h2>
                  <p className="text-muted-foreground">October 2023</p>
                  <Button variant="outline" asChild>
                    <a href="https://www.youtube.com/embed/HMR6rvG_dYc" target="_blank" rel="noopener noreferrer">
                      Video Recording
                    </a>
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/aa496255-7cda-49dd-a40c-33e7ea024229/Screen+Shot+2023-12-03+at+11.01.53+AM.png" 
                    alt="FoodHacks Panel Moderator"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Making the Rounds Podcast */}
            <section className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/3b16fb1b-0ec9-48b5-83c1-439db095f0ad/Screen+Shot+2023-10-02+at+11.58.22+PM.png" 
                    alt="Making the Rounds Podcast"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Making the Rounds with Reusable Grocery Delivery: Episode #108
                  </h2>
                  <Button variant="outline">
                    <a href="https://upstreamsolutions.org/podcast/the-rounds" target="_blank" rel="noopener noreferrer">
                      Podcast
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Additional podcast image */}
            <section className="space-y-8">
              <div className="text-center">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/55ab0412e4b08ed55aeb4881/e1d51078-98e3-49f9-a600-b31e2321f719/Screen+Shot+2023-10-02+at+11.42.23+PM.png" 
                  alt="Podcast appearance"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Achievements;