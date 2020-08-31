import { AppThunk } from '../stores/store';
import { getLink } from './actionTypes';
import HttpRequest from '../services/http';

export const getGithubLinkValue = (): AppThunk => async (dispatch) => {
  const asyncResp = await new HttpRequest('hello').execute();
  dispatch(getLink(
    asyncResp,
  ));
};
