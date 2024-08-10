import React from 'react';

const ManageCore = () => {
  // Sample data
  const cores = [
    { id: 1, title: 'Core 1', description: 'Description of Core 1' },
    { id: 2, title: 'Core 2', description: 'Description of Core 2' },
    // Add more cores as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Manage Your Cores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cores.map((core) => (
          <div key={core.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{core.title}</h2>
            <p className="mb-4">{core.description}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCore;
