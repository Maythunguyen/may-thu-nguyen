import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="flex flex-col items-center">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl text-center py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Let's work <span className="text-dark-orange">Together</span>
        </h2>
        <p className="text-neutral-400 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:nguyentranminhthu.65@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <div>
            <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 May Thu Nguyen
            </p>
        </div>
        
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-black rounded-lg border border-black-300"
            >
                <img src={info.img} alt={info.alt || "icon"} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
