"use client";

import { Package2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LearnMenuItem from "./LearnMenuItem";
import { NavbarItem } from "./NavbarItem";

export function Links() {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavbarItem
        href="/"
      >
        Home
      </NavbarItem>
      <NavbarItem
        href="/jobs"
      >
        Jobs
      </NavbarItem>
      <NavbarItem
        href="/problems"
      >
        Problems
      </NavbarItem>
      <NavbarItem
        href="/sheet"
      >
        Sheet
      </NavbarItem>

      <NavbarItem
        href="/learn"
      >
        <LearnMenuItem />
      </NavbarItem>
    </nav>
  );
}
