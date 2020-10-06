import React from 'react';
import CircularProgress from '@/common/components/CircularProgress';

import useTheme from '@/hooks/useTheme';
import { Card, TitleCard, TruncateText, Selector } from './Skills.s';

type Props = {
  category?: any;
  onCategoryClick?: (id: number) => void;
  selected?: boolean;
  animate?: boolean;
  delay: number;
};

const SkillCard = ({
  category = {},
  selected = false,
  animate = true,
  onCategoryClick = () => {},
  delay,
}: Props) => {
  const theme = useTheme();

  const handleClick = (id: number) => {
    onCategoryClick(id);
  };

  return (
    <>
      <Card onClick={() => handleClick(category.id)} selected={selected}>
        <TitleCard>
          <TruncateText
            letterSpacing="1px"
            fontWeight={selected ? 600 : 500}
            color={theme.colors.darkGray}
            fontSize={theme.font.sizes.title}
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
    </>
  );
};

export default SkillCard;
