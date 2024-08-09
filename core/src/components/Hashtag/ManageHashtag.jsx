import React from 'react';

const ManageHashtags = () => {
  // Sample data
  const hashtags = ['#Travel', '#Food', '#Nature'];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Manage Hashtags</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ul className="list-disc pl-6">
          {hashtags.map((hashtag, index) => (
            <li key={index} className="text-blue-500 mb-2">
              {hashtag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageHashtags;
