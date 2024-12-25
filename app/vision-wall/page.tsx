"use client";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { GoalCard, GoalCardProps } from "@/components/goals/GoalCard";
import React, { useEffect, useState } from "react";

const DreamDeck = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<GoalCardProps[]>([]);

  const handlefetchGoalCards = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetchGoalCards");

      if (!response.ok) {
        throw new Error("Failed to fetch goal cards");
      }

      const cards = await response.json();
      console.debug("Fetched goal cards:", response);
      setCards(cards);
    } catch (error) {
      console.error("Error fetching goal cards:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handlefetchGoalCards();
  }, []);

  const breakpointColumns = {
    default: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  if (loading) {
    return (
      <main className="flex items-center min-h-screen justify-center h-64">
        <div className="loader">
          <div className="loader-square bg-destructive"></div>
          <div className="loader-square bg-destructive"></div>
          <div className="loader-square bg-destructive"></div>
          <div className="loader-square bg-destructive"></div>
          <div className="loader-square bg-destructive"></div>
          <div className="loader-square bg-destructive"></div>
          <div className="loader-square bg-destructive"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-2 md:px-3">
      <Masonry breakpointCols={breakpointColumns} className="flex -ml-2 md:-ml-3 w-auto" columnClassName="pl-2 md:pl-3 bg-clip-padding">
        {cards?.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="mb-2 md:mb-3"
          >
            <GoalCard username={card.username} goals={card.goals} theme={card.theme} />
          </motion.div>
        ))}
      </Masonry>
      {!cards?.length && <p className="text-center text-lg mt-12">No goals posted yet. Be the first!</p>}
    </main>
  );
};

export default DreamDeck;
