import React from "react"
import Link from './link';
import config from '../../config';
import NaverSVG from "./svgs/naver.svg";

const lastLink = config.footerLinks.length;

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <NaverSVG 
          className={'displayInline'}
          alt={'logo'}
        />
      </div>
      <div className="footerLinks">
        <ul>
          {config.footerLinks.map((link, key) => {
            if (link.link !== '' && link.text !== '') {
              return (
                <li key={key}>
                  <Link to={link.link}>
                    {link.text}
                    {key === lastLink-1 ?  null : <span> | </span> }
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="copyright">
        <span dangerouslySetInnerHTML={{ "__html": "&copy; " + new Date().getFullYear() + " " }} />
        <span>NAVER corp.</span>
      </div>
    </div>
  )
}

export default Footer
