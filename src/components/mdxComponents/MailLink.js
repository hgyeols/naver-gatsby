import React from 'react';

const MailLink = (props) => {
  let propsLength = 0;
  if (props) propsLength = Object.keys(props).length;

  if (propsLength !== 0 && propsLength % 3 === 0) {
    let newArray = [];

    // Markdown에서 받아온 인자(object type)를 array로 변환
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
            <div className="MailLink" id={'MailLink' + key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <div className="MailLinkWrapper">
                  <div className="MailLinkPic">
                    <div className="MailLinkPhoto">
                      {el[0].photo === '' || el[0].photo === undefined || el[0].photo === null ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="20" cy="20" r="20" fill="#919191" />
                          <mask
                            id="mask0"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                          >
                            <circle cx="20" cy="20" r="20" fill="#919191" />
                          </mask>
                          <g mask="url(#mask0)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M34.1666 34.7141C34.1666 34.6949 34.1641 34.6733 34.1641 34.6566V34.5391L34.1583 34.5274C34.0983 33.8258 33.6983 33.2141 33.1224 32.8633L33.1116 32.8458L23.8791 27.5149V25.6058C25.6383 24.3733 26.7883 22.3258 26.7883 20.0074V16.6541C26.7883 12.8866 23.7508 9.83325 20.0033 9.83325C16.2541 9.83325 13.2174 12.8866 13.2174 16.6541V20.0074C13.2174 22.3258 14.3683 24.3733 16.1258 25.6058V27.5149L6.90325 32.8408L6.89575 32.8533C6.25992 33.2308 5.83325 33.9216 5.83325 34.7141C5.83325 34.7674 5.83742 34.8208 5.84159 34.8741V39.8324L20 40.4999L34.1641 39.8324V34.7733C34.1641 34.7533 34.1666 34.7324 34.1666 34.7141Z"
                              fill="#EFEFEF"
                            />
                          </g>
                        </svg>
                      ) : (
                        <img src={el[0].photo} />
                      )}
                    </div>
                  </div>
                  <div className="MailLinkText">
                    <div className="MailLinkTextName">
                      <span>{el[0].name}</span>
                    </div>
                    <div className="MailLinkTextMail">
                      <a href={'mailto:' + props.mail}>
                        <span>{el[0].mail}</span>
                      </a>
                    </div>
                  </div>
                  <div className="MailLinkIcon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.394 21.1046L21.5035 11.9951L12.5035 2.84961"
                        stroke="#636363"
                        strokeLinecap="round"
                      />
                      <path d="M21.2379 11.9951H1.73241" stroke="#636363" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              )}
              {el[1] === undefined ? (
                <div />
              ) : (
                <div className="MailLinkWrapper">
                  <div className="MailLinkPic">
                    <div className="MailLinkPhoto">
                      {el[1].photo === '' || el[1].photo === undefined || el[1].photo === null ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="20" cy="20" r="20" fill="#919191" />
                          <mask
                            id="mask0"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                          >
                            <circle cx="20" cy="20" r="20" fill="#919191" />
                          </mask>
                          <g mask="url(#mask0)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M34.1666 34.7141C34.1666 34.6949 34.1641 34.6733 34.1641 34.6566V34.5391L34.1583 34.5274C34.0983 33.8258 33.6983 33.2141 33.1224 32.8633L33.1116 32.8458L23.8791 27.5149V25.6058C25.6383 24.3733 26.7883 22.3258 26.7883 20.0074V16.6541C26.7883 12.8866 23.7508 9.83325 20.0033 9.83325C16.2541 9.83325 13.2174 12.8866 13.2174 16.6541V20.0074C13.2174 22.3258 14.3683 24.3733 16.1258 25.6058V27.5149L6.90325 32.8408L6.89575 32.8533C6.25992 33.2308 5.83325 33.9216 5.83325 34.7141C5.83325 34.7674 5.83742 34.8208 5.84159 34.8741V39.8324L20 40.4999L34.1641 39.8324V34.7733C34.1641 34.7533 34.1666 34.7324 34.1666 34.7141Z"
                              fill="#EFEFEF"
                            />
                          </g>
                        </svg>
                      ) : (
                        <img src={el[1].photo} />
                      )}
                    </div>
                  </div>
                  <div className="MailLinkText">
                    <div className="MailLinkTextName">
                      <span>{el[1].name}</span>
                    </div>
                    <div className="MailLinkTextMail">
                      <a href={'mailto:' + props.mail}>
                        <span>{el[1].mail}</span>
                      </a>
                    </div>
                  </div>
                  <div className="MailLinkIcon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.394 21.1046L21.5035 11.9951L12.5035 2.84961"
                        stroke="#636363"
                        strokeLinecap="round"
                      />
                      <path d="M21.2379 11.9951H1.73241" stroke="#636363" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {finalArrayOne.map((el, key) => {
          return (
            <div className="MailLinkMobile" id={'mailLinkMobile' + key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <div className="MailLinkWrapper">
                  <div className="MailLinkPic">
                    <div className="MailLinkPhoto">
                      {el[0].photo === '' || el[0].photo === undefined || el[0].photo === null ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="20" cy="20" r="20" fill="#919191" />
                          <mask
                            id="mask0"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                          >
                            <circle cx="20" cy="20" r="20" fill="#919191" />
                          </mask>
                          <g mask="url(#mask0)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M34.1666 34.7141C34.1666 34.6949 34.1641 34.6733 34.1641 34.6566V34.5391L34.1583 34.5274C34.0983 33.8258 33.6983 33.2141 33.1224 32.8633L33.1116 32.8458L23.8791 27.5149V25.6058C25.6383 24.3733 26.7883 22.3258 26.7883 20.0074V16.6541C26.7883 12.8866 23.7508 9.83325 20.0033 9.83325C16.2541 9.83325 13.2174 12.8866 13.2174 16.6541V20.0074C13.2174 22.3258 14.3683 24.3733 16.1258 25.6058V27.5149L6.90325 32.8408L6.89575 32.8533C6.25992 33.2308 5.83325 33.9216 5.83325 34.7141C5.83325 34.7674 5.83742 34.8208 5.84159 34.8741V39.8324L20 40.4999L34.1641 39.8324V34.7733C34.1641 34.7533 34.1666 34.7324 34.1666 34.7141Z"
                              fill="#EFEFEF"
                            />
                          </g>
                        </svg>
                      ) : (
                        <img src={el[0].photo} />
                      )}
                    </div>
                  </div>
                  <div className="MailLinkText">
                    <div className="MailLinkTextName">
                      <span>{el[0].name}</span>
                    </div>
                    <div className="MailLinkTextMail">
                      <a href={'mailto:' + props.mail}>
                        <span>{el[0].mail}</span>
                      </a>
                    </div>
                  </div>
                  <div className="MailLinkIcon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.394 21.1046L21.5035 11.9951L12.5035 2.84961"
                        stroke="#636363"
                        strokeLinecap="round"
                      />
                      <path d="M21.2379 11.9951H1.73241" stroke="#636363" strokeLinecap="round" />
                    </svg>
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

export default MailLink;
