import React from 'react';

const TabMainResource = (props) => {

  const LogoIcon = (props) => {
    if ( props.logo === 'figma' ) {
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#1F2226"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40 40C40 37.2386 42.2386 35 45 35C47.7614 35 50 37.2386 50 40C50 42.7614 47.7614 45 45 45C42.2386 45 40 42.7614 40 40Z" fill="#1ABCFE"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 50C30 47.2386 32.2386 45 35 45H40V50C40 52.7614 37.7614 55 35 55C32.2386 55 30 52.7614 30 50Z" fill="#0ACF83"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40 25V35H45C47.7614 35 50 32.7614 50 30C50 27.2386 47.7614 25 45 25H40Z" fill="#FF7262"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 30C30 32.7614 32.2386 35 35 35H40V25H35C32.2386 25 30 27.2386 30 30Z" fill="#F24E1E"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 40C30 42.7614 32.2386 45 35 45H40V35H35C32.2386 35 30 37.2386 30 40Z" fill="#A259FF"/>
        </svg>
      )
    } else if ( props.logo === 'sketch' ) {
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#FEE6B7"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30.1363 25.9877L40 25L49.8636 25.9877L57.4999 35.6975L40 54.9999L22.5 35.6975L30.1363 25.9877Z" fill="#FDB300"/>
        <path d="M29.5883 35.6975L39.9999 55L22.5 35.6975H29.5883ZM50.4117 35.6975L40.0001 55L57.5 35.6975" fill="#EA6C00"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M29.5884 35.6975H50.4116L40 55" fill="#FDAD00"/>
        <path d="M40 25L30.1364 25.9876L29.5884 35.6974L40 25ZM40.0001 25L49.8637 25.9876L50.4117 35.6974" fill="#FDD231"/>
        <path d="M57.5 35.6974L49.8637 25.9875L50.4117 35.6974H57.5ZM22.5 35.6974L30.1363 25.9875L29.5883 35.6974" fill="#FDAD00"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40 25L29.5884 35.6974H50.4116" fill="#FEEEB7"/>
        </svg>
      )
    } else if ( props.logo === 'github' ) {
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M40 0C17.9 0 0 17.9 0 40C0 57.7 11.45 72.65 27.35 77.95C29.35 78.3 30.1 77.1 30.1 76.05C30.1 75.1 30.05 71.95 30.05 68.6C20 70.45 17.4 66.15 16.6 63.9C16.15 62.75 14.2 59.2 12.5 58.25C11.1 57.5 9.1 55.65 12.45 55.6C15.6 55.55 17.85 58.5 18.6 59.7C22.2 65.75 27.95 64.05 30.25 63C30.6 60.4 31.65 58.65 32.8 57.65C23.9 56.65 14.6 53.2 14.6 37.9C14.6 33.55 16.15 29.95 18.7 27.15C18.3 26.15 16.9 22.05 19.1 16.55C19.1 16.55 22.45 15.5 30.1 20.65C33.3 19.75 36.7 19.3 40.1 19.3C43.5 19.3 46.9 19.75 50.1 20.65C57.75 15.45 61.1 16.55 61.1 16.55C63.3 22.05 61.9 26.15 61.5 27.15C64.05 29.95 65.6 33.5 65.6 37.9C65.6 53.25 56.25 56.65 47.35 57.65C48.8 58.9 50.05 61.3 50.05 65.05C50.05 70.4 50 74.7 50 76.05C50 77.1 50.75 78.35 52.75 77.95C68.55 72.65 80 57.65 80 40C80 17.9 62.1 0 40 0Z" fill="black"/>
        </svg>
      ) 
    } else if ( props.logo === 'font' ) {
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#06D26C"/>
        <path d="M31.208 23.9539V30.8539H38.108" stroke="white" strokeWidth="3.45"/>
        <path d="M40.4076 46.9536V53.8536H47.3076" stroke="white" strokeWidth="3.45"/>
        <path d="M45.0077 33.1541V45.8041" stroke="white" strokeWidth="3.45"/>
        <path d="M45.0077 40.054H51.9077" stroke="white" strokeWidth="3.45"/>
        <circle cx="34.0827" cy="40.6289" r="3.45" stroke="white" strokeWidth="3.45"/>
        </svg>
      )
    } else if ( props.logo === 'illust' ) {
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#261302"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M32.6615 46.5441H40.4287L42.1408 51.2622C42.1825 51.4009 42.3287 51.5001 42.4749 51.4802H46.8387C47.0475 51.4802 47.1101 51.3811 47.0475 51.163L39.4264 30.7445C39.4056 30.6454 39.322 30.5859 39.155 30.5859H33.8098H33.7472C33.6428 30.6058 33.5593 30.7049 33.5802 30.804C33.5802 31.2401 33.5384 31.6762 33.4549 32.0925C33.3957 32.2611 33.347 32.4197 33.3014 32.5683C33.2826 32.6295 33.2643 32.6889 33.2461 32.7467L26.5229 51.1234C26.4602 51.3613 26.5229 51.4802 26.7525 51.4802H30.6779C30.8658 51.5001 31.0329 51.3811 31.0746 51.2027L32.6615 46.5441ZM39.1758 42.5203H33.8724C34.1856 41.6877 34.4988 40.7559 34.7911 39.7449C34.998 39.1313 35.1968 38.5176 35.3926 37.9134C35.513 37.5416 35.6323 37.1734 35.7516 36.811C36.0439 35.9586 36.2736 35.1061 36.4615 34.2537H36.5033C36.5847 34.5189 36.6662 34.7965 36.7513 35.0863C36.8188 35.3164 36.8887 35.5543 36.9626 35.8C37.1296 36.3749 37.3176 36.9498 37.5264 37.5643C37.6308 37.8716 37.7299 38.1739 37.8291 38.4762C37.9283 38.7785 38.0275 39.0808 38.1319 39.3881C38.3198 39.9828 38.5077 40.5577 38.6956 41.0929C38.8835 41.6084 39.0506 42.104 39.1758 42.5203Z" fill="#FF9A00"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M48.4909 33.2819C48.992 33.7379 49.6602 33.9956 50.3492 33.9758C51.0591 34.0154 51.769 33.7577 52.2492 33.2819C52.7503 32.7863 53.0009 32.1322 52.98 31.4582C53.0009 30.804 52.7503 30.1696 52.291 29.6938C51.8316 29.2379 51.2052 29 50.3909 29C49.7019 29 49.0338 29.2379 48.5327 29.6938C48.0315 30.1498 47.7601 30.7841 47.781 31.4582C47.7601 32.1322 48.0107 32.7863 48.4909 33.2819ZM48.0106 35.9185V51.1828C48.0106 51.381 48.115 51.5 48.3238 51.5H52.4162C52.6041 51.5 52.6876 51.4009 52.6876 51.1828V35.9185C52.6876 35.74 52.6041 35.6409 52.4162 35.6409H48.2821C48.0941 35.6409 48.0106 35.7202 48.0106 35.9185Z" fill="#FF9A00"/>
        </svg>
      )
    } else if ( props.logo === 'storybook' ) {
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
        <circle cx="40" cy="40" r="40" fill="#FF4785"/>
        <rect x="20" y="20" width="40" height="40" fill="url(#pattern0)"/>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use transform="scale(0.0025)"/>
        </pattern>
        </svg>
      )
    } else {
      return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48px" height="48px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
        <path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838
        c-12.106,12.108-31.734,12.108-43.84,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"/>
        <line stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="30" y1="43" x2="30" y2="47"/>  
        <path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M24,21c0-3,2-5,8-5c5,0,8,3,8,7s-6,7-6,7s-4,2-4,8v1"/>
        </svg>
      )
    }

  }

  let propsLength = 0;
  if (props) propsLength = Object.keys(props).length

  if ((propsLength !== 0) && (propsLength % 3 === 0)) {

    let newArray = [];

    for (let i=0; i<propsLength/3; i++) {

      let sliced = Object.keys(props).slice(3*i,3*i+3).reduce((result, key) => {
        result[key] = props[key]
        return result
      }, {});

      newArray.push(sliced)
    }

    let renamedArray = []
    newArray.map((el)=>{
      let altObj = Object.fromEntries(
        Object.entries(el).map(([key, value]) => 
          [key.slice(0,-1), value]
        )
      )
      renamedArray.push(altObj);
    })

    let finalArrayThree = []
    for (let i=0; i< Math.ceil(renamedArray.length/3); i++) {
      let sliced = renamedArray.slice(3*i, 3*i+3)
      finalArrayThree.push(sliced)
    }

    let finalArrayTwo = []
    for (let i=0; i< Math.ceil(renamedArray.length/2); i++) {
      let sliced = renamedArray.slice(2*i, 2*i+2)
      finalArrayTwo.push(sliced)
    }

    return (
      <div>
        {finalArrayThree.map((el, key) => {
        return (
          <div className="tabMainResourceWrapper" id={'tabMainResource'+key}>
            <div className="tabMainResourceContent">
              <div className="tabMainResourceContentLogo">
                { 
                  el[0] === undefined
                  ? null
                  : el[0].logo === '' 
                    ? <div />
                    : <LogoIcon logo={el[0].logo} />  
                }
              </div>  
              <div className="tabMainResourceContentText">
                <div className="tabMainResourceContentTextText">
                  { 
                    el[0] === undefined
                    ? null
                    : el[0].text === '' 
                      ? <span></span>
                      : <span>{el[0].text}</span>
                  }
                </div>
                <div className="tabMainResourceContentLink">
                  <a href={el[0].link} target="_blank">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.11108 9.88892L9.88886 2.11114" stroke="#424242" strokeLinecap="round"/>
                      <path d="M3.22217 2.11117H9.88883V8.77783" stroke="#424242" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>  
            </div>
            <div className="tabMainResourceContent">
              <div className="tabMainResourceContentLogo">
                { 
                  el[1] === undefined
                  ? null
                  : el[1].logo === '' 
                    ? <div />
                    : <LogoIcon logo={el[1].logo} />  
                }
              </div>  
              <div className="tabMainResourceContentText">
                <div className="tabMainResourceContentTextText">
                  { 
                    el[1] === undefined
                    ? null
                    : el[1].text === '' 
                      ? <span></span>
                      : <span>{el[1].text}</span>
                  }
                </div>
                <div className="tabMainResourceContentLink">
                  <a href={el[1].link} target="_blank">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.11108 9.88892L9.88886 2.11114" stroke="#424242" strokeLinecap="round"/>
                      <path d="M3.22217 2.11117H9.88883V8.77783" stroke="#424242" strokeLinecap="round"/>
                    </svg>
                  </a>                  
                </div>
              </div>  
            </div>
            <div className="tabMainResourceContent">
              <div className="tabMainResourceContentLogo">
                { 
                  el[2] === undefined
                  ? null
                  : el[2].logo === '' 
                    ? <div />
                    : <LogoIcon logo={el[2].logo} />  
                }
              </div>  
              <div className="tabMainResourceContentText">
                <div className="tabMainResourceContentTextText">
                  { 
                    el[2] === undefined
                    ? null
                    : el[2].text === '' 
                      ? <span></span>
                      : <span>{el[2].text}</span>
                  }
                </div>
                <div className="tabMainResourceContentLink">
                  <a href={el[2].link} target="_blank">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.11108 9.88892L9.88886 2.11114" stroke="#424242" strokeLinecap="round"/>
                      <path d="M3.22217 2.11117H9.88883V8.77783" stroke="#424242" strokeLinecap="round"/>
                    </svg>
                  </a>                  
                </div>
              </div>  
            </div>                        
          </div>
        )})}
        {finalArrayTwo.map((el, key)=>{
          return (
          <div className="tabMainResourceWrapperMobile" id={'tabMainResourceMob'+key}>
            <div className="tabMainResourceContent">
              <div className="tabMainResourceContentLogo">
                { 
                  el[0] === undefined
                  ? null
                  : el[0].logo === '' 
                    ? <div />
                    : <LogoIcon logo={el[0].logo} />  
                }
              </div>  
              <div className="tabMainResourceContentText">
                <div className="tabMainResourceContentTextText">
                  { 
                    el[0] === undefined
                    ? null
                    : el[0].text === '' 
                      ? <span></span>
                      : <span>{el[0].text}</span>
                  }
                </div>
                <div className="tabMainResourceContentLink">
                  <a href={el[0].link} target="_blank">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.11108 9.88892L9.88886 2.11114" stroke="#424242" strokeLinecap="round"/>
                      <path d="M3.22217 2.11117H9.88883V8.77783" stroke="#424242" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>  
            </div>
            <div className="tabMainResourceContent">
              <div className="tabMainResourceContentLogo">
                { 
                  el[1] === undefined
                  ? null
                  : el[1].logo === '' 
                    ? <div />
                    : <LogoIcon logo={el[1].logo} />  
                }
              </div>  
              <div className="tabMainResourceContentText">
                <div className="tabMainResourceContentTextText">
                  { 
                    el[1] === undefined
                    ? null
                    : el[1].text === '' 
                      ? <span></span>
                      : <span>{el[1].text}</span>
                  }
                </div>
                <div className="tabMainResourceContentLink">
                  <a href={el[1].link} target="_blank">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.11108 9.88892L9.88886 2.11114" stroke="#424242" strokeLinecap="round"/>
                      <path d="M3.22217 2.11117H9.88883V8.77783" stroke="#424242" strokeLinecap="round"/>
                    </svg>
                  </a>                  
                </div>
              </div>  
            </div>
          </div>
        )})}
      </div>
    )
  } else {
    return (
      <div>
        <span>invalid arguments</span>
      </div>
    )
  }

};

export default TabMainResource;