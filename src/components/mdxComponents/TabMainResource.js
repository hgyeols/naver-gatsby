import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import LogoIcon80 from './LogoIcon80';
import LogoIcon72 from './LogoIcon72';
import LogoIcon60 from './LogoIcon60';

const TabMainResource = (props) => {
  let propsLength = 0;
  if (props) propsLength = Object.keys(props).length;

  if (propsLength !== 0 && propsLength % 3 === 0) {
    let newArray = [];

    for (let i = 0; i < propsLength / 3; i++) {
      let sliced = Object.keys(props)
        .slice(3 * i, 3 * i + 3)
        .reduce((result, key) => {
          result[key] = props[key];
          return result;
        }, {});

      newArray.push(sliced);
    }

    let renamedArray = [];
    newArray.map((el) => {
      let altObj = Object.fromEntries(
        Object.entries(el).map(([key, value]) => [key.slice(0, -1), value])
      );
      renamedArray.push(altObj);
    });

    let finalArrayThree = [];
    for (let i = 0; i < Math.ceil(renamedArray.length / 3); i++) {
      let sliced = renamedArray.slice(3 * i, 3 * i + 3);
      finalArrayThree.push(sliced);
    }

    let finalArrayTwo = [];
    for (let i = 0; i < Math.ceil(renamedArray.length / 2); i++) {
      let sliced = renamedArray.slice(2 * i, 2 * i + 2);
      finalArrayTwo.push(sliced);
    }

    const breakpoints = useBreakpoint();

    return (
      <div>
        {finalArrayThree.map((el, key) => {
          return (
            <div className="tabMainResourceWrapper" id={'tabMainResource' + key}>
              {el[0] === undefined ? (
                <div className="tabMainResourceContentNo" />
              ) : (
                <div className="tabMainResourceContent">
                  <div className="tabMainResourceContentLogo">
                    {el[0].logo === '' ? (
                      <div />
                    ) : breakpoints.md ? (
                      <LogoIcon72 logo={el[0].logo} />
                    ) : (
                      <LogoIcon80 logo={el[0].logo} />
                    )}
                  </div>
                  <div className="tabMainResourceContentText">
                    <div className="tabMainResourceContentTextText">
                      {el[0].text === '' ? <span></span> : <span>{el[0].text}</span>}
                    </div>
                    <div className="tabMainResourceContentLink">
                      <a href={el[0].link} target="_blank">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11108 9.88892L9.88886 2.11114"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.22217 2.11117H9.88883V8.77783"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {el[1] === undefined ? (
                <div className="tabMainResourceContentNo" />
              ) : (
                <div className="tabMainResourceContent">
                  <div className="tabMainResourceContentLogo">
                    {el[1].logo === '' ? (
                      <div />
                    ) : breakpoints.md ? (
                      <LogoIcon72 logo={el[1].logo} />
                    ) : (
                      <LogoIcon80 logo={el[1].logo} />
                    )}
                  </div>
                  <div className="tabMainResourceContentText">
                    <div className="tabMainResourceContentTextText">
                      {el[1].text === '' ? <span></span> : <span>{el[1].text}</span>}
                    </div>
                    <div className="tabMainResourceContentLink">
                      <a href={el[1].link} target="_blank">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11108 9.88892L9.88886 2.11114"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.22217 2.11117H9.88883V8.77783"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {el[2] === undefined ? (
                <div className="tabMainResourceContentNo" />
              ) : (
                <div className="tabMainResourceContent">
                  <div className="tabMainResourceContentLogo">
                    {el[2].logo === '' ? (
                      <div />
                    ) : breakpoints.md ? (
                      <LogoIcon72 logo={el[2].logo} />
                    ) : (
                      <LogoIcon80 logo={el[2].logo} />
                    )}
                  </div>
                  <div className="tabMainResourceContentText">
                    <div className="tabMainResourceContentTextText">
                      {el[2].text === '' ? <span></span> : <span>{el[2].text}</span>}
                    </div>
                    <div className="tabMainResourceContentLink">
                      <a href={el[2].link} target="_blank">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11108 9.88892L9.88886 2.11114"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.22217 2.11117H9.88883V8.77783"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {finalArrayTwo.map((el, key) => {
          return (
            <div className="tabMainResourceWrapperMobile" id={'tabMainResourceMob' + key}>
              {el[0] === undefined ? (
                <div className="tabMainResourceContentNo" />
              ) : (
                <div className="tabMainResourceContent">
                  <div className="tabMainResourceContentLogo">
                    {el[0].logo === '' ? <div /> : <LogoIcon60 logo={el[0].logo} />}
                  </div>
                  <div className="tabMainResourceContentText">
                    <div className="tabMainResourceContentTextText">
                      {el[0].text === '' ? <span></span> : <span>{el[0].text}</span>}
                    </div>
                    <div className="tabMainResourceContentLink">
                      <a href={el[0].link} target="_blank">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11108 9.88892L9.88886 2.11114"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.22217 2.11117H9.88883V8.77783"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {el[1] === undefined ? (
                <div className="tabMainResourceContentNo" />
              ) : (
                <div className="tabMainResourceContent">
                  <div className="tabMainResourceContentLogo">
                    {el[1].logo === '' ? <div /> : <LogoIcon60 logo={el[1].logo} />}
                  </div>
                  <div className="tabMainResourceContentText">
                    <div className="tabMainResourceContentTextText">
                      {el[1].text === '' ? <span></span> : <span>{el[1].text}</span>}
                    </div>
                    <div className="tabMainResourceContentLink">
                      <a href={el[1].link} target="_blank">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11108 9.88892L9.88886 2.11114"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.22217 2.11117H9.88883V8.77783"
                            stroke="#424242"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <span>invalid arguments</span>
      </div>
    );
  }
};

export default TabMainResource;
