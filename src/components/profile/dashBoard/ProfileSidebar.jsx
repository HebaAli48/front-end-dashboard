import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Annoucement,
  Schedule,
  Courses,
  DashBoard,
  Edit,
  Performance,
} from "../../../utils/Icons";

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Extract the pathname from the location
    const pathname = location.pathname;

    // Iterate through profileSideBarData to find a match
    profileSideBarData.forEach((data) => {
      const titleForURL = data.title.toLowerCase().replace(" ", "-");
      if (pathname.includes(titleForURL)) {
        setSelectedItem(data.title);
      }
    });
  }, [location]);

  const profileSideBarData = [
    {
      title: "Dashboard",
      icon: DashBoard,
    },
    {
      title: "Schedule",
      icon: Schedule,
    },
    {
      title: "Courses",
      icon: Courses,
    },
    {
      title: "Performance",
      icon: Performance,
    },
    {
      title: "Announcement",
      icon: Annoucement,
    },
    {
      title: "Edit Profile",
      icon: Edit,
    },
  ];

  const handleItemClick = (title) => {
    setSelectedItem(title);
    navigate(title.toLowerCase().replace(" ", "-"));
  };

  return (
    <ul className="flex flex-col gap-14 pb-10 justify-start items-start relative h-full bg-primary-color text-white md:text-lg font-semibold ">
      {profileSideBarData.map((data, index) => (
        <li
          key={index}
          className={`flex gap-3 items-center justify-start w-full py-4 px-10 sm:px-1 md:px-10 cursor-pointer  ${
            selectedItem === data.title
              ? "bg-slate-50 text-slate-700  shadow-md shadow-slate-500 opacity-80 text-xl font-semibold "
              : "hover:scale-[1.02]  hover:text-slate-600 hover:bg-slate-50 hover:shadow-m"
          }`}
          onClick={() => handleItemClick(data.title)}
        >
          <span> {data.icon}</span> <span> {data.title} </span>{" "}
        </li>
      ))}
    </ul>
  );
};

export default ProfileSidebar;
