import React from 'react';
import styled from 'styled-components';

import Table from '@/components/common/Table';

import { Colors } from '@/utils/styles/colors';
import { device } from '@/utils/styles/responsiveDesign';

export enum IStatusItem {
  Success = 'success',
  Process = 'process',
  Pending = 'pending',
}

export interface ITdData {
  name: string;
  id: string;
  status: IStatusItem;
}

export interface ISteps {
  status: IStatusItem;
  name: string;
  id: string;
  td: ITdData[];
}

interface Props {
  steps: ISteps[];
}

const RoadMap: React.FC<Props> = ({ steps }) => (
  <RoadMapStyled>
    <Wrapper>
      <InfoWrap>
        <Title>
          R
          <SelectedLetters>o</SelectedLetters>
          admap
        </Title>
        <Info>
          Here is our sheet, which shows our current progress and future plans
          for the development and usefulness of the
          {' '}
          <SelectedLetters>SIU</SelectedLetters>
          {' '}
          token.
        </Info>
      </InfoWrap>
      <IconWrap src="/assets/men.png" />
    </Wrapper>
    <TableWrapper>
      <Table steps={steps} />
    </TableWrapper>
  </RoadMapStyled>
);

const TableWrapper = styled.div`
  @media ${device.tablet} {
    overflow-y: auto;
  }
`;

const InfoWrap = styled.div`
  flex: 1;
`;

const IconWrap = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2% 0 5%;
`;

const Info = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 70px;

  @media ${device.desktop} {
    font-size: 32px;
    line-height: 60px;
  }

  @media ${device.laptop} {
    font-size: 28px;
    line-height: 50px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 40px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 30px;
  }
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: 400;
  margin-bottom: 3%;

  @media ${device.desktop} {
    font-size: 80px;
  }

  @media ${device.laptop} {
    font-size: 70px;
  }

  @media ${device.tablet} {
    font-size: 55px;
  }

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const SelectedLetters = styled.span`
  color: ${Colors.Red};
`;

const RoadMapStyled = styled.div`
  padding: 20px 0;
  @media ${device.tablet} {
    padding-bottom: 0;
  }
`;

export default RoadMap;
