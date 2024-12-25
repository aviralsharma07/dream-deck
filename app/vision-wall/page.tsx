"use client";
import { GoalCard, GoalCardProps } from "@/components/goals/GoalCard";
import React, { useEffect, useState } from "react";

const DreamDeck = () => {
  const [cards, setCards] = useState<GoalCardProps[]>([]);

  const handlefetchGoalCards = async () => {
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
    }
  };
  useEffect(() => {
    handlefetchGoalCards();
  }, []);

  return (
    <main>
      {cards?.map((card) => (
        <GoalCard key={card.id} username={card.username} goals={card.goals} theme={card.theme} />
      ))}
    </main>
  );
};

export default DreamDeck;
