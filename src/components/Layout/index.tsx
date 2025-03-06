// components/Layout.tsx
import React, { ReactNode } from 'react';
import TopBar from '../Topbar';
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <TopBar />
        {/* Main content */}
        <main className="flex-1 p-4 bg-base-200">
 
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
