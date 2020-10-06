import React, { useEffect, useState } from 'react';
import ProgressBar from '@/common/components/ProgressBar';
import Animated from '@/common/components/Animated';
import ProgressBarLegend from '@/common/components/ProgressBarLegend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Swipe from 'react-easy-swipe';
import TopMenu from '@/common/components/topMenu';

import useTheme from '@/hooks/useTheme';
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

type SkillsType = {
  id: number;
  masteryPercentage: number;
  name: string;
};

type SkillsCatType = {
  id: number;
  name: string;
  masteryPercentage: number;
  skills: SkillsType[];
};

const legendText = () => ['Initiate', 'Good level', 'Confirmed', 'Expertise'];

type Props = {
  data: SkillsCatType[];
  hasInit: boolean;
  setPageInit: (PageName: string) => void;
};

const Skills = ({ data, hasInit, setPageInit }: Props) => {
  const theme = useTheme();
  const [skillCatPosSelected, setSkillCatPosSelected] = useState(data[0]);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    if (!hasInit) {
      setPageInit('Skills');
    }
  }, [hasInit, setPageInit]);

  const getNextCategory = () => {
    const currentIndex = data.findIndex(
      (category) => category.id === skillCatPosSelected.id
    );
    return data[currentIndex + 1];
  };

  const getPreviousCategory = () => {
    const currentIndex = data.findIndex(
      (category) => category.id === skillCatPosSelected.id
    );
    return data[currentIndex - 1];
  };

  const handleNextCategoryClick = () => {
    const nextSkillCatPosSelected = getNextCategory();

    if (nextSkillCatPosSelected) {
      setSkillCatPosSelected(nextSkillCatPosSelected);
      setDirection('next');
    }
  };

  const handlePreviousCategoryClick = () => {
    const previousSkillCatPosSelected = getPreviousCategory();

    if (previousSkillCatPosSelected) {
      setSkillCatPosSelected(previousSkillCatPosSelected);
      setDirection('back');
    }
  };

  const handleSkillCatClick = (skillCatId: number) => {
    const skillCatPos = data.find((skillCat) => skillCat.id === skillCatId);

    if (skillCatPos) {
      setSkillCatPosSelected(skillCatPos);
    }
  };

  const renderArrowRight = () =>
    getNextCategory() ? (
      <ArrowRightWrapper onClick={handleNextCategoryClick}>
        <FontAwesomeIcon
          size="3x"
          color={theme.colors.accent}
          icon="angle-right"
        />
      </ArrowRightWrapper>
    ) : null;

  const renderArrowLeft = () =>
    getPreviousCategory() ? (
      <ArrowLeftWrapper onClick={handlePreviousCategoryClick}>
        <FontAwesomeIcon
          size="3x"
          color={theme.colors.accent}
          icon="angle-left"
        />
      </ArrowLeftWrapper>
    ) : null;

  const renderMobileTablet = () => {
    const charts =
      skillCatPosSelected &&
      skillCatPosSelected.skills &&
      skillCatPosSelected.skills.map((skill) => (
        <ProgressBarContainer key={skill.id}>
          <ProgressBar percentage={skill.masteryPercentage} text={skill.name} />
        </ProgressBarContainer>
      ));

    return (
      <MobileHiddingContainer>
        <Swipe
          onSwipeLeft={handleNextCategoryClick}
          onSwipeRight={handlePreviousCategoryClick}
        >
          <TransitionGroup
            className={`switcherMobile ${direction}`}
            duration={500}
          >
            <CSSTransition
              key={skillCatPosSelected.id}
              timeout={500}
              classNames="slide"
            >
              <MobileContainer>
                <TitleMobileContainer>
                  <Title>Skills</Title>
                </TitleMobileContainer>
                <InnerCircularProgressContainer>
                  <SkillCatCardContainer>
                    <SkillCatCardInnerContainer>
                      <SkillCard delay={300} category={skillCatPosSelected} />
                    </SkillCatCardInnerContainer>
                  </SkillCatCardContainer>
                  {renderArrowRight()}
                  {renderArrowLeft()}
                </InnerCircularProgressContainer>
                <InnerSkillsChartsContainer>
                  <SkillsChartsContainer>
                    <>
                      {charts}
                      <ProgressBarLegend texts={legendText()} />
                    </>
                  </SkillsChartsContainer>
                </InnerSkillsChartsContainer>
              </MobileContainer>
            </CSSTransition>
          </TransitionGroup>
        </Swipe>
      </MobileHiddingContainer>
    );
  };

  const renderDesktopTablet = () => {
    let delay = 1800;

    const cards =
      data &&
      data.map((skillCat) => {
        const isSelected =
          skillCatPosSelected && skillCatPosSelected.id === skillCat.id;
        delay -= 300;
        return (
          <SkillCatCardContainer key={skillCat.id}>
            <Animated
              initiallyVisible={hasInit}
              animate={!hasInit}
              animation="bounceInLeft"
              delay={delay}
            >
              <SkillCatCardInnerContainer>
                <SkillCard
                  animate={!hasInit}
                  category={skillCat}
                  onCategoryClick={handleSkillCatClick}
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
      skillCatPosSelected.skills.map((skill) => (
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
            <>
              {charts}
              <ProgressBarLegend texts={legendText()} />
            </>
          </SkillsChartsContainer>
        </InnerSkillsChartsContainer>
      </DesktopContainer>
    );
  };

  return (
    <>
      {renderDesktopTablet()}
      {renderMobileTablet()}
    </>
  );
};

export default Skills;
