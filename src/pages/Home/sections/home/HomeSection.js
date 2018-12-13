import React from 'react';
import { FormattedMessage } from 'react-intl';

import HomeSectionIntl from './HomeSection.i';
import TopMenu from '../../topMenu/TopMenu';

export default () => (
  <div className='section'>
    <TopMenu />
    <FormattedMessage {...HomeSectionIntl.Home} />
  </div>
);
