import React from 'react';
import { FormattedMessage } from 'react-intl';

import SkillsSectionIntl from './SkillsSection.i';

export default () => (
  <div className='section'>
    <FormattedMessage {...SkillsSectionIntl.Skills} />
  </div>
);
