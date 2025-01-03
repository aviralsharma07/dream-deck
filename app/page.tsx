"use client";
import { InfiniteCards } from "@/components/home/infiniteCards";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="font-calsans inline-flex items-center gap-1 md:gap-5 text-4xl md:text-6xl lg:text-7xl">
            Dream Deck 2025
            <div className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image src="/rocket.png" fill alt="logo" />
            </div>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">Share your New Year&apos;s resolutions with the world and inspire others. Create beautiful goal cards and join a community of dreamers.</p>
          <div className="flex gap-4">
            <Button size="lg" variant="destructive" onClick={() => router.push("/create-card")}>
              <Sparkles className="w-4 h-4" />
              Get Started
            </Button>
            <Button variant="outline" size="lg" onClick={() => router.push("/vision-wall")}>
              Explore Goals
            </Button>
          </div>
        </div>
      </div>
      <InfiniteCards />
    </main>
  );
}
