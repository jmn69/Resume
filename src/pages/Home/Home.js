import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Loader from 'Common/components/Loader';
import T from 'prop-types';
import { connect } from 'react-redux';

import HomeSectionContainer from './sections/home';
import SkillsSectionContainer from './sections/skills';
import ClientSection from './sections/clients';
import AboutSection from './sections/about';
import { LoadingContainer } from './Home.s';
import { homeOperations } from './redux';

const anchors = ['Home', 'Skills', 'Clients', 'About'];

class Home extends Component {
  static propTypes = {
    setCurrentPage: T.func.isRequired,
  };
  render() {
    const { setCurrentPage } = this.props;

    return (
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        menu='#topMenu'
        onLeave={(origin, destination) => {
          setCurrentPage(destination.index);
        }}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {/* {!state.initialized || fullpageApi === undefined ? (
              <LoadingContainer>
                <Loader
                  fullPage
                  message="Wait a moment, I'm doing things right for you"
                />
              </LoadingContainer>
            ) : null} */}
            <HomeSectionContainer isFullPageReady={state.initialized} />
            <SkillsSectionContainer isFullPageReady={state.initialized} />
            <ClientSection />
            <AboutSection isFullPageReady={state.initialized} />
          </ReactFullpage.Wrapper>
        )}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentPage: pageIndex =>
    dispatch(homeOperations.setCurrentPage(pageIndex)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Home);
