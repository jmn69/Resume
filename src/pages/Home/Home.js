import React from 'react';
import { FormattedMessage } from 'react-intl';
import HomeIntl from './Home.i';

const Home = () => (
  <div>
    <FormattedMessage {...HomeIntl.Home} />
  </div>
);

export default Home;
