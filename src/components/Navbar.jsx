import React from 'react'

const Navbar = ({handleOpenForm}) => {
  return (
    <nav className='navbar__global'>
        <button onClick={handleOpenForm} className='formuser_btn'>Open Form</button>
    </nav>
  )
}

export default Navbar