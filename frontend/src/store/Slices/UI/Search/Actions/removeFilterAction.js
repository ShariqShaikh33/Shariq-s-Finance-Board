export const removeFilterAction = (state, { payload }) => {
  const { key, value } = payload;

  state[key] = state[key].filter((i)=>{
    return i!=value;
  });
};
