import { redirect, NOT_FOUND } from 'redux-first-router';
import { fetchData } from './utils';

export default {
  PROJETS: {
    path: '/projets'
  },
  SKILLS: {
    path: '/skills'
  },
  SIGNIN: '/signin',
  HOME: {
    path: '/'
  },
  EXPERIENCES: {
    path: '/experiences'
  },
  CONTACT: {
    path: '/contact'
  },
  ADMIN: {
    path: '/admin',
    role: 'admin'
  }
};