"use client";

import BetaContainer from "@/components/beta/beta-container";
import Header from "@/components/header/header";
import FeatureChart from "@/components/pricing/feature-chart";
import FeatureChartMobile from "@/components/pricing/feature-chart-mobile";
import PriceCardList from "@/components/pricing/price-card-list";
import useWindowSize from "@/customWidth";
export default function Pricing() {
  const size = useWindowSize();
  return (
    <div className="pricing-page">
      <Header
        title={"PRICING"}
        description={
          "Create your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        }
        image={`/pricing/${
          size[0] <= 540 ? "mobile" : size[0] <= 864 ? "tablet" : "desktop"
        }/hero.jpg`}
      />
      <PriceCardList />
      {size[0] > 580 ? <FeatureChart /> : <FeatureChartMobile />}
      <BetaContainer />
    </div>
  );
}
