import React from 'react';
import { FormattedMessage } from 'react-intl';

import ClientsSectionIntl from './ClientsSection.i';

export default () => (
  <div className='section'>
    <FormattedMessage {...ClientsSectionIntl.Clients} />
  </div>
);
