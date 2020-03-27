import { NEW_GAME, CHECK_PATTERN } from './actions';

export const mastermind = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_GAME: {
      state.secretCode = [];
      state.turns = [];
      state.turnsRemaining = 10;
      return state;
    }
    case CHECK_PATTERN: {
      const { patern } = payload;
      return state;
    }
    default:
      return state;
  }
}
