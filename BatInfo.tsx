import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Leaf, Moon, Heart, AlertTriangle } from "lucide-react";

interface BatInfoProps {
  favoriteAnimal: string;
  fearAnimal: string;
}

export function BatInfo({ favoriteAnimal, fearAnimal }: BatInfoProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b-8 border-accent">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649042251430-2034ac88ba2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxUZXhhcyUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NzQ5OTU3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Texas landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-secondary/80 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="inline-block mb-6 text-7xl animate-bounce">🦇</div>
          <h1 className="text-5xl md:text-7xl mb-6 drop-shadow-lg" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(241,196,15,0.5)' }}>
            Welcome to the World of Bats
          </h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            🌙 Discover the fascinating life of nature's night guardians 🌙
          </p>
        </div>
      </section>

      {/* Survey Results Banner */}
      <section className="bg-accent border-y-4 border-primary py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 bg-white/80 rounded-xl p-4 shadow-md border-2 border-primary">
              <Heart className="w-8 h-8 text-primary" />
              <p className="text-lg">
                Your favorite: <strong className="text-primary text-xl">{favoriteAnimal}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/80 rounded-xl p-4 shadow-md border-2 border-secondary">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <p className="text-lg">
                You fear: <strong className="text-secondary text-xl">{fearAnimal}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-primary/20 border-4 border-primary p-2">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all">About Bats</TabsTrigger>
            <TabsTrigger value="ecology" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all">Ecology</TabsTrigger>
            <TabsTrigger value="conservation" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all">Conservation</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl mb-4">Incredible Flying Mammals</h2>
                <p className="text-muted-foreground mb-4">
                  Bats are the only mammals capable of true flight. With over 1,400 species 
                  worldwide, they make up about 20% of all mammal species on Earth.
                </p>
                <p className="text-muted-foreground mb-4">
                  These remarkable creatures have evolved sophisticated echolocation abilities, 
                  allowing them to navigate and hunt in complete darkness with incredible precision.
                </p>
                <p className="text-muted-foreground">
                  Despite common fears, bats are generally gentle animals that play crucial 
                  roles in our ecosystems and rarely pose threats to humans.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630450431262-264ab5fe81c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXQlMjBjbG9zZSUyMHBvcnRyYWl0JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzc0OTk1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Close-up of a bat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-4 border-primary shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Moon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>🌙 Nocturnal Hunters</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Most bat species are nocturnal, using echolocation to hunt insects
                    and navigate through the darkness with remarkable accuracy.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-4 border-secondary shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Leaf className="w-10 h-10 text-secondary mb-2" />
                  <CardTitle>🍃 Diverse Diets</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    While most bats eat insects, some species consume fruit, nectar,
                    fish, or small vertebrates. Only three species feed on blood.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-4 border-accent shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Heart className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>💚 Social Creatures</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Many bat species are highly social, living in colonies that can
                    number from dozens to millions of individuals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ecology" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl mb-4">Ecosystem Services</h2>
                  <p className="text-muted-foreground mb-4">
                    Bats provide invaluable services to ecosystems and human economies:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span><strong>Pest Control:</strong> A single bat can eat thousands of insects per night, including agricultural pests</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span><strong>Pollination:</strong> Many tropical plants depend on bats for pollination, including bananas and agave</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span><strong>Seed Dispersal:</strong> Fruit-eating bats help regenerate forests by spreading seeds over vast distances</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span><strong>Economic Value:</strong> Bats save billions of dollars annually in pest control services for agriculture</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733937440188-6c61d7a3759e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBtb3NzJTIwZ3JlZW58ZW58MXx8fHwxNzc0OTk1MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Forest ecosystem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Card className="bg-secondary text-secondary-foreground border-4 border-accent shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">🎮 Did You Know?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>🦇 Bats can live for over 30 years, exceptionally long for their size</p>
                <p>🦇 They're found on every continent except Antarctica</p>
                <p>🦇 Some species can fly at speeds exceeding 100 mph</p>
                <p>🦇 The smallest bat weighs less than a penny</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conservation" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1658062787926-92e3cd64c4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMG5hdHVyZSUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3NzQ5OTUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wildlife conservation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Protecting Our Bats</h2>
                <p className="text-muted-foreground mb-4">
                  Many bat species face serious threats and population declines. Conservation 
                  efforts are critical to ensure their survival and the health of our ecosystems.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-4 border-destructive shadow-lg">
                    <h4 className="mb-2 text-primary text-xl">⚠️ Major Threats</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Habitat loss and destruction</li>
                      <li>• White-nose syndrome (fungal disease)</li>
                      <li>• Wind turbine collisions</li>
                      <li>• Climate change impacts</li>
                      <li>• Human disturbance of roosts</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-4 border-primary shadow-lg">
                    <h4 className="mb-2 text-secondary text-xl">✨ How You Can Help</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Install bat houses in your yard</li>
                      <li>• Avoid disturbing bat roosts</li>
                      <li>• Support bat conservation organizations</li>
                      <li>• Educate others about bat importance</li>
                      <li>• Reduce pesticide use</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16 border-t-8 border-accent shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4 animate-pulse">🦇</div>
          <h3 className="text-3xl mb-2 drop-shadow-lg">Join the Conservation Effort</h3>
          <p className="text-primary-foreground/90 mb-6 text-xl">
            Every action counts in protecting these incredible creatures! 🌟
          </p>
          <p className="text-sm text-primary-foreground/80">
            Wildlife Education Initiative • Protecting Nature's Night Guardians
          </p>
        </div>
      </footer>
    </div>
  );
}
