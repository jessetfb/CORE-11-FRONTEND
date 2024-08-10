import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-full sm:w-1/4 p-6 flex flex-col items-center">
        <div className="bg-gray-800 rounded-full h-24 w-24 flex items-center justify-center text-white text-3xl">
          <span className="icon">👤</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold">moderator</h2>
        <span className="text-gray-600">core admin</span>
        <p className="mt-2 text-gray-800">700 following</p>
        <div className="mt-4 flex space-x-2">
          <button className="bg-gray-800 text-white px-4 py-2 rounded">share</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Edit profile</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 border border-gray-300">
          <h3 className="font-semibold text-xl">flagged content by other users</h3>
        </div>
        <div className="bg-white p-4 border border-gray-300">
          <h3 className="font-semibold text-xl">flagged content by me</h3>
        </div>
        <div className="col-span-2 flex justify-around mt-6">
          <div className="bg-gray-200 w-48 h-48 rounded-lg flex items-center justify-center text-gray-500 text-xl border-dashed border-4 border-gray-300">
            <span>saved</span>
          </div>
          <div className="bg-gray-200 w-48 h-48 rounded-lg flex items-center justify-center text-gray-500 text-xl border-dashed border-4 border-gray-300">
            <span>created</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;