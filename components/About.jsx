"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { Skills } from "./SkillToolTip";
import { Camera } from 'lucide-react';
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="w-full py-20" id="about">
    <div>
      <h2
        className="font-helvetica bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-lg py-2 md:py-10 relative z-20 font-normal tracking-tight">
        All About, <div className="text-dark-gray text-4xl md:text-5xl font-medium">May</div>
      </h2>
    
    </div>
    <div className="flex flex-col lg:flex-row justify-between gap-6 max-w-full mx-auto w-full">

      <div className="max-w-7xl mx-auto flex flex-col gap-8 bg-hero-bg p-6 md:p-10 rounded-md w-full lg:w-3/4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <div className="px-2 py-2 bg-black rounded-lg text-white font-bold text-sm">eM</div>
          </div>
          <h2 className="font-normal text-xl">May Thu Nguyen</h2>

        </div>
        <div>
            <img
              src="https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="portfolio visual"
              className="object-cover w-full h-[40vh] rounded-md hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-medium text-3xl md:text-4xl lg:text-5xl text-balance md:w-1/2"
          >
            LIFE MOST EXPERIENCED MOMENTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-base/6 md:w-1/2"
          >
            I may not have years of experience, but I show up every day with a learner’s heart.
            From React and Tailwind CSS to exploring full-stack tools like Next.js and Python,
            I’m constantly growing. I build because I love learning and because I believe good software
            can truly make lives better.
          </motion.p>
        </div>
      </div>

      {/* Personality & Growth */}
      <WobbleCard containerClassName="w-full lg:w-1/4 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-medium tracking-[-0.015em] text-white mb-10">
          CONSTANTLY IMPROVING MY SKILLS
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 mb-20">
          I know I’m still at the beginning of my journey and that’s what keeps me humble and
          motivated. Whether it’s improving my Git workflow or solving LeetCode problems, I find
          small wins that push me forward every single day.
        </p>
        <div><Skills /></div>
      </WobbleCard>
    
    </div>
    </section>
  );
}
