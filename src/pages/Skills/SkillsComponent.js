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

class SkillsComponent extends Component {
  static propTypes = {
    data: T.arrayOf(skillsCatType).isRequired,
    theme: T.any,
  };

  static defaultProps = {
    theme: null,
  };

  state = {
    skillCatPosSelected: Array.isArray(this.props.data) && this.props.data[0],
  };

  render() {
    const { data, theme } = this.props;
    const { skillCatPosSelected } = this.state;

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
      <Container>
        <InnerContainer>
          <Fragment>
            <CircularProgressContainer>{cards}</CircularProgressContainer>
            <SkillsChartsContainer>charts</SkillsChartsContainer>
          </Fragment>
        </InnerContainer>
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
