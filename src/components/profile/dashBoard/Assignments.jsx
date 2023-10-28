import React from "react";
import { Assignment } from "../../../utils/Icons";

const Assignments = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mt-3 ">
        <div className="flex gap-2">
          <span>{Assignment}</span>
          <h2 className="text-lg font-medium"> Assignment</h2>
        </div>
        <span>Course:</span>
        <span>Topic:</span>
        <span>Due to:</span>
        <button className=" text-btn-primary border border-btn-primary  hover:bg-btn-Secondary hover:text-primary-color rounded-lg px-3 py-1 ">
          Start Assignment
        </button>
      </div>
    </>
  );
};

export default Assignments;
