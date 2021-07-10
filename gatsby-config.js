/**
 * 플러그인 설정
 */

require('dotenv').config(); // 환경변수...
const queries = require('./src/utils/algolia');
const config = require('./config'); // config.js에서 세팅값을 가져옴
const plugins = [
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /svgs/,
      },
    },
  },
  'gatsby-plugin-sitemap', // build 시 sitemap.xml을 자동으로 만들어줌
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/components/templates.js`),
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdowns', // 단순 구분용 이름
      path: `${__dirname}/content/`,
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-preload-fonts',
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-mdx', // mdx 사용
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images', // markdown에서 이미지 처리
          options: {
            maxWidth: 828,
            // withWebp: true, // 이 옵션을 넣으면 이미지가 Webp 파일이 됨
            wrapperStyle: 'margin-left: 0 !important; margin-right: 0 !important;',
          },
        },
        {
          resolve: 'gatsby-plugin-mdx-code-demo',
        },
      ],
      extensions: ['.mdx', '.md'],
    },
  },
  {
    // gatsby-remark-images를 쓰려면 필요
    resolve: `gatsby-plugin-sharp`,
    options: {},
  },
];
// check and add algolia
if (
  config.gnb.search &&
  config.gnb.search.enabled &&
  config.gnb.search.algoliaAppId &&
  config.gnb.search.algoliaAdminKey
) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.gnb.search.algoliaAppId, // algolia application id
      apiKey: config.gnb.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
    },
  });
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    gnbTitle: config.gnb.title,
    gnbTitleTablet: config.gnb.titleTablet,
    gnbMenu: config.gnb.menu,
    titleLink: config.gnb.titleLink ? config.gnb.titleLink : '/',
    siteUrl: config.gatsby.siteUrl,
    naverOSS: config.gatsby.naverOSS,
  },
  plugins: plugins,
  flags: {
    DEV_SSR: false,
    FAST_DEV: false, // Enable all experiments aimed at improving develop server start time
    PRESERVE_WEBPACK_CACHE: false, // (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Use webpack's persistent caching and don't delete webpack's cache when changing gatsby-node.js & gatsby-config.js files.
    PRESERVE_FILE_DOWNLOAD_CACHE: false, // (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.
    PARALLEL_SOURCING: false, // EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/parallel-sourcing-feedback)) · Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably.
    FUNCTIONS: false, // EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/functions-feedback)) · Compile Serverless functions in your Gatsby project and write them to disk, ready to deploy to Gatsby Cloud
  },
};
