
import React from "react"
import { Link } from "react-router-dom"
import { MdDriveFolderUpload } from "react-icons/md";
import "./buttons.css"

const Buttons = () => {
	return (
		<div className='flex flex-row justify-around w-full mt-12'>
			<div className='flex flex-col p-5 items-center text-center w-64 max-w-xl p-12 mx-2 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg '>
				<Link to='/image'>
					<div>
                        <MdDriveFolderUpload className="button-img" />
					</div>
					<div>
						<span className='text-center text-base'>
							Scan Medical reports
						</span>
					</div>
					<div className='flex justify-center mt-5'>Upload Report</div>
				</Link>
			</div>
			<div className='flex flex-col p-5 items-center text-center w-64 max-w-xl p-12 mx-2 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<Link to='/medical'>
					<div>
						<MdDriveFolderUpload className="button-img" />
					</div>
					<div>
						<span className='text-center text-base'>
							Consult other Doctor's Review
						</span>
					</div>
					<div className='flex justify-center mt-5'>Consult Doctor</div>
				</Link>
			</div>
			<div className='flex flex-col p-5 items-center text-center w-64 max-w-xl p-12 mx-2 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<Link to='/tablets'>
					<div>
						<MdDriveFolderUpload className="button-img" />
					</div>
					<div>
						<span className='text-center text-base'>
							Learn About Medicines
						</span>
					</div>
					<div className='flex justify-center mt-5'>Search Tablets</div>
				</Link>
			</div>
		</div>
	)
}

export default Buttons