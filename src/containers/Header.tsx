import React from 'react';
import styled from 'styled-components';

import Video from '@/components/common/Video';
import Button from '@/components/common/Button';

import { Colors } from '@/utils/colors';

interface Props {
  handlePreSale: () => void;
}

const Header: React.FC<Props> = ({ handlePreSale }) => (
  <HeaderStyled>
    <VideoContainer>
      <Video url="/assets/gif.mp4" />
    </VideoContainer>
    <ButtonWrapper>
      <Button onClick={handlePreSale}>Pre-Sale</Button>
    </ButtonWrapper>
  </HeaderStyled>
);

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoContainer = styled.div`
  width: 100%;
`;

const HeaderStyled = styled.div`
  width: 100%;
  position: relative;
  background-color: ${Colors.Black};
`;

export default Header;
