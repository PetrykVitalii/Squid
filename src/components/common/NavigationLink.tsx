/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Path } from '@/containers/Navigation';

import { Colors } from '@/utils/colors';

export enum ButtonTheme {
  default = 'default',
  burger = 'burger',
}

export interface ILink {
  id: Path;
  name: string;
  isActive: boolean;
  onClick: () => void;
  icon: ReactNode;
}

interface Props {
  link: ILink;
  theme?: ButtonTheme;
}

const NavigationLink = ({ link, theme = ButtonTheme.default }: Props) => {
  const themes = {
    [ButtonTheme.default]: DefaultLink,
    [ButtonTheme.burger]: BurgerLink,
  };

  const ThemedButton = themes[theme];

  return (
    <ThemedButton onClick={link.onClick} isActive={link.isActive}>
      {link.name}
    </ThemedButton>
  );
};

NavigationLink.theme = ButtonTheme;

const BurgerLink = styled.div<{ isActive: boolean }>`
  padding: 5px 15px;
  font-weight: 600;
  font-size: 23px;
  text-align: center;
  color: ${Colors.White};
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 45px;
  white-space: nowrap;
  width: 100%;

  :hover {
    color: ${Colors.Red};
  }

  ${({ isActive }) => isActive && css`
    color: ${Colors.Red};
  `};
`;

const DefaultLink = styled.div<{ isActive: boolean }>`
  padding: 5px 15px;
  font-weight: 600;
  font-size: 23px;
  text-align: center;
  color: ${Colors.White};
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 45px;
  white-space: nowrap;

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
