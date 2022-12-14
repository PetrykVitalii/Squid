import React from 'react';
import styled from 'styled-components';

import Video from '@/components/common/Video';
import Button from '@/components/common/Button';

import { Colors } from '@/utils/styles/colors';
import { device } from '@/utils/styles/responsiveDesign';

interface Props {
  handlePreSale: () => void;
}

const Header: React.FC<Props> = ({ handlePreSale }) => {
  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <HeaderStyled>
      <VideoContainer onClick={handleVideoClick}>
        <Video url="/assets/gif.mp4" />
      </VideoContainer>
      <ButtonWrapper>
        <Button onClick={handlePreSale}>Pre-Sale</Button>
      </ButtonWrapper>
    </HeaderStyled>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    bottom: 40px;
  }
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
