import React, { useState } from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const WhatsNewWrapper = styled.div`
  .buttonsWrapper {
    /* display: inline-block; */
    height: 48px;
    margin-bottom: 32px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  outline: none;
  border: 1px solid #e2e2e2;
  margin: -1px 0 0 -1px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? '#131313 ' : '#fff')};
  padding: 0 !important;
  text-decoration: none;
  width: 160px;
  height: 100%;
  font-family: 'SF Pro Display';
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => (props.isActive ? '#f3f3f3 ' : '#919191')};
`;

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    <Button onClick={onItemClicked} isActive={isActive}>
      {title}
    </Button>
  );
};

const WhatsNew = () => {
  const data = useStaticQuery(graphql`
    query whatsNew {
      allMdx(filter: { frontmatter: { template: { eq: "whatsNewChanges" } } }) {
        edges {
          node {
            body
            fields {
              slug
            }
          }
        }
      }
      site {
        siteMetadata {
          gnbMenu {
            text
            folderName
          }
        }
      }
    }
  `);

  const {
    allMdx,
    site: {
      siteMetadata: { gnbMenu },
    },
  } = data;

  let newArray = [];
  if (allMdx && gnbMenu) {
    gnbMenu.map((el) => {
      let temp = allMdx.edges.filter(
        (e) => e.node.fields.slug.slice(1).split('/')[0] === el.folderName
      )[0];

      if (temp) {
        newArray.push({
          title: el.text,
          body: allMdx.edges.filter(
            (e) => e.node.fields.slug.slice(1).split('/')[0] === el.folderName
          )[0].node.body,
        });
      }
    });
  }

  const [active, setActive] = useState(0);

  return (
    <WhatsNewWrapper>
      <div className="buttonsWrapper">
        {newArray.map((el, index) => (
          <TabItemComponent
            key={index}
            title={el.title}
            onItemClicked={() => setActive(index)}
            isActive={active === index}
          />
        ))}
      </div>
      <div>
        {newArray.map((el, index) => {
          return active === index ? <MDXRenderer>{el.body}</MDXRenderer> : null;
        })}
      </div>
    </WhatsNewWrapper>
  );
};

export default WhatsNew;
