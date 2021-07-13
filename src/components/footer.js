import React from 'react';
import Link from './link';
import config from '../../config';
import NaverSVG from './svgs/naver.svg';

const lastLink = config.footerLinks.length;

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <NaverSVG className={'displayInline'} alt={'logo'} />
      </div>
      <div className="footerLinks">
        <ul>
          {config.footerLinks.map((link, key) => {
            if (link.link !== '' && link.text !== '') {
              return (
                <li key={key}>
                  <Link to={link.link}>{link.text}</Link>
                  {key === lastLink - 1 ? null : (
                    // <div className="footerSVG">
                    //   <svg
                    //     width="1"
                    //     height="12"
                    //     viewBox="0 0 1 12"
                    //     fill="none"
                    //     xmlns="http://www.w3.org/2000/svg"
                    //   >
                    //     <rect width="1" height="12" fill="#E2E2E2" />
                    //   </svg>
                    // </div>
                    <span className="footerManual">|</span>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>
      {/* <div className="copyright">
        <span dangerouslySetInnerHTML={{ "__html": "&copy; " + new Date().getFullYear() + " " }} />
        <span>NAVER corp.</span>
      </div> */}
    </div>
  );
};

export default Footer;
