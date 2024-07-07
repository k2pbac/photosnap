"use client";

import FeatureList from "@/components/feature/feature-list";
import featuresData from "./features.json";
import BetaContainer from "@/components/beta/beta-container";
import Header from "@/components/header/header";
import useWindowSize from "@/customWidth";

export default function Features() {
  const size = useWindowSize();

  return (
    <div className="features-page">
      <Header
        title={"FEATURES"}
        description={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        image={`${
          size[0] <= 540
            ? "features/mobile/hero.jpg"
            : size[0] <= 864
            ? "/features/tablet/hero.jpg"
            : "/features/desktop/hero.jpg"
        }`}
      />
      <FeatureList data={featuresData} amount={featuresData.length} />
      <BetaContainer />
    </div>
  );
}
