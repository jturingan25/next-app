import React from 'react';
import list from './config/sidebar-list';

type SidebarItem = {
  label: string;
  icon: React.ReactNode | string;
  route?: string;
  children?: SidebarItem[];
};

const Sidebar = () => {

  const renderSidebarItem = (item: SidebarItem) => {
    return (
      <li key={item.label} className='pt-1 pb-1'>
        {!item.children &&
          <a href={item.route} >
            {item.icon}
            {item.label}
          </a>
        }
        {/* With submenu */}
        {
          item.children && (
            <details>
              <summary className="group">
                {item.icon}
                {item.label}
              </summary>
              <ul>
                {item.children?.map(child => renderSidebarItem(child))}
              </ul>
            </details>
          )
        }
      </li >
    );
  };

  return (
    <ul className="menu p-4 w-60 bg-base-100 text-base-content min-h-full min-w-60">
      {/* Sidebar content */}
      {list.map(item => renderSidebarItem(item))}
    </ul>
  );
};

export default Sidebar;