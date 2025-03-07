import React, { ReactNode } from 'react'

type CardProps = {
  children: ReactNode,
  withAction: Boolean,
  title: String,
  className: String
}

export default function Card({ children, withAction = false, title, className }: CardProps) {
  return (
    <div className={`card card-border bg-base-100 w-full h-full shadow ${className}`}>
      <div className="card-body">
        <h2 className="card-title" >{title}</h2>
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
