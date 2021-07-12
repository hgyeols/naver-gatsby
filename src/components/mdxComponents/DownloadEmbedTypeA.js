import React from 'react';
import LogoIcon48 from './LogoIcon48';

const DownloadEmbedTypeA = (props) => {
  let propsLength = 0;
  if (props) propsLength = Object.keys(props).length;

  if (propsLength !== 0 && propsLength % 4 === 0) {
    let newArray = [];

    // Markdown에서 받아온 인자(object type)를 array로 변환
    for (let i = 0; i < propsLength / 4; i++) {
      let sliced = Object.keys(props)
        .slice(4 * i, 4 * i + 4)
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

    let finalArrayTwo = [];
    for (let i = 0; i < Math.ceil(renamedArray.length / 2); i++) {
      let sliced = renamedArray.slice(2 * i, 2 * i + 2);
      finalArrayTwo.push(sliced);
    }

    let finalArrayOne = [];
    for (let i = 0; i < renamedArray.length; i++) {
      let sliced = renamedArray.slice(i, i + 1);
      finalArrayOne.push(sliced);
    }

    return (
      <div>
        {finalArrayTwo.map((el, key) => {
          return (
            <div className="downloadTypeA" id={'typeA' + key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <div className="downloadWrapperTypeA">
                  <div className="downloadLogoTypeA">
                    <LogoIcon48 logo={el[0].logo} />
                  </div>
                  <div className="downloadTextTypeA">
                    <div className="downloadTextTypeAInput">
                      <span>{el[0].title}</span>
                    </div>
                    <div className="downloadTextTypeAInput2">
                      <span>{el[0].text}</span>
                    </div>
                  </div>
                  <div className="downloadLinkTypeA">
                    <a href={el[0].link} download>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.0055 1V15.408" stroke="#636363" strokeLinecap="round" />
                        <path
                          d="M15.5001 10.5518L10.0006 16.0498L4.50012 10.5503"
                          stroke="#636363"
                          strokeLinecap="round"
                        />
                        <path
                          d="M19.5001 16.5V20.5H0.500122V16.5"
                          stroke="#636363"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
              {el[1] === undefined ? (
                <div />
              ) : (
                <div className="downloadWrapperTypeA">
                  <div className="downloadLogoTypeA">
                    <LogoIcon48 logo={el[1].logo} />
                  </div>
                  <div className="downloadTextTypeA">
                    <div className="downloadTextTypeAInput">
                      <span>{el[1].title}</span>
                    </div>
                    <div className="downloadTextTypeAInput2">
                      <span>{el[1].text}</span>
                    </div>
                  </div>
                  <div className="downloadLinkTypeA">
                    <a href={el[1].link} download>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.0055 1V15.408" stroke="#636363" strokeLinecap="round" />
                        <path
                          d="M15.5001 10.5518L10.0006 16.0498L4.50012 10.5503"
                          stroke="#636363"
                          strokeLinecap="round"
                        />
                        <path
                          d="M19.5001 16.5V20.5H0.500122V16.5"
                          stroke="#636363"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {finalArrayOne.map((el, key) => {
          return (
            <div className="downloadTypeAMobile" id={'downTypeAMob' + key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <div className="downloadWrapperTypeA">
                  <div className="downloadLogoTypeA">
                    <LogoIcon48 logo={el[0].logo} />
                  </div>
                  <div className="downloadTextTypeA">
                    <div className="downloadTextTypeAInput">
                      <span>{el[0].title}</span>
                    </div>
                    <div className="downloadTextTypeAInput2">
                      <span>{el[0].text}</span>
                    </div>
                  </div>
                  <div className="downloadLinkTypeA">
                    <a href={el[0].link} download>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.0055 1V15.408" stroke="#636363" strokeLinecap="round" />
                        <path
                          d="M15.5001 10.5518L10.0006 16.0498L4.50012 10.5503"
                          stroke="#636363"
                          strokeLinecap="round"
                        />
                        <path
                          d="M19.5001 16.5V20.5H0.500122V16.5"
                          stroke="#636363"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
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

export default DownloadEmbedTypeA;
