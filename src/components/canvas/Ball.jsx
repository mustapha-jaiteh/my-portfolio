import React from "react";
import { Suspense, useState, useEffect } from "react";

const Ball = ({ icon }) => {
  return (
    <div className="w-full h-full">
      <img src={icon} alt="icon" className="w-full h-full object-contain" />
    </div>
  );
};

export default Ball;
