import React from "react"
import Logo from "./Logo"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="h-16 w-full px-8 py-4 flex flex-row items-center justify-between bg-slate-300">
			<Link to="/" className="">
				<Logo />
			</Link>

			<div className="">Pavlov Dmitry</div>
		</footer>
	)
}

export default Footer
