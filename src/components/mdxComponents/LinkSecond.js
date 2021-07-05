import React from 'react';

const LinkSecond = (props) => {

  if (props.link1 && props.link2) {
    return (
      <div className="linkSecondWrapper">
        <div className="linkSecondChild"> 
          <div className="linkIcon">
            <a href={props.link1} target="_blank">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#424242"/>
                <path d="M20.3181 22.0091C19.8064 21.8081 19.325 21.5018 18.9129 21.0879C17.3134 19.4893 17.3134 16.8972 18.9129 15.2996L21.0125 13.1991C22.6115 11.6005 25.2027 11.6001 26.8021 13.1991C28.4007 14.7972 28.4007 17.3893 26.8021 18.9888L24.1654 21.6237" stroke="white"/>
                <path d="M19.6836 17.9912C20.1953 18.1917 20.6753 18.4994 21.0884 18.9119C22.6874 20.5096 22.6874 23.1017 21.0884 24.6998L18.9884 26.8007C17.3889 28.3997 14.7982 28.3997 13.1996 26.8007C11.6001 25.2026 11.6001 22.611 13.1996 21.0124L15.8363 18.3752" stroke="white"/>
              </svg>
            </a>
          </div>
          <div className="linkText">
            
            <div className="linkTextFirst">
              <a href={props.link1} target="_blank">
                {props.text11 && <span> {props.text11}</span>}
              </a>
            </div>
            
            <div className="linkTextSecond">
              <a href={props.link1} target="_blank">
              {props.text12 && <span> {props.text12}</span>}
              <div className="linkTextSecondSVG">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L9 3" stroke="#636363" strokeLinecap="round"/>
                  <path d="M8.99961 8.57143L8.99963 3H3.42852" stroke="#636363" strokeLinecap="round"/>
                </svg>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className="linkSecondChild"> 
          <div className="linkIcon">
            <a href={props.link2} target="_blank">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#424242"/>
                <path d="M20.3181 22.0091C19.8064 21.8081 19.325 21.5018 18.9129 21.0879C17.3134 19.4893 17.3134 16.8972 18.9129 15.2996L21.0125 13.1991C22.6115 11.6005 25.2027 11.6001 26.8021 13.1991C28.4007 14.7972 28.4007 17.3893 26.8021 18.9888L24.1654 21.6237" stroke="white"/>
                <path d="M19.6836 17.9912C20.1953 18.1917 20.6753 18.4994 21.0884 18.9119C22.6874 20.5096 22.6874 23.1017 21.0884 24.6998L18.9884 26.8007C17.3889 28.3997 14.7982 28.3997 13.1996 26.8007C11.6001 25.2026 11.6001 22.611 13.1996 21.0124L15.8363 18.3752" stroke="white"/>
              </svg>
            </a>
          </div>
          <div className="linkText">
            
            <div className="linkTextFirst">
              <a href={props.link2} target="_blank">
                {props.text21 && <span> {props.text21}</span>}
              </a>
            </div>
            
            <div className="linkTextSecond">
              <a href={props.link2} target="_blank">
              {props.text22 && <span> {props.text22}</span>}
              <div className="linkTextSecondSVG">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L9 3" stroke="#636363" strokeLinecap="round"/>
                  <path d="M8.99961 8.57143L8.99963 3H3.42852" stroke="#636363" strokeLinecap="round"/>
                </svg>
              </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    )
  } else {
    return (
      <div></div>
    )
  }


};

export default LinkSecond;