import React from 'react'
import styles from '../styles/sass/questions.module.scss'
import {
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Questions = () => {
  return (
    <div className={`${styles.bg} ${styles.bgGrey}`}>
      <div className={styles.contactCenter}>
        <Row className={`${styles.contactInfo} justify-content-center`}>
          <Col sm={12}>
            <h4 className="mb-4">
              <span className={styles.marks}>//</span>
              got questions?
            </h4>
          </Col>
          <Col md={4} lg={3}>
            <FontAwesomeIcon icon={faPhone}/>
            <a href="tel:+441473269030">01473 269030</a>
          </Col>
          <Col md={4} lg={3}>
            <FontAwesomeIcon icon={faEnvelope}/>
            <a href="mailto:BSMYTH@HOTMAIL.CO.UK">BSMYTHE@HOTMAIL.CO.UK</a>
          </Col>
          <Col md={4} lg={3}>
            <FontAwesomeIcon icon={faFacebookF}/>
            <a href="https://facebook.com/atobtyres" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Questions
