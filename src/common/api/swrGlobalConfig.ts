import { ConfigInterface } from 'swr';

import fetcher from './fetcher';

const swrGlobalConfig: ConfigInterface = {
  fetcher,
};

export default swrGlobalConfig;
