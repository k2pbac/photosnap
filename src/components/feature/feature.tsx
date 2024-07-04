"use client";

interface Props {
  icon: string;
  header: string;
  description: string;
}

export default function Feature(props: Props) {
  return (
    <div className="feature">
      <div className="image-container">
        <img src={props.icon} alt={"feature-icon"} />
      </div>
      <h2>{props.header}</h2>
      <p>{props.description}</p>
    </div>
  );
}
