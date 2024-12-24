"use client";

import { cn } from "@/lib/utils";
import { cardThemes } from "./cardThemes";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Plus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GoalTag } from "./goalTag";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Goal {
  text: string;
  tags: string[];
}

interface EnhancedGoalCardProps {
  theme: keyof typeof cardThemes;
  goals: Goal[];
  likes?: number;
  achieved?: number;
}

export function GoalCard({ theme, goals, likes = 0, achieved = 0 }: EnhancedGoalCardProps) {
  const themeStyle = cardThemes[theme];

  return (
    <motion.div whileHover={{ scale: 1.02, rotate: 0.5 }} whileTap={{ scale: 0.98 }} className="relative">
      <Card className={cn("relative border-2 transition-all duration-300 overflow-hidden", themeStyle.background, themeStyle.border, themeStyle.paper)}>
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <GoalTag text={theme} className={themeStyle.accent} />
            <GoalTag text={`${achieved}/${goals.length} Achieved`} className={themeStyle.tag} />
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] pr-4">
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <p className={cn("text-lg relative", themeStyle.text)}>{goal.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {goal.tags.map((tag, tagIndex) => (
                      <GoalTag key={tagIndex} text={tag} className={themeStyle.tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm" className={cn("gap-1 group", themeStyle.text)}>
            <Heart className="w-4 h-4 group-hover:fill-current" />
            <span>{likes}</span>
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className={cn("gap-1", themeStyle.text)}>
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className={cn("gap-1", themeStyle.text)}>
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
