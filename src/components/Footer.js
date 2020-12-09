import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styles from '../styles/sass/footer.module.scss'


const query = graphql`
  {
    file(relativePath: {eq: "logo.png"}) {
      image: childImageSharp {
        fixed(height: 60, width: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  const {file: {image: {fixed}}} = data

  return (
    <footer className={styles.footer}>
      <div className={styles.footCenter}>
        <div className={styles.footContent}>
          <div>
            <Link to="/">
              <Img fixed={fixed}/>
            </Link>
          </div>
          <div>
            Elton Business Centre
            <br/>
            Russell House Hadleigh Road
            <br/>
            Ipswich, Suffolk
            IP2 0DD
          </div>
          <div className={styles.alignRight}>
            <p>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </p>
            <p>
              Company Number 10873204 - 2017 - 2020
              <br/>
              &copy; Copyright, A to B Tyres Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
