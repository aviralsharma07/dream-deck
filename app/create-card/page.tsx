"use client";

import React, { RefObject, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Download } from "lucide-react";
import type { Goal } from "./types";
// import { GoalCard } from "@/components/goals/GoalCard";
import { GoalCard } from "@/components/goals/GoalCard";
import { cardThemes } from "@/components/goals/cardThemes";
import { downloadCard } from "@/lib/downloadCard";

const tags = ["Career", "Health", "Personal", "Financial", "Education", "Travel", "Relationships", "Spiritual", "Writing", "Reading", "Sports"];

const themes = [
  { id: "neon", name: "Neon Dreams" },
  { id: "zen", name: "Zen Garden" },
  { id: "cosmic", name: "Cosmic Vibes" },
  { id: "minimal", name: "Minimal Focus" },
  { id: "parchment", name: "Parchment" },
  { id: "aurora", name: "Aurora Borealis" },
  { id: "cyberpunk", name: "Cyberpunk" },
  { id: "superhero", name: "Superhero" },
];

type ThemeType = keyof typeof cardThemes;

function GoalCardCreator() {
  const [userName, setUserName] = useState("");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [theme, setTheme] = useState<ThemeType>("superhero");
  const cardRef = useRef<HTMLDivElement>(null);

  const addGoal = () => {
    if (newGoal.trim() && selectedTag) {
      setGoals([...goals, { id: Date.now().toString(), text: newGoal.trim(), tag: selectedTag }]);
      setNewGoal("");
      setSelectedTag("");
    }
  };

  const removeGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleDownloadCard = () => {
    downloadCard(cardRef as RefObject<HTMLDivElement>, userName);
    console.log("Downloading card...");
  };

  console.log("is Download Possible", !userName || goals.length === 0);
  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-8">
      <div className="w-full max-w-3xl space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-destructive to-destructive/60">Create Your 2025 Vision Card</h1>
          <p className="text-center text-muted-foreground">Transform your dreams into a beautiful shareable card</p>
        </div>

        <div className="space-y-4">
          <Input placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} className="text-lg" />

          <Select value={theme} onValueChange={(value) => setTheme(value as ThemeType)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
              {themes.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Input placeholder="Add a new goal" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} />
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Tag" />
              </SelectTrigger>
              <SelectContent>
                {tags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={addGoal} variant="outline" size="icon">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <GoalCard userName={userName || "Your Name"} goals={goals} theme={theme} onGoalRemove={removeGoal} cardRef={cardRef} />

        <Button className="w-full" variant="destructive" onClick={handleDownloadCard}>
          <Download className="w-4 h-4 mr-2" />
          Download Your Vision Card
        </Button>
      </div>
    </div>
  );
}

export default GoalCardCreator;
