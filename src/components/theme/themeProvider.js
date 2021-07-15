import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';

import { firstTheme } from './index';
import GNB from '../gnb';
import { baseStyles } from '../styles/GlobalStyles';

class ThemeProvider extends React.Component {
  render() {
    const { children, location } = this.props;

    return (
      <div>
        <Global styles={[baseStyles]} />
        <GNB location={location} />
        <EmotionThemeProvider theme={firstTheme}>{children}</EmotionThemeProvider>
      </div>
    );
  }
}

export default ThemeProvider;
