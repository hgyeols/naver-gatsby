import React from 'react';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {

  const isCollapsed = collapsed[url]; // boolean
  const collapse = () => {
    setCollapsed(url);
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
          <Link to='javascript:void(0)' onClick={collapse}>
            {title}
          </Link>
        ) : (
          <Link to={url}>
            {title}
          </Link>
        ) 
      ) : null }

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
