import React from 'react';
import styled from '@emotion/styled';
import config from '../../../config';
import Link from '../link';

const Button = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
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
`;

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url]; // boolean
  const collapse = () => {
    setCollapsed(url);
    if (typeof document !== 'undefined') {
      var x = document.getElementById(title + 'lnb');
      x.classList.toggle('onClickClorChangeLNB');
    }
  };

  const hasChildren = items.length !== 0;
  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active = // LNB에서 선택되면 true
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  return (
    <li className={calculatedClassName}>
      {title ? ( // markdown의 title
        hasChildren ? (
          <Button onClick={collapse} id={title + 'lnb'}>
            {title}
          </Button>
        ) : (
          <Link to={url}>{title}</Link>
        )
      ) : null}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
