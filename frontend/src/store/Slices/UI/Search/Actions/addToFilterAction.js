export const addToFilterAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key].push(value);
};
