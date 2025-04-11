"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="text-center md:tracking-wider text-[40px] mb-4 md:text-6xl lg:text-8xl font-sans font-extrabold">
                MAY THU NGUYEN
            </p>

            <TextGenerateEffect 
                words="Inspiring, Creative, Innovative, and Passionate"
                className="text-center text-[16px] md:text-xl lg:text-2xl"
            />
            
            <a href="#about">
                <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
