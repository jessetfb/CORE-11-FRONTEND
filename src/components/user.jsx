import React from 'react';

const user = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Profile Picture */}
      <div className="relative mb-4">
        <div className="bg-gray-200 rounded-full h-32 w-32 flex items-center justify-center text-black text-4xl border border-black">
          <span>CJ</span>
        </div>
        <img
          src="your-image-url.jpg"  // Replace with the actual image URL or state
          alt="Profile"
          className="absolute top-0 left-0 rounded-full h-32 w-32 object-cover border-4 border-white"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Cross Joseph</h2>
        <span className="text-xl text-gray-600">1 following</span>
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
          <div className="text-2xl font-bold text-gray-800">Created</div>
          {/* Replace the placeholder with actual data */}
          <span className="text-xl text-gray-600">5</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-800">Saved</div>
          {/* Replace the placeholder with actual data */}
          <span className="text-xl text-gray-600">10</span>
        </div>
      </div>
    </div>
  );
};

export default user;
