"use client";

import { GoalCard, GoalCardProps } from "../goals/GoalCard";
import { motion } from "framer-motion";

const sampleCards: GoalCardProps[] = [
  {
    userName: "Badshah",
    goals: [
      { id: "1", text: "Drop the next #1 hit single", tag: "Music" },
      { id: "2", text: "Master making 5-star butter chicken", tag: "Cooking" },
      { id: "3", text: "Collaborate with an international artist", tag: "Music" },
    ],
    theme: "neon",
  },
  {
    userName: "Trump",
    goals: [
      { id: "4", text: "Build the world’s greatest golf course", tag: "Sports" },
      { id: "5", text: "Write a best-selling memoir", tag: "Writing" },
      { id: "6", text: "Launch a social media platform that actually works", tag: "Tech" },
    ],
    theme: "superhero",
  },
  {
    userName: "Hardik",
    goals: [
      { id: "7", text: "Score a double century in ODIs", tag: "Cricket" },
      { id: "8", text: "Start a fitness YouTube channel", tag: "Fitness" },
      { id: "9", text: "Lead India to win the World Cup", tag: "Sports" },
    ],
    theme: "minimal",
  },
  {
    userName: "Michael",
    goals: [
      { id: "10", text: "Choreograph a viral dance trend", tag: "Dance" },
      { id: "11", text: "Learn to moonwalk underwater", tag: "Fun" },
      { id: "12", text: "Direct a short film about kindness", tag: "Art" },
    ],
    theme: "aurora",
  },
  {
    userName: "Ryan Gosling",
    goals: [
      { id: "13", text: "Learn to play the piano for a role", tag: "Music" },
      { id: "14", text: "Star in a movie about AI falling in love", tag: "Acting" },
      { id: "15", text: "Win an Oscar with a killer monologue", tag: "Awards" },
    ],
    theme: "cosmic",
  },
  {
    userName: "Ameya",
    goals: [
      { id: "16", text: "Write a novel that redefines sci-fi", tag: "Writing" },
      { id: "17", text: "Visit every country in Europe", tag: "Travel" },
      { id: "18", text: "Start a podcast about underappreciated tech innovations", tag: "Audio" },
    ],
    theme: "cyberpunk",
  },
  {
    userName: "Thorfinn",
    goals: [
      { id: "19", text: "Rediscover the land of Vinland", tag: "Adventure" },
      { id: "20", text: "Master swordsmanship with style", tag: "Skills" },
      { id: "21", text: "Learn to bake Viking bread", tag: "Cooking" },
    ],
    theme: "parchment",
  },
  {
    userName: "Loki",
    goals: [
      { id: "22", text: "Outwit Thor in a game of chess", tag: "Fun" },
      { id: "23", text: "Rule at least one realm (preferably Asgard)", tag: "Power" },
      { id: "24", text: "Learn to cook pasta without burning it", tag: "Cooking" },
    ],
    theme: "zen",
  },
];

export function InfiniteCards() {
  return (
    <div className="relative w-full overflow-hidden py-12 min-h-[500px]">
      <div className="absolute inset-0 flex items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6">
              {sampleCards.map((card, index) => (
                <div key={`${setIndex}-${index}`} className=" shrink-0">
                  <GoalCard userName={card.userName} goals={card.goals} theme={card.theme} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
