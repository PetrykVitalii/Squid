/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import { ICard } from '@/containers/FirstTime';

import { Colors } from '@/utils/colors';
import { device } from '@/utils/responsiveDesign';

interface Props {
  card: ICard;
  backgroundNumber: number;
}

const Card: React.FC<Props> = ({ card, backgroundNumber }) => (
  <CardStyled>
    <LineWrap>
      <IconWrap>
        {card.icon}
      </IconWrap>
    </LineWrap>
    <InfoWrap>
      <Title>
        {card.title}
        {' '}
        <ColorTitle color={card.color}>{card.colorTitle}</ColorTitle>
      </Title>
      <SubText>
        {card.text}
      </SubText>
    </InfoWrap>
    <BackgroundNumber>{backgroundNumber}</BackgroundNumber>
  </CardStyled>
);

const ColorTitle = styled.span<{ color: string }>`
  color: ${({ color }) => (color || Colors.Black)};
`;

const BackgroundNumber = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  font-size: 350px;
  padding-top: 130px;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.2);
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
`;

const SubText = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  padding: 0 15px;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-image: linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,0.8),rgba(0,0,0,0)) 1;
  margin: 30px 0 15px;
  padding-bottom: 5px;
`;

const InfoWrap = styled.div`
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 110px;
  height: 110px;
`;

const LineWrap = styled.div`
  background: ${Colors.Red};
  box-shadow: 0px 4px 4px #000000;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardStyled = styled.div`
  flex-basis: 30%;
  min-height: 450px;
  background: ${Colors.White};
  box-shadow: 5px 5px 0px #840000;
  border-radius: 20px;
  margin-bottom: 50px;
  padding: 35px 0 20px;
  position: relative;
  transition: ease 0.3s;
  top: 0;
  left: 0;

  :hover {
    box-shadow: 10px 10px 0px #840000;
    left: -5px;
    top: -5px;
  }


  @media ${device.laptop} {
    flex-basis: 45%;
  }

  @media ${device.mobile} {
    flex-basis: 70%;
  }
`;

export default Card;
