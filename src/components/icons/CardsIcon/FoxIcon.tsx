import React from 'react';
import styled from 'styled-components';

const FoxIcon: React.FC = () => (
  <FoxStyled src="/assets/fox.png" />
);

const FoxStyled = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export default FoxIcon;
