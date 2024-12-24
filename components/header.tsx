import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme/themeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-8 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <span className="font-bold">DreamDeck</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-14">
          <Link href="/explore" className="text-sm font-medium transition-colors hover:text-primary">
            Explore
          </Link>
          <Link href="/trending" className="text-sm font-medium transition-colors hover:text-primary">
            Trending
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button size="sm" variant="destructive">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
