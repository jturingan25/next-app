import React, { ReactNode } from 'react'

type CardProps = {
	children: ReactNode,
	withAction: Boolean,
	title: String,
	className: String
}

export default function Card({ children, withAction = false, title, className }: CardProps) {
	console.log(className,"<<")
	return (
		<div className={`card card-border bg-base-100 w-full h-full shadow ${className}`}>
			<div className="card-body">
				<h2 className="card-title" >{title}</h2>
				{children}
				{withAction && (
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				)}
			</div>
		</div>
	)
}
