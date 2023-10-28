import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Authentication from "./components/authentication/Authentication";

import NotAuthentication from "./components/authentication/NotAuthentication";
import Loader from "./components/ui/Loader";
import About from "./pages/About";
import Support from "./pages/Support";
import EditProfile from "./components/profile/EditProfile";
import Announcement from "./components/profile/Announcement";
import Performance from "./components/profile/Performance";
import Courses from "./components/profile/Courses";
import Dashboard from "./components/profile/Dashboard";
import Schedule from "./components/profile/Schedule";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route
            path="user/"
            element={
              <Authentication>
                <Profile />
              </Authentication>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="courses" element={<Courses />} />
            <Route path="performance" element={<Performance />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="edit-Profile" element={<EditProfile />} />
            <Route path="*" element={<h2>not found</h2>} />
          </Route>
          <Route
            path="sign-in"
            element={
              <NotAuthentication>
                <SignIn />
              </NotAuthentication>
            }
          />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route
            path="sign-up"
            element={
              <NotAuthentication>
                <SignUp />
              </NotAuthentication>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
