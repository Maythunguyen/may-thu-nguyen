"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextHoverEffect } from "./ui/TextHoverEffect";

const Hero = () => {
  return (
    <div className="pt-20">

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect 
                  words="Not just a developer. A curious mind, a kind heart."
                  className="text-center text-[16px] md:text-xl lg:text-2xl"
            />
            <span className="hero-title font-helvetica text-[clamp(2rem,10vw,10rem)] tracking-[-0.03em] leading-none md:text-9xl font-black uppercase  bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] bg-clip-text text-transparent text-center mb-6 mt-6">Software Developer</span>

            
            
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
