import "./style.css"
import React from "react"


interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	className?: string;
}


export function FormInput({placeholder, className = "", ...rest}: IFormInput) {

	return (
		<div
		className="form-input-box">
			
			<input 
			className={`form-input ${className}`}
			placeholder=" "
			id={`input-for-${placeholder}`} 
			{...rest} />

			<label
				className="form-input-label" 
				htmlFor={`input-for-${placeholder}`}>
				{placeholder}
			</label>
		</div>
	)

}