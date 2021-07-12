import React from 'react';

const Outlink = (props) => {
  let outLinkText = (props.text || '').split(';');
  let outLinkSrc = (props.link || '').split(';');

  if (outLinkSrc.length === outLinkText.length) {
    return (
      <div className="OutlinkWrapper">
        <ul>
          {outLinkText.map((el, index) => (
            <li key={index}>
              <a href={outLinkSrc[index]} target="_blank">
                <span>{el}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 9L9 3" stroke="#636363" strokeLinecap="round" />
                  <path
                    d="M8.99961 8.57143L8.99963 3H3.42852"
                    stroke="#636363"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Outlink;
