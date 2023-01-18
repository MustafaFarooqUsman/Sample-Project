import reducer from '../reducer/index';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

export default store;