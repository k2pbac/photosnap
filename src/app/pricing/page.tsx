import BetaContainer from "@/components/beta/beta-container";
import Header from "@/components/header/header";
import FeatureChart from "@/components/pricing/feature-chart";
import PriceCardList from "@/components/pricing/price-card-list";
export default function Pricing() {
  return (
    <div className="pricing-page">
      <Header
        title={"PRICING"}
        description={
          "Create your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        }
        image={"/pricing/desktop/hero.jpg"}
      />
      <PriceCardList />
      <FeatureChart />
      <BetaContainer />
    </div>
  );
}
