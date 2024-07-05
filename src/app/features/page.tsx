import FeatureList from "@/components/feature/feature-list";
import featuresData from "./features.json";

export default function Features() {
  return (
    <div className="features-page">
      <div className="header">
        <div>
          <p>
            FEATURES{" "}
            <span>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </span>
          </p>
        </div>
        <div>
          <img src="/features/desktop/hero.jpg" alt="hero" />
        </div>
      </div>
      <FeatureList data={featuresData} amount={featuresData.length} />
    </div>
  );
}
