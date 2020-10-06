import { combineReducers } from 'redux';

import pageReducer from './page';
import titleReducer from './title';
import directionReducer from './direction';
import settingsReducer from '../settings/reducer';

const reducers = {
  page: pageReducer,
  title: titleReducer,
  direction: directionReducer,
  settings: settingsReducer,
};

export default combineReducers(reducers);
