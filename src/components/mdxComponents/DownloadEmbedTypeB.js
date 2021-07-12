import React from 'react';
import LogoIcon32 from './LogoIcon32';

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
            <div className="downloadTypeB" id={'downTypeB' + key}>
              {el[0] === undefined ? (
                <div className="" />
              ) : (
                <div className="downloadWrapperTypeB">
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
                </div>
              )}

              {el[1] === undefined ? (
                <div className="" />
              ) : (
                <div className="downloadWrapperTypeB">
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
                </div>
              )}
              {el[2] === undefined ? (
                <div className="" />
              ) : (
                <div className="downloadWrapperTypeB">
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
                </div>
              )}
            </div>
          );
        })}
        {finalArrayTwo.map((el, key) => {
          return (
            <div className="downloadTypeBMobile" id={'downTypeBMob' + key}>
              {el[0] === undefined ? (
                <div className="" />
              ) : (
                <div className="downloadWrapperTypeB">
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
                </div>
              )}

              {el[1] === undefined ? (
                <div className="" />
              ) : (
                <div className="downloadWrapperTypeB">
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

export default DownloadEmbedTypeB;
