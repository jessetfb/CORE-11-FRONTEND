
import React from 'react';
import { useParams } from 'react-router-dom';
import { boards } from '../data/boards';
import Pins from './Pins';
import "/home/joey/development/code/phase-5/final/new/CORE-11-FRONTEND/vite-project/src/components/hashtags.css"

function ManageHashtags() {
  const { id } = useParams();
  const board = boards.find(b => b.id === parseInt(id));

  if (!board) return <p>Board not found.</p>;

  return (
    <div className="board">
      <h1>{board.title}</h1>
      <div className="pins">
        {board.pins.map(pin => (
          <Pins key={pin.id} pin={pin} />
        ))}
      </div>
    </div>
  );
}

export default ManageHashtags;