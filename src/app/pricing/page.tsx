import Header from "@/components/header/header";

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
    </div>
  );
}
