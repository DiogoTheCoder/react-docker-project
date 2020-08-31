import {
  createStore, applyMiddleware, Action,
} from 'redux';
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';
import { ActionTypes } from '../actions/actionTypes';

const middlewareEnhancer = applyMiddleware(
  thunk as ThunkMiddleware<Record<string, unknown>, ActionTypes>,
);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);
export const store = createStore(
  allReducers,
  composedEnhancers,
);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Record<string, unknown>,
  unknown,
  Action<string>
  >
