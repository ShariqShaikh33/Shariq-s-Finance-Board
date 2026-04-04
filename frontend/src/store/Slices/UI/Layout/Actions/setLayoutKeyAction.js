export const setLayoutKeyAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key] = value;
};
