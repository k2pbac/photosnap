"use client";
import { useState } from "react";
import Pricing from "@/interface/pricing";
interface Props {
  data: Pricing;
  duration: "monthly" | "yearly";
  style: object;
}

export default function PriceCard(props: Props) {
  const [costText, setCostText] = useState(`$${props.data.cost.monthly}.00`);

  function getCostText(price: number, duration: "monthly" | "yearly") {
    let tempCostText: string;
    const priceText = "$" + price + ".00";
    if (duration === "monthly") {
      tempCostText = "per month";
    } else {
      tempCostText = "per year";
    }
    setCostText(priceText + tempCostText);
  }

  return (
    <div className="price-card">
      <h2>{props.data.type}</h2>
      <p>{props.data.description}</p>

      <h3>
        {props.duration === "monthly"
          ? "$" + props.data.cost.monthly + ".00"
          : "$" + props.data.cost.yearly + ".00"}
        <span>{props.duration === "monthly" ? "per month" : "per year"}</span>
      </h3>
      <button className="button">PICK PLAN</button>
    </div>
  );
}
