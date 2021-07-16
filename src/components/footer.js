import React from 'react';
import Link from './link';
import config from '../../config';

import { FooterStylesWrapper } from './styles/FooterStyles';

const lastLink = config.footerLinks.length;

const Footer = () => {
  return (
    <FooterStylesWrapper>
      <div className="footerContainer">
        <div className="footerWrapper">
          <div className="footerLogo">
            <svg
              width="77"
              height="14"
              viewBox="0 0 77 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.124 0L16.3399 14H21.2564L21.9548 12.1471H27.4988L28.1972 14H33.1136L27.3296 0H22.124ZM23.0783 8.78431L24.7268 4.41069L26.3752 8.78431H23.0783Z"
                fill="#767676"
              />
              <path
                d="M53.5747 8.68137H60.4432V5.31863H53.5747V3.43137H60.5155V0H48.8752V14H60.6601V10.5686H53.5747V8.68137Z"
                fill="#767676"
              />
              <path
                d="M38.97 9.20569L35.4996 0H30.5831L36.3672 14H41.5728L47.3569 0H42.4404L38.97 9.20569Z"
                fill="#767676"
              />
              <path
                d="M10.0498 7.49275L4.55493 0H0V14H4.77183V6.50726L10.2667 14H14.8216V0H10.0498V7.49275Z"
                fill="#767676"
              />
              <path
                d="M73.2707 9.19745L73.7183 9.01971C75.4325 8.33892 76.3045 6.8648 76.3045 4.99471C76.3045 3.22618 75.6248 1.91814 74.2844 1.10627C73.0387 0.351373 71.4227 0 69.2002 0H62.9737V14H67.6009V10.0882H69.2639L72.0836 14H77L73.2707 9.19745ZM70.0592 6.51961H67.5286V3.56863H70.0592C70.9174 3.56863 71.6136 4.22951 71.6136 5.04412C71.6136 5.85873 70.9174 6.51961 70.0592 6.51961Z"
                fill="#767676"
              />
            </svg>
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
        <div className="footerVoid" />
      </div>
    </FooterStylesWrapper>
  );
};

export default Footer;
