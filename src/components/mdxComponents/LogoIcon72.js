const LogoIcon72 = (props) => {
  if (props.logo === 'figma') {
    return (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#1F2226" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36 36C36 33.2386 38.2386 31 41 31C43.7614 31 46 33.2386 46 36C46 38.7614 43.7614 41 41 41C38.2386 41 36 38.7614 36 36Z"
          fill="#1ABCFE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 46C26 43.2386 28.2386 41 31 41H36V46C36 48.7614 33.7614 51 31 51C28.2386 51 26 48.7614 26 46Z"
          fill="#0ACF83"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36 21V31H41C43.7614 31 46 28.7614 46 26C46 23.2386 43.7614 21 41 21H36Z"
          fill="#FF7262"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 26C26 28.7614 28.2386 31 31 31H36V21H31C28.2386 21 26 23.2386 26 26Z"
          fill="#F24E1E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 36C26 38.7614 28.2386 41 31 41H36V31H31C28.2386 31 26 33.2386 26 36Z"
          fill="#A259FF"
        />
      </svg>
    );
  } else if (props.logo === 'sketch') {
    return (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#1F2226" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1363 21.9877L36 21L45.8636 21.9877L53.4999 31.6975L36 50.9999L18.5 31.6975L26.1363 21.9877Z"
          fill="#FDB300"
        />
        <path
          d="M25.5883 31.6975L35.9999 51L18.5 31.6975H25.5883ZM46.4117 31.6975L36.0001 51L53.5 31.6975"
          fill="#EA6C00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5883 31.6975H46.4114L35.9998 51"
          fill="#FDAD00"
        />
        <path
          d="M35.9998 21L26.1362 21.9876L25.5883 31.6974L35.9998 21ZM36 21L45.8636 21.9876L46.4116 31.6974"
          fill="#FDD231"
        />
        <path
          d="M53.5 31.6974L45.8637 21.9875L46.4117 31.6974H53.5ZM18.5 31.6974L26.1363 21.9875L25.5883 31.6974"
          fill="#FDAD00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.9998 21L25.5883 31.6974H46.4114"
          fill="#FEEEB7"
        />
      </svg>
    );
  } else if (props.logo === 'github') {
    return (
      <svg
        width="72"
        height="74"
        viewBox="0 0 72 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#1F2226" />
        <circle cx="36" cy="37.2" r="36" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36 0C16.11 0 0 16.5175 0 36.9106C0 53.2435 10.305 67.0388 24.615 71.9295C26.415 72.2525 27.09 71.1451 27.09 70.1762C27.09 69.2996 27.045 66.3929 27.045 63.3016C18 65.0088 15.66 61.0409 14.94 58.9646C14.535 57.9035 12.78 54.6277 11.25 53.751C9.99 53.059 8.19 51.3518 11.205 51.3057C14.04 51.2596 16.065 53.9817 16.74 55.089C19.98 60.6718 25.155 59.1031 27.225 58.1342C27.54 55.735 28.485 54.1201 29.52 53.1974C21.51 52.2746 13.14 49.0911 13.14 34.9728C13.14 30.9587 14.535 27.6368 16.83 25.0531C16.47 24.1303 15.21 20.347 17.19 15.2718C17.19 15.2718 20.205 14.3028 27.09 19.0551C29.97 18.2246 33.03 17.8094 36.09 17.8094C39.15 17.8094 42.21 18.2246 45.09 19.0551C51.975 14.2567 54.99 15.2718 54.99 15.2718C56.97 20.347 55.71 24.1303 55.35 25.0531C57.645 27.6368 59.04 30.9126 59.04 34.9728C59.04 49.1372 50.625 52.2746 42.615 53.1974C43.92 54.3508 45.045 56.5655 45.045 60.0258C45.045 64.9626 45 68.9305 45 70.1762C45 71.1451 45.675 72.2986 47.475 71.9295C61.695 67.0388 72 53.1974 72 36.9106C72 16.5175 55.89 0 36 0Z"
          fill="black"
        />
      </svg>
    );
  } else if (props.logo === 'font') {
    return (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#06D26C" />
        <path d="M27.3068 20.5881V26.9789H33.6975" stroke="white" stroke-width="3.19538" />
        <path d="M35.8277 41.8906V48.2814H42.2185" stroke="white" stroke-width="3.19538" />
        <path d="M40.0883 29.1094V40.8258" stroke="white" stroke-width="3.19538" />
        <path d="M40.0883 35.5H46.479" stroke="white" stroke-width="3.19538" />
        <circle cx="29.9695" cy="36.0326" r="3.19538" stroke="white" stroke-width="3.19538" />
      </svg>
    );
  } else if (props.logo === 'illust') {
    return (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#261302" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.8579 41.924H36.1682L37.7796 46.3645C37.8189 46.4951 37.9564 46.5884 38.094 46.5698H42.2011C42.3976 46.5698 42.4566 46.4765 42.3976 46.2712L35.2249 27.0538C35.2052 26.9605 35.1266 26.9045 34.9694 26.9045H29.9387H29.8797C29.7815 26.9232 29.7029 27.0165 29.7225 27.1098C29.7225 27.5202 29.6832 27.9307 29.6046 28.3225C29.5489 28.4812 29.5031 28.6304 29.4601 28.7703C29.4425 28.8279 29.4253 28.8838 29.4081 28.9382L23.0804 46.2339C23.0214 46.4578 23.0804 46.5698 23.2965 46.5698H26.991C27.1678 46.5884 27.3251 46.4765 27.3644 46.3086L28.8579 41.924ZM34.9891 38.1368H29.9976C30.2924 37.3531 30.5872 36.4762 30.8623 35.5247C31.057 34.9471 31.2441 34.3696 31.4283 33.8009C31.5417 33.451 31.654 33.1045 31.7663 32.7633C32.0414 31.9611 32.2575 31.1588 32.4344 30.3565H32.4737C32.5504 30.6061 32.6271 30.8673 32.7072 31.1402C32.7707 31.3567 32.8365 31.5806 32.906 31.8118C33.0632 32.3529 33.2401 32.8939 33.4366 33.4723C33.5349 33.7615 33.6282 34.046 33.7216 34.3306C33.8149 34.6151 33.9083 34.8996 34.0065 35.1888C34.1834 35.7486 34.3602 36.2896 34.5371 36.7934C34.714 37.2785 34.8712 37.7449 34.9891 38.1368Z"
          fill="#FF9A00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.7562 29.4419C44.2278 29.8711 44.8567 30.1136 45.5052 30.0949C46.1733 30.1323 46.8415 29.8897 47.2934 29.4419C47.7651 28.9755 48.0009 28.3598 47.9812 27.7254C48.0009 27.1097 47.7651 26.5127 47.3327 26.0649C46.9004 25.6358 46.3109 25.4119 45.5445 25.4119C44.896 25.4119 44.2671 25.6358 43.7955 26.0649C43.3239 26.494 43.0684 27.0911 43.0881 27.7254C43.0684 28.3598 43.3042 28.9755 43.7562 29.4419ZM43.3042 31.9233V46.2898C43.3042 46.4764 43.4024 46.5883 43.599 46.5883H47.4506C47.6275 46.5883 47.7061 46.495 47.7061 46.2898V31.9233C47.7061 31.7554 47.6275 31.6621 47.4506 31.6621H43.5597C43.3828 31.6621 43.3042 31.7368 43.3042 31.9233Z"
          fill="#FF9A00"
        />
      </svg>
    );
  } else if (props.logo === 'storybook') {
    return (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#FF4785" />
        <rect x="16" y="16" width="40" height="40" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0" transform="scale(0.0025)" />
          </pattern>
          <image
            id="image0"
            width="400"
            height="400"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAgAElEQVR4Ae2dCbgU1YG2J8mY/FlmMpnMZJ1MJnsm+yR/Mtkm28ykTt3LIiruW6IS9yUGt2iC0XOq78IqiCCLKCKriIiKCCiIICACAiKCgIKyyL6v3zzn9u3Qt5fb1d3VtZzz1fPc53ZXV1fVeevU99bpqjr1N3/DgQRIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIIGEEALyr5a/r2Pcg89ejx7v1uIQVhatLAiRAAiRQDgEsXHgSXPXP6ND4JQjv+3BS9XDVaXC8i+GqP8CRd0Ko/hBqJIR8DEI9B6GWQcgNEOooHImCf0IegiPnQEgFkfppOevEaUmABEiABEIgAOC9AD4G4MsAfgDg1wC6ArgEQHcAEsAAAA8CmAJgDoDlADYCOIopiwoLoJgYKh//AoQ6BT3w7hCwcBEkQAIkYD4B9Hv8fXh988exdfdXcBj/CcABcDqAbgBuAKAA3A1gFIDHATwPYAWAdwAcQ7XDtKVhCSS9HCHnomPT58zfsiwhCZAACZQggE4Nf4e6xk+go/oq3IYfos4TcL0zINTv4Ho3QigPrhwIoR6Co56ADlBHvQKh3oaQx9BzcrUKqO77s1aEKxDdghFyF4Q8swRafkwCJEAC8SaArr3eD6f3J1Hf8O8Q6kdwU64ONzjepRDqJjgyBaHugaNGQ8gn4ah5EHIlHLWpRQCV/6STDu7+T1YngGq/Pe+18AXyV2bepfGuHVw7EiABowmg46APoFPDp+Cqr6E+9WMIVQfh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"
          />
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="72px"
        height="72px"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
      >
        <path
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838
      c-12.106,12.108-31.734,12.108-43.84,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"
        />
        <line
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="30"
          y1="43"
          x2="30"
          y2="47"
        />
        <path
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M24,21c0-3,2-5,8-5c5,0,8,3,8,7s-6,7-6,7s-4,2-4,8v1"
        />
      </svg>
    );
  }
};

export default LogoIcon72;