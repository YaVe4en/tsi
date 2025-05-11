import React from "react"

export const Input = ({ label = "", type = "text", name, ...rest }) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="">{label}</div>

			<input
				className="p-2 rounded-md border border-gray bg-transparent w-full"
				type={type}
				name={name}
				{...rest}
			/>
		</div>
	)
}
