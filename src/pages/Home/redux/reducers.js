import types from './types';

const INITIAL_STATE = {
  currentPageIndex: 0,
};
const securityStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PAGE: {
      const { payload } = action;
      return {
        ...state,
        currentPageIndex: payload,
      };
    }

    default:
      return state;
  }
};

export default securityStatusReducer;
