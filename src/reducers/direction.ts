const directionReducer = (
  state = { prevType: null, animation: 'next' },
  action = {}
) => {
  const { type }: { type?: any } = action;
  const { prevType } = state;

  if (!type || type === state.prevType) {
    return state;
  }

  if (type === 'HOME') {
    return { prevType: type, animation: 'back' };
  }
  if (type === 'SKILLS' && prevType === 'HOME') {
    return { prevType: type, animation: 'next' };
  }
  if (type === 'CLIENTS' && prevType === 'SKILLS') {
    return { prevType: type, animation: 'next' };
  }
  if (type === 'SKILLS' && prevType === 'CLIENTS') {
    return { prevType: type, animation: 'back' };
  }
  if (type === 'SKILLS' && prevType === 'ABOUT') {
    return { prevType: type, animation: 'back' };
  }
  if (type === 'CLIENTS' && prevType === 'ABOUT') {
    return { prevType: type, animation: 'back' };
  }
  if (type === 'ABOUT') {
    return { prevType: type, animation: 'next' };
  }
  return state;
};

export default directionReducer;
