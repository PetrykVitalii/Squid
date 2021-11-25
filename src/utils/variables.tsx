/* eslint-disable import/prefer-default-export */
import React from 'react';

import { ICard } from '@/containers/FirstTime';
import { IStatusItem, ISteps } from '@/containers/RoadMap';

import FoxIcon from '@/components/icons/CardsIcon/FoxIcon';

import { Colors } from '@/utils/styles/colors';
import BnbIcon from '@/components/icons/CardsIcon/BnbIcon';
import TransferIcon from '@/components/icons/CardsIcon/TransferIcon';
import CuteIcon from '@/components/icons/CardsIcon/CuteIcon';
import SwapIcon from '@/components/icons/CardsIcon/SwapIcon';
import MoneyIcon from '@/components/icons/CardsIcon/MoneyIcon';

export const steps: ISteps[] = [
  {
    name: 'Step 1',
    id: 'Step1',
    status: IStatusItem.Success,
    td: [
      {
        name: 'Website launch',
        id: 'Website launch',
        status: IStatusItem.Success,
      },
      {
        name: 'Launch of all social networks',
        id: 'Launch of all social networks',
        status: IStatusItem.Success,
      },
      {
        name: 'Start marketing',
        id: 'Start marketing',
        status: IStatusItem.Success,
      },
      {
        name: 'Community development',
        id: 'Community development',
        status: IStatusItem.Success,
      },
      {
        name: 'Squid Game gadget contest',
        id: 'Squid Game gadget contest',
        status: IStatusItem.Success,
      },
    ],
  },
  {
    name: 'Step 2',
    id: 'Step2',
    status: IStatusItem.Success,
    td: [
      {
        name: 'Pre Sale',
        id: 'Pre Sale',
        status: IStatusItem.Success,
      },
      {
        name: '456 Holders',
        id: '456 Holders',
        status: IStatusItem.Success,
      },
      {
        name: 'Advanced marketing',
        id: 'Advanced marketing',
        status: IStatusItem.Success,
      },
      {
        name: 'Distribution of NFT holders awards',
        id: 'Distribution of NFT holders awards',
        status: IStatusItem.Success,
      },
    ],
  },
  {
    name: 'Step 3',
    id: 'Step3',
    status: IStatusItem.Process,
    td: [
      {
        name: '4560 Holders',
        id: '4560 Holders',
        status: IStatusItem.Process,
      },
      {
        name: 'List on pancakeswap',
        id: 'List on pancakeswap',
        status: IStatusItem.Process,
      },
      {
        name: 'Push Influencer Marketing',
        id: 'Push Influencer Marketing',
        status: IStatusItem.Process,
      },
      {
        name: 'Announcements and Promotions',
        id: 'Announcements and Promotions',
        status: IStatusItem.Process,
      },
      {
        name: 'Spoiler 2 game maps',
        id: 'Spoiler 2 game maps',
        status: IStatusItem.Process,
      },
    ],
  },
  {
    name: 'Step 4',
    id: 'Step4',
    status: IStatusItem.Pending,
    td: [
      {
        name: '18240 Holders',
        id: '18240 Holders',
        status: IStatusItem.Pending,
      },
      {
        name: 'CoinGecko Listing',
        id: 'CoinGecko Listing',
        status: IStatusItem.Pending,
      },
      {
        name: 'Swap',
        id: 'Swap',
        status: IStatusItem.Pending,
      },
      {
        name: 'Burn',
        id: 'Burn',
        status: IStatusItem.Pending,
      },
      {
        name: 'NFT creation',
        id: 'NFT creation',
        status: IStatusItem.Pending,
      },
      {
        name: 'Airdrop for extraction among holders',
        id: 'Airdrop for extraction among holders',
        status: IStatusItem.Pending,
      },
    ],
  },
  {
    name: 'Step 5',
    id: 'Step5',
    status: IStatusItem.Pending,
    td: [
      {
        name: '45600 Holders',
        id: '45600 Holders',
        status: IStatusItem.Pending,
      },
      {
        name: 'Recruitment of collaborators',
        id: 'Recruitment of collaborators',
        status: IStatusItem.Pending,
      },
      {
        name: 'Conclusion of the other maps',
        id: 'Conclusion of the other maps',
        status: IStatusItem.Pending,
      },
      {
        name: 'Staking',
        id: 'Staking',
        status: IStatusItem.Pending,
      },
      {
        name: 'Game preview for lucky holders',
        id: 'Game preview for lucky holders',
        status: IStatusItem.Pending,
      },
      {
        name: 'NFT Lottery Program',
        id: 'NFT Lottery Program',
        status: IStatusItem.Pending,
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
    icon: <BnbIcon />,
    title: 'Buy',
    colorTitle: 'BNB',
    color: Colors.Yellow,
    text: 'Get some BNB at your preferred exchange.',
  },
  {
    icon: <TransferIcon />,
    title: 'Transfer to',
    colorTitle: 'Metamask',
    color: Colors.Green,
    text: 'Copy your Metamask address and transfer BNB to your wallet.',
  },
  {
    icon: <CuteIcon />,
    title: 'Connect to',
    colorTitle: 'PANCAKESWAP',
    color: Colors.Blue,
    text: 'Find the official SIU contract address here (copy contract on top right corner) and connect your wallet to Pancakeswap',
  },
  {
    icon: <SwapIcon />,
    title: '',
    colorTitle: 'Swap',
    color: Colors.Pink,
    text: 'Select From bnb to paste in official SIU contract adress and click import. Put in the BNB-amount you wish to swap.Make sure you got enough BNB for the transaction fee (set slip 13%).',
  },
  {
    icon: <MoneyIcon />,
    title: 'Add',
    colorTitle: 'liquidity',
    color: Colors.Aqua,
    text: 'If you wish, add liquidity to the BNB-SIU pair on Pancakeswap.',
  },
];
