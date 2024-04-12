import React from 'react'

export default function Footer() {
  return (
    <div className='flex mt-12 mb-5 pt-12 justify-center item-center content-end'>
        <div>
        <div className='text-center'>
            <span>
                Made with &hearts; & effort by {'Data Dexterity'}
            </span>
        </div>
        <div className='text-center'>
            <span className='text-black pt-12'>
                Copyright &copy; {(new Date().getFullYear())}
            </span>
        </div>
        </div>
    </div>
  )
}
