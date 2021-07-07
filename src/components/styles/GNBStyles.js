import styled from '@emotion/styled';

export const GNBStylesWrapper = styled.div`
  
  .GNBDefault {
    background-color: #131313;
    border-radius: 0;
    // border-top: 0;
    margin-bottom: 0;
    border: 0;
    z-index: 1;
    padding: 0 24px;
    position: relative;
    height: 72px;
  }

  .GNBHeader {
    min-width: 335px;
    flex: 1 1;
  }

  .GNBDefault,.GNBHeader {
    display: flex;
    align-items: center;
  }

  .GNBNav {
    display: flex;
    align-items: center;
    padding: 0 60px;
  }

  .GNBUL {
    -webkit-overflow-scrolling: touch;
  }

  .GNBUL:hover li a {
    color: #919191 !important;
  }

  .GNBULRight {
    /* position: absolute;
    right: 30px; */
  }

  .GNBUL li {
    list-style-type: none;
  }

  .GNBUL li a {
    color: #fff !important;
    font-family: 'SF Pro Text';
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    margin: 0 16px;
    letter-spacing: -0.022em;

  }

  .GNBUL li a.active {
    border-bottom: 2px solid #fff;
  }

  .GNBUL:hover li a.active {
    border-bottom: 2px solid #919191;
  }

  .GNBUL li a:hover {
    color: #fff !important;
  }

  .GNBUL li a.active:hover {
    border-bottom: 2px solid #fff;
  }
  
  .GNBheaderTitle {
    font-family: 'SF Pro Display';
    height: auto;
    font-size: 22px;
    line-height: 22px;
    font-weight: 900;
    color: #fff !important;
    text-transform: uppercase;
  }

  .GNBheaderTitle a {
    color: #fff;
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
    color: #fff !important;
    text-transform: uppercase;
  }

  .GNBheaderTitleMobile {
    display: inline-block;
    font-family: 'SF Pro Display';
    height: auto;
    font-size: 22px;
    line-height: 22px;
    font-weight: 900;
    color: #fff !important;
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
    min-width: 135px;
    width: 100%;
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
  
  @media (max-width: 599px) {

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

    .GNBULRight {
      position: static;
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

  @media (min-width: 600px) and (max-width: 1151px) {

    .GNBDefault {
      padding: 0 20px;
    }

    .GNBTabletNav {
      display: block;
    }
  }

`;

