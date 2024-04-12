import React from "react"

import Nav from "./Nav"

const Header = () => {
	return (
		<>
			<div className='w-full flex justify-center items-center flex-col'>
				<Nav />
			</div>
			<div className='w-full flex justify-center items-center flex-col'>
				<h1 className='head_text'>
					<span className='orange_gradient'>Prescription AI</span>
					<br />
					<span className='description'>Analyze  Prescriptions</span>
				</h1>
				<h2 className='desc'>
					The tool to analyze prescriptions, empowering you to make informed
					decisions about your health journey.
				</h2>
			</div>
		</>
	)
}

export default Header