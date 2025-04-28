"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextHoverEffect } from "./ui/TextHoverEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextHoverEffect text="MAY"/>
            <span className="text-5xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-center mb-6 mt-[-20] tracking-tight">THU NGUYEN</span>

            <TextGenerateEffect 
                words="Not just a developer. A curious mind, a kind heart."
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
