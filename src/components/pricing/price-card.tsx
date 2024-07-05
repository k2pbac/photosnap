"use client";
import { useState } from "react";

import Pricing from "@/interface/pricing";

interface Props {
  data: Pricing;
}

export default function PricingCard(props: Props) {
  const [price, setPrice] = useState(props.data.cost.monthly);

  return <div></div>;
}
