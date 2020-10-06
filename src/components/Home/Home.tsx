import React, { useEffect } from 'react';
import useTheme from '@/hooks/useTheme';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import Animated from '@/common/components/Animated';
import TopMenu from '@/common/components/topMenu';

import {
  Container,
  InnerContainer,
  ContentContainer,
  FullStackDevWrapper,
  IntroWrapper,
  FullStackWrapper,
  DevWrapper,
  ButtonWrapper,
  NameContainer,
  MenuContainer,
} from './Home.s';

type Props = {
  hasInit: boolean;
  setPageInit: (PageName: string) => void;
};

const Home = ({ hasInit, setPageInit }: Props) => {
  const theme = useTheme();

  useEffect(() => {
    if (!hasInit) {
      setPageInit('Home');
    }
  }, [hasInit, setPageInit]);

  return (
    <Container>
      <MenuContainer>
        <TopMenu />
      </MenuContainer>
      <InnerContainer>
        <ContentContainer>
          <Animated
            initiallyVisible={hasInit}
            animate={!hasInit}
            animation="fadeInDown"
            delay={300}
          >
            <NameContainer>
              <Text color={theme.colors.lightGray2} fontSize={24}>
                Jordane Michon
              </Text>
            </NameContainer>
            <FullStackDevWrapper>
              <FullStackWrapper>Fullstack</FullStackWrapper>
              <DevWrapper>Developer</DevWrapper>
            </FullStackDevWrapper>
            <IntroWrapper>
              Professional in the IT world for more than 10 years, I meet the
              requirements of this ever-changing market with a pragmatic and
              creative approach.
              <br />
              It is with a result culture, which takes root in my need for
              competitiveness, that I accompany your teams in the success of
              tomorrow&apos;s products.
              <br />
              <br />
              As a freelancer and contractor, I rely on a wide variety of
              experiences to bring you cross-domain expertise.
            </IntroWrapper>
          </Animated>
          <ButtonWrapper>
            <a href="mailto:jordane.michon@gmail.com">
              <Button delay={300} animate={!hasInit} text="Work with me" />
            </a>
          </ButtonWrapper>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};
export default Home;
