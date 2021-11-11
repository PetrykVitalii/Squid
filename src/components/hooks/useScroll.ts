import React from 'react';

export default () => {
  const [scrollTop, setScrollTop] = React.useState<number>(0);

  React.useEffect(() => {
    const current = document.querySelector('#root');

    if (!current) {
      return;
    }

    current.addEventListener('scroll', handleScrollChange.bind(current));
  }, []);

  React.useEffect(() => () => {
    const current = document.querySelector('#root');

    if (!current) {
      return;
    }

    current.removeEventListener('scroll', handleScrollChange);
  }, []);

  const handleScrollChange = (event: any) => {
    const element = event.target;
    setScrollTop(element.scrollTop);
  };

  return {
    scrollTop,
  };
};
