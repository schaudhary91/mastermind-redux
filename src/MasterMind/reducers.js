import { NEW_GAME, CHECK_PATTERN } from './actions';

const colorOptions = [
  {
    value: 'blue',
    label: 'Blue',
    color: '#0052CC',
  },
  {
    value: 'red',
    label: 'Red',
    color: '#FF5630',
  },
  {
    value: 'yellow',
    label: 'Yellow',
    color: '#FFC400',
  },
  {
    value: 'green',
    label: 'Green',
    color: '#36B37E',
  },
  {
    value: 'white',
    label: 'White',
    color: '#FFF',
  },
  {
    value: 'black',
    label: 'Black',
    color: '#000',
  },
];
const patternLength = 4;
const totalTurns = 10;
const difficulty = 'easy';

export const mastermind = (
  state = {
    playing: false,
    colorOptions,
    totalTurns,
    currentTurn: 1,
    pastTurns: [],
  },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    /**
     * Create new game
     */
    case NEW_GAME: {
      let i = 0;
      const pattern = [];

      while (i < patternLength) {
        const newColor =
          colorOptions[Math.floor(Math.random() * colorOptions.length)];
        if (difficulty === 'easy') {
          const colorInPatternLength = pattern.filter(
            color => color.value === newColor.value,
          ).length;
          if (!colorInPatternLength) {
            pattern.push(newColor);
            i++;
          }
        } else {
          pattern.push(newColor);
          i++;
        }
      }

      return {
        ...state,
        playing: true,
        turnsRemaining: 10,
        pattern,
        showPattern: false,
        gameOver: false,
        patternSolved: false,
      };
    }
    
    /**
     * Check pattern
     */
    case CHECK_PATTERN: {
      const { pattern } = payload;
      const gamePattern = state.pattern.map(color => color.value);
      const resultPegs = {
        black: 0,
        white: 0,
      };

      if (!pattern || pattern.length !== gamePattern.length) {
        return state;
      } else if (difficulty !== 'easy') {
        console.warn('Only support difficulty easy as of now!');
        return state;
      } else {
        pattern.forEach((color, i) => {
          const inGamePatternIndex = gamePattern.indexOf(color.value);

          if (!(inGamePatternIndex === -1)) {
            if (inGamePatternIndex === i) {
              resultPegs.black++;
            } else {
              resultPegs.white++;
            }
          }
        });

        if (
          resultPegs.black !== gamePattern.length &&
          state.currentTurn !== totalTurns
        ) {
          return {
            ...state,
            pastTurns: [
              ...state.pastTurns,
              {
                resultPegs,
                checkedPattern: [...pattern],
              },
            ],
            currentTurn: state.currentTurn + 1,
          };
        } else if (resultPegs.black === gamePattern.length) {
          return {
            ...state,
            patternSolved: true,
            showPattern: true,
          };
        } else {
          return {
            ...state,
            gameOver: true,
            showPattern: true,
          }
        }
      }
    }
    default:
      return state;
  }
};
