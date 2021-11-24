export interface IDeviceProps {
  largeDesktop: string;
  desktop: string;
  laptop: string;
  tablet: string;
  mobile: string;
}

export const vars = {
  screen_width: {
    largeDesktop: 1440,
    desktop: 1280,
    laptop: 1024,
    tablet: 720,
    mobile: 320,
  },
};

export const largeDesktop = `(min-width: ${vars.screen_width.largeDesktop}px)`;

export const desktop = `(max-width: ${vars.screen_width.largeDesktop - 1}px)`;

export const laptop = `(max-width: ${vars.screen_width.desktop - 1}px)`;

export const tablet = `(max-width: ${vars.screen_width.laptop - 1}px)`;

export const mobile = `(max-width: ${vars.screen_width.tablet - 1}px)`;

export const device: IDeviceProps = {
  largeDesktop,
  desktop,
  laptop,
  tablet,
  mobile,
};
