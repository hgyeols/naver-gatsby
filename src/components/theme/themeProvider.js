import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';

import { firstTheme } from './index';
import GNB from '../gnb';
import { baseStyles } from '../styles/GlobalStyles';

const ThemeProvider = ({ children, location }) => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <div>
      <Global styles={[baseStyles]} />
      {goingUp ? <GNB location={location} /> : null}

      <EmotionThemeProvider theme={firstTheme}>{children}</EmotionThemeProvider>
    </div>
  );
};

export default ThemeProvider;
