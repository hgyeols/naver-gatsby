import styled from '@emotion/styled';

export const CodeDemoStyles = styled.div`

  .mdc-fab {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, .12);
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    padding: 0;
    border: none;
    fill: currentColor;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    overflow: hidden;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    background-color: #018786;
    color: #fff;
    color: var(--mdc-theme-on-secondary, #fff);
  }

  

  // .mdc-fab:not(.mdc-fab--extended) {
  //   border-radius: 50%;
  // }

  // .mdc-fab:hover,
  // .mdc-fab:focus {
  //   box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, .12);
  // }

  // .mdc-fab:active {
  //   box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, .12);
  // }

  // .mdc-fab:active,
  // .mdc-fab:focus {
  //   outline: none;
  // }

  // .mdc-fab:hover {
  //   cursor: pointer;
  // }

  // .mdc-fab>svg {
  //   width: 100%;
  // }

  // .mdc-fab {
  //   background-color: var(--mdc-theme-secondary, #018786);
  // }

  // .mdc-fab,.mdc-fab-icon {
  //   width: 24px;
  //   height: 24px;
  //   font-size: 24px;
  // }

  // .mdc-fab--mini {
  //   width: 40px;
  //   height: 40px;
  // }

  // .mdc-fab--extended {
  //   font-family: Roboto, sans-serif;
  //   -moz-osx-font-smoothing: grayscale;
  //   -webkit-font-smoothing: antialiased;
  //   font-size: .875rem;
  //   line-height: 2.25rem;
  //   font-weight: 500;
  //   letter-spacing: .0892857143em;
  //   text-decoration: none;
  //   text-transform: uppercase;
  //   border-radius: 24px;
  //   padding: 0 20px;
  //   width: auto;
  //   max-width: 100%;
  //   height: 48px;
  // }

  // .mdc-fab--extended,.mdc-fab-icon {
  //   margin-left: -8px;
  //   margin-right: 12px;
  // }


  // .mdc-fab--extended,.mdc-fab-label+.mdc-fab-icon {
  //   margin-left: 12px;
  //   margin-right: -8px;
  // }

  // .mdc-fab-label {
  //   justify-content: flex-start;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   overflow: hidden;
  // }

  // .mdc-fab-icon {
  //   transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  //   fill: currentColor;
  //   will-change: transform;
  // }

  // .mdc-fab,.mdc-fab-icon {
  //   display: inline-flex;
  //   align-items: center;
  //   justify-content: center;
  // }

  // .mdc-fab--exited {
  //   transform: scale(0);
  //   opacity: 0;
  //   transition: opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
  // }

  // .mdc-fab--exited,.mdc-fab-icon {
  //   transform: scale(0);
  //   transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
  // }

  .mdc-fab:before,
  .mdc-fab:after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }

  .mdc-fab:before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }


  .mdc-fab:before,
  .mdc-fab:after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }

  .mdc-fab:before,
  .mdc-fab:after {
    background-color: #fff;
  }

  .mdc-fab:before,
  .mdc-fab:after {
    background-color: var(--mdc-theme-on-secondary, #fff);
  }

  .mdc-fab:hover:before {
    opacity: .08;
  }


  // @keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  //   0%,
  //   50% {
  //     stroke-dashoffset: 29.7833385;
  //   }
  //   50% {
  //     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  //   }
  //   100% {
  //     stroke-dashoffset: 0;
  //   }
  // }

  // @keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  //   0%,
  //   68.2% {
  //     transform: scaleX(0);
  //   }
  //   68.2% {
  //     animation-timing-function: cubic-bezier(0, 0, 0, 1);
  //   }
  //   100% {
  //     transform: scaleX(1);
  //   }
  // }

  // @keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  //   from {
  //     animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
  //     opacity: 1;
  //     stroke-dashoffset: 0;
  //   }
  //   to {
  //     opacity: 0;
  //     stroke-dashoffset: -29.7833385;
  //   }
  // }

  // @keyframes mdc-checkbox-checked-indeterminate-checkmark {
  //   from {
  //     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  //     transform: rotate(0deg);
  //     opacity: 1;
  //   }
  //   to {
  //     transform: rotate(45deg);
  //     opacity: 0;
  //   }
  // }

  // @keyframes mdc-checkbox-indeterminate-checked-checkmark {
  //   from {
  //     animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
  //     transform: rotate(45deg);
  //     opacity: 0;
  //   }
  //   to {
  //     transform: rotate(360deg);
  //     opacity: 1;
  //   }
  // }

  // @keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  //   from {
  //     animation-timing-function: mdc-animation-deceleration-curve-timing-function;
  //     transform: rotate(-45deg);
  //     opacity: 0;
  //   }
  //   to {
  //     transform: rotate(0deg);
  //     opacity: 1;
  //   }
  // }

  // @keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  //   from {
  //     animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
  //     transform: rotate(0deg);
  //     opacity: 1;
  //   }
  //   to {
  //     transform: rotate(315deg);
  //     opacity: 0;
  //   }
  // }

  // @keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  //   0% {
  //     animation-timing-function: linear;
  //     transform: scaleX(1);
  //     opacity: 1;
  //   }
  //   32.8%,
  //   100% {
  //     transform: scaleX(0);
  //     opacity: 0;
  //   }
  // }

  // .mdc-checkbox {
  //   display: inline-block;
  //   position: relative;
  //   flex: 0 0 18px;
  //   box-sizing: content-box;
  //   width: 18px;
  //   height: 18px;
  //   line-height: 0;
  //   white-space: nowrap;
  //   cursor: pointer;
  //   vertical-align: bottom;
  //   padding: 11px;
  // }

  // .mdc-checkbox .mdc-checkbox-native-control:checked~.mdc-checkbox-background::before,
  // .mdc-checkbox,.mdc-checkbox-native-control:indeterminate~.mdc-checkbox-background::before {
  //   background-color: #018786;
  // }

  // .mdc-checkbox .mdc-checkbox-native-control:checked~.mdc-checkbox-background::before,
  // .mdc-checkbox .mdc-checkbox-native-control:indeterminate~.mdc-checkbox-background::before {
  //   background-color: var(--mdc-theme-secondary, #018786);
  // }

  // .mdc-checkbox,.mdc-checkbox-background {
  //   left: 11px;
  //   right: initial;
  //   top: 11px;
  // }

  // .mdc-checkbox,.mdc-checkbox-background::before {
  //   top: -13px;
  //   left: -13px;
  //   width: 40px;
  //   height: 40px;
  // }

  // .mdc-checkbox,.mdc-checkbox-native-control {
  //   top: 0px;
  //   right: 0px;
  //   left: 0px;
  //   width: 40px;
  //   height: 40px;
  // }

  // .mdc-checkbox-native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox-background {
  //   border-color: rgba(0, 0, 0, .54);
  //   background-color: transparent;
  // }

  // .mdc-checkbox-native-control:enabled:checked~.mdc-checkbox-background,
  // .mdc-checkbox-native-control:enabled:indeterminate~.mdc-checkbox-background {
  //   border-color: #018786;
  //   border-color: var(--mdc-theme-secondary, #018786);
  //   background-color: #018786;
  //   background-color: var(--mdc-theme-secondary, #018786);
  // }

  // @keyframes mdc-checkbox-fade-in-background-udal9gz {
  //   0% {
  //     border-color: rgba(0, 0, 0, .54);
  //     background-color: transparent;
  //   }
  //   50% {
  //     border-color: #018786;
  //     border-color: var(--mdc-theme-secondary, #018786);
  //     background-color: #018786;
  //     background-color: var(--mdc-theme-secondary, #018786);
  //   }
  // }

  // @keyframes mdc-checkbox-fade-out-background-udal9gz {
  //   0%,
  //   80% {
  //     border-color: #018786;
  //     border-color: var(--mdc-theme-secondary, #018786);
  //     background-color: #018786;
  //     background-color: var(--mdc-theme-secondary, #018786);
  //   }
  //   100% {
  //     border-color: rgba(0, 0, 0, .54);
  //     background-color: transparent;
  //   }
  // }

  // .mdc-checkbox--anim-unchecked-checked .mdc-checkbox-native-control:enabled~.mdc-checkbox-background,
  // .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox-native-control:enabled~.mdc-checkbox-background {
  //   animation-name: mdc-checkbox-fade-in-background-udal9gz;
  // }

  // .mdc-checkbox--anim-checked-unchecked .mdc-checkbox-native-control:enabled~.mdc-checkbox-background,
  // .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox-native-control:enabled~.mdc-checkbox-background {
  //   animation-name: mdc-checkbox-fade-out-background-udal9gz;
  // }

  // .mdc-checkbox-checkmark {
  //   color: #fff;
  // }

  // .mdc-checkbox-mixedmark {
  //   border-color: #fff;
  // }

  // .mdc-checkbox-native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox-background {
  //   border-color: rgba(0, 0, 0, .26);
  // }

  // .mdc-checkbox-native-control[disabled]:checked~.mdc-checkbox-background,
  // .mdc-checkbox-native-control[disabled]:indeterminate~.mdc-checkbox-background {
  //   border-color: transparent;
  //   background-color: rgba(0, 0, 0, .26);
  // }

  // .mdc-checkbox--disabled {
  //   cursor: default;
  //   pointer-events: none;
  // }

  // .mdc-checkbox-background {
  //   display: inline-flex;
  //   position: absolute;
  //   align-items: center;
  //   justify-content: center;
  //   box-sizing: border-box;
  //   width: 18px;
  //   height: 18px;
  //   border: 2px solid currentColor;
  //   border-radius: 2px;
  //   background-color: transparent;
  //   pointer-events: none;
  //   will-change: background-color, border-color;
  //   transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  // }

  // .mdc-checkbox-background .mdc-checkbox-background::before {
  //   background-color: #000;
  // }

  // .mdc-checkbox-background .mdc-checkbox-background::before {
  //   background-color: var(--mdc-theme-on-surface, #000);
  // }

  // .mdc-checkbox-checkmark {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   opacity: 0;
  //   transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  // }

  // .mdc-checkbox--upgraded,.mdc-checkbox-checkmark {
  //   opacity: 1;
  // }

  // .mdc-checkbox-checkmark-path {
  //   transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  //   stroke: currentColor;
  //   stroke-width: 3.12px;
  //   stroke-dashoffset: 29.7833385;
  //   stroke-dasharray: 29.7833385;
  // }

  // .mdc-checkbox-mixedmark {
  //   width: 100%;
  //   height: 0;
  //   transform: scaleX(0) rotate(0deg);
  //   border-width: 1px;
  //   border-style: solid;
  //   opacity: 0;
  //   transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  // }

  // .mdc-checkbox--upgraded .mdc-checkbox-background,
  // .mdc-checkbox--upgraded .mdc-checkbox-checkmark,
  // .mdc-checkbox--upgraded .mdc-checkbox-checkmark-path,
  // .mdc-checkbox--upgraded .mdc-checkbox-mixedmark {
  //   transition: none !important;
  // }

  // .mdc-checkbox--anim-unchecked-checked .mdc-checkbox-background,
  // .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox-background,
  // .mdc-checkbox--anim-checked-unchecked .mdc-checkbox-background,
  // .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox-background {
  //   animation-duration: 180ms;
  //   animation-timing-function: linear;
  // }

  // .mdc-checkbox--anim-unchecked-checked .mdc-checkbox-checkmark-path {
  //   animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox-mixedmark {
  //   animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-checked-unchecked .mdc-checkbox-checkmark-path {
  //   animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox-checkmark {
  //   animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox-mixedmark {
  //   animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox-checkmark {
  //   animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox-mixedmark {
  //   animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox-mixedmark {
  //   animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;
  //   transition: none;
  // }

  // .mdc-checkbox-native-control:checked~.mdc-checkbox-background,
  // .mdc-checkbox-native-control:indeterminate~.mdc-checkbox-background {
  //   transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);
  // }

  // .mdc-checkbox-native-control:checked~.mdc-checkbox-background .mdc-checkbox-checkmark-path,
  // .mdc-checkbox-native-control:indeterminate~.mdc-checkbox-background .mdc-checkbox-checkmark-path {
  //   stroke-dashoffset: 0;
  // }

  // .mdc-checkbox-background:before {
  //   position: absolute;
  //   transform: scale(0, 0);
  //   border-radius: 50%;
  //   opacity: 0;
  //   pointer-events: none;
  //   content: "";
  //   will-change: opacity, transform;
  //   transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  // }

  // .mdc-checkbox-native-control:focus~.mdc-checkbox-background:before {
  //   transform: scale(1);
  //   opacity: .12;
  //   transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
  // }

  // .mdc-checkbox__native-control {
  //   position: absolute;
  //   margin: 0;
  //   padding: 0;
  //   opacity: 0;
  //   cursor: inherit;
  // }

  // .mdc-checkbox__native-control:disabled {
  //   cursor: default;
  //   pointer-events: none;
  // }

  // .mdc-checkbox--touch {
  //   margin-top: 4px;
  //   margin-bottom: 4px;
  //   margin-right: 4px;
  //   margin-left: 4px;
  // }

  // .mdc-checkbox--touch .mdc-checkbox__native-control {
  //   top: -4px;
  //   right: -4px;
  //   left: -4px;
  //   width: 48px;
  //   height: 48px;
  // }

  // .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark {
  //   transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
  //   opacity: 1;
  // }

  // .mdc-checkbox__native-control:checked~.mdc-checkbox-background .mdc-checkbox-mixedmark {
  //   transform: scaleX(1) rotate(-45deg);
  // }

  // .mdc-checkbox-native-control:indeterminate~.mdc-checkbox-background .mdc-checkbox-checkmark {
  //   transform: rotate(45deg);
  //   opacity: 0;
  //   transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  // }

  // .mdc-checkbox-native-control:indeterminate~.mdc-checkbox-background .mdc-checkbox-mixedmark {
  //   transform: scaleX(1) rotate(0deg);
  //   opacity: 1;
  // }
  
  // .mdc-form-field--align-end>label {
  //   order: -1;
  //   margin-left: auto;
  //   padding-right: 4px;
  // }

  // .mdc-form-field--align-end>label {
  //   order: -1;
  //   margin-left: auto;
  //   padding-right: 4px;
  // }

  // .mdc-radio-native-control {
  //   top: 0px;
  //   right: 0px;
  //   left: 0px;
  //   width: 40px;
  //   height: 40px;
  // }

  .mdc-radio {
    display: inline-block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    cursor: pointer;
    will-change: opacity, transform, border-color, color;
  }

  .mdc-radio .mdc-radio-native-control:enabled:not(:checked)+.mdc-radio-background .mdc-radio-outer-circle {
    border-color: #e2e2e2;
  }

  .mdc-radio .mdc-radio-native-control:enabled:checked+.mdc-radio-background .mdc-radio-outer-circle {
    // 선택시 outer-circle
  }

  .mdc-radio .mdc-radio-native-control:enabled+.mdc-radio-background .mdc-radio-inner-circle {
    border-color: #03C65A;
  }

  .mdc-radio .mdc-radio-background::before {
    background-color: #03C65A;
  }

  .mdc-radio .mdc-radio-background::before {
    background-color: var(--mdc-theme-secondary, #03C65A;);
  }

  // .mdc-radio-background {
  //   display: inline-block;
  //   position: absolute;
  //   left: 10px;
  //   box-sizing: border-box;
  //   width: 50%;
  //   height: 50%;
  // }

  // .mdc-radio-background::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   transform: scale(0, 0);
  //   border-radius: 50%;
  //   opacity: 0;
  //   pointer-events: none;
  //   content: "";
  //   transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  // }

  .mdc-radio-outer-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e2e2;
    border-radius: 50%;
    transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }

  .mdc-radio-inner-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    transform: scale(0, 0);
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
    transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }

  .mdc-radio-native-control {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
    z-index: 1;
  }

  // .mdc-radio--touch {
  //   margin-top: 4px;
  //   margin-bottom: 4px;
  //   margin-right: 4px;
  //   margin-left: 4px;
  // }

  // .mdc-radio--touch .mdc-radio-native-control {
  //   top: -4px;
  //   right: -4px;
  //   left: -4px;
  //   width: 48px;
  //   height: 48px;
  // }

  // .mdc-radio-native-control:checked+.mdc-radio-background,
  // .mdc-radio-native-control:disabled+.mdc-radio-background {
  //   transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  // }

  // .mdc-radio-native-control:checked+.mdc-radio-background .mdc-radio-outer-circle,
  // .mdc-radio-native-control:disabled+.mdc-radio-background .mdc-radio-outer-circle {
  //   transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  // }

  .mdc-radio-native-control:checked+.mdc-radio-background .mdc-radio-inner-circle,
  .mdc-radio-native-control:disabled+.mdc-radio-background .mdc-radio-inner-circle {
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }

  // .mdc-radio--disabled {
  //   cursor: default;
  //   pointer-events: none;
  // }

  .mdc-radio-native-control:checked+.mdc-radio-background .mdc-radio-inner-circle {
    transform: scale(0.4);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }

  // .mdc-radio-native-control:disabled+.mdc-radio-background,
  // [aria-disabled=true] .mdc-radio-native-control+.mdc-radio-background {
  //   cursor: default;
  // }

  // .mdc-radio-native-control:disabled+.mdc-radio-background .mdc-radio-outer-circle,
  // [aria-disabled=true] .mdc-radio-native-control+.mdc-radio-background .mdc-radio-outer-circle {
  //   border-color: rgba(0, 0, 0, .26);
  // }

  // .mdc-radio-native-control:disabled+.mdc-radio-background .mdc-radio-inner-circle,
  // [aria-disabled=true] .mdc-radio-native-control+.mdc-radio-background .mdc-radio-inner-circle {
  //   border-color: rgba(0, 0, 0, .26);
  // }

  // .mdc-radio-native-control:focus+.mdc-radio-background::before {
  //   transform: scale(2, 2);
  //   opacity: .12;
  //   transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  // }

  .openButtonShow {
    display: block !important;
  }

  .mdc-icon-button {
    // display: inline-block;
    position: relative;
    box-sizing: border-box;
    border: none;
    outline: none;
    margin-right: 10px;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // .mdc-icon-button svg,
  // .mdc-icon-button img {
  //   width: 24px;
  //   height: 24px;
  // }

  // .mdc-icon-button:disabled {
  //   color: rgba(0, 0, 0, .38);
  //   color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
  //   cursor: default;
  //   pointer-events: none;
  // }

  // .mdc-icon-button-icon {
  //   display: inline-block;
  // }

  // .mdc-icon-button-icon.mdc-icon-button-icon--on {
  //   display: none;
  // }

  // .mdc-icon-button--on .mdc-icon-button-icon {
  //   display: none;
  // }

  // .mdc-icon-button--on .mdc-icon-button-icon.mdc-icon-button-icon--on {
  //   display: inline-block;
  // }

  // .mdc-icon-button::before,
  // .mdc-icon-button::after {
  //   position: absolute;
  //   border-radius: 50%;
  //   opacity: 0;
  //   pointer-events: none;
  //   content: "";
  // }

  // .mdc-icon-butto::before {
  //   transition: opacity 15ms linear, background-color 15ms linear;
  //   z-index: 1;
  // }

  // .mdc-icon-button:before,
  // .mdc-icon-button:after {
  //   top: calc(50% - 50%);
  //   left: calc(50% - 50%);
  //   width: 100%;
  //   height: 100%;
  // }

  // .mdc-icon-button:before,
  // .mdc-icon-button:after {
  //   background-color: #000;
  // }

  // .mdc-icon-button:hover:before {
  //   opacity: .04;
  // }

  .mdc-tab-bar {
    width: 100%;
  }

  .mdc-tab {
    height: 48px;
  }

  .mdc-tab--stacked {
    height: 72px;
  }

  .mdc-tab-scroller {
    overflow-y: hidden;
  }

  .mdc-tab-scroller-test {
    position: absolute;
    top: -9999px;
    width: 100px;
    height: 100px;
    overflow-x: scroll;
  }

  .mdc-tab-scroller-scroll-area {
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: hidden;
  }

  // .-r-scroll-area::-webkit-scrollbar,
  // .mdc-tab-scroller-test::-webkit-scrollbar {
  //   display: none;
  // }

  .mdc-tab-scroller-scroll-area--scroll {
    overflow-x: scroll;
  }

  .mdc-tab-scroller-scroll-content {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    transform: none;
    will-change: transform;
  }

  // .mdc-tab-scroller--align-start .mdc-tab-scroller-scroll-content {
  //   justify-content: flex-start;
  // }

  // .mdc-tab-scroller--align-end .mdc-tab-scroller-scroll-content {
  //   justify-content: flex-end;

  // .mdc-tab-scroller--align-center .mdc-tab-scroller-scroll-content {
  //   justify-content: center;
  // }

  // .mdc-tab-scroller--animating .mdc-tab-scroller-scroll-area {
  //   -webkit-overflow-scrolling: auto;
  // }

  // .mdc-tab-scroller--animating .mdc-tab-scroller-scroll-content {
  //   transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);
  // }

  .mdc-tab-indicator {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  // .mdc-tab-indicator .mdc-tab-indicator-content--underline {
  //   border-color: #6200ee;
  //   border-color: var(--mdc-theme-primary, #6200ee);
  // }

  // .mdc-tab-indicator .mdc-tab-indicator-content--icon {
  //   color: #018786;
  //   color: var(--mdc-theme-secondary, #018786);
  // }

  // .mdc-tab-indicator .mdc-tab-indicator-content--underline {
  //   border-top-width: 2px;
  // }

  // .mdc-tab-indicator .mdc-tab-indicator-content--icon {
  //   height: 34px;
  //   font-size: 34px;
  // }

  .mdc-tab-indicator-content {
    transform-origin: left;
    opacity: 0;
  }

  .mdc-tab-indicator-content--underline {
    align-self: flex-end;
    box-sizing: border-box;
    width: 100%;
    border-top-style: solid;
  }

  .mdc-tab-indicator-content--icon {
    align-self: center;
    margin: 0 auto;
  }

  .mdc-tab-indicator--active,.mdc-tab-indicator-content {
    opacity: 1;
  }

  // .mdc-tab-indicator .mdc-tab-indicator-content {
  //   transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);
  // }

  // .mdc-tab-indicator--no-transition .mdc-tab-indicator-content {
  //   transition: none;
  // }

  // .mdc-tab-indicator--fade .mdc-tab-indicator-content {
  //   transition: 150ms opacity linear;
  // }

  // .mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator-content {
  //   transition-delay: 100ms;
  // }


  .mdc-tab .mdc-tab-text-label {
    color: rgba(0, 0, 0, .6);
  }

  .mdc-tab .mdc-tab-icon {
    color: rgba(0, 0, 0, .54);
    fill: currentColor;
  }

  // .mdc-tab::-moz-focus-inner {
  //   padding: 0;
  //   border: 0;
  // }

  .mdc-tab--min-width {
    flex: 0 1 auto;
  }

  .mdc-tab-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    pointer-events: none;
  }

  .mdc-tab-text-label {
    transition: 150ms color linear;
    display: inline-block;
    line-height: 1;
    z-index: 2;
  }

  .mdc-tab-icon {
    transition: 150ms color linear;
    width: 24px;
    height: 24px;
    font-size: 24px;
    z-index: 2;
  }

  // .mdc-tab--stacked .mdc-tab-content {
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  // .mdc-tab--stacked .mdc-tab-text-label {
  //   padding-top: 6px;
  //   padding-bottom: 4px;
  // }

  // .mdc-tab--active .mdc-tab-text-label {
  //   color: #6200ee;
  //   color: var(--mdc-theme-primary, #6200ee);
  // }

  // .mdc-tab--active .mdc-tab-icon {
  //   color: #6200ee;
  //   color: var(--mdc-theme-primary, #6200ee);
  //   fill: currentColor;
  // }

  // .mdc-tab--active .mdc-tab-text-label,
  // .mdc-tab--active .mdc-tab-icon {
  //   transition-delay: 100ms;
  // }

  // .mdc-tab:not(.mdc-tab--stacked) .mdc-tab-icon+.mdc-tab-text-label {
  //   padding-left: 8px;
  //   padding-right: 0;
  // }

  .demoWrapper {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .demoContainer {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .demoContainer--open .demoConfig {
    display: block !important;
  }

  .demoContainer .demoContent {
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
    transition: width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }

  .demoContainer--open .demoContent {
    width: calc(100% - 200px);
  }

  .demoContainer--open .component-demo-config-button {
    transition-delay: 0ms;
  } 

  .demoContainer .demoConfig  {
    background-color: #fff;
    display: none;
    z-index: 10;
    height: 100%;
    width: 200px;
  }

  .demoContainer .demoConfigHeader {
    height: 48px;
    background-color: #fff;
  }

  .demoStage {
    background: #fafafa;
    flex: 1 1 auto;
    min-height: 250px;
    position: relative;
  }

  .demoAppbar {
    background-color: #fff;
    flex-shrink: 0;
    height: 48px;
    padding-right: 4px;
    display: flex;
    position: relative;
  }

  .demoTabSection {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
  }

  .demoTabSection .mdc-tab-bar {
    width: auto;
    background-color: #fafafa;
  }

  .mdc-tab {
    font-family: 'SF Pro Display';
    font-weight: 700;
    font-size: 16px;
    line-height: 1.3;
    text-decoration: none;
    // padding: 14px 49px;
    position: relative;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    border: none;
    outline: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    z-index: 1;
    background-color: #fafafa;
  }

  .mdc-button-open {
    // top: 50px;
    display: none;
  }

  .mdc-form-field {
    font-family: 'SF Pro Text', 'Apple SD Gothic Neo';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    color: #424242;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin-bottom: 26px;
  }

  .mdc-form-field>label {
    order: 0;
    margin-right: auto;
    padding-left: 12px;
  }

  .component-demo-tab {
    padding-right: 49px;
    padding-left: 49px;
  }
  
  // .component-demo-config-button,
  // .component-demo-panel-header-close {
  //   border-radius: 0;
  //   height: 100%;
  //   transition: visibility 0s linear 225ms;
  // }

  .component-demo-config-button:hover {
    border-radius: 50%;
    background-color: #f1f1f1;
    transition: visibility 0s linear 225ms;
  }
  
  .stage-transition-container-variant {
    position: absolute;
    padding: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: 0;
    transition-duration: 250ms;
    transition-property: opacity, visibility;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    visibility: hidden;
    z-index: 0;
  }
  
  .stage-transition-container-variant--show {
    opacity: 1;
    visibility: visible;
  }
  
  @media(max-width: 520px) {
    .demoTabSection {
      max-width: 100%;
      justify-content: center;
      width: calc(100% - 47px);
      flex: initial;
    }
    .demoTabSection .mdc-tab-bar {
      width: 100%;
    }
    .demoTabSection .mdc-tab-scroller__scroll-content {
      padding-left: 16px;
      padding-right: 16px;
    }
    .demoAppBar {
      padding-left: 0px;
      padding-right: 0px;
    }
    .component-demo__config-button {
      visibility: visible;
      position: absolute;
      right: 0;
      box-shadow: -10px 0px 10px #fff;
      background-color: #fff;
    }
    
    .demoContainer .demoContent {
      position: relative;
    }
    .demoContainer--open .demoContent {
      width: 100%;
      position: relative;
    }
    .stage-transition-container-variant {
      padding: 40px 20px;
    }
  }
  
  .fab-options {
    min-height: 250px;
    border: 1px solid #E2E2E2;
  }

  .fab-options-header {
    display: flex;
    flex-direction: row;
    height: 56px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e2e2e2;
  }
  
  .fab-options-label {
    font-family: 'SF Pro Display';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    margin-left: 21px;
    color: #424242;
  }

  .fab-options-radio {
    padding: 0 0 0 21px;
    display: flex;
    flex-direction: column;
  }

  .fab-options-menu {
    margin: 21px 0;
  }

  .fab-options-menu-label {
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #919191;
  }

  .fab-options-radio .mdc-radio {

  }
  
  .fab-options-checkbox {
    padding: 0 0 0 8px;
  }
  
  .fab-options__checkbox .mdc-checkbox {
    padding: 5px;
  }
  
  .fab-options__checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background {
    border-color: rgba(0, 0, 0, .54);
    background-color: transparent;
  }
  
  .fab-options__checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,
  .fab-options__checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background {
    border-color: rgba(0, 0, 0, .87);
    background-color: rgba(0, 0, 0, .87);
  }
  
  @keyframes mdc-checkbox-fade-in-background-udal9h4 {
    0% {
      border-color: rgba(0, 0, 0, .54);
      background-color: transparent;
    }
    50% {
      border-color: rgba(0, 0, 0, .87);
      background-color: rgba(0, 0, 0, .87);
    }
  }
  
  @keyframes mdc-checkbox-fade-out-background-udal9h4 {
    0%,
    80% {
      border-color: rgba(0, 0, 0, .87);
      background-color: rgba(0, 0, 0, .87);
    }
    100% {
      border-color: rgba(0, 0, 0, .54);
      background-color: transparent;
    }
  }
  
  .fab-options__checkbox .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,
  .fab-options__checkbox .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background {
    animation-name: mdc-checkbox-fade-in-background-udal9h4;
  }
  
  .fab-options__checkbox .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,
  .fab-options__checkbox .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background {
    animation-name: mdc-checkbox-fade-out-background-udal9h4;
  }
  
  .fab-options__checkbox .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,
  .fab-options__checkbox .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before {
    background-color: #000;
  }
      
  
  .fab-options__checkbox .mdc-checkbox__background {
    width: 16px;
    height: 16px;
    left: 6px;
    top: 6px;
  }
  
  .fab-options__checkbox .mdc-checkbox~label {
    color: rgba(0, 0, 0, .6);
    cursor: pointer;
  }
  
  .fab-options__checkbox .mdc-checkbox[data-checked]~label {
    color: rgba(0, 0, 0, .87);
  }
  
  .fab-options__checkbox .mdc-checkbox[data-disabled]~label {
    color: rgba(0, 0, 0, .38);
  }
    
  .fab-options-radio .mdc-form-field {
    display: flex;
  }
  
  
  .fab-options-radio .mdc-radio-background {
    width: 18px;
    height: 18px;
  }
  
  .fab-options-radio .mdc-radio-inner-circle {
    border-width: 9px;
  }
  
  .fab-options-radio .mdc-radio~label {
    color: rgba(0, 0, 0, .6);
    cursor: pointer;
  }
  
  .fab-options-radio .mdc-radio[data-checked]~label {
    color: rgba(0, 0, 0, .87);
  }
  
  .fab-options-radio .mdc-radio[data-disabled]~label {
    color: rgba(0, 0, 0, .38);
  }
  
  .inline-demo-fab {
    background-color: #6200ee;
  }
  
  .inline-demo-fab {
    background-color: var(--mdc-theme-primary, #6200ee);
  }
`