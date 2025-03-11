import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode,
  withAction?: Boolean,
  title?: String,
  className?: String,
  extraButton?: ReactNode
}

export default function Card({ children, withAction = false, title, className, extraButton }: CardProps) {
  return (
    <div className={`card card-border bg-base-100 w-full h-full border-gray-200 shadow border-2 ${className}`}>
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 ... mb-3">
          <div>
            <h2 className="card-title text-xl" >{title}</h2>
          </div>
          {extraButton && (
            <div className='flex justify-end text-right'>
              {extraButton}
            </div>
          )}
        </div>

        <div className="overflow-y-auto overflow-x-auto w-full scroll-smooth">
          {children}
          {withAction && (
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
