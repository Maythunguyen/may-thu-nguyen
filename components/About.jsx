"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { Skills } from "./SkillToolTip";

export function About() {
  return (
    <section className="w-full py-20" id="about">
    <div>
    <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        All About, <span className="text-dark-orange">May</span>
      </h2>
    
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Main Intro Card */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            A curious mind building her path in tech
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            I may not have years of experience, but I show up every day with a learner’s heart.
            From React and Tailwind CSS to exploring full-stack tools like Next.js and Python,
            I’m constantly growing. I build because I love learning and because I believe good software
            can truly make lives better.
          </p>
        </div>
        <Image
          src="/images/me.png"
          width={500}
          height={500}
          alt="portfolio visual"
          className="absolute -right-1 lg:-right-[10%] grayscale filter -bottom-1 object-contain rounded-2xl"
        />
       
      </WobbleCard>

      {/* Personality & Growth */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          I constantly improve my skills
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 mb-10">
          I know I’m still at the beginning of my journey and that’s what keeps me humble and
          motivated. Whether it’s improving my Git workflow or solving LeetCode problems, I find
          small wins that push me forward every single day.
        </p>
        <div><Skills /></div>
      </WobbleCard>
      

      {/* Vision & Character */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            I’m building more than apps. I’m building resilience
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            I’ve worked on real-world projects through my works and enjoy making things that
            serve a purpose. I may still be figuring things out, but I’m honest, open, and
            committed to doing things better, one line of code at a time.
          </p>
        </div>
        <Image
          src="/globe.png"
          width={500}
          height={500}
          alt="developer visual"
          className="absolute -right-1 md:-right-[3%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </section>
  );
}
