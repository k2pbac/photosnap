"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <p>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={160}
          height={16}
        />{" "}
      </p>
      <div>
        <ul>
          <Link href="/stories">
            <li>STORIES</li>
          </Link>
          <Link href="/features">
            <li>FEATURE</li>
          </Link>
          <Link href="/pricing">
            <li>PRICING</li>
          </Link>
        </ul>
      </div>
      <button type="button">GET AN INVITE</button>
    </div>
  );
}
