import React from 'react'

// Components
import Navbar from './Navbar'
import Hero from './Hero'
import Questions from './Questions'
import Footer from './Footer'

// Global Stylesheets
import '../styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Questions />
        <Footer />
        </>
    )
}

export default Layout
