"use client";

import featureData from "../../components/pricing/features.json";
import kObj from "@/interface/features";
import FeatureChartItem from "./feature-chart-item";
import { deeperKObj } from "@/interface/features";

const keys: (keyof kObj)[] = [
  "UNLIMITED STORY POSTING",
  "UNLIMITED PHOTO UPLOAD",
  "EMBEDDING CUSTOM CONTENT",
  "CUSTOMIZE METADATA",
  "ADVANCED METRICS",
  "PHOTO DOWNLOADS",
  "SEARCH ENGINE INDEXING",
  "CUSTOM ANALYTICS",
];

export default function FeatureChartMobile() {
  function getFeatureItems(): React.ReactElement[] {
    const features: React.ReactElement[] = featureData.map((feature, index) => {
      const currentKey = keys[index];
      const featureObject = {
        Basic: feature[currentKey]!.Basic,
        Pro: feature[currentKey]!.Pro,
        Business: feature[currentKey]!.Business,
      } as deeperKObj;
      return (
        <FeatureChartItem
          key={currentKey}
          data={featureObject}
          header={currentKey}
        />
      );
    });

    return features;
  }

  return (
    <div className="feature-chart-mobile">
      <h1>THE FEATURES</h1>
      {getFeatureItems()}
    </div>
  );
}
