import React from 'react'
import './header.css'
import Footer from './Footer'

export default function PageNotFound() {
  return (
    <>
    <div className='w-full flex justify-center items-center flex-col'>
        <span className='mt-12 mb-12 font-black	text-2xl'>404 Page Not Found</span>
        <Footer className='mt-12 mb-12'/>
    </div>
    </>
  )
}
