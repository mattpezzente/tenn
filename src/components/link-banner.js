import React, { Component } from 'react'

// Styles
import styles from './styles/link-banner.module.sass'

// Components
import Link from 'gatsby-link'
import GreenBar from './globals/green-bar'

// Images
import imgArrowIcon from '../images/icons/tennille-consulting-icon-arrow-icon.png'
import imgResourcesIcon from '../images/icons/tennille-consulting-icon-resources-icon.png'
import imgServicesIcon from '../images/icons/tennille-consulting-icon-services-icon.png'

const LinkBanner = () => (
  <section className={styles.container}>
    <section className={styles.outerFlex}>
      <img className={styles.largeIcon} src={imgServicesIcon} alt='Services and training for Tennille Consulting clients'/>
      <section className={styles.innerFlex}>
        <h4 className={styles.title}>Services and Training</h4>
        <Link className={styles.link} to='/services-and-training'><img className={styles.smallIcon} src={imgArrowIcon} alt='Services and training can be found at this link'/> Learn More...</Link>
      </section>
    </section>
    <section className={styles.outerFlex}>
      <img className={styles.largeIcon} src={imgResourcesIcon} alt='Resources for Tennille Consulting clients'/>
      <section className={styles.innerFlex}>
        <h4 className={styles.title}>Resources</h4>
        <Link className={styles.link} to='/resources'><img className={styles.smallIcon} src={imgArrowIcon} alt='Resources can be found at this link'/> Learn More...</Link>
      </section>
    </section>
  </section>
)

export default LinkBanner