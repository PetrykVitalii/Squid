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

import { cards, steps } from '@/utils/variables';
import useScroll from '@/components/hooks/useScroll';

interface Props {}

const Main: React.FC<Props> = () => {
  const [selectedPath, setSelectedPath] = useState(Path.Home);
  const { scrollTop } = useScroll();
  const mainRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const whitepaperRef = useRef<HTMLDivElement | null>(null);
  const roadMapRef = useRef<HTMLDivElement | null>(null);
  const tokenomicsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
    if (
      whitepaperRef && whitepaperRef.current
      && whitepaperRef.current?.offsetTop - 10 <= scrollTop
    ) {
      setSelectedPath(Path.Whitepaper);
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
        // goTo(Path.Home);
        handleScrollIntoView(homeRef.current as HTMLDivElement);
      },
    },
    {
      id: Path.Whitepaper,
      name: 'Whitepaper',
      isActive: selectedPath === Path.Whitepaper,
      onClick: () => {
        // goTo(Path.Whitepaper);
        handleScrollIntoView(whitepaperRef.current as HTMLDivElement);
      },
    },
    {
      id: Path.Roadmap,
      name: 'Roadmap',
      isActive: selectedPath === Path.Roadmap,
      onClick: () => {
        // goTo(Path.Roadmap);
        handleScrollIntoView(roadMapRef.current as HTMLDivElement);
      },
    },
    {
      id: Path.Tokenomics,
      name: 'Tokenomics',
      isActive: selectedPath === Path.Tokenomics,
      onClick: () => {
        // goTo(Path.Tokenomics);
        handleScrollIntoView(tokenomicsRef.current as HTMLDivElement);
      },
    },
  ]), [selectedPath]);

  const handlePreSale = () => {};

  const handleLogo = () => {
    handleScrollIntoView(mainRef.current as HTMLDivElement);
  };

  return (
    <MainStyled>
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
      <Wrapper ref={whitepaperRef}>
        <Whitepaper />
      </Wrapper>
      <Wrapper ref={roadMapRef}>
        <RoadMap steps={steps} />
      </Wrapper>
      <Wrapper ref={tokenomicsRef}>
        <Tokenomics />
      </Wrapper>
      <FirstTime cards={cards} />
      <Footer />
    </MainStyled>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Main;
