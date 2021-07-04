import React, { useState } from 'react';
// import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../config';
import TreeNode from './treeNode';

const calculateTreeData = ( edges ) => {
  // console.log('test1: edges ', edges)
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
  // console.log('test2: withoutServicePage ', withoutServicePage)

  // withoutServicePage 배열의 current value를 돌고, 결과를 accu에 return함
  const tree = withoutServicePage.reduce(
    (
      accu, // accumulator
      { 
        node: { // current value
          fields: { slug, title }, 
        },
      }
    ) => {
      const parts = slug.split('/'); // depth별로 저장 /about/1/2.md면 about,1,2
      // console.log('test3: parts ', parts)
      // console.log('test3.5: accu ', accu) 
      let { items: prevItems } = accu; // let prevItems = accu.items
      // console.log('test4: prevItems ', prevItems)
      // 지금 폴더 구조가 /content(0)/%%GNB MENU NAME%%(1)/~~(2).md 이므로 2번부터 slice
      const slicedParts = parts.slice(2, -1); // md가 1 depth에 위치하면 값이 없음
      // console.log('test5: slicedParts ', slicedParts) 

      for (const part of slicedParts) { // depth 2 이상에 위치한 md일때
        // console.log('test6: part ', part)
        let tmp = prevItems && prevItems.find(({ label }) => label == part); // 폴더와 같은 이름의 md파일을 찾음
        // console.log('test7: tmp ', tmp)
        if (tmp) { // 같은 이름의 md가 있다면
          if (!tmp.items) {
            tmp.items = [];
          }
        } else { // 같은 이름의 md가 없다면 
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        // console.log('test8: tmp.items ', tmp.items)
        prevItems = tmp.items;
      }
      const depthLength = parts.length - 2; // 1 depth면 1
      // console.log('test8: depthLength ', depthLength)
      const existingItem = prevItems.find(({ label }) => label === parts[depthLength+1]); // 이미 중복 존재하는 md인지 확인
      // console.log('test8: existingItem ', existingItem) 
      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[depthLength+1],
          url: slug,
          items: [],
          title,
        });
      }
      return accu;
    },
    { items: [] } // initial value
  );
  // console.log('test! tree : ', tree)

  const {
    lnb: { forcedNavOrder = [] },
  } = config;

  const tmp = [...forcedNavOrder];

  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');

    let { items: prevItems } = accu;

    const slicedParts = parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find(item => item && item.label == part);

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
    prevItems.map(item => {
      item.items = item.items.sort(function(a, b) {
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

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #e2e2e2;
  }
`;

const FilteredLNB = ( props ) => {
  let LNBobject = props.finalLNB

  let calculatedLNBobject = {} // tree구조가 됨
  Object.keys(LNBobject).forEach((key) => {
    if (key !== "") {
      calculatedLNBobject[key] = calculateTreeData(LNBobject[key])
    }
  })

  const defaultCollapsed = {};

  Object.keys(calculatedLNBobject).forEach((key) => {
    if (key !== "" && key !== "etc") {
      calculatedLNBobject[key].items.forEach(item => {
        defaultCollapsed[item.url] = true; // 닫혀있음
      })
      
    }
  })

  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  // setCollapsed(defaultCollapsed)
  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  return (
    <div className={'LNBWrapper'}> 
    {/* object key로 대체 */}
      { Object.keys(calculatedLNBobject).map((key)=>{
        return (
          key === 'etc' ? 
            <ul key={key} className={'LNBUL'}> 
              <TreeNode
                className={'lnbNav firstLevel'}
                setCollapsed={toggle}
                collapsed={collapsed}
                {...calculatedLNBobject[key]}
              />
            </ul>
          : (
            <ul key={key} className={'LNBUL'}>
              <li className={'lnbPart'}
                // className={} // mobile서 나중에 보이도록
                dangerouslySetInnerHTML={{ __html: key }}
              /> 
              <TreeNode
                className={'lnbNav firstLevel'}
                setCollapsed={toggle}
                collapsed={collapsed}
                {...calculatedLNBobject[key]}
              />
            </ul>
            )
          )
        })    
      }
    </div>
  )
}

const LNBLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        # allMdx(filter: {fields: {slug: {regex: "/about/"}}}) {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
              frontmatter {
                part
              }
            }
          }
        }
        site {
          siteMetadata {
            gnbMenu {
              text
              folderName
              part
            }
          }
        }
      }
    `}
    // render={({ allMdx }) => {
    render = { data => {
      const {
        allMdx,
        site: {
          siteMetadata: { gnbMenu },
        },
      } = data; // graphQL로 데이터 가져옴

      let currGNB = config.gatsby.pathPrefix !== '/' ? location.pathname.slice(1).split('/')[1] : location.pathname.slice(1).split('/')[0];


      // 전체 markdown 중에서 현재 GNB에 맞는 것만 필터
      let filteredMenu = allMdx.edges.filter(function (el) {
        return el.node.fields.slug.slice(1).split('/')[0] === currGNB
      })

      
      if (currGNB) {
        // config에서 설정한 LNB의 대분류 (part) 불러오기
        let tempGnbMenu = gnbMenu.filter((el) => {
          return el.folderName === currGNB
        })
  
        let gnbMenuParts = tempGnbMenu[0].part
  
        // 현재 GNB에 맞게 필터된 markdown 중에서 카테고리 순으로 나누기
        let finalLNB = {}
        finalLNB['etc'] = []
        filteredMenu.forEach(i => {
          if ( !i.node.frontmatter.part ) {
            finalLNB['etc'].push(i)
          }
        })     
        gnbMenuParts.forEach(item => {
          finalLNB[item] = []  
          filteredMenu.forEach(i => {
            
            if ( item === i.node.frontmatter.part ) {
              finalLNB[item].push(i)
            }
          })     
        })
  
        return (
          <Sidebar>
            <FilteredLNB finalLNB={finalLNB} part={gnbMenuParts} />
          </Sidebar>
        );
      } else { // 메인 페이지
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
