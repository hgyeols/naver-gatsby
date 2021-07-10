import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import VideoEmbed from './VideoEmbed';
import CodeDemo from './CodeDemo';
import SoundEmbed from './SoundEmbed';
import DownloadEmbed from './DownloadEmbed';
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
  background-color: #131313;
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

  img {
    width: 100%;
  }
`;

const StyledImg2 = styled('div')`
  display: flex;
  justify-content: space-between;
  p {
    width: 402px !important;
    height: auto;
  }
`;

const StyledImg3 = styled('div')`
  display: flex;
  justify-content: space-between;
  p {
    width: 260px !important;
    height: auto;
  }
`;

const StyledImg5 = styled('div')`
  display: flex;
  justify-content: space-between;
  p {
    width: 402px !important;
  }
  span {
    margin-top: 20px;
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
  cap: (props) => <Caption {...props} />,
  img: (props) => (
    <StyledImg>
      <img {...props} />
    </StyledImg>
  ),
  img2: (props) => <StyledImg2 {...props} />,
  img3: (props) => <StyledImg3 {...props} />,
  imgIcon: ImageIcon,
  imgText: (props) => <StyledImg5 {...props} />,
  video: VideoEmbed,
  pre: (props) => <StyledPre {...props} />,
  code: CodeBlock,
  codeDemo: (props) => <CodeDemo {...props} />,
  sim: CodeSimulator,
  sound: SoundEmbed,
  down: DownloadEmbed,
  link1: LinkFirst,
  link2: LinkSecond,
  outlink: Outlink,
  mailLink: MailLink,
  tabMainImg: TabMainImg,
  tabMainResource: TabMainResource,
  titleDownload: TitleDownload,
};
