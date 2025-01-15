import React from "react";

const BorderBottom = ({ height = "h-1", bottom = "bottom-2" }) => {
  return (
    <span
      className={`${height} ${bottom} bg-primary absolute left-0 right-0`}
    ></span>
  );
};

export default BorderBottom;
