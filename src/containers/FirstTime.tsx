import React from 'react';
import styled from 'styled-components';

import Card from '@/components/common/Card';

import Colors from '@/utils/Colors';

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
        <Card card={card} backgroundNumber={index + 1} />
      ))}
    </CardsWrap>
  </FirstTimeStyled>
);

const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5%;
`;

const SubTitle = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 53px;
  text-align: center;
  color: ${Colors.White};
  margin-bottom: 84px;
`;

const Title = styled.div`
  margin: 0 auto 10px;
  color: ${Colors.Red};
  font-size: 106px;
  font-weight: 400;
  border-bottom: 2px solid ${Colors.Red};
  width: min-content;
  white-space: nowrap;
`;

const FirstTimeStyled = styled.div`
  padding: 25px 70px 80px;
  background-color: ${Colors.Black};
`;

export default FirstTime;
