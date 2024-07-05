"use client";

import { useState, useEffect } from "react";
import data from "./data.json";
import PriceCard from "./price-card";

interface PricingModel {
  Basic: string | null;
  Pro: string | null;
  Business: string | null;
}

export default function PriceCardList() {
  const [cardsList, setCardsList] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const priceCards: React.ReactElement[] = [];
    const keys: (keyof PricingModel)[] = ["Basic", "Pro", "Business"];
    for (let i = 0; i < keys.length; i++) {
      const card = data[keys[i]];
      priceCards.push(
        <PriceCard
          data={card}
          duration={"monthly"}
          style={
            keys[i] === "Pro"
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
        />
      );
    }

    setCardsList(priceCards);
  }, []);

  return <div>{cardsList}</div>;
}
