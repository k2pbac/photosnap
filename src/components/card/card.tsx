"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  body: string;
  link: string;
  style: object;
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
              <span>GET AN INVITE </span>
              <Image
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
