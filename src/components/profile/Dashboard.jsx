import React from "react";
import Greeting from "./dashBoard/Greeting";
import ExamsTips from "./dashBoard/ExamsTips";
import WhatIsDue from "./dashBoard/WhatIsDue";
import Annoucement from "./Announcement";

const Dashboard = () => {
  return (
    <>
      <Greeting />
      <ExamsTips />
      <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-4 mb-10 ">
        <Annoucement />
        <WhatIsDue />
      </div>
    </>
  );
};

export default Dashboard;
