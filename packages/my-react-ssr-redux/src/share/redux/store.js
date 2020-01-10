//redux store.js

//用于获取数据

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import testMiddleware from './test-middleware';



export default (defualtState={}) => {
  return createStore(reducer, defualtState, applyMiddleware(thunk));
}
