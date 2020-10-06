import { SET_PAGE_INIT } from './action';

const INITIAL_STATE = {
  pagesHasInit: [],
};
const settingsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_PAGE_INIT:
      return {
        ...state,
        pagesHasInit: [...state.pagesHasInit, action.payload],
      };
    default:
      return state;
  }
};

export default settingsReducer;
