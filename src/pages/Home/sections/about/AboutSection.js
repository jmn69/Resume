import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { connect } from 'react-redux';

import AboutSectionIntl from './AboutSection.i';
import { Container } from './AboutSection.s';

class HomeSection extends Component {
  static propTypes = {
    isFullPageReady: T.bool.isRequired,
  };

  render() {
    const { isFullPageReady } = this.props;

    return (
      <div className='section'>
        <div className='fp-bg' />
        <Container isFullPageReady={isFullPageReady}>
          <FormattedMessage {...AboutSectionIntl.About} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFullPageReady: state.settings.isFullPageReady,
});

export default connect(mapStateToProps)(HomeSection);
