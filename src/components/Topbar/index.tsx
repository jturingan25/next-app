
import React from 'react';
import Sidebar from '../Sidebar';

const TopBar = () => {
  return (
    <div className="bg-purple-950 text-base-300 shadow-sm sticky top-0 z-30 flex h-16 w-full [transform:translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 print:hidden" >
      <div className="flex-none p-5">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="navbar w-full">
        <div className="flex-1">
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">

          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle avatar-placeholder btn-ghost avatar">
              <div className="w-8 rounded-full bg-base-300 text-black ">
                <span className="text-xl">JT</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a href="/login">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
