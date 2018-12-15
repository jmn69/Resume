import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Common/components/Button';

import SkillsSectionIntl from './SkillsSection.i';
import { Container } from './SkillsSection.s';

class SkillsSection extends Component {
  static propTypes = {
    isFullPageReady: T.bool.isRequired,
  };

  render() {
    const { isFullPageReady } = this.props;

    return (
      <div className='section'>
        <Container isFullPageReady={isFullPageReady}>
          <FormattedMessage {...SkillsSectionIntl.Skills} />
          <Button text='Work with me' />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFullPageReady: state.settings.isFullPageReady,
});

export default connect(mapStateToProps)(SkillsSection);
