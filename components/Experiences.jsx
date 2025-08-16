import React from "react";
import { Button } from "./ui/MovingBorder";
import { experiences } from "@/data";
import Image from "next/image";

const Experiences = () => {
  return (
    <div className="py-20 w-full px-4 sm:px-6 md:px-10 scroll-mt-32" id="experiences">
      <h2 className="font-helvetica bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-lg py-2 md:py-10 relative z-20 font-normal tracking-tight">
        Some of,{" "}
        <div className="text-dark-gray text-4xl md:text-5xl font-medium">
          Experiences
        </div>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-separate border-spacing-y-6">
          <thead className="hidden md:table-header-group text-left text-xs text-gray-500">
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th className="hidden md:table-cell">Awards</th>
              <th className="hidden md:table-cell">Categories</th>
              <th className="hidden md:table-cell"></th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp) => (
              <React.Fragment key={exp.id}>
                <tr className="dark:bg-neutral-900 rounded-md">
                  {/* Name & Logo */}
                  <td className="flex items-center gap-3 py-4 px-2">
                    <Image
                      src={exp.thumbnail}
                      alt={exp.name}
                      width={40}
                      height={40}
                      className="rounded-full border"
                    />
                    <div className="font-semibold">{exp.name}</div>
                  </td>

                  {/* Profile */}
                  <td className="text-md text-black-default px-2">{exp.role}</td>

                  {/* Awards */}
                  <td className="hidden md:table-cell text-md px-2">
                    {exp.awards}
                  </td>

                  {/* Categories */}
                  <td className="hidden md:table-cell text-md text-black-default px-2">
                    {exp.categories.join(", ")}
                  </td>

                  {/* View Button */}
                  <td className="hidden md:table-cell px-2">
                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-xs font-medium text-dark-gray border border-gray-500 hover:border-gray-300 transition-colors duration-200 outline-none rounded-sm px-4 py-2"
                    >
                      View
                    </a>
                  </td>
                </tr>

                {/* Dotted line row */}
                <tr>
                  <td colSpan={5}>
                    <div
                      className="w-full h-[1.5px] my-4"
                      style={{
                        backgroundImage: "repeating-linear-gradient(to right, black 0 1.5px, transparent 1.5px 12px)",
                        backgroundRepeat: "repeat-x",
                      }}
                    ></div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experiences;
