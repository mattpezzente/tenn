import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/nav.module.sass'
import './styles/nav.sass'

// Components
import Link from 'gatsby-link'
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon as FA, } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

// Images
import imgMenuIcon from '../../images/icons/tennille-consulting-icon-hamburger-menu.png'
import imgCloseIcon from '../../images/icons/tennille-consulting-icon-close-menu.png'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: typeof window !== `undefined` ? window.innerWidth : null,
      scroll: typeof window !== `undefined` ? window.scrollY : null,
      menuVisible: false
    }
  }
  
  componentWillMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.handleWindowSizeChange)
      window.addEventListener('scroll', this.handleWindowScrollChange)
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.handleWindowSizeChange)
      window.removeEventListener('scroll', this.handleWindowScrollChange)
    }
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  handleWindowScrollChange = () => {
    this.setState({ scroll: window.scrollY})
  }

  render() {
    const { width, scroll } = this.state
    const isMobile = width <= 850
    const isFixed = scroll > 120
    // the rest is the same...

    if (!isMobile) {
      return (
        <nav className={`main-nav ${styles.container} ${isFixed ? styles.fixed : ''}`}>
          <Link className={styles.logo} to='/'>{this.props && <Img sizes={this.props.data.logoImage.sizes} name='Return to Home' alt='Tennille Consulting by Robin Tennille'/>}</Link>
          <section className={ styles.wrapper }>
            <ul className={styles.linksSub}>
              <li><a href='tel:844-558-3927'><FA className={styles.icon} name='phone' icon={faPhone}/> (844) 558-3927</a></li>
              <li><a href='mailto:info@tennilleconsulting.com'><FA className={styles.icon} name='phone' icon={faEnvelope}/> Info@TennilleConsulting.com</a></li>
              <li><a href='https://www.facebook.com/TCBConsulting/'><FA className={styles.icon} name='phone' icon={faFacebookSquare}/> Visit Us On Facebook!</a></li>
            </ul>
            <ul className={styles.linksMain}>
              <li><Link exact to='/' activeStyle={{ color: '#56C9D9' }}>Home</Link></li>
              <li><Link exact to='/services-and-training' activeStyle={{ color: '#56C9D9' }}>Services and Training</Link></li>
              <li><Link exact to='/resources' activeStyle={{ color: '#56C9D9' }}>Resources</Link></li>
              <li><Link exact to='/about-us' activeStyle={{ color: '#56C9D9' }}>About</Link></li>
              <li><Link exact to='/contact' activeStyle={{ color: '#56C9D9' }}>Contact Us</Link></li>
            </ul>
          </section>
        </nav>
      )
    } else {
      return (
        <nav className={`${styles.container} ${isFixed ? styles.fixed : ''}`}>
          <Link to='/'>{this.props && <Img className={styles.logo} sizes={this.props.data.logoImage.sizes} name='Return to Home' alt='Tennille Consulting by Robin Tennille'/>}</Link>
          <Menu right width={'250px'} isOpen={this.state.menuVisible} customBurgerIcon={<img src={imgMenuIcon}/>} customCrossIcon={<img src={imgCloseIcon}/>} className={styles.mobileWrapper}>
            <ul className={styles.mobileLinksMain}>
              <li><Link exact to='/' activeStyle={{ color: '#56C9D9' }}>Home</Link></li>
              <li><Link exact to='/services-and-training' activeStyle={{ color: '#56C9D9' }}>Services and Training</Link></li>
              <li><Link exact to='/resources' activeStyle={{ color: '#56C9D9' }}>Resources</Link></li>
              <li><Link exact to='/about-us' activeStyle={{ color: '#56C9D9' }}>About</Link></li>
              <li><Link exact to='/contact' activeStyle={{ color: '#56C9D9' }}>Contact Us</Link></li>
            </ul>
            <ul className={styles.mobileLinksSub}>
              <li><a href='tel:844-558-3927'><FA className={styles.icon} name='phone' icon={faPhone}/> (844) 558-3927</a></li>
              <li><a href='mailto:info@tennilleconsulting.com'><FA className={styles.icon} name='phone' icon={faEnvelope}/> Info@TennilleConsulting.com</a></li>
              <li><a href='https://www.facebook.com/TCBConsulting/'><FA className={styles.icon} name='phone' icon={faFacebookSquare}/> Visit Us On Facebook!</a></li>
            </ul>
          </Menu>
        </nav>
      )
    }
  }
}

export default Nav
