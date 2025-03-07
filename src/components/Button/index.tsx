import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode,
  className?: string,
  type?: string,
  label?: ReactNode | string
}
export default function Button({ children, className, type, label }: Props) {
  return (
    <>
      {type === "dropdown" ? (
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button">{label}</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 border-1 border-gray-300 mt-1 rounded-box z-1 p-2 shadow-sm">
            {children}
          </ul>
        </div>
      ) : (
        <button className={className}>
          {children}
        </button>
      )}
    </>
  )
}
