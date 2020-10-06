// eslint-disable-next-line import/prefer-default-export
export const goToPage = (type: string, payload: any) => ({
  type,
  payload: payload && { payload },
});
