import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import CircularProgress from 'Common/components/CircularProgress';
import Text from 'Common/components/Text';
import { withTheme } from 'styled-components';

import {
  Container,
  InnerContainer,
  CircularProgressContainer,
  SkillsChartsContainer,
  Card,
  TitleCard,
  Selector,
  SkillCatCardContainer,
} from './SkillsSection.s';

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

class SkillsSectionComponent extends Component {
  static propTypes = {
    currentPageIndex: T.number.isRequired,
    data: T.arrayOf(skillsCatType).isRequired,
    theme: T.any,
    isFullPageReady: T.bool.isRequired,
  };

  static defaultProps = {
    theme: null,
  };

  state = {
    hasInit: false,
    skillCatPosSelected: Array.isArray(this.props.data) && this.props.data[0],
  };

  componentDidUpdate() {
    const { hasInit } = this.state;
    if (!hasInit && this.props.currentPageIndex === 1) {
      this.setState({ hasInit: true }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  render() {
    const {
      currentPageIndex, data, theme, isFullPageReady,
    } = this.props;
    const { hasInit, skillCatPosSelected } = this.state;

    const cards =
      data &&
      data.map(skillCat => {
        const isSelected =
          skillCatPosSelected && skillCatPosSelected.id === skillCat.id;
        return (
          <SkillCatCardContainer key={skillCat.id}>
            <Card
              onClick={() => this.handleSkillCatClick(skillCat.id)}
              selected={isSelected}
            >
              <TitleCard>
                <Text
                  letterSpacing='1px'
                  fontWeight={isSelected ? 600 : 500}
                  color={theme.colors.darkGray}
                  fontSize={theme.fontSizes.title}
                >
                  {skillCat.name}
                </Text>
              </TitleCard>
              <CircularProgress percentage={skillCat.masteryPercentage} />
            </Card>
            {isSelected ? <Selector /> : null}
          </SkillCatCardContainer>
        );
      });

    return (
      <div className='section'>
        <Container isFullPageReady={isFullPageReady}>
          <InnerContainer>
            {currentPageIndex === 1 || hasInit ? (
              <Fragment>
                <CircularProgressContainer>{cards}</CircularProgressContainer>
                <SkillsChartsContainer>charts</SkillsChartsContainer>
              </Fragment>
            ) : null}
          </InnerContainer>
        </Container>
      </div>
    );
  }

  handleSkillCatClick(skillCatId) {
    const skillCatPos = this.props.data.find(
      skillCat => skillCat.id === skillCatId,
    );

    this.setState({ skillCatPosSelected: skillCatPos });
  }
}

export default withTheme(SkillsSectionComponent);
