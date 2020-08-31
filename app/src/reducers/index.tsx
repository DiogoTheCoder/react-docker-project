import { combineReducers } from 'redux';
import getGithubLinkValue from './githubLinkReducer';

const allReducers = combineReducers({
  githubLink: getGithubLinkValue,
});

export type RootState = ReturnType<typeof allReducers>
export default allReducers;
