import React from 'react';

import Colors from '@/utils/Colors';

const FullBatteryIcon: React.FC = () => (
  <svg
    width="60px"
    height="30px"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="battery-full"
    className="svg-inline--fa fa-battery-full fa-w-20"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill={Colors.Green}
      d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-48 96H96v128h416V192z"
    />
  </svg>
);

export default FullBatteryIcon;
