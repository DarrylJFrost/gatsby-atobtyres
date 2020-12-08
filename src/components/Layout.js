import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Questions from './Questions'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
    {/* <Sidebar/> */}
    <main>{children}</main>
    {/* <Questions/>
    <Footer/> */}
    </>
  )
}

export default Layout
