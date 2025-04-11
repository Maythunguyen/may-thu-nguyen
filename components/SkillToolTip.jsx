"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { skills } from "@/data";


export function Skills() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={skills} />
    </div>
  );
}
