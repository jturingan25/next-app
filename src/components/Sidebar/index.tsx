// src/components/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <ul className="menu p-4 w-60 bg-base-100 text-base-content min-h-full w-auto">
      {/* Sidebar content */}
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/org-chart">Organization Chart</a></li>
      <li>
        <details>
          <summary className="group">Settings</summary>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            <li><a href="/user">User</a></li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Sidebar;