import styled from '@emotion/styled';
import config from '../../../config.js';

export const GNBStylesWrapper = styled.div`
  .GNBDefault {
    background-color: #131313;
    border-radius: 0;
    margin-bottom: 0;
    border: 0;
    z-index: 89;
    position: fixed;
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

  .GNBUL:hover li a div {
    color: #919191 !important;
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
    /* text-transform: uppercase; */
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
    /* text-transform: uppercase; */
    margin-left: 20px;
  }

  .GNBheaderTitleTabletSVG {
    display: inline-block;
  }

  .GNBMobileWrapper {
    display: none;
    width: 100%;

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: block;
    }
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

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 20px var(--borderSpacing) 0 var(--borderSpacing);

    @media (min-width: 1024px) {
      padding-top: 50px;
    }

    @media (min-width: 1440px) {
      padding-top: 70px;
    }
  }

  .hamburger {
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }

    .bar {
      display: block;
      background-color: #fff;
      height: 2px;
      border-radius: 2px;

      &:nth-of-type(2) {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }

  .logo {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.5px;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    @media (min-width: 1024px) {
      font-size: 25px;
    }

    span {
      color: var(--primary);
    }

    &:hover,
    &:focus {
      a {
        color: var(--primary);
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .menu {
    background-color: #000;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      text-transform: capitalize;
      letter-spacing: -0.5px;
      font-size: 28px;

      @media (min-width: 375px) {
        font-size: 36px;
      }

      @media (min-width: 414px) {
        font-size: 40px;
      }

      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
      }

      span {
        color: var(--primary);
      }
    }
  }

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

    .GNBDefault {
      height: 64px;
      padding: 0;
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
