"use client";
import { Sparkles, Github, Twitter, Linkedin, Globe, PencilIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
const links = [
  { href: "https://github.com/aviralsharma07", icon: Github, label: "GitHub" },
  { href: "https://twitter.com/_aviral07", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/in/aviral07", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.aviral.tech", icon: Globe, label: "Website" },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="w-full border-2 mt-10 border-1 drop-shadow-md bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-800 py-8">
      <div className="px-4 md:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <h2 className="text-lg inline-flex items-center gap-2 font-bold">
            <Sparkles className="h-6 w-6 text-yellow-500" /> DreamDeck
          </h2>
          <p className="italic text-sm opacity-70">&quot;Dream it. Write it. Crush it. Repeat.&quot;</p>
        </div>

        {/* Middle Section */}
        <div className="mt-6 sm:mt-0 flex gap-4 text-sm font-medium items-center">
          {links.map(({ href, icon: Icon, label }) => (
            <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center" aria-label={label}>
              <Icon className="h-6 w-6 text-destructive transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6" />
              <span className="absolute -bottom-7 hidden text-sm text-muted group-hover:block">{label}</span>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="mt-6 sm:mt-0 flex gap-4 items-center">
          <Button variant="destructive" onClick={() => router.push("/create-card")}>
            Create Your Vision Card <PencilIcon className="h-5 w-5" />
          </Button>
          {/* <Button variant="outline">Random Goal 🎲</Button> */}
        </div>
      </div>

      {/* Easter Egg */}
      <div className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400">✨ Remember: If your dreams don&apos;t scare you, they&apos;re not big enough. 🚀</div>
    </footer>
  );
};

export default Footer;
