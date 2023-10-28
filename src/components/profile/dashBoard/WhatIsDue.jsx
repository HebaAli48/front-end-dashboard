import React from "react";
import Quizes from "./Quizes";
import Assignments from "./Assignments";

const WhatIsDue = () => {
  return (
    <>
      <div className="text-left border rounded-xl lg:w-[35%] py-7 px-5 bg-white shadow-md mt-10 ">
        <title className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between border-b-2">
            <h2 className="text-xl font-semibold">What's due</h2>
            <button className=" text-btn-primary font-semibold text-lg">
              All
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </title>
        <Quizes />
        <Assignments />
      </div>
    </>
  );
};

export default WhatIsDue;
