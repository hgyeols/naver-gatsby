import React from 'react';
import LogoIcon32 from './LogoIcon32';

const TitleDownload = (props) => {
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

    return (
      <div>
        {finalArrayThree.map((el, key) => {
          return (
            <div className="titleDownloadWrapper" id={'titleDownload' + key}>
              {el[0] === undefined ? (
                <div className="titleDownloadContentNo" />
              ) : (
                <div className="titleDownloadContent">
                  <a href={el[0].link} download>
                    <div className="titleDownloadContentLogo">
                      {el[0].logo === '' ? <div /> : <LogoIcon32 logo={el[0].logo} />}
                    </div>
                    <div className="titleDownloadContentText">
                      <div className="titleDownloadContentTextTitle">
                        {el[0].title === '' ? <span></span> : <span>{el[0].title}</span>}
                      </div>
                      <div className="titleDownloadContentLink">
                        <span>Download</span>
                      </div>
                    </div>
                  </a>
                </div>
              )}
              {el[1] === undefined ? (
                <div className="titleDownloadContentNo" />
              ) : (
                <div className="titleDownloadContent">
                  <a href={el[1].link} download>
                    <div className="titleDownloadContentLogo">
                      {el[0].logo === '' ? <div /> : <LogoIcon32 logo={el[1].logo} />}
                    </div>
                    <div className="titleDownloadContentText">
                      <div className="titleDownloadContentTextTitle">
                        {el[1].title === '' ? <span></span> : <span>{el[1].title}</span>}
                      </div>
                      <div className="titleDownloadContentLink">
                        <span>Download</span>
                      </div>
                    </div>
                  </a>
                </div>
              )}

              {el[2] === undefined ? (
                <div className="titleDownloadContentNo" />
              ) : (
                <div className="titleDownloadContent">
                  <a href={el[2].link} download>
                    <div className="titleDownloadContentLogo">
                      {el[2].logo === '' ? <div /> : <LogoIcon32 logo={el[2].logo} />}
                    </div>
                    <div className="titleDownloadContentText">
                      <div className="titleDownloadContentTextTitle">
                        {el[2].title === '' ? <span></span> : <span>{el[2].title}</span>}
                      </div>
                      <div className="titleDownloadContentLink">
                        <span>Download</span>
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
            <div className="titleDownloadWrapperMobile" id={'titleDownloadMob' + key}>
              {el[0] === undefined ? (
                <div className="titleDownloadContentNo" />
              ) : (
                <div className="titleDownloadContent">
                  <a href={el[0].link} download>
                    <div className="titleDownloadContentLogo">
                      {el[0].logo === '' ? <div /> : <LogoIcon32 logo={el[0].logo} />}
                    </div>
                    <div className="titleDownloadContentText">
                      <div className="titleDownloadContentTextTitle">
                        {el[0].title === '' ? <span></span> : <span>{el[0].title}</span>}
                      </div>
                      <div className="titleDownloadContentLink">
                        <span>Download</span>
                      </div>
                    </div>
                  </a>
                </div>
              )}

              {el[1] === undefined ? (
                <div className="titleDownloadContentNo" />
              ) : (
                <div className="titleDownloadContent">
                  <a href={el[1].link} download>
                    <div className="titleDownloadContentLogo">
                      {el[1].logo === '' ? <div /> : <LogoIcon32 logo={el[1].logo} />}
                    </div>
                    <div className="titleDownloadContentText">
                      <div className="titleDownloadContentTextTitle">
                        {el[0].title === '' ? <span></span> : <span>{el[1].title}</span>}
                      </div>
                      <div className="titleDownloadContentLink">
                        <span>Download</span>
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

export default TitleDownload;
