import React from 'react'

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
}

export default Layout
