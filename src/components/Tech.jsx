import React from "react";
import { Ball } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { div } from "framer-motion/client";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="w-36 h-36">
          <Ball icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
