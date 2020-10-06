const components: any = {
  HOME: 'Home',
  SKILLS: 'Skills',
  CLIENTS: 'Clients',
  ABOUT: 'About',
  NOT_FOUND: 'NotFound',
};

const pageReducer = (state = 'Home', action: any = {}) =>
  components[action.type] || state;

export default pageReducer;
