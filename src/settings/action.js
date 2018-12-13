export const SET_FULLPAGE_READY = 'SET_FULLPAGE_READY';

export const setFullPageReady = isReady => ({
  type: SET_FULLPAGE_READY,
  payload: isReady,
});
