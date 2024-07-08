import Link from "next/link";

interface Style {
  backgroundColor?: string;
  color?: string;
  filter?: string;
  [x: string]: unknown;
}

export default function Arrow(props: {
  text: string;
  isFooter: boolean;
  className: string;
  style?: Style;
}) {
  return (
    <div className="invite" style={props.style}>
      <Link href="/">
        <p>
          <span className="whitespace-nowrap">{props.text} </span>
          <img
            style={{
              filter:
                props.style?.backgroundColor === "black"
                  ? "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(138deg) brightness(107%) contrast(102%)"
                  : "",
            }}
            className={props.className}
            src="/assets/shared/desktop/arrow.svg"
            alt="arrow"
            width={42}
            height={16}
          />
        </p>
      </Link>
      {props.isFooter ? (
        <p className="copyright">Copyright 2019. All Rights Reserved</p>
      ) : null}
    </div>
  );
}
