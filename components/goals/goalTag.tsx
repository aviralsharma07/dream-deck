"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GoalTagProps {
  text: string;
  className?: string;
}

export function GoalTag({ text, className }: GoalTagProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Badge variant="outline" className={cn("cursor-pointer transition-colors", className)}>
        {text}
      </Badge>
    </motion.div>
  );
}
