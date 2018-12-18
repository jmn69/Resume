export default (state = 'Home', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Home';
    default:
      return state;
  }
};
