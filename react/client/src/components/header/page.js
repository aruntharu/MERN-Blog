import React from 'react'
import NavBar from '../navbar/page'
import Logo from '../logo/page'

const Header = () => {
  return (
    <div className='flex  '>
        <Logo/>
        <NavBar/>
    </div>
  )
}

export default Header