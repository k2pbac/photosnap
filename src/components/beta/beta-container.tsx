import Arrow from "../arrow/arrow";

export default function BetaContainer() {
  return (
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
  );
}
