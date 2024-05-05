import { combineReducers } from 'redux';

// import slices
import historyReducer from './about/history.slice';

const rootReducer = combineReducers({
   history: historyReducer,
});

export default rootReducer;
