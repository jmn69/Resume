import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import CircularProgress from 'Common/components/CircularProgress';
import ProgressBar from 'Common/components/ProgressBar';
import Text from 'Common/components/Text';
import Animated from 'Common/components/Animated';
import { withTheme } from 'styled-components';
import universal from 'react-universal-component';

import {
  Container,
  CircularProgressContainer,
  SkillsChartsContainer,
  Card,
  TitleCard,
  Selector,
  SkillCatCardContainer,
  SkillCatCardInnerContainer,
  ProgressBarContainer,
  InnerCircularProgressContainer,
  InnerSkillsChartsContainer,
  BarChartLegend,
  LegendLeft,
  LegendRight,
  TruncateText,
} from './Skills.s';

const skillsType = T.shape({
  masteryPercentage: T.number.isRequired,
  name: T.string.isRequired,
});

const skillsCatType = T.shape({
  id: T.number.isRequired,
  name: T.string.isRequired,
  masteryPercentage: T.number.isRequired,
  skills: T.arrayOf(skillsType),
});

const HomeComponent = universal(() => import('../Home'));
const ClientsComponent = universal(() => import('../Clients'));
const AboutComponent = universal(() => import('../About'));

class SkillsComponent extends Component {
  static propTypes = {
    data: T.arrayOf(skillsCatType).isRequired,
    theme: T.any,
    setPageInit: T.func.isRequired,
    hasInit: T.bool.isRequired,
  };

  static defaultProps = {
    theme: null,
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
    const { data, theme, hasInit } = this.props;
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
                <Card
                  onClick={() => this.handleSkillCatClick(skillCat.id)}
                  selected={isSelected}
                >
                  <TitleCard>
                    <TruncateText
                      letterSpacing='1px'
                      fontWeight={isSelected ? 600 : 500}
                      color={theme.colors.darkGray}
                      fontSize={theme.fontSizes.title}
                    >
                      {skillCat.name}
                    </TruncateText>
                  </TitleCard>
                  <CircularProgress
                    delay={delay + 700}
                    animate={!hasInit}
                    percentage={skillCat.masteryPercentage}
                  />
                </Card>
                {isSelected ? <Selector /> : null}
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
              <BarChartLegend>
                <LegendLeft>
                  <Text color={theme.colors.white}>Initié</Text>
                </LegendLeft>
                <LegendLeft>
                  <Text color={theme.colors.white}>Bon niveau</Text>
                </LegendLeft>
                <LegendRight>
                  <Text color={theme.colors.white}>Très bon niveau</Text>
                </LegendRight>
                <LegendRight>
                  <Text color={theme.colors.white}>Expertise</Text>
                </LegendRight>
              </BarChartLegend>
            </Fragment>
          </SkillsChartsContainer>
        </InnerSkillsChartsContainer>
      </Container>
    );
  }

  handleSkillCatClick(skillCatId) {
    const skillCatPos = this.props.data.find(
      skillCat => skillCat.id === skillCatId,
    );

    this.setState({ skillCatPosSelected: skillCatPos });
  }
}

export default withTheme(SkillsComponent);
