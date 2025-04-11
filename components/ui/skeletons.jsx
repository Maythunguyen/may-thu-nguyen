"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      {/* Card 1 */}
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
          alt="JS"
          width={100}
          height={100}
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-center font-semibold text-neutral-500 mt-4">
          Everything starts with JavaScript
        </p>
        <p className="border border-neutral-200 bg-white dark:bg-red-900/20 text-neutral-500 text-xs rounded-full px-2 py-0.5 mt-4">
          Versitile
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://mma.prnewswire.com/media/2070340/GENERATIVE_AI_SOLUTIONS_CORP__GENAI_LAUNCHES_ARTIFICIAL_INTELLIG.jpg?p=facebook"
          alt="GenAI"
          width={100}
          height={100}
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-center font-semibold text-neutral-500 mt-4">
          AI Solutions are cool now
        </p>
        <p className="border border-neutral-200 bg-white dark:bg-white text-neutral-500 text-xs rounded-full px-2 py-0.5 mt-4">
          Accessible
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
          alt="Python"
          width={100}
          height={100}
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-center font-semibold text-neutral-500 mt-4">
          Build AI Agents with Python
        </p>
        <p className="border border-neutral-200 bg-white dark:bg-orange-900/20 text-neutral-500 text-xs rounded-full px-2 py-0.5 mt-4">
          Usefull
        </p>
      </motion.div>
    </motion.div>
  );
};

export const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
          alt="NextJS"
          width={100}
          height={100}
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool frameworks like React, Vue, and Svelte...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use NextJS.</p>
        <div className="h-6 w-6 rounded-full bg-black shrink-0" />
      </motion.div>
    </motion.div>
  );
};
