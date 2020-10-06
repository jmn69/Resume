import fetcher from '../fetcher';
import { apiHost, ApiRoutes } from '../routes';

export interface ResponseDto {
  data: any;
}

export default async function fetchAnything() {
  return await fetcher<ResponseDto>(`${apiHost}${ApiRoutes.GET_ANYTHING}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
