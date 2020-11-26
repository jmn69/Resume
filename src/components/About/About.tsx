import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/common/components/Button';
import { Malt, Linkedin, Github } from '@/common/devicon';
import TopMenu from '@/common/components/topMenu';
import useTheme from '@/hooks/useTheme';
import {
  Container,
  FunFactContainer,
  InformationContainer,
  ContactMeContainer,
  AboutContainer,
  ContentContainer,
  LeftContainer,
  RightContainer,
  Divider,
  TextInformation,
  MenuContainer,
  RowContainer,
  IconWrapper,
  DownloadIconContainer,
  DownloadTextContainer,
  RowLinksContainer,
  Link,
  RightInnerContainer,
  ButtonWrapper,
  TextContact,
  DescriptionContainer,
  TitleContainer,
  Title,
  ButtonCircle,
  TextFunFact,
} from './About.s';

const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

const funFacts = () => [
  {
    id: 1,
    text:
      'I served for 3 years in the Air Force Reserve on the BA 952 as a commando fusilier. It has been a very enriching experience where you learn to know and push your own limits.',
  },
  {
    id: 2,
    text:
      'I migrated from the .Net world to a full Js stack in recent years. Should I learn python or go too? If you have an opinion on the subject come share it!',
  },
  {
    id: 3,
    text:
      'Summer holidays in the ocean is life. What better feeling than a wave of 4m that returns you in all directions until exhaustion?',
  },
  {
    id: 4,
    text:
      'I have a deep interest in entrepreneurship, sooner or later I would start a startup project.',
  },
  {
    id: 5,
    text:
      'I own a nice house in the countryside and I would not go back to town for anything! (Except maybe fiber)',
  },
  {
    id: 6,
    text:
      'I already collaborated with 7 companies in the IT, the culture radically opposed for some !',
  },
  {
    id: 7,
    text:
      "I love dogs and especially mine! It's one of the reasons I like working remotly.",
  },
  {
    id: 8,
    text:
      'Since I work at home, I listen to a lot less music (mandatory in open space, look for the error) and I enjoy the silence to work calmly on your projects;)',
  },
  {
    id: 9,
    text: '3 coffees. This is probably the dose I am going to consume today.',
  },
  {
    id: 10,
    text: 'Skiing is good, snowboarding is better.',
  },
  {
    id: 11,
    text:
      'Passionate about video games and japanese culture, surprising for a dev hin?',
  },
  {
    id: 12,
    text:
      'I am an effective pragmatist, I fled as soon as I had the occasion the scourge of presenteeism in France. The productivity and quality of a job is not directly correlated with time.',
  },
];

type Props = {
  hasInit: boolean;
  setPageInit: (PageName: string) => void;
};

const About = ({ setPageInit, hasInit }: Props) => {
  const myRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [currentFunFact, setCurrentFunFact] = useState<any>(null);

  useEffect(() => {
    if (!hasInit) {
      setPageInit('About');
    }
  }, [hasInit, setPageInit]);

  const handleFunFactClick = () => {
    if (myRef && myRef.current) {
      window.scrollTo(0, myRef.current.offsetTop);
    }

    const tradFunFacts = funFacts();
    const randomFunFactId = getRandomInt(tradFunFacts.length);
    setCurrentFunFact(tradFunFacts[randomFunFactId]);
  };

  return (
    <Container>
      <MenuContainer>
        <TopMenu />
      </MenuContainer>
      <ContentContainer>
        <FunFactContainer>
          <TitleContainer>
            <Title>Fun fact</Title>
          </TitleContainer>
          <DescriptionContainer>
            Writing a text to describe yourself is never easy.
            <br /> I found it more interesting and entertaining to offer you
            several facts about me.
          </DescriptionContainer>
          <ButtonCircle onClick={handleFunFactClick} ref={myRef} />
          {currentFunFact ? (
            <TextFunFact>
              &laquo;&nbsp;{currentFunFact.text}&nbsp;&raquo;
            </TextFunFact>
          ) : null}
        </FunFactContainer>
        <AboutContainer>
          <InformationContainer>
            <LeftContainer>
              <RowContainer>
                <IconWrapper>
                  <FontAwesomeIcon
                    size="lg"
                    color={theme.colors.lightGray}
                    icon="map-marker"
                  />
                </IconWrapper>
                <TextInformation>Remote work and Lyon</TextInformation>
              </RowContainer>
              <RowContainer>
                <IconWrapper>
                  <FontAwesomeIcon
                    size="lg"
                    color={theme.colors.lightGray}
                    icon="euro-sign"
                  />
                </IconWrapper>
                <TextInformation>ADR 500€</TextInformation>
              </RowContainer>
              <RowContainer>
                <IconWrapper>
                  <FontAwesomeIcon
                    size="lg"
                    color={theme.colors.lightGray}
                    icon="globe-europe"
                  />
                </IconWrapper>
                <TextInformation>French and english</TextInformation>
              </RowContainer>
              <RowContainer>
                <IconWrapper>
                  <FontAwesomeIcon
                    size="lg"
                    color={theme.colors.lightGray}
                    icon="hourglass-half"
                  />
                </IconWrapper>
                <TextInformation>Flexible working hours</TextInformation>
              </RowContainer>
              <RowContainer>
                <IconWrapper>
                  <FontAwesomeIcon
                    size="lg"
                    color={theme.colors.lightGray}
                    icon="check"
                  />
                </IconWrapper>
                <TextInformation>Immediate availability</TextInformation>
              </RowContainer>
            </LeftContainer>
            <Divider />
            <RightContainer>
              <RightInnerContainer>
                <Link href="./cv">
                  <DownloadIconContainer>
                    <FontAwesomeIcon
                      size="2x"
                      color="#4caf50"
                      icon="download"
                    />
                  </DownloadIconContainer>
                  <DownloadTextContainer>
                    <TextInformation>
                      Download my resume in pdf format
                    </TextInformation>
                  </DownloadTextContainer>
                </Link>
              </RightInnerContainer>
              <RightInnerContainer>
                <DownloadTextContainer>
                  <TextInformation>Find me too on&nbsp;:</TextInformation>
                </DownloadTextContainer>
                <RowLinksContainer>
                  <Link href="https://www.malt.fr/profile/jordanemichon">
                    <Malt style={{ marginTop: '-1px' }} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jordane-michon-73779011b">
                    <Linkedin style={{ marginTop: '-7px' }} />
                  </Link>
                  <Link href="https://github.com/jmn69">
                    <Github style={{ marginTop: '-8px' }} />
                  </Link>
                </RowLinksContainer>
              </RightInnerContainer>
            </RightContainer>
          </InformationContainer>
          <ContactMeContainer>
            <TextContact>
              You can contact me if you have an opportunity to offer me or if
              you want to know more about me. Know that I favor missions in full
              remote work, I prefer the tranquility of my environment to be as
              productive as possible when I realize your projects.
              <br /> If you still requires a physical presence in your office do
              not hesitate to discuss it with me.
            </TextContact>
            <ButtonWrapper>
              <a href="mailto:jordane.michon@gmail.com">
                <Button delay={300} animate={!hasInit} text="Work with me" />
              </a>
            </ButtonWrapper>
          </ContactMeContainer>
        </AboutContainer>
      </ContentContainer>
    </Container>
  );
};
export default About;
