import React from 'react';
import styled from '@emotion/styled';
import LogoIcon48 from './LogoIcon48';
import config from '../../../config';

const DownloadTypeAWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 16px;

  @media (min-width: ${config.responsive.tabletMin}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    column-gap: 18px;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: none !important;
  }
`;

const DownloadTypeAMobile = styled('div')`
  display: none;

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: block;
  }
`;

const DownloadTypeAContent = styled('div')`
  height: 80px;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 21fr 60fr 19fr;
  align-items: center;

  &:hover {
    background-color: #fafafa;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    margin-bottom: 10px;
  }

  .downloadLogoTypeA {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .downloadTextTypeA {
    display: block;
    padding-left: 1px;

    .downloadTextTypeAInput {
      span {
        font-family: 'SF Pro Text';
        font-size: 16px;
        font-weight: 700;
        line-height: 1.6;
        letter-spacing: -0.017em;
        color: #131313;
      }
    }

    .downloadTextTypeAInput2 {
      span {
        font-family: 'Apple SD Gothic Neo', 'SF Pro Text';
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        color: #424242;
      }
    }
  }

  .downloadLinkTypeA {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
            <DownloadTypeAWrapper key={'typeA' + key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <DownloadTypeAContent>
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
                </DownloadTypeAContent>
              )}
              {el[1] === undefined ? (
                <div />
              ) : (
                <DownloadTypeAContent>
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
                </DownloadTypeAContent>
              )}
            </DownloadTypeAWrapper>
          );
        })}

        {finalArrayOne.map((el, key) => {
          return (
            <DownloadTypeAMobile id={'downTypeAMob' + key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <DownloadTypeAContent>
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
                </DownloadTypeAContent>
              )}
            </DownloadTypeAMobile>
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
