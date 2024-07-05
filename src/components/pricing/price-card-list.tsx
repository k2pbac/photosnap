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
  const [type, setType] = useState<"monthly" | "yearly">("monthly");

  const handleCheck = () => {
    if (type === "monthly") setType("yearly");
    else setType("monthly");
  };

  useEffect(() => {
    const priceCards: React.ReactElement[] = [];
    const keys: (keyof PricingModel)[] = ["Basic", "Pro", "Business"];
    for (let i = 0; i < keys.length; i++) {
      const card = data[keys[i]];
      priceCards.push(
        <PriceCard
          key={Math.random() * 100}
          data={card}
          duration={type}
          style={
            keys[i] === "Pro"
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
        />
      );
    }

    setCardsList(priceCards);
  }, [type]);

  return (
    <div className="price-card-container">
      <div className="input-group">
        <span
          style={type === "monthly" ? { opacity: "1" } : { opacity: "0.5" }}
        >
          Monthly
        </span>
        <input onClick={handleCheck} type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
        <input type="checkbox" id="switch-2" />
        <span style={type === "yearly" ? { opacity: "1" } : { opacity: "0.5" }}>
          Yearly
        </span>
      </div>
      <div className="price-card-list">{cardsList}</div>
    </div>
  );
}
