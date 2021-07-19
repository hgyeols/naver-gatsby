import React from 'react';
import styled from '@emotion/styled';
import config from '../../../config';

const MailLinkWraper = styled('div')`
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

const MailLinkMobile = styled('div')`
  display: none;

  @media (max-width: ${config.responsive.mobileMax}px) {
    display: block;
  }
`;

const MailLinkContent = styled('div')`
  height: 80px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 78px 1fr 48px;
  margin-bottom: 2px;

  &:hover {
    background: #fafafa;
  }

  @media (max-width: ${config.responsive.mobileMax}px) {
    margin-bottom: 16px;
  }
`;

const MailLinkIcon = styled('div')`
  align-self: center;
`;

const MailLinkPic = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MailLinkPhoto = styled('div')`
  width: 40px;
  height: 40px;

  img {
    border-radius: 50%;
  }
`;

const MailLinkText = styled('div')`
  position: relative;
`;
const MailLinkTextName = styled('div')`
  font-family: 'SF Pro Text', 'Apple SD Gothic Neo';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.017em;
  color: #131313;
  position: absolute;
  top: 16px;
`;

const MailLinkTextMail = styled('div')`
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.017em;
  color: #636363;
  position: absolute;
  bottom: 14px;
`;

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
            <MailLinkWraper key={key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <MailLinkContent>
                  <MailLinkPic>
                    <MailLinkPhoto>
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
                    </MailLinkPhoto>
                  </MailLinkPic>
                  <MailLinkText>
                    <MailLinkTextName>
                      <span>{el[0].name}</span>
                    </MailLinkTextName>
                    <MailLinkTextMail>
                      <a href={'mailto:' + props.mail}>
                        <span>{el[0].mail}</span>
                      </a>
                    </MailLinkTextMail>
                  </MailLinkText>
                  <MailLinkIcon>
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
                  </MailLinkIcon>
                </MailLinkContent>
              )}
              {el[1] === undefined ? (
                <div />
              ) : (
                <MailLinkContent>
                  <MailLinkPic>
                    <MailLinkPhoto>
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
                    </MailLinkPhoto>
                  </MailLinkPic>
                  <MailLinkText>
                    <MailLinkTextName>
                      <span>{el[1].name}</span>
                    </MailLinkTextName>
                    <MailLinkTextMail>
                      {/* <a href={'mailto:' + props.mail}> */}
                      <span>{el[1].mail}</span>
                    </MailLinkTextMail>
                  </MailLinkText>
                  <MailLinkIcon>
                    <a href="https://mail.navercorp.com" target="_blank">
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
                    </a>
                  </MailLinkIcon>
                </MailLinkContent>
              )}
            </MailLinkWraper>
          );
        })}

        {finalArrayOne.map((el, key) => {
          return (
            <MailLinkMobile key={key}>
              {el[0] === undefined ? (
                <div />
              ) : (
                <MailLinkContent>
                  <MailLinkPic>
                    <MailLinkPhoto>
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
                    </MailLinkPhoto>
                  </MailLinkPic>
                  <MailLinkText>
                    <MailLinkTextName>
                      <span>{el[0].name}</span>
                    </MailLinkTextName>
                    <MailLinkTextMail>
                      <a href={'mailto:' + props.mail}>
                        <span>{el[0].mail}</span>
                      </a>
                    </MailLinkTextMail>
                  </MailLinkText>
                  <MailLinkIcon>
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
                  </MailLinkIcon>
                </MailLinkContent>
              )}
            </MailLinkMobile>
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
