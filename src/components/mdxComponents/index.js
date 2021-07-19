import React from 'react';
import styled from '@emotion/styled';
import config from '../../../config.js';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import VideoEmbed from './VideoEmbed';
import CodeDemo from './CodeDemo';
import SoundEmbed from './SoundEmbed';
import DownloadEmbedTypeA from './DownloadEmbedTypeA';
import DownloadEmbedTypeB from './DownloadEmbedTypeB';
import CodeSimulator from './sim';
import ImageIcon from './ImageIcon';
import LinkFirst from './LinkFirst';
import LinkSecond from './LinkSecond';
import Outlink from './Outlink';
import MailLink from './MailLink';
import TabMainImg from './TabMainImg';
import TabMainResource from './TabMainResource';
import TitleDownload from './TitleDownload';

const StyledPre = styled('div')`
  /* background-color: #131313;
  padding: ${(props) => (props.outLink ? '0' : '32px')};
  margin-top: ${(props) => (props.outLink ? '0' : '16px')};
  overflow-y: ${(props) => (props.outLink ? 'hidden' : 'scroll')};
  overflow-x: hidden;
  position: relative;
  height: ${(props) => (props.outLink ? '57px' : '420px')};

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 9999px;
    border: solid #131313 7px;
  } */
`;

const StyledHr = styled('div')`
  border-top: 1px solid #e2e2e2;
  margin: 10px 0;
`;

const Caption = styled('div')`
  color: #666;
  font-family: 'SF Pro Display', 'Apple SD Gothic Neo';
  font-weight: 400;
  font-size: 14px !important;
  line-height: 130%;
  letter-spacing: -0.018em;
  margin-bottom: 2px;
  p {
    height: 18px;
    font-size: 14px !important;
  }

  li {
    font-family: 'Apple SD Gothic Neo', 'SF Pro Text';
    font-size: 14px !important;
    height: 18px !important;
  }
`;

const StyledImg = styled('div')`
  margin-top: 16px;
  width: 100%;
  height: auto;
  font-size: 0;

  img {
    width: 100%;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    margin-top: 0px;
  }
`;

const StyledImg2 = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  font-size: 0;

  p {
    height: auto;
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    column-gap: 18px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: grid;
    grid-template-columns: unset;
    row-gap: 8px;
    margin-top: 16px;
  }
`;

const StyledImg3 = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  font-size: 0;

  p {
    height: auto;
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    column-gap: 18px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: grid;
    grid-template-columns: unset;
    row-gap: 8px;
    margin-top: 16px;
  }
`;

const StyledImg5 = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  font-size: 0;

  p {
  }

  span {
    margin-top: 20px;
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    column-gap: 18px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: grid;
    grid-template-columns: unset;
    row-gap: 8px;
    margin-top: 16px;
  }
`;

const StyledImg6 = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
  column-gap: 24px;
  font-size: 0;

  > :nth-child(1) {
    img {
      border-bottom: solid 8px #03c75a;
      padding-bottom: 16px;
    }
  }

  > :nth-child(4) {
    img {
      border-bottom: solid 8px #ffa143;
      padding-bottom: 16px;
    }
  }

  > :nth-child(7) {
    img {
      border-bottom: solid 8px #fa6767;
      padding-bottom: 16px;
    }
  }

  p {
    height: auto;
    font-size: 15px;
    color: #424242;
  }

  span {
    font-family: 'Apple SD Gothic Neo';
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;

    letter-spacing: -0.02em;
    color: #131313;
    padding-top: 12px;
    padding-bottom: 8px;
  }

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    column-gap: 18px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: grid;
    grid-template-columns: unset;
    row-gap: 8px;
    margin-top: 16px;
  }
`;

const appendString = (children) => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } else if (typeof current === 'object') {
        return acc.concat(current.props.children);
      } else {
        return acc;
      }
    }, '');
  } else {
    return children;
  }
};

export default {
  h1: (props) => (
    <h1
      className="heading1"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="heading2"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="heading3"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="heading4"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="heading5"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="heading6"
      id={appendString(props.children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  p: (props) => <p className="paragraph" {...props} />,
  hr: (props) => <StyledHr {...props} />,
  a: AnchorTag,
  br1: (props) => <p className="br1" {...props} />,
  br2: (props) => <p className="br2" {...props} />,
  br6: (props) => <p className="br6" {...props} />,
  br10: (props) => <p className="br10" {...props} />,
  br18: (props) => <p className="br18" {...props} />,
  cap: (props) => <Caption {...props} />,
  img: (props) => (
    <StyledImg>
      <img {...props} />
    </StyledImg>
  ),
  img2: (props) => <StyledImg2 {...props} />,
  img3: (props) => <StyledImg3 {...props} />,
  img6: (props) => <StyledImg6 {...props} />,
  imgIcon: ImageIcon,
  imgText: (props) => <StyledImg5 {...props} />,
  video: VideoEmbed,
  pre: (props) => <StyledPre {...props} />,
  code: CodeBlock,
  codeDemo: (props) => <CodeDemo {...props} />,
  sim: CodeSimulator,
  sound: SoundEmbed,
  downA: DownloadEmbedTypeA,
  downB: DownloadEmbedTypeB,
  link1: LinkFirst,
  link2: LinkSecond,
  outlink: Outlink,
  mailLink: MailLink,
  tabMainImg: TabMainImg,
  tabMainResource: TabMainResource,
  titleDownload: TitleDownload,
};
