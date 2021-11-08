import React from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface Props extends ReactPlayerProps {
  url: string;
}

const Video: React.FC<Props> = ({ url, ...props }) => (
  <ReactPlayer
    playing
    loop
    muted
    url={url}
    width="100%"
    height="auto"
    {...props}
  />
);

export default Video;
