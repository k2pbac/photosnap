import FeatureList from "@/components/feature/feature-list";
import featuresData from "./features.json";
import Arrow from "@/components/arrow/arrow";

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
      <div className="beta">
        <img src="/assets/shared/desktop/bg-beta.jpg" alt="beta-background" />
        <div className="beta-text">
          <h2>{"We’re in beta. Get your invite today!".toUpperCase()}</h2>
          <Arrow
            text={"GET AN INVITE"}
            isFooter={false}
            className={""}
            style={{ justifyContent: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
