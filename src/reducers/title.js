export default (state = 'RFR Demo', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Home';
    case 'SKILLS':
      return 'Skills';
    case 'EXPERIENCES':
      return 'Experiences';
    case 'CONTACT':
      return 'Contact';
    default:
      return state;
  }
};
