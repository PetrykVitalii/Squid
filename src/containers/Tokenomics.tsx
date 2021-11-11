import React from 'react';
import styled from 'styled-components';

import GraphIcon from '@/components/icons/GraphIcon';
import Colors from '@/utils/Colors';

interface Props {
}

const Tokenomics: React.FC<Props> = () => (
  <TokenomicsStyled>
    <Title>Tokenomics</Title>
    <IconWrap>
      <GraphIcon />
    </IconWrap>
  </TokenomicsStyled>
);

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 96px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: ${Colors.White};
`;

const TokenomicsStyled = styled.div`
  padding: 70px;
  background: linear-gradient(13.91deg, #390000 50.59%, rgba(57, 0, 0, 0.7) 96.75%);
`;

export default Tokenomics;
