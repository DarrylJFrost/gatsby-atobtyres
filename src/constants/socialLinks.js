import React from 'react'

import { 
  faFacebookSquare,
  faGoogle,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/sass/socialLinks.module.scss'

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.facebookIcon}/>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagramSquare} className={styles.instagramColour}/>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} className={styles.googleColour}/>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} className={styles.twitterColour}/>
        </a>
    </div>
  )
}

export default SocialLinks
