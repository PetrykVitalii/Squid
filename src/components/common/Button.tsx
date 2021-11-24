import React from 'react';
import styled from 'styled-components';

import { Colors } from '@/utils/colors';
import { device } from '@/utils/responsiveDesign';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => (
  <ButtonStyled onClick={onClick}>
    <ButtonWrap>
      {children}
    </ButtonWrap>
  </ButtonStyled>
);

const ButtonWrap = styled.button`
  font-size: 96px;
  font-weight: 400;
  text-align: center;
  color: ${Colors.White};
  cursor: pointer;

  @media ${device.desktop} {
    font-size: 80px;
  }

  @media ${device.laptop} {
    font-size: 60px;
  }

  @media ${device.tablet} {
    font-size: 40px;
  }

  @media ${device.mobile} {
    font-size: 30px;
  }
`;

const ButtonStyled = styled.div`
  cursor: pointer;
  background: rgba(111, 1, 1, 0.9);
  padding: 8px 8%;
  background: linear-gradient(124.96deg, rgba(239, 11, 11, 0.9) 26.91%, rgba(111, 1, 1, 0.9) 70.57%);
  box-shadow: 0px 0px 50px #F30000;
  border-radius: 45px;
  transition: 0.5s;

  :hover {
    background: linear-gradient(124.96deg, rgba(111, 1, 1, 0.9) 26.91%, rgba(239, 11, 11, 0.9) 70.57%);
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 1);
  }
`;

export default Button;
