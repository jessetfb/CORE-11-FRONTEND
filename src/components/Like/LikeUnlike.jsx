import React, { useState } from 'react';

const LikeUnlike = ({ initialLiked = false }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLike}
      className={`p-2 rounded ${liked ? 'bg-red-500' : 'bg-gray-500'}`}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeUnlike;
