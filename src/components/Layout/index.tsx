// components/Layout.tsx
import React, { ReactNode } from 'react';
import TopBar from '../Topbar';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <TopBar />
        {/* Main content */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
