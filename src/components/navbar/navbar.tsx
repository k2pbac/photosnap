"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function CustomNav() {
  return (
    <Navbar className="navbar fixed-top" fluid rounded>
      <Navbar.Brand className="logo-link" as={Link} href="/">
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
        <hr></hr>
        <Navbar.Link className="button-link">
          <button className="invite-button" type="button">
            GET AN INVITE
          </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
