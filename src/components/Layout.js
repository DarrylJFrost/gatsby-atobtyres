import React from 'react'
<<<<<<< HEAD
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
=======

import Navbar from './Navbar'
import Hero from './Hero'
import Question from './Question'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fab)

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        {/* <Hero />
        {children}
        <Question />
        <Footer /> */}
        </>
    )
>>>>>>> main
}

export default Layout
