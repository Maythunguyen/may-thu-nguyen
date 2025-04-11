import React from "react";
import { Button } from "./ui/MovingBorder";
import { experiences } from "@/data";

const Experiences = () => {
    return (
      <div className="py-20 w-full px-10" id="experiences">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl text-center py-2 md:py-10 relative z-20 font-bold tracking-tight">
            My <span className="text-dark-orange">Experiences</span>
        </h2>
  
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {experiences.map((card) => (
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-neutral-400 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Experiences;
  