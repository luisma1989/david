import  { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import intl from '../Intl/IntlReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  intl
});

export default rootReducer;
