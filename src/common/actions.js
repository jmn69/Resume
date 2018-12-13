export const goToPage = (type, payload) => ({
  type,
  payload: payload && { payload },
});
