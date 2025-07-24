"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { myWorks } from "@/data";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <h2 className="font-helvetica bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-lg py-2 md:py-10 relative z-20 font-normal tracking-tight">
        Selection of,{" "}
        <div className="text-dark-gray text-4xl md:text-5xl font-medium">
          Recent Projects
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myWorks.map((project, index) => (
          <Link
            href={project.linkHref}
            target="_blank"
            key={index}
            className="relative rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition duration-500 aspect-[3/3] cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={500}
              className="object-cover w-full h-full absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-500"
            />

            {/* Noise overlay */}
            <Noise />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/60 transition-all" />

            {/* Description on hover */}
            <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 p-20 md:p-30 transition-opacity duration-300 flex items-center justify-center text-white uppercase font-mono text-sm text-center">
              {project.description}
            </div>

            {/* Top-left: Skills + Visit site */}
            <div className="absolute top-6 left-0 right-0 px-4 md:px-8 z-40 flex justify-between items-center w-full">
              <div className="flex flex-wrap gap-1 max-w-[60%]">
                {project.skills.slice(0, 10).map((skill, i) => (
                  <span
                    key={i}
                    className="bg-dark-gray/90 opacity-80 text-white text-[10px] sm:text-xs md:text-sm px-2 py-[3px] rounded-full uppercase font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href={project.linkHref}
                target="_blank"
                className="text-[10px] sm:text-xs text-white hover:text-gray-200 whitespace-nowrap shrink-0 z-30 opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                Visit Site →
              </Link>
            </div>

            {/* Bottom-left: title */}
            <div className="absolute bottom-6 left-4 z-40 text-white text-2xl sm:text-3xl md:text-4xl font-medium">
              {project.title}
            </div>

            {/* Bottom-right: GitHub */}
            <Link
              href={project.gitHref}
              target="_blank"
              className="absolute bottom-6 right-4 z-40 text-xs text-white px-3 py-1 font-medium cursor-pointer"
            >
              <FaGithub size={24} />
            </Link>
          </Link>
        ))}
      </div>
    </section>
  );
}

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
