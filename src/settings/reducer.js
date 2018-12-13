import { SET_FULLPAGE_READY } from './action';

const INITIAL_STATE = {
  isFullPageReady: false,
};
const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FULLPAGE_READY:
      return {
        ...state,
        isFullPageReady: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
