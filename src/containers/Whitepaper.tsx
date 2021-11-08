import React from 'react';
import styled from 'styled-components';

import CardIcon from '@/components/icons/CardIcon';

import Colors from '@/utils/Colors';

const Whitepaper: React.FC = () => (
  <WhitepaperStyled>
    <Title>HOME</Title>
    <Article>
      <SubTitleReverse>SIU Mission</SubTitleReverse>
      <TextReverse>
        Squid Inu Universe was created as a fun way to introduce the world to
        blockchain technology and the gaming built on it. Many of the original
        team members met in the different Blockchain gaming communities trying
        out the different experiences offered by the market. They soon started
        working on a game that introduces competitiveness and profit for play.
        The initial concept of the game has been modified bringing it to the
        theme expressed by the Squid Game series, expanding the experience on
        Blockchain technology to billions of players.
      </TextReverse>
    </Article>
    <Article>
      <SubTitle>In the Future</SubTitle>
      <Text>
        In the world of tomorrow, playing will not be just fun, it will also
        have a profit behind it. This will give players a pleasant gaming
        experience, with moments of rivalry and moments of common sharing for
        the growth of the Squid Inu Universe. Above all, we dream that this
        experience can change the situation of many people around the world.
        Welcome to our common universe!
      </Text>
    </Article>
    <CardIconWrap>
      <CardIcon />
    </CardIconWrap>
  </WhitepaperStyled>
);

const CardIconWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Title = styled.div`
  filter: drop-shadow(0px 4px 1px rgba(243, 0, 0, 0.2));
  border-left: 7px solid #F90A0A;
  border-bottom: 7px solid #F90A0A;
  font-size: 96px;
  color: ${Colors.Red};
  font-weight: 400;
  width: min-content;
  padding: 0 20px;
  margin-left: 30px;
`;

const SubTitle = styled.div`
  border-bottom: 2px solid #FBFAFA;
  width: min-content;
  color: ${Colors.White};
  margin-bottom: 50px;
  font-size: 88px;
  font-weight: 500;
  white-space: nowrap;
`;

const SubTitleReverse = styled(SubTitle)`
  margin-left: auto;
`;

const Text = styled.div`
  color: ${Colors.White};
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;
  width: 70%;
  line-height: 62px;
`;

const TextReverse = styled(Text)`
  margin-left: auto;
  text-align: right;
`;

const Article = styled.article`
`;

const WhitepaperStyled = styled.div`
  padding: 100px 80px 50px;
  background-color: ${Colors.Black};
  position: relative;
`;

export default Whitepaper;
