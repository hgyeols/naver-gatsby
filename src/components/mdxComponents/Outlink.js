import React from 'react';
import styled from '@emotion/styled';

const OutlinkWrapper = styled('div')`
  margin-top: 16px;
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background-color: #fafafa;
  min-height: 58px;
  display: grid;
  grid-template-rows: auto;
  row-gap: 7px;
  padding-top: 16px;
  padding-bottom: 15px;
`;

const OutlinkContent = styled('div')`
  a {
    display: flex;
    align-items: center;
    font-family: 'SF Pro Text', 'Apple SD Gothic Neo';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: -0.017em;
    color: #424242;
    margin: 0px 20px;
    text-decoration: solid underline #d1d1d1;
    text-underline-position: under;

    span {
      margin-left: 12px;
      margin-right: 4px;
    }
  }

  a:hover {
    text-decoration: solid underline #424242;
    text-underline-position: under;
  }
`;

const Outlink = (props) => {
  let propsLength = 0;
  if (props) propsLength = Object.keys(props).length;

  if (propsLength !== 0 && propsLength % 2 === 0) {
    let newArray = [];

    // Markdown에서 받아온 인자(object type)를 array로 변환
    for (let i = 0; i < propsLength / 2; i++) {
      let sliced = Object.keys(props)
        .slice(2 * i, 2 * i + 2)
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

    return (
      <OutlinkWrapper>
        {renamedArray.map((el, index) => (
          <OutlinkContent key={index}>
            <a href={el.link} target="_blank">
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#636363" />
              </svg>

              <span>{el.text}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 2.99868L9.5 2.5H9.00009C9.00014 2.5 9.00003 2.5 9.00009 2.5H3.42888C3.15274 2.5 2.92888 2.72386 2.92888 3C2.92888 3.27614 3.15274 3.5 3.42888 3.5H7.79289L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L8.49999 4.20711L8.49998 8.57143C8.49998 8.84757 8.72383 9.07143 8.99998 9.07143C9.27612 9.07143 9.49998 8.84757 9.49998 8.57143L9.5 3.00133C9.5 3.00044 9.5 2.99956 9.5 2.99868Z"
                  fill="#636363"
                />
              </svg>
            </a>
          </OutlinkContent>
        ))}
      </OutlinkWrapper>
    );
  } else {
    return <div></div>;
  }
};

export default Outlink;
