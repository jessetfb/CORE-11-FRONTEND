import React, { useState } from 'react';

const FollowUnfollow = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowUnfollow = () => {
    setIsFollowing(!isFollowing);
    // Handle follow/unfollow logic
    console.log(`${isFollowing ? 'Unfollowed' : 'Followed'} ${user.name}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <button
        onClick={handleFollowUnfollow}
        className={`px-4 py-2 rounded-lg ${isFollowing ? 'bg-red-500' : 'bg-blue-500'} text-white hover:${isFollowing ? 'bg-red-600' : 'bg-blue-600'} transition`}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowUnfollow;
