/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import Colors from '@/utils/Colors';

const Whitepaper: React.FC = () => (
  <WhitepaperStyled>
    <Block>
      <Title>Whitepaper</Title>
      <Text align="center">
        <MarkedText>Squid Inu Universe</MarkedText>
        {' '}
        is a universe, inspired by the
        popular SquidGame TV series, in which anyone can earn tokens through
        dynamic gameplay and contribute to the ecosystem. Players can compete with
        other challengers, earn NFTs, and build maps to receive income from their
        use by the community. All of Squid Inu Universe's artistic and genetic
        resources are accessible to participants, allowing the community to create
        their own maps and experiences in the game. Squid Inu Universe is a fun
        game, but it also has the characteristics of a social network and a
        working platform thanks to the interaction of the participants and gives
        the player an opportunity to generate income from a pastime. The game will
        be based on the Blockchain design, it is used to reward players for their
        contributions to the ecosystem and their gameplay skills. This new game
        model has been dubbed "play to earn". Squid Inu Universe wants to allow
        thousands of players from different countries to come together in a
        community and at the same time generate a revenue stream, deriving from
        fun and not from a monotonous process. This is a game suitable for all
        people, even those who have never used the Blockchain before!
      </Text>
    </Block>
    <Block>
      <SubTitle>How to earn in Squid Inu Universe</SubTitle>
      <Text>
        <Paragraph>
          <MarkedText>Compete in PVP battles!</MarkedText>
        </Paragraph>
      </Text>
      <Text>
        This is “until the end” made up of 456 participants divided into 4 groups
        of 114 players. Each group will have to undergo 6 tests before reaching
        final test number 7. At the end of each of the 6 challenges, the group of
        114 participants will see the elimination of the last 19 players. Only the
        best 19 players of the 4 groups will reach the final challenge, these 76
        finalists will compete to reach the top 10 and win rewards based on their
        placement.
      </Text>
      <Text>
        <Paragraph>
          <MarkedText>Create your own maps and rent them!</MarkedText>
        </Paragraph>
      </Text>
      <Text>
        These will be used by the community to compete in the game "until the end"
        or "the predatory clock" a timed challenge designed to bring more
        interaction between community members. The creation of the maps will
        require a coin staking (SIU) to own the track, on the other hand the
        revenues deriving from the maps will be taken as a percentage of the
        participation fees of the players who will use your ideas (they will be
        distributed in SIU tokens).
      </Text>
      <Text>
        <Paragraph>
          <MarkedText>Launch and try your luck with "business cards"!</MarkedText>
        </Paragraph>
      </Text>
      <Text>
        There will be a special marketplace where it will be possible to redeem
        business cards using the SIU token, inside them there will be fantastic
        prizes. You can even earn NFTs, by collecting them and speculating on
        them, with the possibility of finding common, rare and special ones (such
        as 001, 456 and the Front Man) that can be sold on the BSC marketplace
        with substantial rewards.
      </Text>
      <Text>
        <WeightText>
          As participants can earn this token by playing, a rewarding mission
          emerges where they can actually earn part of the universe. However, the
          challenge ends with not only the winner taking it all, but rewarding the
          final top 10 players.
        </WeightText>
      </Text>
    </Block>
    <Block>
      <SubTitle alignRight>The Competitive</SubTitle>
      <CompetitiveBlock align="right">
        The game has a competitive nature and based on subjective skills, the
        Squid Inu Universe combat system is perfectly suited to competitive and
        Esport play. This is a fundamental aspect for future development given the
        immense commitment that people show when there are big prizes up for
        grabs.Squid Inu Universe players are prone to earning large amount of
        money, this will lead the game to enter in the radar of many of the most
        famous competitive groups in the Esports world.
      </CompetitiveBlock>
    </Block>
    <Block>
      <SubTitle alignRight>Management of monetary flows</SubTitle>
      <Text>
        <MarkedText>
          <Paragraph>Squid Inu Universe</Paragraph>
        </MarkedText>
        {' '}
        is meant for a real money economy. The game's developers are focused on
        the growth of the economy by the players. SIU token holders are allowed to
        compete in the "until the end", in the creation of maps and in the launch
        of "business cards" to receive income.
      </Text>
      <Text>
        To maintain an ideal inflation rate in the Squid Inu Universe, a sporadic
        insertion of liquidity is dropped taken from stocks (SIU) blocked since
        creation to allow the healthy growth of the system. Doing so will avoid
        prices that are too high for ordinary people to join.
      </Text>
    </Block>
    <Block>
      <SubTitle>Growth using the strength of the network</SubTitle>
      <Text>
        <Paragraph>
          In the beginning, the Squid Inu Universe economy will depend on growth
          and new players. New players need SIU to get started, SIU price and
          profitability of created maps will be determined by players demand.
          However, as the size of the network grows, there will be new sources of
          outside capital to keep the rewards competitive and motivating. It is
          also important to note that many players will see Squid Inu Universe as
          a fun game and a chance to meet new people and friends. Our vision is
          that most players prefer the fun in the gameplay and the warm of the
          community over the payback that comes with the game. These people will
          value the fun and relationships created through Squid Inu Universe,
          values that matter far more than any potential gain, making the system
          stronger in the long run.
        </Paragraph>
      </Text>
      <Text>
        <Paragraph>
          <MarkedText>
            During their stay, players will be able to perceive other values such
            as:
          </MarkedText>
        </Paragraph>
      </Text>
      <Text>• Values of friendship and support.</Text>
      <Text>• Fun and carefree.</Text>
      <Text>• New knowledge and create relationships within the community.</Text>
      <Text>• Learn to use an important new technology.</Text>
    </Block>
    <Block>
      <SubTitle alignRight>
        <MarkedText>
          Why play?
        </MarkedText>
      </SubTitle>
      <HalfSizeText align="right">
        A game needs players, members add value to the community and they will be
        rewarded for it. We are looking for people who want to contribute to the
        growth of modern society and we are happy to be able to reward those who
        will contribute to the expansion of the world of Blockchain games. Ours is
        a young revolution but we are sure that thanks to the collaboration
        between you and us this great technology will spread rapidly.
      </HalfSizeText>
    </Block>
  </WhitepaperStyled>
);

const Block = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.div<{ align?: 'center' | 'right' }>`
  text-align: ${({ align }) => align && align};
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
`;

const HalfSizeText = styled(Text)`
  width: 80%;
  margin-left: auto;
`;

const CompetitiveBlock = styled(Text)`
  margin-left: auto;
  margin-right: -80px;
  width: 80%;
  background-color: ${Colors.Black};
  color: ${Colors.White};
  padding: 5px 80px 5px 30px;
  border-radius: 45px;
`;

const Paragraph = styled.span`
  padding-left: 20px;
`;

const WeightText = styled.span`
  font-weight: 900;
`;

const MarkedText = styled.span`
  color: ${Colors.Red};
`;

const SubTitle = styled.div<{ alignRight?: boolean }>`
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  margin: 30px 0;
  margin-left: ${({ alignRight }) => alignRight && 'auto'};
  width: min-content;
  border-bottom: 3px solid ${Colors.Black};
  white-space: nowrap;
`;

const Title = styled.div`
  font-size: 97px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0px -15px ${Colors.LightGrey};
`;

const WhitepaperStyled = styled.div`
  padding: 100px 80px 50px;
  background-color: ${Colors.Gray};
  display: flex;
  flex-direction: column;
`;

export default Whitepaper;
