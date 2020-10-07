import React, { useEffect, useState } from 'react';
import Text from '@/common/components/Text';
import {
  ReactIcon,
  Git,
  Js,
  Ts,
  Redux,
  Bootstrap,
  Android,
  DotNet,
  NodeJs,
} from '@/common/devicon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Firebase from '@/config/firebase';
import TopMenu from '@/common/components/topMenu';
import {
  Container,
  ImageContainer,
  DescriptionContainer,
  CardsContainer,
  Card,
  StyledAnimated,
  CardContainer,
  MobileHiddingContainer,
  DesktopHiddingContainer,
  TechContainer,
  TitleContainer,
  Title,
  RecommendationsContainer,
  RecommendationText,
  Ref,
  RecommandationTitleContainer,
  Company,
  ContentContainer,
  TitleMobileContainer,
} from './Clients.s';

const techComponents: any = {
  React: <ReactIcon key="react" />,
  Redux: <Redux key="redux" />,
  Ts: <Ts key="Ts" />,
  Js: <Js key="Js" />,
  Bootstrap: <Bootstrap key="Bootstrap" />,
  Android: <Android key="Android" />,
  Dotnet: <DotNet key="Dotnet" />,
  Nodejs: <NodeJs key="Nodejs" />,
  Git: <Git textColor="white" key="Git" />,
};

type Props = {
  hasInit: boolean;
  setPageInit: (PageName: string) => void;
  data: Array<any>;
};

const Clients = ({ hasInit, setPageInit, data }: Props) => {
  const [descriptionClassNames, setDescriptionClassNames] = useState<any>({});
  const [techClassNames, setTechClassNames] = useState<any>({});
  const [dataSyncWithFirebase, setDataSyncWithFirebase] = useState(data);

  useEffect(() => {
    const mapDataWithFirebase = async () => {
      const newData = await Promise.all(
        data.map(async (item) => {
          const url = item.image
            ? await Firebase.storage().ref(item.image).getDownloadURL()
            : null;
          return { ...item, url };
        })
      );
      setDataSyncWithFirebase(newData);
    };
    mapDataWithFirebase();
  }, [data]);

  useEffect(() => {
    if (!hasInit) {
      setPageInit('Clients');
    }
  }, [hasInit, setPageInit]);

  const setDynamicsClassNames = (clientId: string, eventName: string) => {
    setDescriptionClassNames({
      ...descriptionClassNames,
      ...{ [clientId]: `Description${eventName}` },
    });
    setTechClassNames({
      ...techClassNames,
      ...{ [clientId]: `Tech${eventName}` },
    });
  };

  const handleMouserEnter = (clientId: string) => {
    setDynamicsClassNames(clientId, 'Enter');
  };

  const handleMouserLeave = (clientId: string) => {
    setDynamicsClassNames(clientId, 'Leave');
  };

  const handleCardTouch = (clientId: string) => {
    if (
      descriptionClassNames[clientId] &&
      descriptionClassNames[clientId] === 'DescriptionEnter'
    ) {
      setDynamicsClassNames(clientId, 'Leave');
    } else {
      setDynamicsClassNames(clientId, 'Enter');
    }
  };

  const renderRecommendation = () => (
    <RecommendationsContainer>
      <RecommandationTitleContainer>
        <Title>Last recommendation</Title>
        <FontAwesomeIcon size="lg" color="#2196f3" icon="thumbs-up" />
      </RecommandationTitleContainer>
      <ContentContainer>
        <RecommendationText href="https://www.malt.fr/profile/jordanemichon">
          &laquo;&nbsp; During our months of collaboration, Jordane has
          demonstrated great skills in terms of analysis, design, development
          and integration on the various frameworks Front of Realytics on which
          he contributed. In addition to these talents, he has demonstrated a
          remarkable professionalism to merge into the cycle of our project /
          sprint follow-ups and to be a force of proposal on the features /
          products realized which contributed to their success. I recommend to
          any tech / web company if she has the opportunity to collaborate with
          this serious and sparkling profile. &nbsp;&raquo;
        </RecommendationText>
        <Ref href="https://www.malt.fr/profile/jordanemichon">
          Vincent Nguyen-Huu - Lead Front
        </Ref>
        <Company>Realytics</Company>
      </ContentContainer>
    </RecommendationsContainer>
  );

  const renderDesktop = () => {
    // The logic below is needed to animate right to left card row by row
    const animationDelay = 300;
    let lastRowIndex = 0;
    const delayForRow = animationDelay * 3; // 3 cards per row so 3 x animation delay
    let delay = delayForRow;

    const cards =
      dataSyncWithFirebase &&
      dataSyncWithFirebase.map((client: any, index: number) => {
        const numberOfRemainingClient = dataSyncWithFirebase.length - index;
        if (index > 0) {
          delay -= animationDelay;
        }
        if (index === lastRowIndex + 3) {
          lastRowIndex += 3;
          const numberOfDoneRow = lastRowIndex / 3;
          if (numberOfRemainingClient >= 3) {
            delay = numberOfDoneRow * delayForRow + delayForRow;
          } else if (numberOfRemainingClient === 2) {
            delay = numberOfDoneRow * delayForRow + animationDelay * 2;
          } else {
            delay = numberOfDoneRow * delayForRow + animationDelay;
          }
        }

        const techIcons = client.technos.map(
          (tech: any) => techComponents[tech]
        );
        return (
          <StyledAnimated
            initiallyVisible={hasInit}
            animate={!hasInit}
            animation="bounceInLeft"
            delay={delay}
            key={client.id}
          >
            <Card
              onMouseOver={() => handleMouserEnter(client.id)}
              onMouseOut={() => handleMouserLeave(client.id)}
              onFocus={() => handleMouserEnter(client.id)}
              onBlur={() => handleMouserLeave(client.id)}
            >
              <ImageContainer>
                {client.url ? (
                  <img
                    height="100%"
                    width={client.width ? client.width : '100%'}
                    src={client.url}
                    alt="no images"
                  />
                ) : (
                  <Text>Confidential visual</Text>
                )}
              </ImageContainer>
              <DescriptionContainer
                className={descriptionClassNames[client.id]}
              >
                {client.name}
              </DescriptionContainer>
              <TechContainer className={techClassNames[client.id]}>
                {techIcons}
              </TechContainer>
            </Card>
          </StyledAnimated>
        );
      });

    return (
      <DesktopHiddingContainer>
        <Container>
          <TopMenu />
          <TitleContainer>
            <Title>Clients and companies i worked with</Title>
          </TitleContainer>
          <CardsContainer>{cards}</CardsContainer>
          {renderRecommendation()}
        </Container>
      </DesktopHiddingContainer>
    );
  };

  const renderMobileTablet = () => {
    const cards =
      dataSyncWithFirebase &&
      dataSyncWithFirebase.map((client) => {
        const techIcons = client.technos.map(
          (tech: any) => techComponents[tech]
        );
        return (
          <CardContainer key={client.id}>
            <Card onClick={() => handleCardTouch(client.id)}>
              <ImageContainer>
                {client.url ? (
                  <img
                    height="100%"
                    width={client.width ? client.width : '100%'}
                    src={client.url}
                    alt="no images"
                  />
                ) : (
                  <Text>Confidential visual</Text>
                )}
              </ImageContainer>
              <DescriptionContainer
                className={descriptionClassNames[client.id]}
              >
                {client.name}
              </DescriptionContainer>
              <TechContainer className={techClassNames[client.id]}>
                {techIcons}
              </TechContainer>
            </Card>
          </CardContainer>
        );
      });

    return (
      <MobileHiddingContainer>
        <Container>
          <TopMenu />
          <TitleMobileContainer>
            <Title>Clients</Title>
          </TitleMobileContainer>
          <CardsContainer>{cards}</CardsContainer>
          {renderRecommendation()}
        </Container>
      </MobileHiddingContainer>
    );
  };

  return (
    <>
      {renderDesktop()}
      {renderMobileTablet()}
    </>
  );
};

export default Clients;
