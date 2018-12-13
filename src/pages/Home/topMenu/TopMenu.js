import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
// import T from 'prop-types';
// import { withTheme } from 'styled-components';

import Text from 'Common/components/Text';
import TopMenuIntl from './TopMenu.i';
import { Container } from './TopMenu.s';

export default class TopMenu extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <Text>
          <FormattedMessage {...TopMenuIntl.Home} />
        </Text>
      </Container>
    );
  }
}
