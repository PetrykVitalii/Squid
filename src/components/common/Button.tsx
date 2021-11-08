import Colors from '@/utils/Colors';
import React from 'react';
import styled from 'styled-components';

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
`;

const ButtonStyled = styled.div`
  cursor: pointer;
  background: rgba(111, 1, 1, 0.9);
  padding: 8px 100px;
  background: linear-gradient(124.96deg, rgba(239, 11, 11, 0.9) 26.91%, rgba(111, 1, 1, 0.9) 70.57%);
  box-shadow: 0px 0px 50px #F30000;
  border-radius: 45px;
`;

export default Button;
