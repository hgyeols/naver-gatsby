import React from 'react';
import styled from '@emotion/styled';

const LinkFirstWrapper = styled('div')`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 80px 1fr;
  margin-top: 16px;

  &:hover {
    background-color: #fafafa;
  }
`;

const LinkIcon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
  }
`;

const LinkTextWrapper = styled('div')`
  display: block;
  align-self: center;
`;

const LinkTextFirst = styled('div')`
  a {
    text-decoration: solid underline #d1d1d1 !important;
    text-underline-position: under;
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.017em;
    color: #131313;
  }
`;

const LinkTextSecondWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const LinkTextSecond = styled('div')`
  a {
    text-decoration: none !important;
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.017em;
    color: #636363;
  }
  span {
    margin-right: 4px;
  }
`;

const LinkTextSecondSVG = styled('div')`
  display: inline-block;
`;

const LinkFirst = (props) => {
  if (props.link) {
    return (
      <LinkFirstWrapper>
        <LinkIcon>
          <a href={props.link} target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#424242" />
              <path
                d="M20.3181 22.0091C19.8064 21.8081 19.325 21.5018 18.9129 21.0879C17.3134 19.4893 17.3134 16.8972 18.9129 15.2996L21.0125 13.1991C22.6115 11.6005 25.2027 11.6001 26.8021 13.1991C28.4007 14.7972 28.4007 17.3893 26.8021 18.9888L24.1654 21.6237"
                stroke="white"
              />
              <path
                d="M19.6836 17.9912C20.1953 18.1917 20.6753 18.4994 21.0884 18.9119C22.6874 20.5096 22.6874 23.1017 21.0884 24.6998L18.9884 26.8007C17.3889 28.3997 14.7982 28.3997 13.1996 26.8007C11.6001 25.2026 11.6001 22.611 13.1996 21.0124L15.8363 18.3752"
                stroke="white"
              />
            </svg>
          </a>
        </LinkIcon>
        <LinkTextWrapper>
          <LinkTextFirst>
            <a href={props.link} target="_blank">
              {props.text1 && <span> {props.text1}</span>}
            </a>
          </LinkTextFirst>
          <LinkTextSecondWrapper>
            <LinkTextSecond>
              <a href={props.link} target="_blank">
                {props.text2 && <span> {props.text2}</span>}
              </a>
            </LinkTextSecond>
            <LinkTextSecondSVG>
              <a href={props.link} target="_blank">
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
            </LinkTextSecondSVG>
          </LinkTextSecondWrapper>
        </LinkTextWrapper>
      </LinkFirstWrapper>
    );
  } else {
    return <div></div>;
  }
};

export default LinkFirst;
