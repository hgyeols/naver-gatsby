/**
 * 사이트 기본 설정
 * for templating variables
 */

const config = {
  gatsby: {
    pathPrefix: '/', // (Github pages 사용시 repository 이름 ex.'/naver-gatsby'), (custom domain시 '/')
    siteUrl: 'https://starry99.github.io/naver-gatsby', // (Github pages 사용시 github pages 기본 주소), (custom domain시 웹사이트 주소)
    // gaTrackingId: null, // Google Analytics Tracking ID
    // trailingSlash: false, // 각 항목 주소 맨 뒤에 slash '/' 붙는 여부
    naverOSS: false,
  },
  gnb: {
    title: 'NAVER DESIGN',
    titleLink: 'https://www.naver.com', // 타이틀 눌렀을 때의 Link
    titleTablet: 'NAVER DESIGN', // Tablet에서 표시될 title
    menu: [
      // text: GNB에 표시될 메뉴 이름, folderName: 실제 사용되는 /content/ 아래의 폴더 이름, part: LNB에 표시될 대분류
      { text: 'About', folderName: 'about', part: ['Introduction', 'How to Use'] },
      { text: 'UI Guide', folderName: 'design', part: ['Foundation', 'Service Guidelines'] },
      { text: 'Components', folderName: 'components', part: ['Modules', 'Service Guidelines'] },
      { text: 'UX Writing', folderName: 'ux-writing', part: ['UX Writing', 'Service Guidelines'] },
      { text: 'Brand', folderName: 'brand', part: [''] },
    ],
    search: {
      enabled: false,
      indexName: '',
    },
  },
  lnb: {
    ignoreIndex: true, // content/index.mdx를 LNB 메뉴에 넣지 않는지 결정
  },
  responsive: {
    maxWidth: 768, // (px), desktop 뷰에서 마크다운 컨텐츠(컨테이너)의 maximum width
    mobileMax: 599, // (px) 이 px 이하는 mobile
    tabletMax: 1151, // (px) 이 px 이하는 tablet
    tabletMin: 600, // (px) 이 px 이상은 tablet
    LNBWidth: 264, // (px) desktop 뷰에서 LNB의 width
  },
  footerLinks: [
    { text: 'Contact Us', link: 'https://naver.com' },
    { text: 'Github', link: 'https://github.com/naver' },
    { text: 'Wiki', link: 'https://github.com/naver' },
  ],
  siteMetadata: {
    title: 'site metadate title example',
    description: 'site description',
    ogImage: null, //  Social Media share og:image tag
    favicon: '',
  },
};

module.exports = config;
