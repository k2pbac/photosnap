"use client";

import Image from "next/image";
import Link from "next/link";
import filter from "../../app/_colors.module.scss";
import Arrow from "../arrow/arrow";

interface Style {
  backgroundColor: string;
  color: string;
}

interface Props {
  title: string;
  body: string;
  link: string;
  style: Style;
}

export default function Card(props: Props) {
  return (
    <div style={props.style} className="card-outer">
      <div className="card-inner">
        <h2>{props.title}</h2>
        <p className="body">{props.body}</p>
        <Arrow
          text={props.link}
          isFooter={false}
          className={`${
            props.style.backgroundColor === "white" ? "black" : ""
          }`}
        />
      </div>
    </div>
  );
}
