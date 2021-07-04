import * as React from 'react';
import Highlight, { defaultProps, Prism } from 'prism-react-renderer';
import { applyLanguages, getTheme } from './codeBlockTheme';
import Loadable from 'react-loadable';
import LoadingProvider from './loading';
import Link from '../link';

const theme = getTheme();

/** Removes the last token from a code example if it's empty. */
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

/* eslint-disable react/jsx-key */
const CodeBlock = ({ children: exampleCode, ...props }) => {
  const [_, updateView] = React.useState(0);

  let outLinkName = (props.outLinkName || '').slice(1,-1).split(',');
  let outLinkSrc = (props.outLinkSrc || '').slice(1,-1).split(',');

  let tabName = (props.tabName || '').slice(1,-1).split(',');
  
  if (props.height) {

    const backClass = document.getElementById(props.id + "back");
    backClass.style.height = `${props.height}px`;
  }


  React.useEffect(() => {
    var windowPrism = window.Prism;
    window.Prism = Prism;
    applyLanguages(Prism);
    window.Prism = windowPrism;
    updateView({
      data: Date.now()
    });
  }, []);

  if (props['react-live']) {
    return <LoadableComponent code={exampleCode} />;
  } 
  else if (props['tab']) {
    return (
      <div className="codeTabWrapper">
        <div className="codeTabBar">
        <ul>
          <li id="tab1" className="codeTabBtn">
            <input type="radio" checked="checked" name={props.id + "tabMebu"} id={props.id + "codeTabMenu1"} />
            <label for={props.id + "codeTabMenu1"}>{tabName[0]}</label>
            <div className="codeTabContent">
              <Highlight {...defaultProps} Prism={Prism} code={exampleCode.split('---')[0]} language={(props.className)?props.className.split("-")[1] :"html"} theme={theme}>
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
          </li>
          <li id="tab2" className="codeTabBtn">
            <input type="radio" name={props.id + "tabMebu"} id={props.id + "codeTabMenu2"} />
            <label for={props.id + "codeTabMenu2"}>{tabName[1]}</label>
            <div className="codeTabContent">
              <Highlight {...defaultProps} Prism={Prism} code={exampleCode.split('---')[1]} language={(props.className)?props.className.split("-")[1] :"html"} theme={theme}>
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
            </div>
          </li>
        </ul>
        </div>

        <div className="codeTabEnd" id={props.id + "back"} />
        {outLinkName.length > 1 ? 
          <pre className="codeOutlink">
            {outLinkName.map((item, index) => {
              return (
                <div className="codeOutlinkDiv">
                  <span key={index}>
                    {item}
                  </span>
                  <Link to={outLinkSrc[index]}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 0.5H0.5V11.5H11.5V8" stroke="white"/>
                      <path d="M7 0.5H11.5V5" stroke="white"/>
                      <path d="M11.5996 0.399902L6.94275 5.05676" stroke="white"/>
                    </svg>
                  </Link>
                </div>
              );
            })}
          </pre>
          : null
        }         
      </div>
    )
  } 
  else {
    return (
      <div>
      <Highlight {...defaultProps} Prism={Prism} code={exampleCode} language={(props.className)?props.className.split("-")[1] :"javascript"} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className + ' pre'} style={style} p={3}>
            {cleanTokens(tokens).map((line, i) => {
              let lineClass = {};

              let isDiff = false;

              if (line[0] && line[0].content.length && line[0].content[0] === '+') {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content.length && line[0].content[0] === '-') {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '+') {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '-') {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              }
              const lineProps = getLineProps({ line, key: i });

              lineProps.style = lineClass;
              const diffStyle = {
                userSelect: 'none',
                MozUserSelect: '-moz-none',
                WebkitUserSelect: 'none',
              };

              let splitToken;


              return (
                <div {...lineProps} key={line + i}>
                  {line.map((token, key) => {
                    if (isDiff) {
                      if (
                        (key === 0 || key === 1) &
                        (token.content.charAt(0) === '+' || token.content.charAt(0) === '-')
                      ) {
                        if (token.content.length > 1) {
                          splitToken = {
                            types: ['template-string', 'string'],
                            content: token.content.slice(1),
                          };
                          const firstChar = {
                            types: ['operator'],
                            content: token.content.charAt(0),
                          };

                          return (
                            <React.Fragment key={token + key}>
                              <span
                                {...getTokenProps({ token: firstChar, key })}
                                style={diffStyle}
                              />
                              <span {...getTokenProps({ token: splitToken, key })} />
                            </React.Fragment>
                          );
                        } else {
                          return <span {...getTokenProps({ token, key })} style={diffStyle} />;
                        }
                      }
                    }
                    return <span {...getTokenProps({ token, key })} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}      
      </Highlight>
      {outLinkName.length > 1 ? 
        <pre className="codeOutlink">
          {outLinkName.map((item, index) => {
            return (
              <div className="codeOutlinkDiv">
                <span key={index}>
                  {item}
                </span>
                <Link to={outLinkSrc[index]}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0.5H0.5V11.5H11.5V8" stroke="white"/>
                    <path d="M7 0.5H11.5V5" stroke="white"/>
                    <path d="M11.5996 0.399902L6.94275 5.05676" stroke="white"/>
                  </svg>
                </Link>
              </div>
            );
          })}
        </pre>
        : null
      }
      </div>         
    );
  }
};

export default CodeBlock;
