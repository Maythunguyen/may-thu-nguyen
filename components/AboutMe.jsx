"use client";

import Image from "next/image";
import { Skills } from "./SkillToolTip";

const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-fit py-20 bg-black text-neutral-200 rounded-lg">
        <Noise />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Profile image */}
        <div className="w-full">
          <Image
            src="https://images.unsplash.com/photo-1700751616466-7aa544a46077?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="May Thu Nguyen"
            width={500}
            height={550}
            className="rounded-lg object-cover grayscale"
          />
        </div>

        {/* Right: Text content */}
        <div className="space-y-6">
          <p className="text-sm tracking-widest text-neutral-400 uppercase">( About Me )</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            With a passion of Software and Web Development
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-neutral-300">
            I may not have years of experience, but I show up every day with a learner’s heart.
            From React and Tailwind CSS to exploring full-stack tools like Next.js and Python,
            I’m constantly growing. I build because I love learning and because I believe good software
            can truly make lives better.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-neutral-400 mb-10">
            I know I’m still at the beginning of my journey and that’s what keeps me humble and
            motivated. Whether it’s improving my Git workflow or solving LeetCode problems, I find
            small wins that push me forward every single day.
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
