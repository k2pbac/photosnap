"use client";

import StoryCard from "./story-card";

import Card from "../../interface/index";
import { useEffect, useState } from "react";

export default function StoryCardList(props: { list: Card[]; amount: number }) {
  const [cardsList, setCardsList] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const filteredCards: React.ReactElement[] = [];

    for (let i = 0; i < props.amount; i++) {
      const card = props.list[i];
      filteredCards.push(
        <StoryCard
          key={Math.random() * 100}
          image={card.image}
          title={card.title}
          author={card.author}
          date={card.date}
        />
      );
    }

    setCardsList(filteredCards);
  }, []);

  return <div className="story-card-list">{cardsList}</div>;
}
