"use client";

import React from "react";
import { myWorks } from "@/data";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";


export function MyWorks() {
  return (
    <section className="py-20" id="projects">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl text-center py-2 md:py-10 relative z-20 font-bold tracking-tight">
            My selection of {" "}<span className="text-dark-orange">Recent Projects</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
        {myWorks.map((item, idx) => (
        <CardContainer key={idx} className="inter-var">
          <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {item.title}
            </CardItem>
            
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.description}
            </CardItem>
            
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.imageUrl}
                alt="thumbnail"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
            
            <div className="flex flex-row justify-between mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href={item.linkHref}
                target="__blank"
                className="px-2 py-2 rounded-xl text-sm font-normal dark:text-white w-[50%]"
              >
                Visit Site →
              </CardItem>
              <CardItem
                translateZ={20}
                className="flex flex-row gap-2 flex-wrap md:w-[70%] sm:w-full lg:w-[70%]"
                >
                {item.skills?.map((skill, index) => (
                    <span
                    key={index}
                    >
                   <button className="px-3 py-1 bg-black text-white text-xs rounded-lg font-normal transform hover:-translate-y-1 transition duration-400">
                        {skill}
                    </button>
                    </span>
                ))}
                </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
      </div>
    </section>
  );
}
