import React from 'react'
import Footer from './Footer'
import DoctorsList from './DoctorList'
import Header from './Header'

export default function Mreport() {
  return (
    <div className='w-full flex justify-center items-center flex-col mt-20'>
      {/* <h1 className="text-5xl font-bold text-gray-800">Doctors Not Available</h1> */}
      {/* <div className='my-20 py-12'></div> */}
      <Header />
      <div className='w-full flex justify-normal items-center flex-col mt-20 '>
        <DoctorsList />
      </div>
        <Footer className='my-20'/>
    </div>
  )
}
