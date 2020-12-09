import React from 'react'

// Components
import Navbar from './Navbar'
import Hero from './Hero'
import Question from './Question'
import Footer from './Footer'

// Global Stylesheet
import '../styles/global.scss'

// Font Awesome Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        {/* <Hero /> */}
        {children}
        {/* <Question /> */}
        {/* <Footer /> */}
        </>
    )
}

export default Layout
