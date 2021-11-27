import React from 'react';
import styled from 'styled-components';

import GraphIcon from '@/components/icons/GraphIcon';
import { Colors } from '@/utils/styles/colors';
import { device } from '@/utils/styles/responsiveDesign';

interface Props {
}

const Tokenomics: React.FC<Props> = () => (
  <TokenomicsStyled>
    <Title>Tokenomics</Title>
    <IconWrap>
      <GraphIcon />
    </IconWrap>
    <TextWrap>
      <Text>SUPPLY: 4560000000</Text>
      <Line />
      <Text>SLIP : 13 %</Text>
      <Line />
      <Text>RE-DISTRIBUTED TOHOLDERS: 5%</Text>
      <Line />
      <Text>LP  ACQUISITION : 5%</Text>
    </TextWrap>
  </TokenomicsStyled>
);

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  z-index: 3;
  margin-top: 4%;
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${Colors.White};
  height: 35px;
  margin: 0 3%;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${Colors.White};

  @media ${device.desktop} {
    font-size: 24px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: ${Colors.White};
  position: relative;
  z-index: 2;

  @media ${device.desktop} {
    font-size: 80px;
  }

  @media ${device.laptop} {
    font-size: 70px;
  }

  @media ${device.tablet} {
    font-size: 60px;
  }

  @media ${device.mobile} {
    font-size: 50px;
  }
`;

const TokenomicsStyled = styled.div`
  padding: 7% 5%;
  background-image: url("/assets/tokenomics-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(13.91deg, #390000 50.59%, rgba(57, 0, 0, 0.7) 96.75%);
  }
`;

export default Tokenomics;
