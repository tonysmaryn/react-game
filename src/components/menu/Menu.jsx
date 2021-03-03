import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/game">
        <span>New game</span>
      </Link>
      <Link to="/settings">
        <span>Settings</span>
      </Link>
    </div>
  );
};
