import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../config';
import TreeNode from './treeNode';

const LNBWrapper = styled.div`
  margin-left: 24px;
`;

const LNBUL = styled.ul`
  li {
    list-style-type: none;
    width: auto;
    list-style: none;
  }

  li a {
    color: #636363;
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.022em;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 40px;
    white-space: nowrap;
    padding-right: 1300px;
    position: relative;
  }

  li a:hover {
    background-color: #f1f1f1;
    color: #424242 !important;
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

  li a:hover::after {
    background-color: #f1f1f1;
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

const LNBPart = styled.li`
  font-family: 'SF Pro Text';
  font-weight: 600;
  font-size: 18px;
  color: #131313;
  line-height: 130%;
  letter-spacing: -0.022em;
  margin-top: 24px;
  margin-bottom: 9px;
`;

const Sidebar = styled('aside')`
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  border-right: 1px solid #eaeaea;

  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }

  @media only screen and (max-width: ${config.responsive.tabletMax}px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
    }
  }

  @media (min-width: ${config.responsive.tabletMax}px) and (max-width: ${config.responsive
      .tabletMax}px) {
    padding-left: 0;
  }

  @media only screen and (max-width: ${config.responsive.tabletMax}px) {
    padding-left: 0px;
    height: auto;
  }
`;

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0;
  position: relative;
  margin-top: 20px;

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

const calculateTreeData = (edges) => {
  const withoutServicePage = config.lnb.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
          // }) => slug !== '/'
        }) => !slug.includes('index')
      )
    : edges;

  // withoutServicePage 배열의 current value를 돌고, 결과를 accu에 return함
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
      const parts = slug.split('/'); // depth별로 나눔 /about/1/2.md면 about,1,2

      let { items: prevItems } = accu; // let prevItems = accu.items

      const slicedParts = parts.slice(2, -1); // md가 1 depth(ex. /content/ux-writing/~~.md)에 위치하면 값이 없음

      for (const part of slicedParts) {
        // depth 2 이상에(ex. /content/ux-writing/aboutux/~~.md) 위치한 md일때
        let tmp = prevItems && prevItems.find(({ label }) => label == part); // 폴더와 같은 이름의 md파일을 찾음
        if (tmp) {
          // 같은 이름의 md가 있다면
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          // 같은 이름의 md가 없다면
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const depthLength = parts.length - 2; // 1 depth면 1
      const existingItem = prevItems.find(({ label }) => label === parts[depthLength + 1]); // 이미 중복 존재하는 md인지 확인

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

    // 기본은 alphabet order
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

const FilteredLNB = (props) => {
  let LNBobject = props.finalLNB;
  let calculatedLNBobject = {}; // tree구조가 됨
  Object.keys(LNBobject).forEach((key) => {
    if (key !== '') {
      // console.log('calculate됨!',' + ', key, ' + ', LNBobject[key])
      calculatedLNBobject[key] = calculateTreeData(LNBobject[key]);
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
        defaultCollapsed[item.url] = true; // 닫혀있음
      });
    }
  });

  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  // setCollapsed(defaultCollapsed)
  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  let partLength = Object.keys(calculatedLNBobject).length - 1;

  console.log('tesrt: ', partLength);

  return (
    <LNBWrapper>
      {/* object key로 대체 */}
      {Object.keys(calculatedLNBobject).map((key, index) => {
        return key === 'etc' ? (
          <LNBUL key={key}>
            <TreeNode
              className="lnbNav firstLevel"
              setCollapsed={toggle}
              collapsed={collapsed}
              {...calculatedLNBobject[key]}
            />
          </LNBUL>
        ) : (
          <LNBUL key={key}>
            <LNBPart
              // className={} // mobile서 나중에 보이도록
              dangerouslySetInnerHTML={{ __html: key }}
            />
            <TreeNode
              className="lnbNav firstLevel"
              setCollapsed={toggle}
              collapsed={collapsed}
              {...calculatedLNBobject[key]}
            />
            {console.log('ket! ', index)}
            {index === partLength ? null : <Divider />}
          </LNBUL>
        );
      })}
    </LNBWrapper>
  );
};

const LNBLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={(data) => {
      const {
        allMdx,
        site: {
          siteMetadata: { naverOSS, gnbMenu },
        },
      } = data; // graphQL로 데이터 가져옴

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

      // 전체 markdown 중에서 현재 GNB에 맞는 것만 필터
      let filteredMenu = allMdx.edges.filter(function (el) {
        return el.node.fields.slug.slice(1).split('/')[0] === currGNB;
      });

      if (currGNB) {
        // config에서 설정한 LNB의 대분류 (part) 불러오기
        let tempGnbMenu = gnbMenu.filter((el) => {
          return el.folderName === currGNB;
        });

        // 여기부분 path prefix 다시 봐보기
        let gnbMenuParts = tempGnbMenu[0].part;

        // 현재 GNB에 맞게 필터된 markdown 중에서 카테고리 순으로 나누기
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

        return (
          <Sidebar>
            <FilteredLNB finalLNB={finalLNB} part={gnbMenuParts} />
          </Sidebar>
        );
      } else {
        // 메인 페이지
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default LNBLayout;
