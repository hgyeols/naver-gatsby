import React from 'react';
import { CodeDemoStyles } from './CodeDemoStyles'

const CodeSimulator = ( props ) => {

  console.log(props)

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
                            <span className="mdc-tab-text-label">{props.firstTabName}</span>
                          </span>
                        </button>

                        <button role="tab" className="mdc-tab component-demo-tab mdc-tab--active" tabindex="0">
                          <span className="mdc-tab-content">
                            <span className="mdc-tab-text-label">{props.secondTabName}</span>
                          </span>
                        </button>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <button id="openButton" className="mdc-icon-button component-demo-config-button mdc-button-open" onClick={openControls}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 13.5H26" stroke="#424242"/>
                  <path d="M10 13.5H18.5" stroke="#424242"/>
                  <line x1="10" y1="18.5" x2="26" y2="18.5" stroke="#424242"/>
                  <path d="M17.5 23.5H26" stroke="#424242"/>
                  <path d="M10 23.5H13.5" stroke="#424242"/>
                  <circle cx="20.5" cy="13.5" r="2" stroke="#424242"/>
                  <circle cx="15.5" cy="23.5" r="2" stroke="#424242"/>
                </svg>
              </button>

            </div>
            {/* stage */}
            <div className="demoStage">

              <div className="stage-transition-container-variant stage-transition-container-variant--show">
            
              </div>
              
              <div className="stage-transition-container-variant">
              
                
                  <span className="mdc-fab__label">Button</span>

              </div>

            </div>
          </div>
            {/* config */}
          <div className="demoConfig">

            <div className="demoConfigHeader" />

            <div className="fab-options">
              <div className="fab-options-header">
                <span className="fab-options-label">Controls</span>
                <button className="mdc-icon-button component-demo-config-button component-demo-panel-header-close" onClick={closeControls}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 13.5H26" stroke="#424242"/>
                    <path d="M10 13.5H18.5" stroke="#424242"/>
                    <line x1="10" y1="18.5" x2="26" y2="18.5" stroke="#424242"/>
                    <path d="M17.5 23.5H26" stroke="#424242"/>
                    <path d="M10 23.5H13.5" stroke="#424242"/>
                    <circle cx="20.5" cy="13.5" r="2" stroke="#424242"/>
                    <circle cx="15.5" cy="23.5" r="2" stroke="#424242"/>
                  </svg>

                </button>
              </div>

              <div className="fab-options-radio">
                <div className="fab-options-menu"><span className="fab-options-menu-label">Menu</span></div>
                <div className="mdc-form-field">
                  <div className="mdc-radio">
                    <input className="mdc-radio-native-control" type="radio" name="fab_size" />
                    <div className="mdc-radio-background">
                      <div className="mdc-radio-outer-circle"></div>
                      <div className="mdc-radio-inner-circle"></div>
                    </div>
                  </div>

                  <label>Option 1</label>
                </div>
                <div class="mdc-form-field">
                  <div class="mdc-radio">
                    <input class="mdc-radio-native-control" type="radio" name="fab_size" />
                    <div class="mdc-radio-background">
                      <div class="mdc-radio-outer-circle"></div>
                      <div class="mdc-radio-inner-circle"></div>
                    </div>
                  </div>
                  <label>Option 2</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CodeDemoStyles>

  )

}

export default CodeSimulator