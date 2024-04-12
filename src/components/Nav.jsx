import React from "react"
import "./Header"
import { Link } from "react-router-dom"
// import { FaUserDoctor } from "react-icons/fa6";


const Nav = () => {
	return (
		<nav className='flex justify-between items-center w-full mb-10 pt-3 w-full flex-row'>
			<Link to='/'>
				
                {/* <FaUserDoctor /> */}

			</Link>

			
		</nav>
	)
}

export default Nav