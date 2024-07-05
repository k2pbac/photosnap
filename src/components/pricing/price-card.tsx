"use client";

import Pricing from "@/interface/pricing";
interface Props {
  data: Pricing;
  duration: "monthly" | "yearly";
  style: object;
}

function getCostText(price: number, duration: "monthly" | "yearly") {
  let costText: string;
  const priceText = "$" + price + ".00";
  if (duration === "monthly") {
    costText = "per month";
  } else {
    costText = "per year";
  }

  return { price: priceText, type: costText };
}

export default function PriceCard(props: Props) {
  const costText = getCostText(
    props.data["cost"][props.duration],
    props.duration
  );

  return (
    <div className="price-card">
      <h2>{props.data.type}</h2>
      <p>{props.data.description}</p>

      <h3>
        {costText.price} <span>{costText.type}</span>
      </h3>
      <button className="button">PICK PLAN</button>
    </div>
  );
}
