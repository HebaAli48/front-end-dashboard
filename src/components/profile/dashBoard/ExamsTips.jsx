import React from "react";
import Tips from "../../../assets/images/Exams-tips.png";
import Button from "../../ui/Button";
const ExamsTips = () => {
  return (
    <>
      <div className="flex flex-col  gap-5 lg:gap-0 lg:flex-row lg:justify-between px-5 items-center py-8 bg-white shadow-md rounded-lg ms-3 ">
        <section className="flex flex-col gap-10 items-center lg:items-start ">
          <h2 className="text-3xl font-semibold text-btn-primary">
            EXAMS TIME
          </h2>
          <p className="text-lg text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aperiam voluptatum, expedita consequatur harum dolor inventore
            deleniti nesciunt iure quibusdam voluptatibus iste quis nisi maiores
            pariatur corporis doloribus necessitatibus unde?
          </p>
          <Button className="">View exams tips</Button>
        </section>
        <div>
          <img src={Tips} alt={Tips} />
        </div>
      </div>
    </>
  );
};

export default ExamsTips;
