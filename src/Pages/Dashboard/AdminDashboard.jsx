// src/pages/dashboard/admin.jsx

import React, { useState } from "react";
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [cores, setCores] = useState([]);
  const [newCore, setNewCore] = useState({ title: '', description: '' });

  // Fetch users and cores (use effect or similar logic)
  // const fetchUsers = async () => { ... };
  // const fetchCores = async () => { ... };

  // Handle add core
  const handleAddCore = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/core', newCore);
      // Update cores list after adding a new core
      setNewCore({ title: '', description: '' });
      // Fetch updated list
      // fetchCores();
    } catch (error) {
      console.error('Error adding core:', error);
    }
  };

  // Handle delete core
  const handleDeleteCore = async (coreId) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/core/${coreId}`);
      // Update cores list after deleting a core
      // Fetch updated list
      // fetchCores();
    } catch (error) {
      console.error('Error deleting core:', error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white h-screen p-4 flex flex-col items-center">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
            <span className="text-2xl">👤</span>
          </div>
          <h2 className="text-lg font-bold">Moderator</h2>
          <p className="text-sm">Core Admin</p>
          <p className="text-sm mb-2">7 following</p>
          <div className="flex space-x-2">
            <button className="bg-gray-800 px-4 py-2 rounded-md">Share</button>
            <button className="bg-gray-800 px-4 py-2 rounded-md">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Users Management */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-semibold text-lg mb-2">Manage Users</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="flex justify-between items-center mb-2">
                  <span>{user.name}</span>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cores Management */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-semibold text-lg mb-2">Manage Cores</h3>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Add New Core</h4>
              <input
                type="text"
                placeholder="Title"
                value={newCore.title}
                onChange={(e) => setNewCore({ ...newCore, title: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              />
              <textarea
                placeholder="Description"
                value={newCore.description}
                onChange={(e) => setNewCore({ ...newCore, description: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddCore}
              >
                Add Core
              </button>
            </div>
            <ul>
              {cores.map((core) => (
                <li key={core.id} className="flex justify-between items-center mb-2">
                  <span>{core.title}</span>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteCore(core.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-40 h-40 border-2 border-dashed flex items-center justify-center text-gray-600">
            Saved
          </div>
          <div className="w-40 h-40 border-2 border-dashed flex items-center justify-center text-gray-600">
            Created
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
