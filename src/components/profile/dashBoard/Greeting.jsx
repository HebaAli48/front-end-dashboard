import React from "react";
import { Search } from "../../../utils/Icons";

const Greeting = () => {
  return (
    <div className="flex justify-between items-center bg-slate-100 py-5 px-7">
      <span className="text-3xl font-medium">Hi Heba</span>

      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {Search}
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-3xl bg-white-50 "
            placeholder="Search "
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Greeting;
