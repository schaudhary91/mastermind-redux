import React from "react";
import { connect } from "react-redux";
import "./GameBoard.css";
import CodePeg from "./CodePeg";
import TurnKeyPegs from "./TurnKeyPegs";
import { newGame } from "./actions";

const GameBoard = ({ game, onNewGameClick }) => {
  console.log(game.pattern);
  return game.playing ? (
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
          <td>
            <CodePeg colorOptions={game.colorOptions} />
          </td>
          <td>
            <CodePeg colorOptions={game.colorOptions} />
          </td>
          <td>
            <CodePeg colorOptions={game.colorOptions} />
          </td>
          <td>
            <CodePeg colorOptions={game.colorOptions} />
          </td>
          <td>
            <TurnKeyPegs />
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <button onClick={() => onNewGameClick()}>New Game</button>
  );
};

const mapStateToProps = state => ({
  game: state.mastermind
});
const mapDispatchToProps = dispatch => ({
  onNewGameClick: () => dispatch(newGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
