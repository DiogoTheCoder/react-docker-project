export const GITHUB_LINK_VALUE = 'GITHUB_LINK_VALUE';

interface GetGithubLinkAction {
  type: typeof GITHUB_LINK_VALUE
  payload: Record<string, unknown>
}

export function getLink(data: Record<string, unknown>): GetGithubLinkAction {
  return {
    type: GITHUB_LINK_VALUE,
    payload: Object(data.data),
  };
}

export type ActionTypes = GetGithubLinkAction
