"use client";

import { GoalCard } from "../goals/GoalCard";
import { motion } from "framer-motion";

const sampleGoals = [
  {
    theme: "superhero" as const,
    goals: [
      {
        text: "Train like a superhero and run a marathon! 🏃‍♂️",
        tags: ["Fitness", "Challenge"],
      },
    ],
    likes: 156,
    achieved: 1,
  },
  {
    theme: "zen" as const,
    goals: [
      {
        text: "Practice mindfulness meditation daily 🧘‍♀️",
        tags: ["Wellness"],
      },
      {
        text: "Create a minimalist living space ✨",
        tags: ["Lifestyle"],
      },
    ],
    likes: 89,
    achieved: 0,
  },
  {
    theme: "cyberpunk" as const,
    goals: [
      {
        text: "Master cybersecurity skills 🔒",
        tags: ["Tech", "Learning"],
      },
    ],
    likes: 234,
    achieved: 1,
  },
  {
    theme: "parchment" as const,
    goals: [
      {
        text: "Write a fantasy novel ✍️",
        tags: ["Creative"],
      },
      {
        text: "Read 50 classic books 📚",
        tags: ["Reading"],
      },
    ],
    likes: 167,
    achieved: 0,
  },
  {
    theme: "aurora" as const,
    goals: [
      {
        text: "See the Northern Lights in Iceland 🌌",
        tags: ["Travel", "Adventure"],
      },
    ],
    likes: 312,
    achieved: 0,
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
              {sampleGoals.map((goal, index) => (
                <div key={`${setIndex}-${index}`} className="w-[350px] shrink-0">
                  <GoalCard {...goal} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
