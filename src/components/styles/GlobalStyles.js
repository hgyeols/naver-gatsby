import { css } from '@emotion/react';

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
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'SF Pro Text', 'SF Pro Display', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    scroll-behavior: smooth;
  }

  a {
    transition: color 0.15s;
    // text-decoration: none;
  }

  a:hover {
    // text-decoration: none;
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
    overflow: auto;
    margin: 0px;
    padding: 20px;
  }

  .removePadd {
    padding: 0 !important;
  }

  /* 
    
    LNB section 
    
  */

  .LNBWrapper {
  }

  .LNBUL li {
    list-style-type: none;
    width: auto;
    list-style: none;
  }

  .LNBUL li a {
    color: #636363;
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.022em;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 11px 24px 11px 24px;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .LNBUL li a:hover {
    background-color: #fafafa;
    color: #131313 !important;
  }

  .LNBUL li .active a {
    font-weight: 700;
    background-color: #f1f1f1;
    color: #131313 !important;
  }

  .LNBUL .item .item {
    margin-left: 16px;
  }

  .lnbPart {
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 18px;
    color: #131313;
    line-height: 130%;
    letter-spacing: -0.022em;
    padding: 24px 24px 22px 24px;
  
  }

  // .lnbNav {
  //   color: #131313 !important;
  // }

  // .lnbNav .active > a {
  //   background-color: #ededed;
  //   color: #131313 !important;
  // }

  .firstLevel ul .item ul .item {
    border-left: 1px solid #e6ecf1;
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  /* 
    
    Markdown section 
  
  */

  .titleWrapper {
    // display: flex;
    // align-items: center;
  }

  .titleDescription {
    padding-bottom: 66px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.017em;
    line-height: 1.6;
    color: #424242;
  }

  .addPaddTopBottom {
    padding: 96px 0;
  }

  .codeOutlink {
    height: 57px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 0 0 20px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .codeTab {
    padding-top: 0px;
  }

  .codeTabWrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    ul {
      padding-left: 0 !important;
    }

    ul li {
      display: inline-block;
      width: 136px;
      float: left;
      height: 48px !important;
      color: #919191 !important;
      letter-spacing: 0 !important;
    }
  }

  .codeTabWrapper label {
    order: 1;
    display: block;
    width: 100%; 
    height: 48px;
    text-align: center;
    padding-top: 14px;
    font-family: 'SF Pro Display';
    font-weight: 700;
    font-size: 16px;
    line-height: 1.3;
    cursor: pointer;
    transition: background ease 0.2s;
  }

  .codeTabWrapper label:hover {
    color: #fff;
  }

  .codeTabWrapper [class^="codeTabContent"] {
    order: 99;
    display: none;
    position: absolute;
    left: 0; 
    top: 48px; 
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }

  .codeTabWrapper input[type="radio"] {
    display: none;
  }

  .codeTabWrapper input[type="radio"]:checked + label {
    background: #131313;
    color: #fff;
  }

  .codeTabWrapper input[type="radio"]:checked + label + [class^="codeTabContent"] {
    display: block;
  }


  .codeTabBtn {
    background: #424242;
    height: 48px;
  }

  .codeTabBar {
    background-color: #fff;
  }

  .codeTabEnd {
    top: 48px;
    display: block;
    height: 250px;
  }

  .codeOutlinkDiv {
    color: #fff;
    
    span {
      margin-right: 10.5px;
    }

    svg {
      margin-right: 22.5px;
    }
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 16px;
    text-align: right;
  }

  .nextPreviousTitle {
    display: block;
    margin: 0px;
    padding: 0px;
    transition: color 200ms ease 0s;
  }

  .nextPreviousTitle span {
    font-family: 'SF Pro Display';
    font-weight: 700;
    font-size: 23px;
    line-height: 1.3;
    color: #131313;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
  }

  .smallContent span {
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: #919191;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 16px;
    flex: 1 1 0%;
  }

  table {
    width: 828px;
    padding: 0;
    border-spacing: 0;
    margin-bottom: 2px;
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
    padding: 0px 24px;
    height: 56px;
    white-space: nowrap;
  }

  table tr td {
    border: 1px solid #eaeaea;
    text-align: left;
    margin: 0;
    padding: 25px 24px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  /* 수정해야됨 마크다운 */ 

  .heading1 {
    font-size: 32px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 18px;
    color: #131313;
  }

  .heading2 {
    font-size: 26px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 10px;
    margin-top: 20px;
    color: #131313;
  }

  .heading3 {
    font-size: 20px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 6px;
    margin-top: 10px;
    color: #131313;
  }

  .heading4 {
    font-size: 16px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading5 {
    font-size: 14px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading6 {
    font-size: 12px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .paragraph {
    font-size: 16px;
    margin-bottom: 2px;
    line-height: 1.6;
    letter-spacing: -0.017em;
  }

  .br1 {
    // margin-bottom: 32px;
    height: 32px;
  }

  .br2 {
    // margin-bottom: 16px;
    height: 14px;
  }

  .videoEmbed {
    position: relative;
    padding-bottom: 2px;
  }

  .videoEmbed iframe {
    display: none;
  }

  .videoWrapper {
    width: 828px;
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
    outline:0;
  }

  .play-btn:hover {
    cursor: pointer;
    opacity: 0.8;
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
    background-color: transparent!important;
    border-width: 0!important;
    color: #c2c2c2
  }

  .searchInput:focus,.searchInput:focus-within,.searchInput:hover,.searchInput:visited {
    outline: none;
    border: 0
  }

  .searchWrapper {
    padding-left: 0;
    padding-right: 20px;
    flex: 1 1;
    max-width: 600px;
    position: relative
  }

  .searchWrapper a {
    font-weight: 500
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

  .hitWrapper ul li:first-child {
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
    
    Footer section 
  
  */

  .footerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f2f2f3;
    padding: 30px 60px;
  }

  .footerLinks ul {
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #555;
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .footerLinks li {
    margin-top: 5px;
    margin-bottom: 5px;
    float: left;
    margin-right: 5px;

    @media (min-width: 768px) {
      margin-left: 6px;
      margin-right: 6px;
    }
  }

  .copyright {
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #8e8e8e
  }

  /* 
    
    Mobile section 

  */
 
  @media (max-width: 767px) {
    .hiddenMobile {
      display: none !important;
    }

    .responsive {
      // margin-top: 15px;
      position: relative;
      // padding-bottom: 20px;
      border-top: 1px solid #fff;
    }

    .heading1 {
      font-size: 26px;
    }

    .heading2 {
      font-size: 20px;
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

  @media (min-width: 768px) and (max-width: 1023px) {

    .hiddenTablet {
      display: none !important;
    }
  }

  

  
`;
