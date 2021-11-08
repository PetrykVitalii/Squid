import React from 'react';
import styled from 'styled-components';

import NavigationLink, { ILink } from '@/components/common/NavigationLink';

import LogoIcon from '@/components/icons/LogoIcon';

import Colors from '@/utils/Colors';

export enum Path {
  Home = 'home',
  Whitepaper = 'whitepaper',
  Roadmap = 'roadmap',
  Tokenomics = 'tokenomics',
}

interface Props {
  links: ILink[];
}

const Navigation: React.FC<Props> = ({ links }) => {
  console.log(1);

  return (
    <NavigationStyled>
      <HeaderWrapper>
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
    </NavigationStyled>
  );
};

const Menu = styled.menu`  
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 800;
  color: ${Colors.White};
  white-space: nowrap;
`;

const TitleWrap = styled.div`
`;

const LogoWrap = styled.div`
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavigationStyled = styled.header`
  position: fixed;
  background: rgba(0, 0, 0, 0.35);
  left: 0;
  top: 0;
  right: 0;
  height: 134px;
  z-index: 10;
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navigation;
