import React from 'react';

function Rules({ colorOptions, onColorChange, disabled, value }) {
  return (
    <section>
      <strong>How to play this game:</strong>
      <ul>
        <li>
          Start a new game by clicking on the 'New Game' button.
        </li>
        <li>
          The computer picks a sequence of colors. 
        </li>
        <li>
          The objective of the game is to guess the exact positions of the
          colors in the computer's sequence.
        </li>

        <li>
          A color can be used only once in a code sequence.
        </li>

        <li>
          After filling a line with your guesses and clicking on the 'Check'
          button, the computer responses with the result of your guess.
        </li>

        <li>
          For each color in your guess that is in the correct color and correct
          position in the code sequence, the computer display a small black color
          on the right side of the current guess.
        </li>

        <li>
          For each color in your guess that is in the correct color but is NOT
          in the correct position in the code sequence, the computer display a
          small white color on the right side of the current guess.
        </li>

        <li>
          You win the game when you manage to guess all the colors in the code
          sequence and when they all in the right position.
        </li>

        <li>
          You lose the game if you use all attempts without guessing the
          computer code sequence.
        </li>
      </ul>
      
      Good Luck!!
    </section>
  );
}

export default Rules;
