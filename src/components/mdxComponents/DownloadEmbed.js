import React from 'react';

import LogoIcon48 from './LogoIcon48';

const DownloadEmbed = (props) => {
  if (props.type && props.type === 'a') {
    return (
      <div className="downloadWrapperTypeA">
        <div className="downloadLogoTypeA">{props.logo && <LogoIcon48 logo={props.logo} />}</div>
        <div className="downloadTextTypeA">
          <div className="downloadTextTypeAInput">{props.text1 && <span>{props.text1}</span>}</div>
          <div className="downloadTextTypeAInput2">{props.text2 && <span>{props.text2}</span>}</div>
        </div>
        <div className="downloadLinkTypeA">
          {props.link && (
            <a href={props.link} download>
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
                <path d="M19.5001 16.5V20.5H0.500122V16.5" stroke="#636363" strokeLinecap="round" />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  } else if (props.type === 'b' && props.link) {
    return (
      <div className="downloadWrapperTypeB">
        <a href={props.link} download>
          <div className="downloadLogoTypeB">{props.logo && <LogoIcon48 logo={props.logo} />}</div>
          <div className="downloadTextTypeB">
            <div className="downloadTextTypeBInput">
              {props.text1 && <span>{props.text1}</span>}
            </div>
            <div className="downloadTextTypeBInput2">
              {props.text2 && <span>{props.text2}</span>}
            </div>
          </div>
        </a>
      </div>
    );
  } else {
    <div></div>;
  }
};

export default DownloadEmbed;
