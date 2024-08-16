import React, { useState } from 'react';

const User = () => {
  const [expanded, setExpanded] = useState(null);

  const user = {
    id: 1,
    name: "Cross Joseph",
    email: "cross@example.com",
    role: "Driver",
    profilePicture: "your-image-url.jpg", // Replace with the actual image URL or state
    activity: [
      "Joined a new group",
      "Updated profile picture",
      "Completed a task"
    ]
  };

  const toggleExpand = () => {
    setExpanded(expanded === user.id ? null : user.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6 flex flex-col items-center">
      {/* Profile Picture */}
      <div className="relative mb-4">
        <div className="bg-gray-200 rounded-full h-32 w-32 flex items-center justify-center text-black text-4xl border border-black">
          <span>{user.name[0]}</span>
        </div>
        <img
          src={user.profilePicture}
          alt="Profile"
          className="absolute top-0 left-0 rounded-full h-32 w-32 object-cover border-4 border-white"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">{user.name}</h2>
        <span className="text-xl text-gray-200">1 following</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
          + Share
        </button>
        <button className="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition">
          + Edit Profile
        </button>
      </div>

      {/* Created and Saved */}
      <div className="mt-6 flex justify-around w-full max-w-md border-t border-gray-300 pt-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-white">Created</div>
          <span className="text-xl text-gray-200">5</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-white">Saved</div>
          <span className="text-xl text-gray-200">10</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h4
          className="text-md font-bold text-blue-500 cursor-pointer"
          onClick={toggleExpand}
        >
          Recent Activity{" "}
          <span className="text-gray-500 text-sm">
            {expanded === user.id ? "▲" : "▼"}
          </span>
        </h4>
        {expanded === user.id && (
          <ul className="list-disc ml-5 mt-2 text-gray-700 max-h-24 overflow-y-auto custom-scrollbar">
            {user.activity.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default User;
