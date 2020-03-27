import React from "react";
import { connect } from "react-redux";
import "./GameBoard.css";
import CodePeg from "./CodePeg";
import TurnKeyPegs from "./TurnKeyPegs";
import { newGame, checkPattern } from "./actions";

const GameBoard = (game, onNewGameClick) => {
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
          <td>
            <CodePeg />
          </td>
          <td>
            <CodePeg />
          </td>
          <td>
            <CodePeg />
          </td>
          <td>
            <CodePeg />
          </td>
          <td>
            <TurnKeyPegs />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  game: state.mastermind
});
const mapDispatchToProps = dispatch => ({
  onNewGameClick: () => dispatch(newGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
