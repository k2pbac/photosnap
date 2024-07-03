"use client";

import Image from "next/image";
import Link from "next/link";
import filter from "../../app/_colors.module.scss";

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
    <div style={props.style} className="card-outter">
      <div className="card-inner">
        <h2>{props.title}</h2>
        <p className="body">{props.body}</p>
        <div className="invite">
          <Link href="/">
            <p>
              <span>{props.link}</span>
              <Image
                className={`${
                  props.style.backgroundColor === "white" ? "black" : ""
                }`}
                src="/assets/shared/desktop/arrow.svg"
                alt="arrow"
                width={42}
                height={16}
              ></Image>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
