import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import ProgressBar from 'Common/components/ProgressBar';
import Animated from 'Common/components/Animated';
import { compose } from 'redux';
import { withTheme } from 'styled-components';
import universal from 'react-universal-component';
import ProgressBarLegend from 'Common/components/ProgressBarLegend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Swipe from 'react-easy-swipe';

import TopMenu from '../topMenu/TopMenuContainer';
import SkillsIntl from './Skills.i';
import SkillCard from './SkillCard';
import {
  DesktopContainer,
  MobileContainer,
  CircularProgressContainer,
  SkillsChartsContainer,
  SkillCatCardContainer,
  SkillCatCardInnerContainer,
  ProgressBarContainer,
  InnerCircularProgressContainer,
  InnerSkillsChartsContainer,
  ArrowRightWrapper,
  ArrowLeftWrapper,
  MobileHiddingContainer,
  TitleMobileContainer,
  Title,
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
    theme: T.any,
    setPageInit: T.func.isRequired,
    hasInit: T.bool.isRequired,
  };

  static defaultProps = {
    intl: null,
    theme: null,
  };

  state = {
    skillCatPosSelected: Array.isArray(this.props.data) && this.props.data[0],
    direction: 'next',
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
        {this.renderDesktopTablet()}
        {this.renderMobileTablet()}
      </Fragment>
    );
  }

  renderMobileTablet = () => {
    const { intl } = this.props;
    const { skillCatPosSelected, direction } = this.state;
    const charts =
      skillCatPosSelected &&
      skillCatPosSelected.skills &&
      skillCatPosSelected.skills.map(skill => (
        <ProgressBarContainer key={skill.id}>
          <ProgressBar percentage={skill.masteryPercentage} text={skill.name} />
        </ProgressBarContainer>
      ));

    return (
      <MobileHiddingContainer>
        <Swipe
          onSwipeLeft={this.handleNextCategoryClick}
          onSwipeRight={this.handlePreviousCategoryClick}
        >
          <TransitionGroup
            className={`switcherMobile ${direction}`}
            duration={500}
          >
            <CSSTransition
              key={skillCatPosSelected.id}
              timeout={500}
              classNames='slide'
            >
              <MobileContainer>
                <TitleMobileContainer>
                  <Title>
                    <FormattedMessage {...SkillsIntl.Skills} />
                  </Title>
                </TitleMobileContainer>
                <InnerCircularProgressContainer>
                  <SkillCatCardContainer>
                    <SkillCatCardInnerContainer>
                      <SkillCard delay={300} category={skillCatPosSelected} />
                    </SkillCatCardInnerContainer>
                  </SkillCatCardContainer>
                  {this.renderArrowRight()}
                  {this.renderArrowLeft()}
                </InnerCircularProgressContainer>
                <InnerSkillsChartsContainer>
                  <SkillsChartsContainer>
                    <Fragment>
                      {charts}
                      <ProgressBarLegend texts={legendText(intl)} />
                    </Fragment>
                  </SkillsChartsContainer>
                </InnerSkillsChartsContainer>
              </MobileContainer>
            </CSSTransition>
          </TransitionGroup>
        </Swipe>
      </MobileHiddingContainer>
    );
  };

  renderArrowRight = () =>
    this.getNextCategory() ? (
      <ArrowRightWrapper onClick={this.handleNextCategoryClick}>
        <FontAwesomeIcon
          size='3x'
          color={this.props.theme.colors.accent}
          icon='angle-right'
        />
      </ArrowRightWrapper>
    ) : null;

  renderArrowLeft = () =>
    this.getPreviousCategory() ? (
      <ArrowLeftWrapper onClick={this.handlePreviousCategoryClick}>
        <FontAwesomeIcon
          size='3x'
          color={this.props.theme.colors.accent}
          icon='angle-left'
        />
      </ArrowLeftWrapper>
    ) : null;

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
      <DesktopContainer>
        <TopMenu />
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
      </DesktopContainer>
    );
  };

  getNextCategory = () => {
    const { skillCatPosSelected } = this.state;
    const { data } = this.props;

    const currentIndex = data.findIndex(
      category => category.id === skillCatPosSelected.id,
    );
    return data[currentIndex + 1];
  };

  getPreviousCategory = () => {
    const { skillCatPosSelected } = this.state;
    const { data } = this.props;

    const currentIndex = data.findIndex(
      category => category.id === skillCatPosSelected.id,
    );
    return data[currentIndex - 1];
  };

  handleNextCategoryClick = () => {
    const nextSkillCatPosSelected = this.getNextCategory();

    nextSkillCatPosSelected &&
      this.setState({
        skillCatPosSelected: nextSkillCatPosSelected,
        direction: 'next',
      });
  };

  handlePreviousCategoryClick = () => {
    const previousSkillCatPosSelected = this.getPreviousCategory();
    previousSkillCatPosSelected &&
      this.setState({
        skillCatPosSelected: previousSkillCatPosSelected,
        direction: 'back',
      });
  };

  handleSkillCatClick = skillCatId => {
    const skillCatPos = this.props.data.find(
      skillCat => skillCat.id === skillCatId,
    );

    this.setState({ skillCatPosSelected: skillCatPos });
  };
}

export default compose(
  injectIntl,
  withTheme,
)(SkillsComponent);
