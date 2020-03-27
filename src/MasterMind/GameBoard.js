import React from 'react';
import './GameBoard.css';
import CodePeg from './CodePeg';
import TurnKeyPegs from './TurnKeyPegs';

function GameBoard() {
  return (
    <table className="GameBoard">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><CodePeg /></td>
          <td><CodePeg /></td>
          <td><CodePeg /></td>
          <td><CodePeg /></td>
          <td><TurnKeyPegs /></td>
        </tr>
      </tbody>
    </table>
  );
}

export default GameBoard;
