import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../config';
import Link from '../link';
import TreeNode from './treeNode';

const NavMenuContainer = styled.div`
  width: 100%;
`;

const NavList = styled.ul`
  display: inline-block;

  &:hover {
    li a {
      color: #636363;
    }
    li a.active {
      color: #131313 !important;
    }
  }
`;

const NavLink = styled(motion.li)`
  height: 34px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 18px;

  a {
    text-decoration: none;
    font-family: 'SF Pro Display';
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;
    letter-spacing: -0.006em;
    color: #131313;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    color: #131313 !important;
  }
`;

const NavListDepth = styled.ul`
  display: inline-block;
`;

const NavLinkDepth = styled(motion.li)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 18px;

  a {
    text-decoration: none;
    font-family: 'SF Pro Display';
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;
    letter-spacing: -0.006em;
    color: #919191;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    color: #131313 !important;
  }
`;

const MobileLNBWrapper = styled.div``;

const MobileNavBarMainLinkActive = styled.div`
  color: #131313;
`;

const MobileLNBul = styled.ul`
  li {
    list-style-type: none;
    width: auto;
    list-style: none;
  }

  li a {
    color: #636363;
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.022em;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 44px;
    white-space: nowrap;
    padding-right: 1300px;
    position: relative;
  }

  li a::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -30%;
    right: 0;
  }

  li a:hover {
    /* background-color: #fafafa; */
    color: #424242 !important;
  }

  li a:hover::after {
    background-color: #fafafa;
  }

  .firstlevel > ul > .item {
    margin-left: 0 !important;
  }

  .item .item {
    margin-left: 20px;
  }

  li .active a {
    font-weight: 600;
    color: #424242 !important;
  }
`;

const MobileLNBliPartName = styled(motion.li)`
  list-style-type: none;
  width: auto;
  list-style: none;
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: -0.022em;
  color: #131313;
  cursor: default;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

const calculateTreeData = (edges) => {
  const withoutServicePage = config.lnb.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
          // }) => slug !== '/'
        }) => !slug.includes('index') && !slug.includes('whatsNewChanges')
      )
    : edges;

  // withoutServicePage ????????? current value??? ??????, ????????? accu??? return???
  const tree = withoutServicePage.reduce(
    (
      accu, // accumulator
      {
        node: {
          // current value
          fields: { slug, title },
          frontmatter: { order },
        },
      }
    ) => {
      const parts = slug.split('/'); // depth?????? ?????? /about/1/2.md??? about,1,2

      let { items: prevItems } = accu; // let prevItems = accu.items

      const slicedParts = parts.slice(2, -1); // md??? 1 depth(ex. /content/ux-writing/~~.md)??? ???????????? ?????? ??????

      for (const part of slicedParts) {
        // depth 2 ?????????(ex. /content/ux-writing/aboutux/~~.md) ????????? md??????
        let tmp = prevItems && prevItems.find(({ label }) => label == part); // ????????? ?????? ????????? md????????? ??????
        if (tmp) {
          // ?????? ????????? md??? ?????????
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          // ?????? ????????? md??? ?????????
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const depthLength = parts.length - 2; // 1 depth??? 1
      const existingItem = prevItems.find(({ label }) => label === parts[depthLength + 1]); // ?????? ?????? ???????????? md?????? ??????

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
        existingItem.order = order;
      } else {
        prevItems.push({
          label: parts[depthLength + 1],
          url: slug,
          items: [],
          title,
          order,
        });
      }
      return accu;
    },
    { items: [] } // initial value
  );

  const tmp = [];

  tmp.reverse();

  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');

    let { items: prevItems } = accu;

    const slicedParts = parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find((item) => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    }

    // ????????? alphabet order
    prevItems.map((item) => {
      item.items = item.items.sort(function (a, b) {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
    });

    const slicedLength = parts.length - 1;

    const index = prevItems.findIndex(({ label }) => label === parts[slicedLength]);

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }
    return accu;
  }, tree);
};

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0;
  position: relative;
  margin-top: 20px;
  padding-right: 1300px;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -30%;
    right: 0;
    border-bottom: solid 1px #e2e2e2;
  }

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #e2e2e2;
  }
`;

export function NavMenu({ location, toggle, isOpen }) {
  const data = useStaticQuery(graphql`
    query navMenuQuery {
      allMdx {
        edges {
          node {
            fields {
              slug
              title
            }
            frontmatter {
              part
              order
            }
          }
        }
      }
      site {
        siteMetadata {
          naverOSS
          gnbMenu {
            text
            folderName
            part
          }
        }
      }
    }
  `);

  const {
    allMdx,
    site: {
      siteMetadata: { naverOSS, gnbMenu },
    },
  } = data; // graphQL??? ????????? ?????????

  let currGNB;

  if (naverOSS) {
    currGNB =
      config.gatsby.pathPrefix !== '/'
        ? location.pathname.slice(1).split('/')[2]
        : location.pathname.slice(1).split('/')[0];
  } else {
    currGNB =
      config.gatsby.pathPrefix !== '/'
        ? location.pathname.slice(1).split('/')[1]
        : location.pathname.slice(1).split('/')[0];
  }

  // ?????? markdown ????????? ?????? GNB??? ?????? ?????? ??????

  let filteredMenu = allMdx.edges.filter(function (el) {
    return el.node.fields.slug.slice(1).split('/')[0] === currGNB;
  });

  if (currGNB) {
    let tempGnbMenu = gnbMenu.filter((el) => {
      return el.folderName === currGNB;
    });

    // ???????????? path prefix ?????? ?????????
    let gnbMenuParts = tempGnbMenu[0].part;

    // ?????? GNB??? ?????? ????????? markdown ????????? ???????????? ????????? ?????????
    let finalLNB = {};
    finalLNB['etc'] = [];
    filteredMenu.forEach((i) => {
      if (!i.node.frontmatter.part) {
        finalLNB['etc'].push(i);
      }
    });
    gnbMenuParts.forEach((item) => {
      finalLNB[item] = [];
      filteredMenu.forEach((i) => {
        if (item === i.node.frontmatter.part) {
          finalLNB[item].push(i);
        }
      });
    });

    let calculatedLNBobject = {}; // tree????????? ???
    Object.keys(finalLNB).forEach((key) => {
      if (key !== '') {
        // console.log('calculate???!',' + ', key, ' + ', LNBobject[key])
        calculatedLNBobject[key] = calculateTreeData(finalLNB[key]);
      }
    });

    Object.keys(calculatedLNBobject).forEach((key) => {
      if (key !== '') {
        // depth-1 sort
        if (calculatedLNBobject[key].items.length > 1) {
          calculatedLNBobject[key].items.sort((a, b) => {
            return a.order - b.order;
          });
        }
      }
    });

    Object.keys(calculatedLNBobject).forEach((key) => {
      if (key !== '') {
        // depth-2 sort
        if (calculatedLNBobject[key].items.length > 0) {
          calculatedLNBobject[key].items.forEach((el) => {
            el.items.sort((a, b) => {
              return a.order - b.order;
            });
          });
        }
      }
    });

    const defaultCollapsed = {};

    Object.keys(calculatedLNBobject).forEach((key) => {
      if (key !== '' && key !== 'etc') {
        calculatedLNBobject[key].items.forEach((item) => {
          defaultCollapsed[item.url] = true; // ????????????
        });
      }
    });

    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    // setCollapsed(defaultCollapsed)
    const toggleMenu = (url) => {
      setCollapsed({
        ...collapsed,
        [url]: !collapsed[url],
      });
    };

    let partLength = Object.keys(calculatedLNBobject).length - 1;

    return (
      <NavMenuContainer>
        <NavListDepth>
          {gnbMenu.map((menu, key) => {
            if (menu.text !== '' && menu.folderName !== '') {
              if (currGNB === menu.folderName) {
                return (
                  <NavLinkDepth
                    key={key}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                      show: {
                        ...variants.show,
                        transition: { delay: 0.2, duration: 0.5 },
                      },
                      hide: {
                        ...variants.hide,
                        transition: { delay: 0.05, duration: 0.05 },
                      },
                    }}
                  >
                    <Link
                      to={`/${menu.folderName}/index`}
                      activeClassName="active"
                      onClick={toggle}
                    >
                      <MobileNavBarMainLinkActive dangerouslySetInnerHTML={{ __html: menu.text }} />
                    </Link>
                    <MobileLNBWrapper>
                      {Object.keys(calculatedLNBobject).map((key, index) => {
                        return key === 'etc' ? (
                          <MobileLNBul key={key}>
                            <TreeNode
                              className={'MobileLNBli firstlevel'}
                              setCollapsed={toggleMenu}
                              collapsed={collapsed}
                              {...calculatedLNBobject[key]}
                            />
                          </MobileLNBul>
                        ) : (
                          <MobileLNBul key={key}>
                            <MobileLNBliPartName
                              // className={} // mobile??? ????????? ????????????
                              dangerouslySetInnerHTML={{ __html: key }}
                            />
                            <TreeNode
                              className={'MobileLNBli firstlevel'}
                              setCollapsed={toggleMenu}
                              collapsed={collapsed}
                              toggle={toggle}
                              {...calculatedLNBobject[key]}
                            />
                            {index === partLength ? null : <Divider />}
                          </MobileLNBul>
                        );
                      })}
                    </MobileLNBWrapper>
                  </NavLinkDepth>
                );
              }
              return (
                <NavLinkDepth
                  key={key}
                  initial={false}
                  animate={isOpen ? 'show' : 'hide'}
                  onClick={toggle}
                  variants={{
                    show: {
                      ...variants.show,
                      transition: { delay: 0.2, duration: 0.5 },
                    },
                    hide: {
                      ...variants.hide,
                      transition: { delay: 0.05, duration: 0.05 },
                    },
                  }}
                >
                  <Link to={`/${menu.folderName}/index`} activeClassName="active">
                    <div
                      className={'mobileNavBarMainLink'}
                      dangerouslySetInnerHTML={{ __html: menu.text }}
                    />
                  </Link>
                </NavLinkDepth>
              );
            }
          })}
        </NavListDepth>
      </NavMenuContainer>
    );
  } else {
    // ?????? ?????????
    return (
      <NavMenuContainer>
        <NavList>
          {gnbMenu.map((menu, key) => {
            if (menu.text !== '' && menu.folderName !== '') {
              return (
                <NavLink
                  key={key}
                  initial={false}
                  animate={isOpen ? 'show' : 'hide'}
                  onClick={toggle}
                  variants={{
                    show: {
                      ...variants.show,
                      transition: { delay: 0.2, duration: 0.5 },
                    },
                    hide: {
                      ...variants.hide,
                      transition: { delay: 0.05, duration: 0.05 },
                    },
                  }}
                >
                  <Link to={`/${menu.folderName}/index`} activeClassName="active">
                    <div
                      className={'mobileNavBarMainLink'}
                      dangerouslySetInnerHTML={{ __html: menu.text }}
                    />
                  </Link>
                </NavLink>
              );
            }
          })}
        </NavList>
      </NavMenuContainer>
    );
  }
}
