import React from "react"

export const Input = ({ label = "", type = "text", name, ...rest }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="font-semibold">{label}</div>

			<input
				className="p-2 rounded-md border border-gray bg-transparent w-full"
				type={type}
				name={name}
				{...rest}
			/>
		</div>
	)
}
