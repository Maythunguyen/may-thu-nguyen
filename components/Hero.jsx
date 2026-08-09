"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextHoverEffect } from "./ui/TextHoverEffect";

const Hero = () => {
  return (
    <div className="pt-32 scroll-mt-32" id="home">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="relative w-3 h-3 md:w-6 md:h-6 flex items-center justify-center">
              <span className="absolute w-3 h-3 md:w-full md:h-full rounded-full bg-gray-500 opacity-50 animate-zoomPulse duration-[4000ms]" />
              <span className="relative w-1.5 h-1.5 md:w-3.5 md:h-3.5  bg-black rounded-full z-10" />
            </div>
            <TextGenerateEffect 
              words="Not just a developer. A curious mind, a kind heart."
              className="text-center text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl font-ibmplex uppercase"
            />
          </div>
          <span className="hero-title font-helvetica text-[clamp(2rem,10vw,10rem)] tracking-[-0.03em] leading-none  md:text-9xl font-black uppercase  bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] bg-clip-text text-transparent text-center mb-10 mt-6">Software Developer</span>
          <a href="#about">
            {/* <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
            /> */}
            <button className="button-57">
              <div className="flex items-center gap-2">
                <p>Show my work</p>
                <FaLocationArrow />
              </div>
              <span>
                <div className="flex items-center gap-2">
                  <p className="w-[80%]">Show my work</p>
                  <FaLocationArrow />
                </div>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
