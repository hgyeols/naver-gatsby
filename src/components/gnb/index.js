import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Link from '../link';
import Loadable from 'react-loadable';
import config from '../../../config';
import LoadingProvider from '../mdxComponents/loading';
import { GNBStylesWrapper } from '../styles/GNBStyles';
import { MobileNavBar } from '../mobileNavBar';

const isSearchEnabled = config.gnb.search && config.gnb.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.gnb.search.indexName) {
  searchIndices.push({
    name: `${config.gnb.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

// const LoadableComponent = Loadable({
//   loader: () => import('./search/index'),
//   loading: LoadingProvider,
// });

// function mobileMenuClick() {
//   if (typeof document !== 'undefined') {
//     var x = document.getElementById('navbarMobile');
//     var y = document.getElementById('navbarDefault');

//     if (x.className === 'mobileLNB') {
//       x.className += ' responsive';
//     } else {
//       x.className = 'mobileLNB';
//     }
//   }
// }
const GNBUL = styled.ul`
  display: flex;
  align-items: center;

  li {
    list-style-type: none;
  }

  &:hover li a div {
    color: #919191;
  }

  li a div:hover {
    color: #fff;
  }
`;

const GNBdiv = styled.div`
  cursor: pointer;
  color: ${(props) =>
    props.first === -1 ? '#f3f3f3' : props.isActive ? '#f3f3f3 !important' : '#919191'};
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  margin: 0 16px;
  letter-spacing: -0.022em;

  &:hover {
    color: #f3f3f3;
  }
`;

const ClickItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
  active = -1,
}) => {
  return (
    <GNBdiv
      first={active}
      onClick={onItemClicked}
      isActive={isActive}
      className="sidebarLink displayInline"
    >
      {title}
    </GNBdiv>
  );
};

const GNB = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
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
  `);

  const {
    site: {
      siteMetadata: { titleLink, gnbTitle, gnbTitleTablet, gnbMenu },
    },
  } = data;

  const [active, setActive] = useState(-1);

  const finalLogoLink = titleLink !== '' ? titleLink : 'https://www.naver.com';
  return (
    <GNBStylesWrapper>
      <nav className="GNBDefault" id="navbarDefault">
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
            <GNBUL id="GNBid">
              {gnbMenu.map((menu, key) => {
                if (menu.text !== '' && menu.folderName !== '') {
                  return (
                    <li key={key}>
                      <Link to={`/${menu.folderName}/index`}>
                        <ClickItemComponent
                          key={key}
                          title={menu.text}
                          onItemClicked={() => setActive(key)}
                          isActive={active === key}
                          active={active}
                        />
                      </Link>
                    </li>
                  );
                }
              })}
            </GNBUL>
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
          <div className={'GNBTabletNavBar'}>
            <div
              className={'GNBheaderTitleTablet'}
              dangerouslySetInnerHTML={{ __html: gnbTitleTablet }}
            />
            <div className={'GNBTabletNavBarIcons'}>
              <div className={'GNBTabletNavBarSearchIcon displayInline'}>
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

              <div className={'GNBTabletNavBarMenuIcon displayInline'}>
                <MobileNavBar location={location} />
              </div>
            </div>
          </div>
        </div>

        <div className={'GNBMobileWrapper'}>
          <div className={'GNBTabletNavBar'}>
            <div
              className={'GNBheaderTitleMobile displayInline'}
              dangerouslySetInnerHTML={{ __html: gnbTitle }}
            />
            <div className={'GNBTabletNavBarIcons'}>
              <div className={'GNBTabletNavBarSearchIcon displayInline'}>
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
              <div className={'GNBTabletNavBarMenuIcon displayInline'}>
                <MobileNavBar location={location} />
              </div>
            </div>
          </div>
        </div>
        {/* {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile GNBUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null} */}
      </nav>
      {/* LNB (mobile) */}
      {/* <div id="navbarMobile" className={'mobileLNB'}>
        <div className={'visibleMobileOnly'}>
          <LNB location={location} />
        </div>
      </div> */}
    </GNBStylesWrapper>
  );
};

export default GNB;
