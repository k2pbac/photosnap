"use client";

import useWindowSize from "@/customWidth";
import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function CustomNav() {
  const size = useWindowSize();
  return (
    <Navbar className="navbar fixed-top" fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img
          className="logo"
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/stories">
          STORIES
        </Navbar.Link>
        <Navbar.Link as={Link} href="/features">
          FEATURES
        </Navbar.Link>
        <Navbar.Link as={Link} href="/pricing">
          PRICING
        </Navbar.Link>
        <Navbar.Link>
          <button className="invite-button" type="button">
            GET AN INVITE
          </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
