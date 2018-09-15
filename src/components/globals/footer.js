import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/footer.module.sass'

const Footer = (props) => (
  <section className={styles.container}>
    {props && <Img className={styles.logo} outerWrapperClassName={styles.gatsbyWrapper} sizes={props.data.footerLogoImage.sizes} alt='Tennille Consulting by Robin Tennille' />}
    <p className={styles.text}>
      Copyright 2018, TCB Consulting. 
    </p>
    <p className={styles.text}>
      All Rights Reserved.
    </p>
    {props && <Img 
      sizes={props.data.footerBackgroundImage.sizes} 
      alt='Tennille Consulting footer image'
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        margin: '0 auto'
      }}
    />}
  </section>
)

export default Footer
