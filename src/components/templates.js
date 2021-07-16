import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
// import { MDXProvider } from "@mdx-js/react"
import { Layout, Link } from '$components';
import NextPrevious from './NextPrevious';
import config from '../../config';
import {
  StyledHeading,
  StyledHeadingTabMain,
  StyledMainWrapper,
  StyledMainWrapperTabMain,
  Divider,
} from './styles/guide';

const forcedNavOrder = [];

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;
    if (!data) {
      return this.props.children;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { title },
      },
    } = data;

    // next previos 에서!!
    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter((slug) => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find((url) => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          // if (config.gatsby && config.gatsby.trailingSlash) {
          //   prefix = prefix + '/';
          // }

          // if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          //   return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          // } else {
          //   return { ...acc, items: [...acc.items, cur] };
          // }

          return { ...acc, items: [...acc.items, cur] };
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map((slug) => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;
    const metaDescription = mdx.frontmatter.metaDescription;

    const titleDescription = mdx.frontmatter.titleDescription;
    const titlePhoto = mdx.frontmatter.titlePhoto;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        {mdx.frontmatter.template && mdx.frontmatter.template === 'tabMain' ? (
          <div className={'tabMainWrapper'}>
            <div className={'tabMainPhoto'}>
              {titlePhoto && <img src={mdx.frontmatter.titlePhoto} />}
            </div>
            <div className={'titleWrapperTabMain'}>
              <StyledHeadingTabMain>{mdx.fields.title}</StyledHeadingTabMain>
              {titleDescription && (
                <div className={'titleDescriptionTabMain'}>{mdx.frontmatter.titleDescription}</div>
              )}
              <Divider />
            </div>
            <StyledMainWrapperTabMain>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </StyledMainWrapperTabMain>
          </div>
        ) : mdx.frontmatter.template === 'withDownload' ? (
          <div className={'defaultWrapper'}>
            <div className={'titleWrapper'}>
              <StyledHeading>{mdx.fields.title}</StyledHeading>
              {titleDescription && (
                <div className={'titleDescription'}>{mdx.frontmatter.titleDescription}</div>
              )}
            </div>
            <StyledMainWrapper>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </StyledMainWrapper>
            <div className={'addPaddTopBottom'}>
              <NextPrevious mdx={mdx} nav={nav} />
            </div>
          </div>
        ) : mdx.frontmatter.template === 'contactUs' ? (
          <div className={'defaultWrapper'}>
            <div className={'titleWrapper'}>
              <StyledHeading>{mdx.fields.title}</StyledHeading>
              {titleDescription && (
                <div className={'titleDescription'}>{mdx.frontmatter.titleDescription}</div>
              )}
              <Divider />
            </div>
            <StyledMainWrapper>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </StyledMainWrapper>
            <div className={'addPaddTopBottom'}>
              <NextPrevious mdx={mdx} nav={nav} />
            </div>
          </div>
        ) : (
          <div className={'defaultWrapper'}>
            <div className={'titleWrapper'}>
              <StyledHeading>{mdx.fields.title}</StyledHeading>
              {titleDescription && (
                <div className={'titleDescription'}>{mdx.frontmatter.titleDescription}</div>
              )}
              <Divider />
            </div>
            <StyledMainWrapper>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </StyledMainWrapper>
            <div className={'addPaddTopBottom'}>
              <NextPrevious mdx={mdx} nav={nav} />
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        template
        titlePhoto
        titleDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;
