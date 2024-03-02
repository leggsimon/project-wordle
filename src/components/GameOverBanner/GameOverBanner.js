import React from 'react';

function GameOverBanner({ variant, children }) {
  return <div className={`banner ${variant}`}>{children}</div>;
}

export default GameOverBanner;
