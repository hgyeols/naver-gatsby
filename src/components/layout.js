import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import LNB from './lnb';
import RightSidebar from './rightSidebar';
import Footer from './footer'
import config from '../../config.js';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  // background: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const LNBside = styled('div')`
  width: 252px;
`;

const LNBoutside = styled('div')`
  display: block;
  flex-grow: 1;
`;

const Main = styled('div')`
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

const Content = styled('main')`
  display: flex;
  // flex-grow: 1;
  margin: 0px 60px;
  width: 828px;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 767px) {
    padding-top: 54px;
  }

  // @media only screen and (max-width: 1023px) {
  //   padding-left: 0;
  //   margin: 0 36px;
  // }
`;

const MaxWidth = styled('div')`
  width: 828px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    position: relative;
  }
`;

const RightSideBarSide = styled('div')`
  width: 224px;
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
