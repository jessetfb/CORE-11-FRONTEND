// src/components/Routes.jsx

import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Profile from "./components/UserProfile/Profile";
import Mainboard from "./components/Discover/Mainboard";
import NavBar from "./components/Discover/NavBar";

const Routes = ({
  pins,
  onImageClick,
  user,
  onUpdateProfile,
  onLogout,
  onSearchSubmit,
}) => {
  return (
    <RouterRoutes>
      <Route
        path="/"
        element={<Mainboard pins={pins} onImageClick={onImageClick} />}
      />
      <Route
        path="/mainboard"
        element={<Mainboard pins={pins} onImageClick={onImageClick} />}
      />
      <Route
        path="/profile"
        element={
          <Profile
            user={user}
            onUpdateProfile={onUpdateProfile}
            onLogout={onLogout}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
};

export default Routes;
