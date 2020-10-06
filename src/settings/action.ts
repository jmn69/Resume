export const SET_PAGE_INIT = 'SET_PAGE_INIT';

export const setPageInit = (page: string) => ({
  type: SET_PAGE_INIT,
  payload: page,
});
