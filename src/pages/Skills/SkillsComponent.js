import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { injectIntl } from 'react-intl';
import ProgressBar from 'Common/components/ProgressBar';
import Animated from 'Common/components/Animated';
import universal from 'react-universal-component';
import { MobileScreen, DesktopScreen } from 'react-responsive-redux';
import ProgressBarLegend from 'Common/components/ProgressBarLegend';

import SkillsIntl from './Skills.i';
import SkillCard from './SkillCard';
import {
  Container,
  CircularProgressContainer,
  SkillsChartsContainer,
  SkillCatCardContainer,
  SkillCatCardInnerContainer,
  ProgressBarContainer,
  InnerCircularProgressContainer,
  InnerSkillsChartsContainer,
} from './Skills.s';

const skillsType = T.shape({
  masteryPercentage: T.number.isRequired,
  name: T.string.isRequired,
});

export const skillsCatType = T.shape({
  id: T.number.isRequired,
  name: T.string.isRequired,
  masteryPercentage: T.number.isRequired,
  skills: T.arrayOf(skillsType),
});

const legendText = intl => [
  intl.formatMessage(SkillsIntl.Initiate),
  intl.formatMessage(SkillsIntl.GoodLvl),
  intl.formatMessage(SkillsIntl.VeryGoodLvl),
  intl.formatMessage(SkillsIntl.Expertise),
];

const HomeComponent = universal(() => import('../Home'));
const ClientsComponent = universal(() => import('../Clients'));
const AboutComponent = universal(() => import('../About'));

class SkillsComponent extends Component {
  static propTypes = {
    data: T.arrayOf(skillsCatType).isRequired,
    intl: T.any,
    setPageInit: T.func.isRequired,
    hasInit: T.bool.isRequired,
  };

  static defaultProps = {
    intl: null,
  };

  state = {
    skillCatPosSelected: Array.isArray(this.props.data) && this.props.data[0],
  };

  componentDidMount() {
    const { hasInit, setPageInit } = this.props;
    HomeComponent.preload();
    ClientsComponent.preload();
    AboutComponent.preload();
    if (!hasInit) {
      setPageInit('Skills');
    }
  }

  render() {
    return (
      <Fragment>
        <MobileScreen>{this.renderMobileTablet()}</MobileScreen>
        <DesktopScreen>{this.renderDesktopTablet()}</DesktopScreen>
      </Fragment>
    );
  }

  renderMobileTablet = () => {
    const { intl } = this.props;
    const { skillCatPosSelected } = this.state;
    const charts =
      skillCatPosSelected &&
      skillCatPosSelected.skills &&
      skillCatPosSelected.skills.map(skill => (
        <ProgressBarContainer key={skill.id}>
          <ProgressBar percentage={skill.masteryPercentage} text={skill.name} />
        </ProgressBarContainer>
      ));

    return (
      <Container>
        <InnerCircularProgressContainer>cards</InnerCircularProgressContainer>
        <InnerSkillsChartsContainer>
          <SkillsChartsContainer>
            <Fragment>
              {charts}
              <ProgressBarLegend texts={legendText(intl)} />
            </Fragment>
          </SkillsChartsContainer>
        </InnerSkillsChartsContainer>
      </Container>
    );
  };

  renderDesktopTablet = () => {
    const { data, intl, hasInit } = this.props;
    const { skillCatPosSelected } = this.state;
    let delay = 1800;

    const cards =
      data &&
      data.map(skillCat => {
        const isSelected =
          skillCatPosSelected && skillCatPosSelected.id === skillCat.id;
        delay -= 300;
        return (
          <SkillCatCardContainer key={skillCat.id}>
            <Animated
              initiallyVisible={hasInit}
              animate={!hasInit}
              animation='bounceInLeft'
              delay={delay}
            >
              <SkillCatCardInnerContainer>
                <SkillCard
                  animate={!hasInit}
                  category={skillCat}
                  onCategoryClick={this.handleSkillCatClick}
                  selected={isSelected}
                  delay={delay + 700}
                />
              </SkillCatCardInnerContainer>
            </Animated>
          </SkillCatCardContainer>
        );
      });

    const charts =
      skillCatPosSelected &&
      skillCatPosSelected.skills &&
      skillCatPosSelected.skills.map(skill => (
        <ProgressBarContainer key={skill.id}>
          <ProgressBar percentage={skill.masteryPercentage} text={skill.name} />
        </ProgressBarContainer>
      ));

    return (
      <Container>
        <InnerCircularProgressContainer>
          <CircularProgressContainer>{cards}</CircularProgressContainer>
        </InnerCircularProgressContainer>
        <InnerSkillsChartsContainer>
          <SkillsChartsContainer>
            <Fragment>
              {charts}
              <ProgressBarLegend texts={legendText(intl)} />
            </Fragment>
          </SkillsChartsContainer>
        </InnerSkillsChartsContainer>
      </Container>
    );
  };

  handleSkillCatClick(skillCatId) {
    const skillCatPos = this.props.data.find(
      skillCat => skillCat.id === skillCatId,
    );

    this.setState({ skillCatPosSelected: skillCatPos });
  }
}

export default injectIntl(SkillsComponent);
