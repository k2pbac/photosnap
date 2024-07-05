import Header from "@/components/header/header";

export default function Pricing() {
  return (
    <div className="pricing-page">
      <Header
        title={"FEATURES"}
        description={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        image={"/features/desktop/hero.jpg"}
      />
    </div>
  );
}
