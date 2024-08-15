// src/components/Pin.js
import React from 'react';

function Pin({ pin }) {
  return (
    <div className="pin">
      <img src={pin.imageUrl} alt={pin.title} />
      <p>{pin.title}</p>
    </div>
  );
}

export default Pin;
