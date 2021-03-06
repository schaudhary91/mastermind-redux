export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
});

export const CHECK_PATTERN = 'CHECK_PATTERN';
export const checkPattern = pattern => ({
  type: CHECK_PATTERN,
  payload: {
    pattern,
  },
});
