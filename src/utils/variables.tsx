/* eslint-disable import/prefer-default-export */
import React from 'react';

import { ICard } from '@/containers/FirstTime';
import { ISteps } from '@/containers/RoadMap';

import FoxIcon from '@/components/icons/FoxIcon';

import Colors from '@/utils/Colors';

export const steps: ISteps[] = [
  {
    name: 'Step1',
    id: 'Step1',
    isActive: false,
    td: [
      {
        name: 'Website launch',
        id: 'Website launch',
        isActive: false,
      },
      {
        name: 'Launch of all social networks',
        id: 'Launch of all social networks',
        isActive: false,
      },
      {
        name: 'Start marketing',
        id: 'Start marketing',
        isActive: false,
      },
      {
        name: 'Community development',
        id: 'Community development',
        isActive: false,
      },
      {
        name: 'Squid Game gadget contest',
        id: 'Squid Game gadget contest',
        isActive: false,
      },
    ],
  },
  {
    name: 'Step2',
    id: 'Step2',
    isActive: false,
    td: [
      {
        name: 'Pre Sale',
        id: 'Pre Sale',
        isActive: false,
      },
      {
        name: '456 Holders',
        id: '456 Holders',
        isActive: false,
      },
      {
        name: 'Advanced marketing',
        id: 'Advanced marketing',
        isActive: false,
      },
      {
        name: 'Distribution of NFT holders awards',
        id: 'Distribution of NFT holders awards',
        isActive: false,
      },
    ],
  },
  {
    name: 'Step3',
    id: 'Step3',
    isActive: false,
    td: [
      {
        name: '4560 Holders',
        id: '4560 Holders',
        isActive: false,
      },
      {
        name: 'List on pancakeswap',
        id: 'List on pancakeswap',
        isActive: false,
      },
      {
        name: 'Push Influencer Marketing',
        id: 'Push Influencer Marketing',
        isActive: false,
      },
      {
        name: 'Announcements and Promotions',
        id: 'Announcements and Promotions',
        isActive: false,
      },
      {
        name: 'Spoiler 2 game maps',
        id: 'Spoiler 2 game maps',
        isActive: false,
      },
    ],
  },
  {
    name: 'Step4',
    id: 'Step4',
    isActive: false,
    td: [
      {
        name: '18240 Holders',
        id: '18240 Holders',
        isActive: false,
      },
      {
        name: 'CoinGecko Listing',
        id: 'CoinGecko Listing',
        isActive: false,
      },
      {
        name: 'Swap',
        id: 'Swap',
        isActive: false,
      },
      {
        name: 'Burn',
        id: 'Burn',
        isActive: false,
      },
      {
        name: 'NFT creation',
        id: 'NFT creation',
        isActive: false,
      },
      {
        name: 'Airdrop for extraction among holders',
        id: 'Airdrop for extraction among holders',
        isActive: false,
      },
    ],
  },
  {
    name: 'Step5',
    id: 'Step5',
    isActive: false,
    td: [
      {
        name: '45600 Holders',
        id: '45600 Holders',
        isActive: false,
      },
      {
        name: 'Recruitment of collaborators',
        id: 'Recruitment of collaborators',
        isActive: false,
      },
      {
        name: 'Conclusion of the other maps',
        id: 'Conclusion of the other maps',
        isActive: false,
      },
      {
        name: 'Staking',
        id: 'Staking',
        isActive: false,
      },
      {
        name: 'Game preview for lucky holders',
        id: 'Game preview for lucky holders',
        isActive: false,
      },
      {
        name: 'NFT Lottery Program',
        id: 'NFT Lottery Program',
        isActive: false,
      },
    ],
  },
];

export const cards: ICard[] = [
  {
    icon: <FoxIcon />,
    title: 'Download',
    colorTitle: 'Metamask',
    color: Colors.Red,
    text: "Go to Metamask and load the app. Follow the in-app-tutorial, log in and get started. Don't forget to write down your private pass-phrase (don't lose it!).",
  },
  {
    icon: <FoxIcon />,
    title: 'Buy',
    colorTitle: 'BNB',
    color: Colors.Yellow,
    text: 'Get some BNB at your preferred exchange.',
  },
  {
    icon: <FoxIcon />,
    title: 'Transfer to',
    colorTitle: 'Metamask',
    color: Colors.Green,
    text: 'Copy your Metamask address and transfer BNB to your wallet.',
  },
  {
    icon: <FoxIcon />,
    title: 'Connect to',
    colorTitle: 'PANCAKESWAP',
    color: Colors.Blue,
    text: 'Find the official SIU contract address here (copy contract on top right corner) and connect your wallet to Pancakeswap',
  },
  {
    icon: <FoxIcon />,
    title: '',
    colorTitle: 'Swap',
    color: Colors.Pink,
    text: 'Select From bnb to paste in official SIU contract adress and click import. Put in the BNB-amount you wish to swap.Make sure you got enough BNB for the transaction fee (set slip 13%).',
  },
  {
    icon: <FoxIcon />,
    title: 'Add',
    colorTitle: 'liquidity',
    color: Colors.Aqua,
    text: 'If you wish, add liquidity to the BNB-SIU pair on Pancakeswap.',
  },
];
