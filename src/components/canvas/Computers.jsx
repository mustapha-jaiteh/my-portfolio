import React from "react";
import { Suspense, useState, useEffect } from "react";
// import { styles } from "../styles";
// import { services } from "../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const Computers = () => {
  return (
    <Tilt className="w-[300px] md:w-[600px] my-8 mr-8 place-self-center  ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img
            src="/mustapha.jpeg"
            alt="computer"
            className="object-cover w-full h-[300px] rounded-[20px]"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Computers;
