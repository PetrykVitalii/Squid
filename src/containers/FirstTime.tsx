import React from 'react';
import styled from 'styled-components';

import Card from '@/components/common/Card';

import { Colors } from '@/utils/styles/colors';
import { device } from '@/utils/styles/responsiveDesign';

export interface ICard {
  icon: React.ReactElement;
  title: string;
  colorTitle: string;
  color: string;
  text: string;
}

interface Props {
  cards: ICard[];
}

const FirstTime: React.FC<Props> = ({ cards }) => (
  <FirstTimeStyled>
    <Title>First time?</Title>
    <SubTitle>This is a step by step instruction on how to buy SIU with Metamask.</SubTitle>
    <CardsWrap>
      {cards.map((card, index) => (
        <Card card={card} key={index} backgroundNumber={index + 1} />
      ))}
    </CardsWrap>
  </FirstTimeStyled>
);

const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.mobile} {
    justify-content: center;
  }
`;

const SubTitle = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 50px;
  text-align: center;
  color: ${Colors.White};
  margin-bottom: 5%;

  @media ${device.desktop} {
    font-size: 32px;
  }

  @media ${device.laptop} {
    font-size: 28px;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const Title = styled.div`
  margin: 0 auto 10px;
  color: ${Colors.Red};
  font-size: 106px;
  font-weight: 400;
  border-bottom: 2px solid ${Colors.Red};
  width: min-content;
  white-space: nowrap;

  @media ${device.desktop} {
    font-size: 90px;
  }

  @media ${device.laptop} {
    font-size: 80px;
  }

  @media ${device.tablet} {
    font-size: 60px;
  }

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const FirstTimeStyled = styled.div`
  padding: 25px 5% 4%;
  background-color: ${Colors.Black};
`;

export default FirstTime;
