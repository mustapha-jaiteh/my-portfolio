import React from "react";

const Skills = (props) => {
  return (
    <div className="inline-block mr-10 mt-5 w-[200px]">
      <h2 className=" text-2xl font-bold mt-12">{props.skill}</h2>
      <p className=" w-3/4 text-sm mt-1">{props.experience}</p>
    </div>
  );
};

export default Skills;
