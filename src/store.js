import { createStore, combineReducers } from 'redux';
import { mastermind } from './MasterMind/reducers';

const reducers = {
  mastermind,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
