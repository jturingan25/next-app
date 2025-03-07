import React from 'react'
import { IconBars } from '@/components/Icons';

interface Props {
  className?: string
}

export default function Drawer({ className }: Props) {
  return (
    <div className={`drawer drawer-end ${className}`}>
      <input id="right-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-full w-auto">
        {/* Page content here */}
        <label htmlFor="right-drawer" className="btn btn-primary drawer-button">
          <IconBars />
        </label>
      </div>
      <div className="drawer-side z-100">
        <div className="menu p-4 w-64 bg-base-300 text-white flex flex-col h-full">

          <footer className="mt-auto p-4 text-center text-black">
            <label htmlFor="right-drawer" className='btn btn-accent drawer-button p-2'>Close</label>
          </footer>
        </div>
      </div>
    </div>

  )
}
