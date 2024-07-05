"use client";

import { useState, useEffect } from "react";
import { Feature as featureInterface } from "../../interface/index";
import Feature from "./feature";

export default function FeatureList(props: {
  data: featureInterface[];
  amount: number;
}) {
  const [featureList, setFeatureList] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const featuredCards: React.ReactElement[] = [];

    for (let i = 0; i < props.amount; i++) {
      const card = props.data[i];
      featuredCards.push(
        <Feature
          key={Math.random() * 100}
          icon={card.icon.desktop}
          header={card.header}
          description={card.description}
        />
      );
    }

    setFeatureList(featuredCards);
  }, []);

  return <div className="features-list">{featureList}</div>;
}
