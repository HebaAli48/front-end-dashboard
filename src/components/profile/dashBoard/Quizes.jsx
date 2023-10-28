import React from "react";
import { QuizTimer } from "../../../utils/Icons";

const Quizes = () => {
  return (
    <>
      <div className="flex flex-col gap-2 border-b-2 pb-4">
        <div className="flex gap-2">
          <span>{QuizTimer}</span>
          <h2 className="text-lg font-medium"> Unit2 quiz</h2>
        </div>
        <span>Course:</span>
        <span>Topic:</span>
        <span>Due to:</span>
        <button className=" text-btn-primary border border-btn-primary  hover:bg-btn-Secondary hover:text-primary-color rounded-lg px-3 py-1 ">
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default Quizes;
