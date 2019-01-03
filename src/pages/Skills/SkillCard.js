import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import CircularProgress from 'Common/components/CircularProgress';
import { withTheme } from 'styled-components';

import { Card, TitleCard, TruncateText, Selector } from './Skills.s';

class SkillCard extends Component {
  static propTypes = {
    category: T.any,
    onCategoryClick: T.func,
    selected: T.bool,
    animate: T.bool,
    delay: T.number.isRequired,
    theme: T.any,
  };

  static defaultProps = {
    theme: null,
    selected: false,
    category: {},
    animate: true,
    onCategoryClick: () => {},
  };

  render() {
    const {
      onCategoryClick,
      category,
      theme,
      selected,
      animate,
      delay,
    } = this.props;
    return (
      <Fragment>
        <Card onClick={() => this.handleClick(category.id)} selected={selected}>
          <TitleCard>
            <TruncateText
              letterSpacing='1px'
              fontWeight={selected ? 600 : 500}
              color={theme.colors.darkGray}
              fontSize={theme.fontSizes.title}
            >
              {category.name}
            </TruncateText>
          </TitleCard>
          <CircularProgress
            delay={delay}
            animate={animate}
            percentage={category.masteryPercentage}
          />
        </Card>
        {selected ? <Selector /> : null}
      </Fragment>
    );
  }

  handleClick = id => {
    this.props.onCategoryClick(id);
  };
}

export default withTheme(SkillCard);
