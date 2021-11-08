import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router';

import Video from '@/components/common/Video';
import Button from '@/components/common/Button';
import { ILink } from '@/components/common/NavigationLink';

import Navigation, { Path } from '@/containers/Navigation';
import RoadMap from '@/containers/RoadMap';
import Whitepaper from '@/containers/Whitepaper';
import Footer from '@/containers/Footer';
import Tokenomics from '@/containers/Tokenomics';
import FirstTime from '@/containers/FirstTime';

import Colors from '@/utils/Colors';
import { cards, steps } from '@/utils/variables';

interface Props {}

const Main: React.FC<Props> = () => {
  const history = useHistory();
  const { path } = useParams<{ path: Path }>();

  const goTo = (direction: Path) => () => {
    history.push(`/${direction}`);
  };

  const links: ILink[] = useMemo(() => ([
    {
      id: Path.Home,
      name: 'Home',
      isActive: path === Path.Home,
      onClick: goTo(Path.Home),
    },
    {
      id: Path.Whitepaper,
      name: 'Whitepaper',
      isActive: path === Path.Whitepaper,
      onClick: goTo(Path.Whitepaper),
    },
    {
      id: Path.Roadmap,
      name: 'Roadmap',
      isActive: path === Path.Roadmap,
      onClick: goTo(Path.Roadmap),
    },
    {
      id: Path.Tokenomics,
      name: 'Tokenomics',
      isActive: path === Path.Tokenomics,
      onClick: goTo(Path.Tokenomics),
    },
  ]), [path]);

  const handlePreSale = () => {};

  return (
    <MainStyled>
      <Navigation links={links} />
      <HomeContainer>
        <VideoContainer>
          <Video url="/assets/gif.mp4" />
        </VideoContainer>
        <ButtonWrapper>
          <Button onClick={handlePreSale}>Pre-Sale</Button>
        </ButtonWrapper>
      </HomeContainer>
      <Whitepaper />
      <RoadMap steps={steps} />
      <Tokenomics />
      <FirstTime cards={cards} />
      <Footer />
    </MainStyled>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: ${Colors.Black};
`;

const VideoContainer = styled.div`
  width: 100%;
`;

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Main;
