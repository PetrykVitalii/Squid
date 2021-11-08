import React from 'react';
import styled, { css } from 'styled-components';

import { Path } from '@/containers/Navigation';

import Colors from '@/utils/Colors';

export interface ILink {
  id: Path;
  name: string;
  isActive: boolean;
  onClick?: () => void;
}

interface Props {
  link: ILink;
}

const NavigationLink: React.FC<Props> = ({ link }) => (
  <NavigationLinkStyled onClick={link.onClick} isActive={link.isActive}>
    {link.name}
  </NavigationLinkStyled>
);

const NavigationLinkStyled = styled.div<{ isActive: boolean }>`
  padding: 5px 15px;
  font-weight: 600;
  font-size: 23px;
  text-align: center;
  color: ${Colors.White};
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 45px;

  :hover {
    border-color: ${Colors.White};
  }

  :last-child {
    margin-right: 0;
  }

  ${({ isActive }) => isActive && css`
    background: linear-gradient(111.15deg, #FF1C1C 28.18%, #860606 66.94%);
    color: ${Colors.Black};

    :hover {
      border-color: transparent;
    }
  `};
`;

export default NavigationLink;
