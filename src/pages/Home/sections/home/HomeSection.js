import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { connect } from 'react-redux';

import HomeSectionIntl from './HomeSection.i';
import { Container } from './HomeSection.s';

class HomeSection extends Component {
  static propTypes = {
    isFullPageReady: T.bool.isRequired,
  };

  render() {
    const { isFullPageReady } = this.props;

    return (
      <div className='section'>
        <Container isFullPageReady={isFullPageReady}>
          <FormattedMessage {...HomeSectionIntl.Home} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFullPageReady: state.settings.isFullPageReady,
});

export default connect(mapStateToProps)(HomeSection);
