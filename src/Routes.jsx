import React from 'react';
import { Route, Routes as RouterRoutes, Navigate } from 'react-router-dom';
import Profile from './components/UserProfile/Profile';
import Home from './components/Home';
import Lightbox from './components/Lightbox'; // Ensure this is used somewhere
import Discover from './components/Discover/Discover'; // Ensure this is used somewhere
import Like from './components/Like/LikeUnlike';
import EditProfile from './components/UserProfile/EditProfile';
import CreateCore from './components/Core/CreateCore';
import FollowUnfollow from './components/Follow/FollowUnfollow';
import CreateHashtags from './components/Hashtag/CreateHashtag';
import ManageHashtag from './components/Hashtag/ManageHashtag';
import ManageCore from './components/Core/ManageCore';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Admin from './components/Dashboard/Admin';
import User from './components/Dashboard/User';

const Routes = ({ pins, onImageClick, user, onUpdateProfile, onLogout, onSearchSubmit }) => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home pins={pins} onImageClick={onImageClick} />} />
      <Route path="/mainboard" element={<Home pins={pins} onImageClick={onImageClick} />} />
      <Route path="/profile" element={<Profile user={user} onUpdateProfile={onUpdateProfile} onLogout={onLogout} />} />
      <Route path="/like" element={<Like />} />
      <Route path="/edit-profile" element={<EditProfile onUpdateProfile={onUpdateProfile} />} />
      <Route path="/create-core" element={<CreateCore />} />
      <Route path="/followers" element={<FollowUnfollow />} />
      <Route path="/create-hashtags" element={<CreateHashtags />} />
      <Route path="/manage-hashtags" element={<ManageHashtag />} />
      <Route path="/manage-core" element={<ManageCore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      {/* Catch-all route should be the last route */}
      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
};

export default Routes;
