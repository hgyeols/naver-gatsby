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
  /* background: none !important; */
  background: ${(props) => (props.isActive ? '#131313 ' : '#fff')};
  padding: 0 !important;
  text-decoration: none;
  /* display: flex;
  align-items: center; */
  width: 160px;
  height: 100%;
  font-family: 'SF Pro Display';
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => (props.isActive ? '#f3f3f3 ' : '#919191')};
`;

// const useTab = (idx, Tabs) => {
//   if (!Tabs || !Array.isArray(Tabs)) {
//     return null;
//   }
//   const [currentIdx, setCurrentIdx] = useState(idx);
//   return {
//     currentItem: Tabs[currentIdx],
//     changeItem: setCurrentIdx,
//   };
// };

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    // <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
    //   <i className={icon}></i>
    //   <p className="tabitem__title">{title}</p>
    // </div>

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

  console.log('newArray', newArray);

  // const { currentItem, changeItem } = useTab(0, newArray);

  const [active, setActive] = useState(0);

  return (
    <WhatsNewWrapper>
      <div className="buttonsWrapper">
        {newArray.map((el, index) => (
          // <Button key={index} onClick={(e) => changeItem(index)}>
          //   {el.title}
          // </Button>
          <TabItemComponent
            key={index}
            title={el.title}
            onItemClicked={() => setActive(index)}
            isActive={active === index}
          />
        ))}
      </div>

      {/* <div>
        <MDXRenderer>{currentItem.body}</MDXRenderer>
      </div> */}
      <div>
        {newArray.map((el, index) => {
          return active === index ? <MDXRenderer>{el.body}</MDXRenderer> : null;
        })}
      </div>
    </WhatsNewWrapper>
  );
};

export default WhatsNew;
