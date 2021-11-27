import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import styled from 'styled-components';

import { ILink } from '@/components/common/NavigationLink';

import Navigation, { Path } from '@/containers/Navigation';
import RoadMap from '@/containers/RoadMap';
import Footer from '@/containers/Footer';
import Tokenomics from '@/containers/Tokenomics';
import Home from '@/containers/Home';
import Header from '@/containers/Header';
import Whitepaper from '@/containers/Whitepaper';
import FirstTime from '@/containers/FirstTime';

import useScroll from '@/components/hooks/useScroll';

import { cards, steps } from '@/utils/variables';
import HomeIcon from '@/components/icons/NavigationIcons/HomeIcon';
import RoadmapIcon from '@/components/icons/NavigationIcons/RoadmapIcon';
import TokenomicsIcon from '@/components/icons/NavigationIcons/Tokenomics';
import WhitepaperIcon from '@/components/icons/NavigationIcons/WhitepaperIcon';
import FirstTimeIcon from '@/components/icons/NavigationIcons/FirstTime';

interface Props {}

const Main: React.FC<Props> = () => {
  const [selectedPath, setSelectedPath] = useState(Path.Home);
  const { scrollTop } = useScroll();
  const mainRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const whitepaperRef = useRef<HTMLDivElement | null>(null);
  const roadMapRef = useRef<HTMLDivElement | null>(null);
  const tokenomicsRef = useRef<HTMLDivElement | null>(null);
  const firstTimeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      firstTimeRef && firstTimeRef.current
      && firstTimeRef.current?.offsetTop - 10 <= scrollTop
    ) {
      setSelectedPath(Path.FirstTime);
      return;
    }
    if (
      whitepaperRef && whitepaperRef.current
      && whitepaperRef.current?.offsetTop - 10 <= scrollTop
    ) {
      setSelectedPath(Path.Whitepaper);
      return;
    }
    if (
      tokenomicsRef && tokenomicsRef.current
      && tokenomicsRef.current.offsetTop - 10 <= scrollTop
    ) {
      setSelectedPath(Path.Tokenomics);
      return;
    }
    if (
      roadMapRef && roadMapRef.current
      && roadMapRef.current?.offsetTop - 10 <= scrollTop
    ) {
      setSelectedPath(Path.Roadmap);
      return;
    }
    setSelectedPath(Path.Home);
  }, [scrollTop]);

  const handleScrollIntoView = (element: HTMLDivElement) => {
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  const links: ILink[] = useMemo(() => ([
    {
      id: Path.Home,
      name: 'Home',
      isActive: selectedPath === Path.Home,
      onClick: () => {
        handleScrollIntoView(homeRef.current as HTMLDivElement);
      },
      icon: <HomeIcon />,
    },
    {
      id: Path.Roadmap,
      name: 'Roadmap',
      isActive: selectedPath === Path.Roadmap,
      onClick: () => {
        handleScrollIntoView(roadMapRef.current as HTMLDivElement);
      },
      icon: <RoadmapIcon />,
    },
    {
      id: Path.Tokenomics,
      name: 'Tokenomics',
      isActive: selectedPath === Path.Tokenomics,
      onClick: () => {
        handleScrollIntoView(tokenomicsRef.current as HTMLDivElement);
      },
      icon: <TokenomicsIcon />,
    },
    {
      id: Path.Whitepaper,
      name: 'Whitepaper',
      isActive: selectedPath === Path.Whitepaper,
      onClick: () => {
        handleScrollIntoView(whitepaperRef.current as HTMLDivElement);
      },
      icon: <WhitepaperIcon />,
    },
    {
      id: Path.FirstTime,
      name: 'First time?',
      isActive: selectedPath === Path.FirstTime,
      onClick: () => {
        handleScrollIntoView(firstTimeRef.current as HTMLDivElement);
      },
      icon: <FirstTimeIcon />,
    },
  ]), [selectedPath]);

  const handlePreSale = () => {};

  const handleLogo = () => {
    handleScrollIntoView(mainRef.current as HTMLDivElement);
  };

  return (
    <MainStyled height={window.innerHeight}>
      <Navigation
        handleClick={handleLogo}
        links={links}
      />
      <Wrapper ref={mainRef}>
        <Header handlePreSale={handlePreSale} />
      </Wrapper>
      <Wrapper ref={homeRef}>
        <Home />
      </Wrapper>
      <Wrapper ref={roadMapRef}>
        <RoadMap steps={steps} />
      </Wrapper>
      <Wrapper ref={tokenomicsRef}>
        <Tokenomics />
      </Wrapper>
      <Wrapper ref={whitepaperRef}>
        <Whitepaper />
      </Wrapper>
      <Wrapper ref={firstTimeRef}>
        <FirstTime cards={cards} />
      </Wrapper>
      <Footer />
    </MainStyled>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const MainStyled = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Main;
