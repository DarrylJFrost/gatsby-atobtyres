import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import { 
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/sass/navbar.module.scss'

const query = graphql`
  {
    file(relativePath: {eq: "logo.png"}) {
      image: childImageSharp {
        fixed(height: 100, width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Navbar = ( ) => {
  const data = useStaticQuery(query)
  const {file: {image: {fixed}}} = data
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/">
            <Img fixed={fixed}/>
          </Link>
          <button className={styles.toggleBtn}>
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
        <Links styleClass={styles.navLinks} linkClass={styles.pageLink}/>
        <SocialLinks/>
      </div>
    </nav>
  )
}



export default Navbar
