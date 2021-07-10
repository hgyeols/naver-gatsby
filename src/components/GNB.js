import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';
import LNB from './lnb';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { GNBStylesWrapper } from './styles/GNBStyles';

const isSearchEnabled = config.gnb.search && config.gnb.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.gnb.search.indexName) {
  searchIndices.push({
    name: `${config.gnb.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function mobileMenuClick() {
  if (typeof document !== 'undefined') {
    var x = document.getElementById('navbar');

    if (x.className === 'mobileLNB') {
      x.className += ' responsive';
    } else {
      x.className = 'mobileLNB';
    }
  }
}

const GNB = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            gnbTitle
            titleLink
            gnbTitleTablet
            gnbMenu {
              text
              folderName
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: { titleLink, gnbTitle, gnbTitleTablet, gnbMenu },
        },
      } = data;

      const finalLogoLink = titleLink !== '' ? titleLink : 'https://www.naver.com';
      return (
        <GNBStylesWrapper>
          <nav className={'GNBDefault'}>
            <div className={'GNBHeader hiddenTablet hiddenMobile'}>
              {/* GNB Title */}
              <Link to={finalLogoLink}>
                <div
                  className={'GNBheaderTitle displayInline'}
                  dangerouslySetInnerHTML={{ __html: gnbTitle }}
                />
              </Link>
              {/* GNB Menu */}
              <div className={'GNBNavWrapper'}>
                <ul className={'GNBUL GNBNav GNBULRight'}>
                  {gnbMenu.map((menu, key) => {
                    if (menu.text !== '' && menu.folderName !== '') {
                      return (
                        <li key={key}>
                          <Link to={`/${menu.folderName}/index`} activeClassName="active">
                            <div
                              className={'sidebarLink displayInline'}
                              dangerouslySetInnerHTML={{ __html: menu.text }}
                            />
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className={'GNBSearchIcon'}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22" cy="22" r="7.25" stroke="#E2E2E2" strokeWidth="1.5" />
                  <path
                    d="M32.4697 33.5303C32.7626 33.8232 33.2374 33.8232 33.5303 33.5303C33.8232 33.2374 33.8232 32.7626 33.5303 32.4697L32.4697 33.5303ZM26.4697 27.5303L32.4697 33.5303L33.5303 32.4697L27.5303 26.4697L26.4697 27.5303Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>
            </div>
            <div className={'GNBTabletNav'}>
              <div
                className={'GNBheaderTitleTablet displayInline'}
                dangerouslySetInnerHTML={{ __html: gnbTitleTablet }}
              />
              <div className={'GNBheaderTitleTabletSVG'}>
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 5L0.669872 0.5L9.33013 0.5L5 5Z" fill="#E2E2E2" />
                </svg>
              </div>
            </div>
            <div className={'GNBMobileWrapper'}>
              {/* Hamburger Button (Mobile) */}
              <div
                className={'GNBheaderTitleMobile displayInline'}
                dangerouslySetInnerHTML={{ __html: gnbTitle }}
              />
              <span
                onClick={mobileMenuClick}
                className={'mobileMenuButton'}
                onKeyDown={mobileMenuClick}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile GNBUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
          </nav>
          {/* LNB (mobile) */}
          <div id="navbar" className={'mobileLNB'}>
            <div className={'visibleMobileOnly'}>
              <LNB location={location} />
            </div>
          </div>
        </GNBStylesWrapper>
      );
    }}
  />
);

export default GNB;
