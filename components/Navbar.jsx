"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export function Navbar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
