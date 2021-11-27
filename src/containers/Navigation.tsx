import React from 'react';
import styled, { css } from 'styled-components';

import NavigationLink, { ButtonTheme, ILink } from '@/components/common/NavigationLink';

import LogoIcon from '@/components/icons/LogoIcon';

import useToggle from '@/components/hooks/useToggle';
import useOnClickOutside from '@/components/hooks/useOnClickOutside';
import useScroll from '@/components/hooks/useScroll';

import { Colors } from '@/utils/styles/colors';
import { device } from '@/utils/styles/responsiveDesign';

export enum Path {
  Home = 'home',
  Whitepaper = 'whitepaper',
  Roadmap = 'roadmap',
  Tokenomics = 'tokenomics',
  FirstTime = 'first-time',
}

interface Props {
  links: ILink[];
  handleClick: () => void;
}

const Navigation: React.FC<Props> = ({ handleClick, links }) => {
  const { scrollTop } = useScroll();
  const [isActive, setIsActive] = useToggle(false);

  const closeBurger = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const openBurger = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const hidePropagination = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const burgerMenuRef = useOnClickOutside(closeBurger);

  const handleLinkClick = (linkClick: () => void) => () => {
    closeBurger();
    linkClick();
  };

  return (
    <NavigationStyled isDarker={scrollTop > 50 || isActive}>
      <HeaderWrapper onClick={handleClick}>
        <LogoWrap>
          <LogoIcon />
        </LogoWrap>
        <TitleWrap>
          <Title>Squid-Inu</Title>
          <Title>Universe</Title>
        </TitleWrap>
      </HeaderWrapper>
      <Menu>
        {links.map((link) => (
          <NavigationLink key={link.id} link={link} />
        ))}
      </Menu>
      <Menu onClick={openBurger}>
        <BurgerWrap>
          <Burger isActive={isActive}>
            <Dash />
            <Dash />
            <Dash />
            <Dash />
          </Burger>
        </BurgerWrap>
        {isActive && (
          <BurgerNavigation onClick={hidePropagination} ref={burgerMenuRef}>
            {links.map((link) => (
              <NavigationWrap key={link.id} onClick={handleLinkClick(link.onClick)}>
                <NavigationImageWrap>{link.icon}</NavigationImageWrap>
                <NavigationLink
                  theme={ButtonTheme.burger}
                  key={link.id}
                  link={link}
                />
              </NavigationWrap>
            ))}
          </BurgerNavigation>
        )}
      </Menu>
    </NavigationStyled>
  );
};

const NavigationWrap = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  border-bottom: 2px solid ${Colors.Gray};
  padding-top: 15px;
  cursor: pointer;
`;

const NavigationImageWrap = styled.div`  
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
`;

const BurgerWrap = styled.div`  
  border-radius: 50%;
  background-color: ${Colors.DarkRed};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BurgerNavigation = styled.menu`  
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 5;
  left: 0;
  bottom: 0;
  height: calc(100vh - 60px);
  background-color: ${Colors.BlackTransparent};
  overflow-x: auto;
  padding: 24px;
`;

const Dash = styled.div`  
  width: 24px;
  height: 2px;
  background: ${Colors.White};
  border-radius: 20px;
  transition: 0.35s;
`;

const Burger = styled.div<{ isActive: boolean }>`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;

  ${Dash} {
    &:nth-child(3) {
      position: absolute;
      top: calc(50% - 1px);
    }
  }

  ${({ isActive }) => isActive && css`
    ${Dash} {
      &:nth-child(1) {
        opacity: 0;
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
      &:nth-child(3) {
        transform: rotate(45deg);
      }
      &:nth-child(4) {
        opacity: 0;
      }
    }
  `}
`;

const Menu = styled.menu`  
  width: min-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  :last-child {
      display: none;
  }

  @media ${device.tablet} {
    display: none;

    :last-child {
      display: flex;
    }
  }
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 800;
  color: ${Colors.White};
  white-space: nowrap;
  margin-left: 10px;

  @media ${device.desktop} {
    font-size: 45px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }
`;

const TitleWrap = styled.div`
`;

const LogoWrap = styled.div`
  width: 110px;

  @media ${device.desktop} {
    width: 105px;
  }

  @media ${device.laptop} {
    width: 100px;
  }

  @media ${device.tablet} {
    width: 50px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const NavigationStyled = styled.header<{ isDarker: boolean }>`
  position: fixed;
  background: ${({ isDarker }) => `rgba(0, 0, 0,${isDarker ? 0.8 : 0.35})`};
  transition: 1s;
  transition-property: 'background';
  left: 0;
  top: 0;
  right: 0;
  max-height: 134px;
  z-index: 10;
  padding: 5px 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    max-height: 60px;
    height: 60px;
  }
`;

export default Navigation;
