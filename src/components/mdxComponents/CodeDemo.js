import React from 'react';
import { CodeDemoStyles } from './CodeDemoStyles'

export default function CodeDemo(props) {

  const { code, children } = props;

  const closeControls = () => {
    console.log('close')
    const demoClass = document.getElementById("demo");
    if (demoClass.className === "demoContainer demoContainer--open") {
      demoClass.className="demoContainer"
    }
    const openButton = document.getElementById("openButton");
    openButton.classList.toggle('openButtonShow');
  }

  const openControls = () => {
    console.log('open')
    const demoClass = document.getElementById("demo");
    if (demoClass.className === "demoContainer") {
      demoClass.className="demoContainer demoContainer--open"
    }

    const openButton = document.getElementById("openButton");
    openButton.classList.toggle('openButtonShow');

  }

  return (
    <CodeDemoStyles>
      
      <div className="demoWrapper"> 
      {/* 우측 메뉴가 닫히면 open도 class에 추가됨 */}
        <div id="demo" className="demoContainer demoContainer--open">
          <div className="demoContent">
            {/* appbar */}
            <div className="demoAppbar">

              <div className="demoTabSection">
                <div className="mdc-tab-bar" role="tablist">
                  <div className="mdc-tab-scroller"> 
                    <div className="mdc-tab-scroller mdc-tab-scroller-scroll-area mdc-tab-scroller-scroll-area--scroll"> 
                      <div className="mdc-tab-scroller-scroll-content"> 

                        <button role="tab" className="mdc-tab component-demo-tab mdc-tab--active" tabindex="0">
                          <span className="mdc-tab-content">
                            <span className="mdc-tab-text-label">Light</span>
                          </span>
                        </button>

                        <button role="tab" className="mdc-tab component-demo-tab mdc-tab--active" tabindex="0">
                          <span className="mdc-tab-content">
                            <span className="mdc-tab-text-label">Dark</span>
                          </span>
                        </button>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* stage */}
            <div className="demoStage">

              <div className="stage-transition-container-variant stage-transition-container-variant--show">           
                {children}
              </div>
              
              <div className="stage-transition-container-variant">  
                  <span className="mdc-fab__label">Button</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CodeDemoStyles>
  );
}