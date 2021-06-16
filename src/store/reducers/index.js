import { combineReducers } from 'redux'
import auth from './AuthReducer'
import incident from './IncidentReducer';

const rootReducer = combineReducers({
  auth,
  incident,
});

export default rootReducer;