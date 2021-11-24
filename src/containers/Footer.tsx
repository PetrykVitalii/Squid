import React from 'react';
import styled from 'styled-components';

import InstagramIcon from '@/components/icons/InstagramIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import TikTokIcon from '@/components/icons/TikTokIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

import { Colors } from '@/utils/colors';
import { device } from '@/utils/responsiveDesign';

const Footer: React.FC = () => (
  <FooterStyled>
    <Text>Join our community</Text>
    <Icons>
      <IconHoverWrap href="https://www.instagram.com/squidinuuniverse" target="_blank">
        <IconWrap>
          <InstagramIcon />
        </IconWrap>
      </IconHoverWrap>
      <IconHoverWrap href="https://vm.tiktok.com/ZSekVTUR7/" target="_blank">
        <IconWrap>
          <TikTokIcon />
        </IconWrap>
      </IconHoverWrap>
      <IconHoverWrap href="https://twitter.com/squid_inu?s=11" target="_blank">
        <IconWrap>
          <TwitterIcon />
        </IconWrap>
      </IconHoverWrap>
      <IconHoverWrap href="https://t.me/squidinuuniverse" target="_blank">
        <IconWrap>
          <TelegramIcon />
        </IconWrap>
      </IconHoverWrap>
    </Icons>
  </FooterStyled>
);

const IconWrap = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconHoverWrap = styled.a`
  cursor: pointer;
  margin-left: 55px;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: linear-gradient(141.62deg, #5D12FE 17.88%, #FE124B 86.06%);
  }

  @media ${device.tablet} {
    margin-left: 20px;
    :first-child {
      margin-left: 0;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 48px;
  font-weight: 400;
  color: ${Colors.White};
  white-space: nowrap;
`;

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 75px;
  box-shadow: 0px -10px 20px 0px rgba(104, 0, 0, 1);
  background: linear-gradient(125.04deg, #FF0F0F 28.38%, #FF003D 45.63%, #FD4470 64.4%);

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export default Footer;
