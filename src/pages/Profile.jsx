import React from "react";
import ProfileSidebar from "./../components/profile/dashBoard/ProfileSidebar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="sm:flex">
      <div className="sm:w-[25%]   rounded-md">
        <ProfileSidebar userImg={user.profile_pic} />
      </div>
      <div className="flex-1">
        <Outlet context={user} />
      </div>
    </div>
  );
};

export default Profile;
