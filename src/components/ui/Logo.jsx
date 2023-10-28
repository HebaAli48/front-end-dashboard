import React from "react";

const Logo = ({ className, numClass }) => {
  return (
    <p className={`text-2xl ${className}`}>
      Coligo
      {/* <span
        className={`text-btn-primary text-3xl inline-block rotate-[20deg] relative top-1 ${numClass}`}
      >
        O
      </span>
      LIGO */}
    </p>
  );
};

export default Logo;
