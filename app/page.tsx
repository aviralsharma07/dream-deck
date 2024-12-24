import { InfiniteCards } from "@/components/home/infiniteCards";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="font-calsans text-4xl md:text-6xl lg:text-7xl">Dream Deck 2025</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">Share your New Year&apos;s resolutions with the world and inspire others. Create beautiful goal cards and join a community of dreamers.</p>
          <div className="flex gap-4">
            <Button size="lg" variant="destructive">
              <Sparkles className="w-4 h-4" />
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Explore Goals
            </Button>
          </div>
        </div>
      </div>
      <InfiniteCards />
    </main>
  );
}
