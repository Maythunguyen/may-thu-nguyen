"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
  activeIndex = 4,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05 || direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn("fixed top-10 inset-x-0 z-[5000] flex justify-center", className)}
      >
        <div className="flex items-center justify-between w-full sm:w-fit gap-2 max-w-[95%] bg-dark-gray-lighter/90 opacity-90 rounded-lg px-2 py-2 backdrop-blur-md">
          {/* Logo */}
          <Link href="/#home" className="px-5 py-5 bg-black rounded-lg text-white font-bold text-xl">
            eM
          </Link> 

          {/* Desktop Nav Items */}
          <div className="hidden md:flex sm:flex items-center gap-1 bg-dark-gray/90 px-2 py-2 rounded-lg">
            {navItems.slice(0, -1).map((item, i) => (
              <Link
                href={item.link}
                key={i}
                className={cn(
                  "text-sm px-3 py-4 rounded-lg font-normal transition-all duration-200 focus:border-gray-300",
                  i === activeIndex
                    ? "bg-gray-custom/90 text-white border border-gray-custom/90"
                    : "text-white border border-gray-500 hover:border-gray-400"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button (Desktop Only) */}
          <Link
            href={navItems[navItems.length - 1].link}
            className="hidden md:inline-block text-sm px-5 py-5 rounded-lg font-normal bg-gray-custom/90 text-black ml-1 hover:bg-dark-gray hover:text-white"
          >
            {navItems[navItems.length - 1].name}
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[70px] w-full max-w-[95%] bg-dark-gray/90 rounded-lg px-4 py-4 z-[5001] border border-gray-400 mt-3 flex flex-col space-y-2 md:hidden"
          >
            {navItems.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                onClick={() => setMenuOpen(false)}
                className="text-white px-3 py-2 rounded-lg border border-gray-400 hover:border-gray-300 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
