import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Highlight, { defaultProps, Prism } from 'prism-react-renderer';
import { applyLanguages, getTheme } from './codeBlockTheme';
import Loadable from 'react-loadable';
import LoadingProvider from './loading';

const DefaultCodeWrapper = styled('div')`
  height: 420px;
  margin-top: 16px;
  background-color: #131313;
  position: relative;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 9999px;
    border: solid #131313 7px;
  }

  .defaultCodeSide {
    padding: 32px 14px 32px 32px;
  }

  .codeCopyButton {
    position: absolute;
    top: 20px;
    right: 2px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .copyBtn {
      all: unset;
      display: flex;
    }
  }

  .codeCopyButton:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

const CodeTabWrapper = styled('div')`
  height: 468px;
  margin-top: 16px;
  background-color: #131313;
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
    height: 48px !important;
    color: #919191 !important;
    letter-spacing: 0 !important;
  }

  & label {
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

  & label:hover {
    color: #fff;
  }

  & [class^='codeTabContent'] {
    order: 99;
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    flex-grow: 1;
    width: 100%;
    height: 420px;
    overflow-y: scroll;
    padding: 32px 14px 32px 32px;

    &::-webkit-scrollbar {
      width: 18px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #636363;
      border-radius: 9999px;
      border: solid #131313 7px;
    }

    .codeTab {
      margin-top: -25px;
    }

    .codeCopyButton {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .copyBtn {
        all: unset;
      }
    }

    .codeCopyButton:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
    }
  }

  & input[type='radio'] {
    display: none;
  }

  & input[type='radio']:checked + label {
    background: #131313;
    color: #fff;
  }

  & input[type='radio']:checked + label + [class^='codeTabContent'] {
    display: block;
  }

  .codeTabBar {
    background-color: #fff;
  }

  .codeTabBtn {
    background: #424242;
    height: 48px;
  }
`;

const CodeOutlinkWrapper = styled('pre')`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 57px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const CodeOutlinkContent = styled('div')`
  span {
    color: #fff;
    margin-right: 10.5px;
  }

  svg {
    margin-right: 22.5px;
  }
  a {
    font-family: 'IBM Plex Mono', monospace;
    color: #fff;
  }
`;

const theme = getTheme();

function cleanTokens(tokens) {
  const tokensLength = tokens.length;

  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];

  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}

const LoadableComponent = Loadable({
  loader: () => import('./LiveProvider'),
  loading: LoadingProvider,
});

const CodeBlock = ({ children: exampleCode, ...props }) => {
  const [_, updateView] = React.useState(0);

  let tabName = (props.tabName || '').slice(1, -1).split(',');
  let outLinkName = (props.outLinkName || '').slice(1, -1).split(',');
  let outLinkSrc = (props.outLinkSrc || '').slice(1, -1).split(',');

  useEffect(() => {
    var windowPrism = window.Prism;
    window.Prism = Prism;
    applyLanguages(Prism);
    window.Prism = windowPrism;
    updateView({
      data: Date.now(),
    });
  }, []);

  if (props['react-live']) {
    return <LoadableComponent code={exampleCode} />;
  } else if (props['tab']) {
    return (
      <React.Fragment>
        <CodeTabWrapper>
          <div className="codeTabBar">
            <ul>
              <li id="tab1" className="codeTabBtn">
                <input
                  type="radio"
                  checked="checked"
                  name={props.id + 'tabMebu'}
                  id={props.id + 'codeTabMenu1'}
                />
                <label htmlFor={props.id + 'codeTabMenu1'}>{tabName[0]}</label>
                <div className="codeTabContent">
                  <Highlight
                    {...defaultProps}
                    Prism={Prism}
                    code={exampleCode.split('---')[0]}
                    language={props.className ? props.className.split('-')[1] : 'html'}
                    theme={theme}
                  >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre className={className + ' pre'} style={style} p={3}>
                        {cleanTokens(tokens).map((line, i) => {
                          let lineClass = {};
                          const lineProps = getLineProps({ line, key: i });
                          lineProps.style = lineClass;

                          return (
                            <div {...lineProps} key={line + i}>
                              {line.map((token, key) => {
                                return <span {...getTokenProps({ token, key })} />;
                              })}
                            </div>
                          );
                        })}
                      </pre>
                    )}
                  </Highlight>
                  <div className="codeCopyButton">
                    {/* <button className="copyBtn" onClick={copyCode()}> */}
                    <button
                      className="copyBtn"
                      onClick={() => {
                        navigator.clipboard.writeText(exampleCode.split('---')[0]);
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="4.5" y="4.5" width="10" height="10" stroke="white" />
                        <path d="M11 1.5H1.5V11" stroke="white" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li id="tab2" className="codeTabBtn">
                <input type="radio" name={props.id + 'tabMebu'} id={props.id + 'codeTabMenu2'} />
                <label htmlFor={props.id + 'codeTabMenu2'}>{tabName[1]}</label>
                <div className="codeTabContent">
                  <Highlight
                    {...defaultProps}
                    Prism={Prism}
                    code={exampleCode.split('---')[1]}
                    language={props.className ? props.className.split('-')[1] : 'html'}
                    theme={theme}
                  >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre className={className + ' pre' + ' codeTab'} style={style} p={3}>
                        {cleanTokens(tokens).map((line, i) => {
                          let lineClass = {};
                          const lineProps = getLineProps({ line, key: i });
                          lineProps.style = lineClass;

                          return (
                            <div {...lineProps} key={line + i}>
                              {line.map((token, key) => {
                                return <span {...getTokenProps({ token, key })} />;
                              })}
                            </div>
                          );
                        })}
                      </pre>
                    )}
                  </Highlight>
                  <div className="codeCopyButton">
                    <button
                      className="copyBtn"
                      onClick={() => {
                        navigator.clipboard.writeText(exampleCode.split('---')[1]);
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="4.5" y="4.5" width="10" height="10" stroke="white" />
                        <path d="M11 1.5H1.5V11" stroke="white" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </CodeTabWrapper>
        {outLinkName[0] !== '' ? (
          <CodeOutlinkWrapper>
            {outLinkName.map((item, index) => {
              return (
                <CodeOutlinkContent key={index}>
                  <span>{item}</span>
                  <a href={outLinkSrc[index]} target="_blank">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 0.5H0.5V11.5H11.5V8" stroke="white" />
                      <path d="M7 0.5H11.5V5" stroke="white" />
                      <path d="M11.5996 0.399902L6.94275 5.05676" stroke="white" />
                    </svg>
                  </a>
                </CodeOutlinkContent>
              );
            })}
          </CodeOutlinkWrapper>
        ) : null}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <DefaultCodeWrapper>
          <div className="defaultCodeSide">
            <Highlight
              {...defaultProps}
              Prism={Prism}
              code={exampleCode}
              language={props.className ? props.className.split('-')[1] : 'html'}
              theme={theme}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className + ' pre'} style={style} p={3}>
                  {cleanTokens(tokens).map((line, i) => {
                    let lineClass = {};
                    const lineProps = getLineProps({ line, key: i });
                    lineProps.style = lineClass;
                    return (
                      <div {...lineProps} key={line + i}>
                        {line.map((token, key) => {
                          return <span {...getTokenProps({ token, key })} />;
                        })}
                      </div>
                    );
                  })}
                </pre>
              )}
            </Highlight>
          </div>
          <div className="codeCopyButton">
            <button
              className="copyBtn"
              onClick={() => {
                navigator.clipboard.writeText(exampleCode);
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4.5" y="4.5" width="10" height="10" stroke="white" />
                <path d="M11 1.5H1.5V11" stroke="white" />
              </svg>
            </button>
          </div>
        </DefaultCodeWrapper>
        {outLinkName[0] !== '' ? (
          <CodeOutlinkWrapper>
            {outLinkName.map((item, index) => {
              return (
                <CodeOutlinkContent key={index}>
                  <span>{item}</span>
                  <a href={outLinkSrc[index]} target="_blank">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 0.5H0.5V11.5H11.5V8" stroke="white" />
                      <path d="M7 0.5H11.5V5" stroke="white" />
                      <path d="M11.5996 0.399902L6.94275 5.05676" stroke="white" />
                    </svg>
                  </a>
                </CodeOutlinkContent>
              );
            })}
          </CodeOutlinkWrapper>
        ) : null}
      </React.Fragment>
    );
  }
};

export default CodeBlock;
