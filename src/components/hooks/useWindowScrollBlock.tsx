import { useLayoutEffect } from 'react';

export default (isActive: boolean) => {
  const root = document.querySelector('#root') as HTMLDivElement;
  const originalStyle = window.getComputedStyle(root).overflow;

  useLayoutEffect(() => {
    if (!isActive) {
      return () => {
        root.style.overflow = originalStyle;
      };
    }

    root.style.overflow = 'hidden';

    return () => {
      root.style.overflow = originalStyle;
    };
  }, [isActive]);
};
