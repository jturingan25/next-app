// src/components/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <div>
      {/* Drawer (Sidebar) */}
      <div className="drawer drawer-open pt-13 border border-base-300">
        <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content goes here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar-toggle" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            {/* Sidebar content */}
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/org-chart">Organization Chart</a></li>
            <li>
              <details>
                <summary className="group">Settings</summary>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                  <li><a href="#">User</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
