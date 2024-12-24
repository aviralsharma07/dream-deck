"use client";

import { cn } from "@/lib/utils";
import { cardThemes } from "./cardThemes";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Goal } from "@/app/create-card/types";
import { Sparkles, Tag } from "lucide-react";
import { Badge } from "../ui/badge";

export interface GoalCardProps {
  userName: string;
  goals: Goal[];
  theme: keyof typeof cardThemes;
  onGoalRemove?: (id: string) => void;
  cardRef?: React.RefObject<HTMLDivElement | null>;
}

export function GoalCard({ userName, goals, theme, onGoalRemove, cardRef }: GoalCardProps) {
  const themeStyle = cardThemes[theme];

  return (
    <div className="p-10 inline-block max-w-3xl w-full">
      <Card className={cn("relative p-8 border-2 transition-all duration-300 rounded-none", themeStyle.background, themeStyle.border)} ref={cardRef}>
        <CardHeader>
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h3 className={cn("text-xl font-semibold", themeStyle.text)}>{userName}</h3>
              <span className={cn("text-sm opacity-80", themeStyle.text)}>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <Sparkles className={cn("w-6 h-6", themeStyle.text)} />
          </div>
          <div className="mb-8">
            <h2 className={cn("text-2xl font-bold tracking-tight", themeStyle.text)}>2025 Vision Board</h2>
          </div>
        </CardHeader>

        {/* Goals Section */}
        <CardContent>
          <div className="space-y-3 mb-8">
            {goals.map((goal) => (
              <div key={goal.id} className={cn("group flex items-center justify-between gap-4 p-4 rounded-lg transition-all duration-200 bg-background/5", "hover:bg-background/15 cursor-pointer", "border border-border/10 backdrop-blur-sm", "transform hover:scale-[1.02]")} onClick={() => onGoalRemove && onGoalRemove(goal.id)}>
                <span className={cn("text-base font-medium", themeStyle.text)}>{goal.text}</span>
                <Badge variant="secondary" className={cn("text-xs px-3 py-1 flex items-center transition-colors", themeStyle.tag)}>
                  <Tag className="w-3 h-3 mr-1.5" />
                  {goal.tag}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="relative z-10 pt-4 border-t border-border/10">
          <div className="flex flex-col items-center mx-auto gap-3">
            <span className={cn("text-lg rounded-sm py-[2px] px-1 font-bold tracking-wider", themeStyle.accent)}>#DreamDeck2025</span>

            <p className={cn("text-sm text-center opacity-80", themeStyle.text)}>
              Create your vision card at <span className={cn("transition-opacity cursor-pointer hover:opacity-75 hover:underline", "text-yellow-500 font-bold")}>dream-deck-mauve.vercel.app</span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
