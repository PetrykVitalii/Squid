import React from 'react';
import styled from 'styled-components';

import { Colors } from '@/utils/styles/colors';
import { device } from '@/utils/styles/responsiveDesign';

interface Props {
}

const Home: React.FC<Props> = () => (
  <HomeStyled>
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
    <CardIconWrap src="/assets/card.png" />
  </HomeStyled>
);

const CardIconWrap = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  object-fit: contain;
`;

const Title = styled.div`
  filter: drop-shadow(0px 4px 1px rgba(243, 0, 0, 0.2));
  border-left: 8px solid #F90A0A;
  border-bottom: 8px solid #F90A0A;
  font-size: 96px;
  color: ${Colors.Red};
  font-weight: 700;
  width: min-content;
  padding: 0 20px;
  margin-left: 30px;
  margin-bottom: 2%;

  @media ${device.desktop} {
    font-size: 80px;
    border-width: 6px;
  }

  @media ${device.laptop} {
    font-size: 70px;
    border-width: 5px;
  }

  @media ${device.tablet} {
    font-size: 60px;
    border-width: 4px;
  }

  @media ${device.mobile} {
    font-size: 40px;
    border-width: 3px;
  }
`;

const SubTitle = styled.div`
  border-bottom: 2px solid #FBFAFA;
  width: min-content;
  color: ${Colors.White};
  margin-bottom: 4%;
  font-size: 88px;
  font-weight: 500;
  white-space: nowrap;

  @media ${device.desktop} {
    font-size: 70px;
  }

  @media ${device.laptop} {
    font-size: 60px;
  }

  @media ${device.tablet} {
    font-size: 50px;
  }

  @media ${device.mobile} {
    font-size: 30px;
  }
`;

const SubTitleReverse = styled(SubTitle)`
  margin-left: auto;
`;

const Text = styled.div`
  color: ${Colors.White};
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 6%;
  width: 70%;
  line-height: 62px;

  @media ${device.desktop} {
    font-size: 35px;
    width: 75%;
    line-height: 55px;
  }

  @media ${device.laptop} {
    font-size: 30px;
    width: 80%;
    line-height: 50px;
  }

  @media ${device.tablet} {
    font-size: 25px;
    width: 85%;
    line-height: 45px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    width: 90%;
    line-height: 40px;
  }
`;

const TextReverse = styled(Text)`
  margin-left: auto;
  text-align: right;
`;

const Article = styled.article`
  position: relative;
  z-index: 2;
`;

const HomeStyled = styled.div`
  padding: 6% 5% 3%;
  position: relative;
  background-image: url("/assets/home-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${Colors.Black};
`;

export default Home;
