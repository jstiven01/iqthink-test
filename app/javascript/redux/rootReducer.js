import { combineReducers } from 'redux';

import movieReducer from './movies/reducer';


const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer