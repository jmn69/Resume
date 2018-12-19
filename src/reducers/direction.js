export default (state = 'next', action = {}) => {
  if (!action.meta || !action.meta.location) {
    return state;
  }

  const type = action.type;
  const prevType = action.meta.location.prev.type;

  if (type === prevType) {
    return state;
  }
  if (type === 'HOME') {
    return 'back';
  }
  else if (type === 'SKILLS' && prevType === 'HOME') {
    return 'next';
  }
  else if (type === 'CLIENTS' && prevType === 'SKILLS') {
    return 'next';
  }
  else if (type === 'SKILLS' && prevType === 'CLIENTS') {
    return 'back';
  }
  else if (type === 'SKILLS' && prevType === 'ABOUT') {
    return 'back';
  }
  else if (type === 'CLIENTS' && prevType === 'ABOUT') {
    return 'back';
  }
  else if (type === 'ABOUT') {
    return 'next';
  }
  return state;
};
