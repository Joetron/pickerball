import generatorReducer from './generatorReducer.js';
import pastNumsReducer from './pastNumsReducer.js';
import viewReducer from './viewReducer.js';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  	routing: routerReducer,
  	picksReducer: generatorReducer,
  	pastNumsReducer,
  	viewReducer
});