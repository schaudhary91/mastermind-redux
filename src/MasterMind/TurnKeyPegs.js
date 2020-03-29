import React from 'react';
import './TurnKeyPegs.css';

function TurnKeyPegs({ black, white }) {
  const blackPegs = [];
  for (let i = 0; i < black; i++) {
    blackPegs.push(
      <div key={i} className="TurnKeyPegItem TurnKeyPegItemBlack"></div>
    ) 
  }
  const whitePegs = [];
  for (let i = 0; i < white; i++) {
    whitePegs.push(
      <div key={i} className="TurnKeyPegItem TurnKeyPegItemWhite"></div>
    ) 
  }
  return (
    <div className="TurnKeyPegs">
      {blackPegs}
      {whitePegs}
    </div>
  );
}

export default TurnKeyPegs;
