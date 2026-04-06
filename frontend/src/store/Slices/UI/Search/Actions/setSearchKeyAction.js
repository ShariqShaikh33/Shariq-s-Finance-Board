export const setSearchKeyAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key] = value;
};
