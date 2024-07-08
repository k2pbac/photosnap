"use client";

import Card from "../../interface/index";
import Arrow from "../arrow/arrow";
import useWindowSize from "@/customWidth";

export default function StoryCard(props: Card) {
  const size = useWindowSize();

  return (
    <div className="story-card">
      <img
        className="background-image"
        src={`${size[0] > 530 ? props.image.desktop : props.image.mobile}`}
      />
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
