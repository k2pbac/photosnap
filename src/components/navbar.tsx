"use client";

import Image from "next/image";

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
          <li>STORIES</li>
          <li>FEATURE</li>
          <li>PRICING</li>
        </ul>
      </div>
      <button type="button">GET AN INVITE</button>
    </div>
  );
}
