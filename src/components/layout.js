import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import LNB from './lnb';
import RightSidebar from './rightSidebar';
import Footer from './footer';
import config from '../../config.js';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  // background: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: ${config.responsive.mobileMax}px) {
    display: block;
  }
`;

const LNBside = styled('div')`
  width: ${config.responsive.LNBWidth}px;
  min-width: ${config.responsive.LNBWidth}px;
`;

const LNBoutside = styled('div')`
  display: block;
  flex-grow: 1;
`;

const Main = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Content = styled('main')`
  display: flex;
  // flex-grow: 1;
  padding: 0px 60px;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    width: 100%;
    padding: 0px 36px;
  }

  @media only screen and (max-width: ${config.responsive.mobileMax}px) {
    width: 100%;
    padding: 0px 20px;
  }
`;

const MaxWidth = styled('div')`
  width: ${config.responsive.maxWidth}px;

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    width: 100%;
  }

  @media only screen and (max-width: ${config.responsive.mobileMax}px) {
    width: 100%;
  }
`;

const RightSideBarSide = styled('div')`
  width: 228px;
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LNBside className={'hiddenMobile hiddenTablet'}>
          <LNB location={location} />
        </LNBside>
        <LNBoutside>
          <Main>
            <Content>
              <MaxWidth>{children}</MaxWidth>
            </Content>
            <RightSideBarSide className={'hiddenMobile hiddenTablet'}>
              <RightSidebar location={location} />
            </RightSideBarSide>
          </Main>
          <Footer />
        </LNBoutside>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
