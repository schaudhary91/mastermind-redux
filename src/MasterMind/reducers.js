import { NEW_GAME, CHECK_PATTERN } from "./actions";

const colorOptions = [
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "white", label: "White", color: "#FFF" },
  { value: "black", label: "Black", color: "#000" }
];
const patternLength = 4;

const difficulty = 'easy';

export const mastermind = (
  state = { playing: false, colorOptions },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_GAME: {
      let i = 0;
      const pattern = [];

      while (i < patternLength) {
        const newColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        if (difficulty === 'easy') {
          const colorInPatternLength = pattern.filter( color => color.value === newColor.value).length;
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
        pattern
      };
    }
    case CHECK_PATTERN: {
      const { patern } = payload;
      return state;
    }
    default:
      return state;
  }
};
