import { css } from '@emotion/react';
import config from '../../../config.js';

export const baseStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #f3f3f3;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #f3f3f3;
  }

  ::placeholder {
    color: #f3f3f3;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'SF Pro Text',
      'SF Pro Display', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    scroll-behavior: smooth;
  }

  a:link {
    text-decoration: none;
    color: #424242;
  }

  a:visited {
    text-decoration: none;
    color: #424242;
  }

  a:hover {
    text-decoration: none;
    color: #424242;
  }

  a:active {
    text-decoration: none;
    color: #424242;
  }

  body {
    font-family: 'Apple SD Gothic Neo' 'SF Pro Text', 'SF Pro Display';
  }

  div {
    margin: 0;
    padding: 0;
  }

  .visibleMobileOnly {
    display: none;
  }

  .displayInline {
    display: inline-block;
  }

  pre {
    font-family: 'IBM Plex Mono', monospace;
    border: 0;
    background-color: #131313 !important;
    white-space: pre-wrap;
    margin: 0px;
  }

  .removePadd {
    padding: 0 !important;
  }

  /* 
    
    LNB section 
    
  */

  .firstLevel ul .item ul .item {
    /* border-left: 1px solid #e6ecf1; */
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .onClickClorChangeLNB {
    font-weight: 600 !important;
    color: #424242 !important;
  }

  /* 
    
    Page section 
  
  */

  .titleWrapper {
    // display: flex;
    // align-items: center;
  }

  .tabMainWrapper {
  }

  .titleWrapperTabMain {
    /* z-index: 3; */
    position: relative;
  }

  .tabMainPhoto {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fafafa;
    width: 100%;
    height: 360px;
    /* z-index: 2; */

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      height: 280px;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      height: 180px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .titleDescription {
    padding-bottom: 64px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.017em;
    line-height: 1.6;
    color: #424242;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      padding-bottom: 52px;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      padding-bottom: 52px;
    }
  }

  .titleDescriptionTabMain {
    padding-bottom: 34px;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: -0.017em;
    line-height: 1.6;
    color: #131313;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      padding-bottom: 30px;
      font-size: 16px;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      padding-bottom: 30px;
      font-size: 16px;
    }
  }

  .titleDescriptionContactUs {
    margin-bottom: 66px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.017em;
    line-height: 160%;
    color: #474747;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      margin-bottom: 52px;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      margin-bottom: 52px;
    }
  }

  .tabMainImgWrapper {
    display: grid;
    padding-top: 18px;
    padding-bottom: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    column-gap: 24px;

    .tabMainImgImg {
      overflow: hidden;
      position: relative;
      padding-top: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      img:hover {
        transform: scale(1.2);
        /* object-fit: cover; */
        transition: 0.2s;
      }

      .tabMainImgBack {
        width: 100%;
        height: 100%;
        background-color: #f3f3f3;
      }

      .tabMainImgRatio {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }
    }

    .tabMainImgTitle {
      padding-top: 16px;
      padding-bottom: 8px;
      span {
        font-family: 'SF Pro Display';
        font-weight: 600;
        font-size: 20px;
        line-height: 130%;
        color: #131313;
      }
    }

    .tabMainImgText {
      span {
        font-family: 'Apple SD Gothic Neo';
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: -0.017em;
        color: #424242;
      }
    }

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 18px;
      grid-template-rows: auto auto auto;

      .tabMainImgImg {
        img {
          /* aspect-ratio: 1; */
        }
      }
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: none !important;
    }
  }

  .tabMainImgWrapperMobile {
    display: none;

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: grid;
      padding-top: 18px;
      padding-bottom: 16px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      column-gap: 10px;

      .tabMainImgImg {
        position: relative;
        padding-top: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* aspect-ratio: 1; */
        }

        .tabMainImgBack {
          width: 100%;
          height: 100%;
          background-color: #f3f3f3;
        }

        .tabMainImgRatio {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
        }
      }

      .tabMainImgTitle {
        padding-top: 16px;
        padding-bottom: 8px;
        span {
          font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
          font-weight: 600;
          font-size: 20px;
          line-height: 130%;
          color: #131313;
        }
      }

      .tabMainImgText {
        span {
          font-family: 'Apple SD Gothic Neo', 'SF Pro Display';
          font-weight: 300;
          font-size: 16px;
          line-height: 160%;
          letter-spacing: -0.017em;
          color: #424242;
        }
      }
    }
  }

  .tabMainResourceWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: none !important;
    }
  }

  .tabMainResourceContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e2e2;
    margin: -1px 0 0 -1px;
    position: relative;
    padding-top: 100%;
    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
    }
  }

  .tabMainResourceContent:hover {
    outline: 1px solid #d1d1d1;
    outline-offset: -1px;
    background-color: #fafafa;
    z-index: 10;
  }

  .tabMainResourceContentNo {
    border: 0;
  }

  .tabMainResourceContentLogo {
    position: absolute;
    top: 60px;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      top: 46px;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      top: 30px;
    }
  }

  .tabMainResourceContentText {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    bottom: 16px;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      bottom: 12px;
    }
    @media (max-width: ${config.responsive.mobileMax}px) {
      bottom: 12px;
    }
  }

  .tabMainResourceContentLink {
    align-self: center;
    padding-right: 20px;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      padding-right: 16px;
    }
    @media (max-width: ${config.responsive.mobileMax}px) {
      padding-right: 12px;
    }
  }

  .tabMainResourceContentTextText {
    padding-left: 20px;
    span {
      font-family: 'SF Pro Text';
      font-weight: 300;
      font-size: 15px;
      line-height: 160%;
      letter-spacing: -0.017em;
      color: #131313;
    }

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      padding-left: 16px;

      span {
        font-size: 13px;
      }
    }
    @media (max-width: ${config.responsive.mobileMax}px) {
      span {
        font-size: 13px;
      }
      padding-left: 12px;
    }
  }

  .tabMainResourceWrapperMobile {
    display: none;

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .titleDownloadWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 24px;
    margin-bottom: 24px;

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: none !important;
    }
  }

  .titleDownloadContent {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    height: 120px;
  }

  .titleDownloadContent:hover {
    background-color: #fafafa;
  }

  .titleDownloadContentNo {
    border: 0;
    height: 120px;
  }

  .titleDownloadContentLogo {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    margin-right: 16px;
  }

  .titleDownloadContentText {
    display: block;
    margin-left: 24px;
  }

  .titleDownloadContentTextTitle {
    span {
      font-family: 'SF Pro Text';
      font-size: 16px;
      font-weight: 700;
      line-height: 1.6;
      letter-spacing: -0.017em;
      color: #131313;
    }
  }

  .titleDownloadContentLink {
    span {
      font-family: 'SF Pro Text';
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: -0.017em;
      color: #636363;
    }
  }

  .titleDownloadWrapperMobile {
    display: none;

    @media (max-width: ${config.responsive.mobileMax}px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .addPaddTopBottom {
    padding: 96px 0;
  }

  .imageIconWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    margin-top: 16px;
    margin-bottom: 2px;

    @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
        .tabletMax}px) {
      column-gap: 18px;
    }

    @media (max-width: ${config.responsive.mobileMax}px) {
      column-gap: 18px;
    }

    .imageIconFirst {
      font-size: 0;
      position: relative;
    }

    .imageIconSecond {
      font-size: 0;
      position: relative;
    }

    img {
      height: auto;
    }

    .imageIconYes {
      position: absolute;
      left: 12px;
      bottom: 12px;
    }

    .imageIconNo {
      position: absolute;
      left: 12px;
      bottom: 12px;
    }
  }

  table {
    width: 100%;
    padding: 0;
    border-spacing: 0;
    margin-bottom: 2px;
    border-collapse: collapse;
    margin-top: 16px;
  }

  thead {
    padding: 0;
  }

  table tr {
    margin: 0;
    padding: 0;
  }

  // table tr:nth-child(2n) {
  //   background-color: #f8f8f8;
  // }

  table tr th {
    background-color: #fafafa;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.017em;
    color: #636363;
    border: 1px solid #eaeaea;
    text-align: left;
    margin: 0;
    height: 56px;
    padding: 18px 24px;
    white-space: nowrap;

    @media (max-width: ${config.responsive.mobileMax}px) {
      padding: 18px 20px;
      white-space: unset;
      min-width: 50px;
    }
  }

  table tr td {
    border: 1px solid #eaeaea;
    text-align: left;
    margin: 0;
    padding: 18px 24px;

    @media (max-width: ${config.responsive.mobileMax}px) {
      padding: 18px 20px;
    }
  }

  table tr th :first-of-type,
  table tr td :first-of-type {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  /* 
  
    Markdown Section 
  
  */

  .heading1 {
    font-size: 32px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 8px;
    margin-top: 18px;
    color: #131313;
  }

  .heading2 {
    font-size: 23px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 8px;
    margin-top: 20px;
    color: #131313;
  }

  .heading3 {
    font-size: 16px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 4px;
    margin-top: 10px;
    color: #131313;
  }

  .heading4 {
    font-size: 14px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading5 {
    font-size: 12px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading6 {
    font-size: 10px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .paragraph {
    font-size: 16px;
    margin-bottom: 2px;
    line-height: 1.6;
    letter-spacing: -0.02em;
  }

  .br1 {
    height: 32px !important;
  }

  .br2 {
    height: 16px !important;
  }

  .br6 {
    height: 6px !important;
  }

  .br10 {
    height: 10px !important;
  }

  .br18 {
    height: 18px !important;
  }

  .videoEmbed {
    position: relative;
    padding-bottom: 2px;
    margin-top: 16px;
  }

  .videoEmbed iframe {
    display: none;
  }

  .videoWrapper {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    min-height: 465.75px;
  }

  .play-btn {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: 0;
  }

  .play-btn:focus {
    outline: 0;
  }

  .play-btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .hidden {
    visibility: hidden;
  }

  /* 
    
    Search section 
    
  */

  .formElement {
    background-color: transparent;
    padding: 4px;
    border-radius: 5px;
    // position: relative;
  }

  .formElement:focus {
    outline: none;
    border: none;
  }

  .formElement svg path {
    fill: #2fd2c5;
  }

  .searchInput {
    width: calc(100% - 26px);
    background-color: transparent !important;
    border-width: 0 !important;
    color: #c2c2c2;
  }

  .searchInput:focus,
  .searchInput:focus-within,
  .searchInput:hover,
  .searchInput:visited {
    outline: none;
    border: 0;
  }

  .searchWrapper {
    padding-left: 0;
    padding-right: 20px;
    flex: 1 1;
    max-width: 600px;
    position: relative;
  }

  .searchWrapper a {
    font-weight: 500;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }

  .hitWrapper {
    background-color: #fff;
    padding: 0.7em 1em 0.4em;
    border-radius: 4px;
    position: absolute;
    width: 80vw;
    max-width: 30em;
    top: 40px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    height: auto;
    max-height: 80vh;
    overflow: scroll;
    left: 0;
  }

  .hitWrapper ul li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
    list-style-type: none;
  }

  .hitWrapper ul li:first-of-type {
    border-top: 0px;
    margin-top: 0px;
    color: black !important;
    padding: 0px;
  }

  .showResults {
    display: block;
  }

  .hideResults {
    display: none;
  }

  .hitWrapper span {
    color: black;
    font-size: 14px;
  }

  /* 
    
    Mobile section 

  */

  @media (max-width: ${config.responsive.mobileMax}px) {
    .hiddenMobile {
      display: none !important;
    }

    .responsive {
      // margin-top: 15px;
      position: relative;
      // padding-bottom: 20px;
      border-top: 1px solid #fff;
    }

    hr {
      margin-top: 0;
      margin-bottom: 0;
    }

    .titleWrapper {
      display: block;
    }

    .hitWrapper {
      width: 100%;
      right: 0;
      top: 35px;
      max-height: fit-content;
      position: static;
    }
  }

  /* 
    
    Tablet section 
  
  */

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    .hiddenTablet {
      display: none !important;
    }
  }
`;
