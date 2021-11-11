import React, { useCallback } from 'react';
import styled from 'styled-components';

import { IStatusItem, ISteps } from '@/containers/RoadMap';

import FullBatteryIcon from '@/components/icons/FullBatteryIcon';
import EmptyBatteryIcon from '@/components/icons/EmptyBatteryIcon';
import HalfBatteryIcon from '@/components/icons/HalfBatteryIcon';
import Colors from '@/utils/Colors';

interface Props {
  steps: ISteps[];
}

const Table: React.FC<Props> = ({ steps }) => {
  const icon = useCallback((status: IStatusItem): React.ReactNode => {
    switch (status) {
      case IStatusItem.Success:
        return <FullBatteryIcon />;
      case IStatusItem.Process:
        return <HalfBatteryIcon />;
      case IStatusItem.Pending:
        return <EmptyBatteryIcon />;
      default: return <FullBatteryIcon />;
    }
  }, [steps]);

  return (
    <TableStyled>
      {steps.map((column, i, arr) => (
        <Column count={arr.length} key={column.id}>
          {column.td.map(({ name, id, status }) => (
            <Td key={id}>
              <IconWrap>
                {icon(status)}
              </IconWrap>
              <Text>
                {name}
              </Text>
            </Td>
          ))}
        </Column>
      ))}
    </TableStyled>
  );
};

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  flex: 1;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
`;

const Td = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid ${Colors.Black};
  border-radius: 20px;
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
