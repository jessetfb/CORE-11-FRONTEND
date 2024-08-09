// src/components/BoardsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { boards } from '../../data/boards';
import '/home/joey/development/code/phase-5/project/CORE-11-APP/FRONTEND/CORE/src/BoardsList.css'

function CreateHashtags() {
  return (
    <div className="boards-list">
      {boards.map(board => (
        <div key={board.id} className="board-item">
          <Link to={`/board/${board.id}`}>
            <h2>{board.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CreateHashtags;
