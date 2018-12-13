import React from 'react';
import { FormattedMessage } from 'react-intl';

import AboutSectionIntl from './AboutSection.i';

export default () => (
  <div className='section'>
    <FormattedMessage {...AboutSectionIntl.About} />
  </div>
);
