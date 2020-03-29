import React from 'react';
import { connect } from 'react-redux';
import './GameBoard.css';
import CodePeg from './CodePeg';
import TurnKeyPegs from './TurnKeyPegs';
import { checkPattern, newGame } from './actions';

const currentPattern = [];

const GameBoard = ({ game, onNewGameClick, onCheckPatternClick }) => {
  // Empty rows
  const emptyRows = [];
  for (let i = 1; i <= game.totalTurns - game.currentTurn; i++) {
    emptyRows.unshift(
      <tr className="GameBoard__row" key={game.currentTurn + i}>
        <td>{game.currentTurn + i}</td>
        <td className="GameBoard__emptyCell"></td>
        <td className="GameBoard__emptyCell"></td>
        <td className="GameBoard__emptyCell"></td>
        <td className="GameBoard__emptyCell"></td>
        <td></td>
      </tr>,
    );
  }

  // Past turns
  const pastRows = [];
  game.pastTurns.forEach((turn, i) => {
    pastRows.unshift(
      <tr className="GameBoard__row" key={game.currentTurn + i}>
        <td>{i + 1}</td>
        <td>
          <CodePeg
            colorOptions={game.colorOptions}
            disabled={true}
            value={turn.checkedPattern[0]}
          />
        </td>
        <td>
          <CodePeg
            colorOptions={game.colorOptions}
            disabled={true}
            value={turn.checkedPattern[1]}
          />
        </td>
        <td>
          <CodePeg
            colorOptions={game.colorOptions}
            disabled={true}
            value={turn.checkedPattern[2]}
          />
        </td>
        <td>
          <CodePeg
            colorOptions={game.colorOptions}
            disabled={true}
            value={turn.checkedPattern[3]}
          />
        </td>
        <td>
          <TurnKeyPegs
            black={turn.resultPegs.black}
            white={turn.resultPegs.white}
          />
        </td>
      </tr>,
    );
  });

  return game.playing ? (
    <div>
      <div className="GameBoard__buttons-right-aligned">
        <button onClick={() => onNewGameClick()}>Reset Game</button>
      </div>
      {game.patternSolved ? (
        <h2>
          Congratulations you solved the code sequence in{' '}
          {game.pastTurns.length} turns !
        </h2>
      ) : (
        ''
      )}
      {game.gameOver ? <h2>Game Over</h2> : ''}
      <table className="GameBoard">
        <tbody>
          {game.showPattern ? (
            <tr className="GameBoard__row">
              <th></th>
              <th>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={true}
                  value={game.pattern[0]}
                />
              </th>
              <th>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={true}
                  value={game.pattern[1]}
                />
              </th>
              <th>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={true}
                  value={game.pattern[2]}
                />
              </th>
              <th>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={true}
                  value={game.pattern[3]}
                />
              </th>
              <th></th>
            </tr>
          ) : (
            <tr className="GameBoard__row">
              <th></th>
              <th className="GameBoard__emptyCell GameBoard__hiddenPattern"></th>
              <th className="GameBoard__emptyCell GameBoard__hiddenPattern"></th>
              <th className="GameBoard__emptyCell GameBoard__hiddenPattern"></th>
              <th className="GameBoard__emptyCell GameBoard__hiddenPattern"></th>
              <th></th>
            </tr>
          )}
          <tr>
            <td colSpan="6">
              <hr />
            </td>
          </tr>
          {!game.gameOver && !game.patternSolved ? emptyRows : ''}
          {!game.gameOver && !game.patternSolved ? (
            <tr>
              <td>{game.currentTurn}</td>
              <td>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={game.patternSolved || game.gameOver}
                  onColorChange={color => {
                    currentPattern[0] = color;
                  }}
                />
              </td>
              <td>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={game.patternSolved || game.gameOver}
                  onColorChange={color => {
                    currentPattern[1] = color;
                  }}
                />
              </td>
              <td>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={game.patternSolved || game.gameOver}
                  onColorChange={color => {
                    currentPattern[2] = color;
                  }}
                />
              </td>
              <td>
                <CodePeg
                  colorOptions={game.colorOptions}
                  disabled={game.patternSolved || game.gameOver}
                  onColorChange={color => {
                    currentPattern[3] = color;
                  }}
                />
              </td>
              <td>
                <button
                  disabled={game.patternSolved || game.gameOver}
                  onClick={() => onCheckPatternClick()}
                >
                  Check
                </button>
              </td>
            </tr>
          ) : (
            ''
          )}
          {pastRows}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="GameBoard__buttons-center-aligned">
      <button onClick={() => onNewGameClick()}>New Game</button>
    </div>
  );
};

const mapStateToProps = state => ({
  game: state.mastermind,
});
const mapDispatchToProps = dispatch => ({
  onNewGameClick: () => dispatch(newGame()),
  onCheckPatternClick: () => dispatch(checkPattern([...currentPattern])),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
