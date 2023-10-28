import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="w-full lg:w-3/5 border rounded-lg p-8 bg-white shadow-md lg:ms-3 mt-10 lg:h-[27rem]">
        <title className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between border-b-2">
            <h2 className="text-xl font-semibold">Announcements</h2>
            <button className=" text-btn-primary font-semibold text-lg">
              All
            </button>
          </div>
          <p className="text-left">Lorem ipsum dolor sit amet.</p>
        </title>
      </div>
    </>
  );
};

export default Announcement;
