import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import photosReducer from './reducers';

const store = createStore(
  photosReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;