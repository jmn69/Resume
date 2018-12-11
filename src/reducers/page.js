import { NOT_FOUND } from 'redux-first-router';

export default (state = 'HOME', action = {}) =>
  components[action.type] || state;

const components = {
  HOME: 'Home',
  SKILLS: 'Skills',
  EXPERIENCES: 'Experiences',
  CONTACT: 'Contact',
  [NOT_FOUND]: 'NotFound',
};
