import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/contact-block.module.sass'

// Images
import imgIconPhone from '../images/icons/tennille-consulting-icon-phone.png'
import imgIconEmail from '../images/icons/tennille-consulting-icon-mail.png'

const ContactBlock =  ({img, name, contact, type}) => {
  let typeFormatted = ''
  let imgFormatted = ''

  switch(type) {
    case('email'):
      typeFormatted = `mailto:${contact.replace(/\s/g,'')}`
      imgFormatted = imgIconEmail
      break
    case('phone'):
      typeFormatted = `tel:${contact.replace(/\s/g,'')}`
      imgFormatted = imgIconPhone
      break
  }

  return(
    <section className={styles.container}>
      <Img outerWrapperClassName={styles.gatsbyWrapper} className={styles.img} sizes={img.sizes} alt={`Contact for ${name}`}/>
      <section className={styles.containerInner}>
        <h2 className={styles.title}>{name}</h2>
        <a className={styles.contact} href={typeFormatted}><img className={styles.icon} src={imgFormatted} alt='Contact icon for Tennille Consulting member'/> {contact}</a>
      </section>
    </section>
  )
}
export default ContactBlock
