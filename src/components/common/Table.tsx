import React, { useCallback } from 'react';
import styled from 'styled-components';

import { IStatusItem, ISteps } from '@/containers/RoadMap';

import FullBatteryIcon from '@/components/icons/FullBatteryIcon';
import EmptyBatteryIcon from '@/components/icons/EmptyBatteryIcon';
import HalfBatteryIcon from '@/components/icons/HalfBatteryIcon';

import { Colors, IStatusColor } from '@/utils/colors';
import { device, vars } from '@/utils/responsiveDesign';

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

  const color = useCallback((status: IStatusItem): IStatusColor => {
    switch (status) {
      case IStatusItem.Success:
        return {
          left: Colors.Green,
          right: Colors.Green,
          main: Colors.Green,
        };
      case IStatusItem.Process:
        return {
          left: Colors.Green,
          right: Colors.White,
          main: Colors.Yellow,
        };
      case IStatusItem.Pending:
        return {
          left: Colors.White,
          right: Colors.White,
          main: Colors.Red,
        };
      default: return {
        left: Colors.Green,
        right: Colors.Green,
        main: Colors.Green,
      };
    }
  }, [steps]);

  return (
    <TableStyled>
      <TableHead>
        {steps.map((column, i, arr) => (
          <HeadColumn count={arr.length} key={`head-${column.id}`}>
            <StatusWrap>
              <StatusIcon color={color(column.status).main}>
                {i + 1}
              </StatusIcon>
              <Line $colors={color(column.status)} />
            </StatusWrap>
            <HeadText>
              {column.name}
            </HeadText>
          </HeadColumn>
        ))}
      </TableHead>
      <TableMain>
        {steps.map((column, i, arr) => (
          <Column count={arr.length} key={`main-${column.id}`}>
            {column.td.map(({ name, id, status }) => (
              <TdWrap key={id}>
                <Td>
                  <IconWrap>
                    {icon(status)}
                  </IconWrap>
                  <Text>
                    {name}
                  </Text>
                </Td>
              </TdWrap>
            ))}
          </Column>
        ))}
      </TableMain>
    </TableStyled>
  );
};

const StatusIcon = styled.div<{ color: string }>`
  color: ${Colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  font-size: 64px;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 2;

  @media ${device.desktop} {
    width: 80px;
    height: 80px;
    font-size: 50px;
  }

  @media ${device.laptop} {
    width: 70px;
    height: 70px;
    font-size: 40px;
  }
`;

const HeadText = styled.div`
  font-size: 64px;
  font-weight: 500;
  text-align: center;
  color: ${Colors.White};

  @media ${device.desktop} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  flex: 1;

  @media ${device.desktop} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  margin: 0 10px 0;
`;

const TdWrap = styled.div`
  margin-bottom: 30px;
  width: 100%;
  min-height: 60px;
`;

const Td = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid ${Colors.Black};
  border-radius: 20px;
  padding: 5px;
`;

const Line = styled.div<{ $colors: IStatusColor }>`
  height: 4px;
  background: ${Colors.White};
  background: ${({ $colors }) => $colors && `linear-gradient(to right, ${$colors.left} 50%, ${$colors.right} 50%)`};
  position: absolute;
  top: calc(50% - 2px);
  left: 0;
  right: 0;
  z-index: 1;
`;

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const HeadColumn = styled.div<{ count: number }>`
  flex-basis: ${({ count }) => count && `calc(100% / ${count})`};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div<{ count: number }>`
  flex-basis: ${({ count }) => count && `calc(100% / ${count})`};
  padding: 50px 20px;
  border-width: 3px;
  border-right-style: solid;
  border-image: linear-gradient(to bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)) 1 100%;

  :last-child {
    border-right-style: none;
  }
`;

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.Black};
  width: 100%;
`;

const TableMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TableStyled = styled.div`
  min-width: ${`${vars.screen_width.laptop}px`};
  width: 100%;

  @media ${device.tablet} {
    max-width: ${`${vars.screen_width.laptop}px`};
  }
`;

export default Table;
