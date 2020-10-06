const titleReducer = (state = 'Home', action: any = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Home';
    case 'SKILLS':
      return 'Skills';
    case 'CLIENTS':
      return 'Clients';
    case 'ABOUT':
      return 'About';
    default:
      return state;
  }
};

export default titleReducer;
