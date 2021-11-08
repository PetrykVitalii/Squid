import React from 'react';

export default (value: any) => {
  const [isScrollTop, setIsScrollTop] = React.useState<boolean>(true);
  const [isScrollBottom, setIsScrollBottom] = React.useState<boolean>(false);

  React.useEffect(() => {
    const current = value?.current;

    if (!current) {
      return;
    }

    current.addEventListener('scroll', handleScrollChange);
  }, [value]);

  React.useEffect(() => () => {
    const current = value?.current;

    if (!current) {
      return;
    }

    current.removeEventListener('scroll', handleScrollChange);
  }, []);

  const handleScrollChange = (event: any) => {
    const element = event.target;

    const hasReachedTop = element.scrollTop === 0;

    const hasReachedBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    setIsScrollTop(hasReachedTop);
    setIsScrollBottom(hasReachedBottom);
  };

  return {
    isScrollTop,
    isScrollBottom,
  };
};
