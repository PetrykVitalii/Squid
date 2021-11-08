import React from 'react';
import styled from 'styled-components';

import { ISteps } from '@/containers/RoadMap';

interface Props {
  steps: ISteps[];
}

const Table: React.FC<Props> = ({ steps }) => (
  <TableStyled>
    {steps.map((column, i, arr) => (
      <Column count={arr.length} key={column.id}>
        {column.td.map(({ name, id }) => (
          <Td key={id}>{name}</Td>
        ))}
      </Column>
    ))}
  </TableStyled>
);

const Td = styled.div`
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 70px;
  text-align: center;
`;

const Column = styled.div<{ count: number }>`
  flex-basis: ${({ count }) => count && `calc(100% / ${count})`};
  padding: 20px;
  border-width: 3px;
  border-right-style: solid;
  border-image: linear-gradient(to bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)) 1 100%;

  :last-child {
    border-right-style: none;
  }
`;

const TableStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Table;
