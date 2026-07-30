"use client";

import Image from "next/image";
import { Skills } from "./SkillToolTip";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden w-full min-h-fit py-20 bg-black text-neutral-200 rounded-lg scroll-mt-32">
        <Noise />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left: Profile image */}
        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-auto rounded-lg overflow-hidden">
          <Image
            src="/pf.webp" 
            alt="May Thu Nguyen"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg object-cover scale-100 hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Right: Text content */}
        <div className="space-y-6">
          <p className="text-sm tracking-widest text-neutral-400 uppercase">( About Me )</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            With a passion of Software and Web Development
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-neutral-300">
            I may not have years of experience, but I show up every day with a learner's heart. I'm constantly growing. I build because I love learning and because I believe good software
            can truly make lives better.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-neutral-400 mb-10">
            I know I'm still early in my journey, and that's exactly what keeps me curious and humble. Whether it's refactoring my own code for cleaner architecture, deepening my understanding of system design, or picking up a new tool a project demands, I find real growth in the small, honest moments, not just the finished result
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
const Noise = () => {
  return (
    <div
      className="absolute inset-0 z-20 w-full h-full scale-[1.2] opacity-10 pointer-events-none [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    />
  );
};
