import React from 'react';

const TabMainImg = (props) => {
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
            <div className="tabMainImgWrapper" id={'tabMainImg' + key}>
              <div className="tabMainImgImg">
                {el[0] === undefined ? null : el[0].img === '' ? (
                  <div className="tabMainImgBack" />
                ) : (
                  <div className="tabMainImgRatio">
                    <img src={el[0].img} />
                  </div>
                )}
              </div>
              <div className="tabMainImgImg">
                {el[1] === undefined ? null : el[1].img === '' ? (
                  <div className="tabMainImgBack" />
                ) : (
                  <div className="tabMainImgRatio">
                    <img src={el[1].img} />
                  </div>
                )}
              </div>
              <div className="tabMainImgImg">
                {el[2] === undefined ? null : el[2].img === '' ? (
                  <div className="tabMainImgBack" />
                ) : (
                  <div className="tabMainImgRatio">
                    <img src={el[2].img} />
                  </div>
                )}
              </div>
              <div className="tabMainImgTitle">
                {el[0] === undefined ? null : el[0].title === '' ? (
                  <span></span>
                ) : (
                  <span>{el[0].title}</span>
                )}
              </div>
              <div className="tabMainImgTitle">
                {el[1] === undefined ? null : el[1].title === '' ? (
                  <span></span>
                ) : (
                  <span>{el[1].title}</span>
                )}
              </div>
              <div className="tabMainImgTitle">
                {el[2] === undefined ? null : el[2].title === '' ? (
                  <span></span>
                ) : (
                  <span>{el[2].title}</span>
                )}
              </div>
              <div className="tabMainImgText">
                {el[0] === undefined ? null : el[0].text === '' ? (
                  <span></span>
                ) : (
                  <span>{el[0].text}</span>
                )}
              </div>
              <div className="tabMainImgText">
                {el[1] === undefined ? null : el[1].text === '' ? (
                  <span></span>
                ) : (
                  <span>{el[1].text}</span>
                )}
              </div>
              <div className="tabMainImgText">
                {el[2] === undefined ? null : el[2].text === '' ? (
                  <span></span>
                ) : (
                  <span>{el[2].text}</span>
                )}
              </div>
            </div>
          );
        })}
        {finalArrayTwo.map((el, key) => {
          return (
            <div className="tabMainImgWrapperMobile" id={'tabMainImgMob' + key}>
              <div className="tabMainImgImg">
                {el[0] === undefined ? null : el[0].img === '' ? (
                  <div className="tabMainImgBack" />
                ) : (
                  <div className="tabMainImgRatio">
                    <img src={el[0].img} />
                  </div>
                )}
              </div>
              <div className="tabMainImgImg">
                {el[1] === undefined ? null : el[1].img === '' ? (
                  <div className="tabMainImgBack" />
                ) : (
                  <div className="tabMainImgRatio">
                    <img src={el[1].img} />
                  </div>
                )}
              </div>
              <div className="tabMainImgTitle">
                {el[0] === undefined ? null : el[0].title === '' ? (
                  <span></span>
                ) : (
                  <span>{el[0].title}</span>
                )}
              </div>
              <div className="tabMainImgTitle">
                {el[1] === undefined ? null : el[1].title === '' ? (
                  <span></span>
                ) : (
                  <span>{el[1].title}</span>
                )}
              </div>
              <div className="tabMainImgText">
                {el[0] === undefined ? null : el[0].text === '' ? (
                  <span></span>
                ) : (
                  <span>{el[0].text}</span>
                )}
              </div>
              <div className="tabMainImgText">
                {el[1] === undefined ? null : el[1].text === '' ? (
                  <span></span>
                ) : (
                  <span>{el[1].text}</span>
                )}
              </div>
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

export default TabMainImg;
