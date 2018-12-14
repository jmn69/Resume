import types from './types';

const setCurrentPage = page => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});

export default {
  setCurrentPage,
};
