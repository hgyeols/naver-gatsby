import styled from '@emotion/styled';
import config from '../../../config.js';

export const GNBStylesWrapper = styled.div`
  .GNBDefault {
    background-color: #131313;
    border-radius: 0;
    margin-bottom: 0;
    border: 0;
    z-index: 1;
    position: relative;
    height: 72px;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .GNBHeader {
    margin-left: 26px;
    /* flex: 1 1; */
  }

  .GNBDefault,
  .GNBHeader {
    /* display: flex; */
    align-items: center;
  }

  .GNBNavWrapper {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .GNBUL {
    -webkit-overflow-scrolling: touch;
    display: flex;
    align-items: center;
  }

  .GNBUL:hover li a {
    color: #919191 !important;
  }

  .GNBUL li {
    list-style-type: none;
  }

  .GNBUL li a {
    color: #fff;
    font-family: 'SF Pro Text';
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin: 0 16px;
    letter-spacing: -0.022em;
  }

  .GNBUL li a.active {
    color: #fff !important;
  }

  .GNBUL:hover li a.active {
    color: #fff !important;
  }

  .GNBUL li a:hover {
    color: #fff !important;
  }

  .GNBUL li a.active:hover {
    color: #fff !important;
  }

  .GNBSearchIcon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0%, -50%);
    display: flex;
    align-items: center;
  }

  .GNBheaderTitle {
    font-family: 'SF Pro Display';
    height: auto;
    font-size: 22px;
    line-height: 22px;
    font-weight: 900;
    color: #f3f3f3 !important;
    text-transform: uppercase;
  }

  .GNBheaderTitle a {
    color: #f3f3f3;
  }

  .GNBheaderTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  .GNBheaderTitleTablet {
    display: inline-block;
    font-family: 'SF Pro Display';
    height: auto;
    font-size: 22px;
    line-height: 22px;
    font-weight: 900;
    color: #f3f3f3 !important;
    text-transform: uppercase;
    margin-left: 20px;
  }

  .GNBheaderTitleMobile {
    display: inline-block;
    font-family: 'SF Pro Display';
    height: auto;
    font-size: 22px;
    line-height: 22px;
    font-weight: 900;
    color: #f3f3f3 !important;
    text-transform: uppercase;
    position: absolute;
    left: 20px;
  }

  .GNBheaderTitleTabletSVG {
    display: inline-block;
  }

  .GNBMobileWrapper {
    display: none;
  }

  .GNBTabletNav {
    display: none;
    width: 100%;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      display: block;
    }
  }

  .GNBTabletNavBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .GNBTabletNavBarIcons {
    margin-right: 8px;

    .GNBTabletNavBarSearchIcon {
      margin-right: 4px;
    }

    .GNBTabletNavBarMenuIcon {
      svg {
        pointer-events: none;

        rect {
          pointer-events: auto;
          stroke: #fff;
          fill: #fff;
          fill-opacity: 0;
          stroke-opacity: 0;
        }
      }
    }
  }

  /* .mobileLNB {
    -webkit-transition: top 0.5s, bottom 0.5s;
  } */

  .mobileMenuButton {
    width: 48px;
    height: 48px;
    position: absolute;
    right: 8px;
    padding: 16px 0px;
    display: none;
    border-radius: 24px;
    background-color: #1f1f1f;
  }

  .mobileMenuButton .iconBar {
    display: block;
    width: 20px;
    height: 1.5px;
    border-radius: 1px;
    margin: 5px auto 0;
    background-color: #e2e2e2;
  }

  .mobileMenuButton .iconBar:first-of-type {
    margin-top: 0px;
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    .mobileLNB.responsive .visibleMobileOnly {
      display: block;
    }
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    .headerTitle {
      padding-right: 50px;
      font-size: 16px;
    }

    .GNBDefault {
      height: 64px;
      padding: 0;
    }

    .GNBMobileWrapper {
      display: flex;
      min-width: auto;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
    }

    .mobileLNB {
      display: block;
    }

    .mobileLNB .GNBUL {
      display: none;
    }

    .mobileLNB.responsive .visibleMobileOnly {
      display: block;
    }

    .mobileLNB.responsive .GNBUL {
      display: block;
      text-align: left;
    }

    .GNBUL {
      // display: flex;
      // align-items: center;
      // margin: 7.5px 0px;
    }

    .GNBUL li {
      height: 37px;
    }

    .GNBUL li a {
      font-size: 14px;
      padding: 10px 15px;
    }

    .mobileMenuButton {
      margin-right: 0;
      display: block;
      // position: absolute;
      // left: 11px;
      // top: 15px;
      // background: #fff;
    }

    .GNBHeader {
      display: flex;
      min-width: auto;
      padding-right: 0;
      align-items: center;
    }
  }
`;
