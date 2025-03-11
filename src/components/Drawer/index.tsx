import React from 'react'
import Icon from '@/components/Icons';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Drawer({ className, children }: Props) {
  // Function to handle the drag and drop event and close the drawer
  const handleDragEnd = () => {
    document.getElementById('right-drawer')?.click();
  };

  return (
    <div className={`drawer drawer-end ${className}`}>
      <input id="right-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-full w-auto">
        {/* Page content here */}
        <label htmlFor="right-drawer" className="btn btn-primary drawer-button">
          <Icon.Menu />
        </label>
      </div>
      <div className="drawer-side z-1">
        <label htmlFor="right-drawer" aria-label="close sidebar"></label>
        <div className="menu p-4 w-auto bg-base-300 text-white flex flex-col">
          <div
            className='text-left max-h-[calc(100vh-170px)]  overflow-auto text-black border-grey-200 mt-16'
            onDragOver={handleDragEnd}
          >
            {children}
          </div>
          <footer className="mt-auto p-4 text-center text-black">
            <label htmlFor="right-drawer" className='btn btn-accent drawer-button p-2'>Close</label>
          </footer>
        </div>
      </div>
    </div>

  )
}
