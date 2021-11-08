import React from 'react';
import styled from 'styled-components';

import Table from '@/components/common/Table';

import RoadMapIcon from '@/components/icons/RoadMapIcon';

import Colors from '@/utils/Colors';

export interface ITdData {
  name: string;
  id: string;
  isActive: boolean;
}

export interface ISteps {
  isActive: boolean;
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
      <IconWrap>
        <RoadMapIcon />
      </IconWrap>
    </Wrapper>
    <TableWrapper>
      <Table steps={steps} />
    </TableWrapper>
  </RoadMapStyled>
);

const TableWrapper = styled.div``;

const InfoWrap = styled.div``;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
`;

const Info = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 70px;
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const SelectedLetters = styled.span`
  color: ${Colors.Red};
`;

const RoadMapStyled = styled.div`
  padding: 20px;
`;

export default RoadMap;
