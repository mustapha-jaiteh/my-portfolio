import React from "react";

const Icon = ({ size = "w-5 h-5", className = "", image, alt = "" }) => {
  return (
    <div>
      <span>
        <img src={image} className={`${size} ${className}`} alt={alt} />
      </span>
    </div>
  );
};

export default Icon;
