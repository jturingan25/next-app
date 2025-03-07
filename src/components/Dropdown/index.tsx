import React, { ReactNode } from 'react'
type Props = {
  children: ReactNode,
  className?: string,
}

export default function Dropdown({ children, className }: Props) {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">Hover</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {children}
      </ul>
    </div>
  )
}
