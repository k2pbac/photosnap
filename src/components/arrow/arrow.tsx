import Link from "next/link";

export default function Arrow(props: {
  text: string;
  isFooter: boolean;
  className: string;
}) {
  return (
    <div className="invite">
      <Link href="/">
        <p>
          <span className="whitespace-nowrap">{props.text} </span>
          <img
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
