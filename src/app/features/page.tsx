import FeatureList from "@/components/feature/feature-list";
import featuresData from "./features.json";
import BetaContainer from "@/components/beta/beta-container";
import Header from "@/components/header/header";

export default function Features() {
  return (
    <div className="features-page">
      <Header
        title={"FEATURES"}
        description={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        image={"/features/desktop/hero.jpg"}
      />
      <FeatureList data={featuresData} amount={featuresData.length} />
      <BetaContainer />
    </div>
  );
}
