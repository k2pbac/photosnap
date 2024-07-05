"use client";

import Card from "../../interface/index";
import Arrow from "../arrow/arrow";

export default function StoryCard(props: Card) {
  return (
    <div
      className="story-card"
      style={{ background: `url(${props.image.desktop})` }}
    >
      <div className="story-card-overlay"></div>
      <div className="content">
        <p>{props.date}</p>
        <h2>{props.title}</h2>
        <p>by {props.author}</p>
        <hr></hr>
        <Arrow text={"READ STORY"} isFooter={false} className={""} />
      </div>
      <div className="border-bottom"></div>
    </div>
  );
}
