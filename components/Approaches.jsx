"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approaches = () => {
    const handleClick = () => {
       console.log("clicked")
    }
  return (
    <section className="w-full py-20">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl text-center py-2 md:py-10 relative z-20 font-bold tracking-tight">
            My <span className="text-dark-orange">Approaches</span>
        </h2>
      <div
        className="my-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1"/>} onClick={handleClick}>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900 rounded-3xl overflow-hidden" />
          
        </Card>
        <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase 2"/>} onClick={handleClick}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black rounded-3xl overflow-hidden"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Development & Deploy" icon={<AceternityIcon order="Phase 3" />} onClick={handleClick}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]} />
        </Card>
      </div>
    </section>
  );
}

export default Approaches;

const Card = ({
  title,
  icon,
  children, 
  onClick
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
        onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer">
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black" />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#E76250_50%,#E76250_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-white px-5 py-2 text-black backdrop-blur-3xl font-bold text-2xl sm:text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
