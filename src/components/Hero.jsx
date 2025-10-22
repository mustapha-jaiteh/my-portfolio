import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Computers } from "./canvas";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="relative w-full h-[1100px] md:h-screen mx-auto flex flex-col items-center p-4 md:p-0">
      <div
        className={`${styles.paddingX} absolute -inset-8  top-[120px] max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-5`}
      >
        <div
          className={`flex flex-row justify-center items-start gap-5 ${styles.padding} max-w-7xl mx-auto `}
        >
          <div className="flex flex-col justify-center items-center mt-5 ">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className=" ">
            <h1 className={`${styles.heroSubText} text-white`}>
              Nice to meet you! <br />
              I'm <span className="text-[#915eff]">Mustapha Jaiteh</span>
            </h1>
            <p className="text-white-100 mt-2 text-[18px]">
              I'm a junior software developer passionate <br /> about building
              accessible web apps and mobile apps that users love.
            </p>
            <a
              href="/CV/Mustapha_Jaiteh_CV.pdf"
              download
              className="flex items-center gap-2"
            >
              <span className="text-white-100">Download my CV:</span>{" "}
              <ArrowDownTrayIcon className="w-10 h-10 bg-red-500 p-1 rounded-md" />
            </a>
            <Computers />
          </div>
        </div>
        <div className=" w-[300px] h-auto">
          <img
            src="/mustik.jpeg"
            alt="mustik"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="absolute -bottom-18 md:bottom-0  flex justify-center items-center mt-4 ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
