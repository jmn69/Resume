import { NOT_FOUND } from 'redux-first-router';

export default (state = 'HOME', action = {}) =>
  components[action.type] || state

const components = {
  HOME: 'Home',
  SKILLS: 'Skills',
  SIGNIN: 'SignIn',
  PROJETS: 'Projets',
  EXPERIENCES: 'Experiences',
  CONTACT: 'Contact',
  ADMIN: 'Admin',
  [NOT_FOUND]: 'NotFound'
};