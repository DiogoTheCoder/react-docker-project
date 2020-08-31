import { ActionTypes, GITHUB_LINK_VALUE } from '../actions/actionTypes';

const initialState = {
  data: '',
};

export default (state: Record<string, unknown> = initialState, action: ActionTypes):
  Record<string, unknown> => {
  switch (action.type) {
    case GITHUB_LINK_VALUE:
      return action.payload;
    default:
      return state;
  }
};
