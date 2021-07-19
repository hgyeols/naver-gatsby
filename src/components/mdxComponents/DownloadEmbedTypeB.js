import React from 'react';
import styled from '@emotion/styled';
import config from '../../../config';
import LogoIcon32 from './LogoIcon32';

const DownloadTypeBWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

const DownloadTypeBMobile = styled('div')`
  display: none;

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
  }
`;

const DownloadTypeBContent = styled('div')`
  height: 120px;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  position: relative;

  &:hover {
    background-color: #fafafa;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    margin-bottom: 5px;
  }

  a {
    text-decoration: none !important;
  }

  .downloadLogoTypeB {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .downloadTextTypeB {
    position: absolute;
    left: 23px;
    bottom: 19px;
    padding-bottom: 2px;
    .downloadTextTypeBInput {
      span {
        font-family: 'SF Pro Text';
        font-size: 16px;
        font-weight: 700;
        line-height: 1.6;
        letter-spacing: -0.017em;
        color: #131313;
      }
    }

    .downloadTextTypeBInput2 {
      span {
        font-family: 'SF Pro Text';
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -0.017em;
        color: #636363;
      }
    }
  }
`;

const DownloadEmbedTypeB = (props) => {
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

    return (
      <div>
        {finalArrayThree.map((el, key) => {
          return (
            <DownloadTypeBWrapper key={key}>
              {el[0] === undefined ? (
                <div className="" />
              ) : (
                <DownloadTypeBContent>
                  <a href={el[0].link} download>
                    <div className="downloadLogoTypeB">
                      {el[0].logo === '' ? <div /> : <LogoIcon32 logo={el[0].logo} />}
                    </div>
                    <div className="downloadTextTypeB">
                      <div className="downloadTextTypeBInput">
                        {el[0].title === '' ? <span></span> : <span>{el[0].title}</span>}
                      </div>
                      <div className="downloadTextTypeBInput2">
                        {el[0].text === '' ? <span></span> : <span>{el[0].text}</span>}
                      </div>
                    </div>
                  </a>
                </DownloadTypeBContent>
              )}

              {el[1] === undefined ? (
                <div className="" />
              ) : (
                <DownloadTypeBContent>
                  <a href={el[1].link} download>
                    <div className="downloadLogoTypeB">
                      {el[1].logo === '' ? <div /> : <LogoIcon32 logo={el[1].logo} />}
                    </div>
                    <div className="downloadTextTypeB">
                      <div className="downloadTextTypeBInput">
                        {el[1].title === '' ? <span></span> : <span>{el[1].title}</span>}
                      </div>
                      <div className="downloadTextTypeBInput2">
                        {el[1].text === '' ? <span></span> : <span>{el[1].text}</span>}
                      </div>
                    </div>
                  </a>
                </DownloadTypeBContent>
              )}
              {el[2] === undefined ? (
                <div className="" />
              ) : (
                <DownloadTypeBContent>
                  <a href={el[2].link} download>
                    <div className="downloadLogoTypeB">
                      {el[2].logo === '' ? <div /> : <LogoIcon32 logo={el[2].logo} />}
                    </div>
                    <div className="downloadTextTypeB">
                      <div className="downloadTextTypeBInput">
                        {el[2].title === '' ? <span></span> : <span>{el[2].title}</span>}
                      </div>
                      <div className="downloadTextTypeBInput2">
                        {el[2].text === '' ? <span></span> : <span>{el[2].text}</span>}
                      </div>
                    </div>
                  </a>
                </DownloadTypeBContent>
              )}
            </DownloadTypeBWrapper>
          );
        })}
        {finalArrayTwo.map((el, key) => {
          return (
            <DownloadTypeBMobile key={key}>
              {el[0] === undefined ? (
                <div className="" />
              ) : (
                <DownloadTypeBContent>
                  <a href={el[0].link} download>
                    <div className="downloadLogoTypeB">
                      {el[0].logo === '' ? <div /> : <LogoIcon32 logo={el[0].logo} />}
                    </div>
                    <div className="downloadTextTypeB">
                      <div className="downloadTextTypeBInput">
                        {el[0].title === '' ? <span></span> : <span>{el[0].title}</span>}
                      </div>
                      <div className="downloadTextTypeBInput2">
                        {el[0].text === '' ? <span></span> : <span>{el[0].text}</span>}
                      </div>
                    </div>
                  </a>
                </DownloadTypeBContent>
              )}

              {el[1] === undefined ? (
                <div className="" />
              ) : (
                <DownloadTypeBContent>
                  <a href={el[1].link} download>
                    <div className="downloadLogoTypeB">
                      {el[1].logo === '' ? <div /> : <LogoIcon32 logo={el[1].logo} />}
                    </div>
                    <div className="downloadTextTypeB">
                      <div className="downloadTextTypeBInput">
                        {el[1].title === '' ? <span></span> : <span>{el[1].title}</span>}
                      </div>
                      <div className="downloadTextTypeBInput2">
                        {el[1].text === '' ? <span></span> : <span>{el[1].text}</span>}
                      </div>
                    </div>
                  </a>
                </DownloadTypeBContent>
              )}
            </DownloadTypeBMobile>
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

export default DownloadEmbedTypeB;
