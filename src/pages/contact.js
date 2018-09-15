import React from 'react'
import { navigateTo } from "gatsby-link";

// Styles
import styles from './styles/contact.module.sass'
import './styles/contact.sass'

// Components
import Helmet from 'react-helmet'
import GreenBar from '../components/globals/green-bar'
import ContactBlock from '../components/contact-block'
import GoogleMap from '../components/google-map'

// Images
import imgIconMail from '../images/icons/tennille-consulting-icon-mail.png'
import imgIconFacebook from '../images/icons/tennille-consulting-icon-facebook.png'
import imgIconMapMarker from '../images/icons/tennille-consulting-icon-map-marker.png'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isValidated: false,
      Name: '',
      Email: '',
      Subject: 'Website Inquiry',
      Message: ''
    }
    this.baseState = this.state
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const formLength = this.formEl.length

    if (this.formEl.checkValidity() === false) {
      for(let i=0; i<formLength; i++) {
        const elem = this.formEl[i]
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback')

        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          if (!elem.validity.valid) {
            errorLabel.textContent = '*' + elem.validationMessage
          } else {
            errorLabel.textContent = ''
          }
        }
      }

      return false;
    } else {
      for(let i=0; i<formLength; i++) {
          const elem = this.formEl[i]
          const errorLabel = elem.parentNode.querySelector('.invalid-feedback')
          if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
              errorLabel.textContent = ''
          }
        }
      return true
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
    .then(() => {
      navigateTo(form.getAttribute("action"))
    })
    .catch(error => {
      this.validate()
      this.setState({isValidated: true})
    })
  }

  componentWillUnmount() {
    this.setState(this.baseState)
  }

  render() {
    const props = [...this.props];
    let classNames = [];
    
    if (props.className) {
      classNames = [...props.className];
      delete props.className;
    }

    if (this.state.isValidated) {
      classNames.push('.was-validated');
    }

    return(
      <section>
        <Helmet
          title={'Tennille Consulting | Contact'}
          meta={[
            { name: 'description', content: 'TCB Consulting by Robin Tennille is your number one source for assistance with all your Child Nutrition Program needs. Contact us today, and learn how we can partner together for Child Nutrition Programs.' },
            { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
            { name: 'author', content: 'Tennille Consulting, LLC' },
          ]}
        />
        <section className={styles.intro}>
          <h1 className={styles.introTitle}>Contact</h1>
        </section>
        <GreenBar/>
        <section className={styles.contact}>
          <section className={styles.contactCol}>
            <ContactBlock img={this.props.data.teamRobinImage} name='Robin Tennille' contact='(844) 558-3927' type='phone' />
            <p className={styles.contactFancy}><span>OR</span></p>
            <div className={styles.linkContainer}>
              <a className={styles.contactLink} href='mailto:Info@TennilleConsulting.com'><img className={styles.contactIcon} src={imgIconMail} alt='Contact Tennille Consulting by Email'/> Info@TennilleConsulting.com</a>
              <a className={styles.contactLink} href='https://www.facebook.com/TCBConsulting/'><img className={styles.contactIcon} src={imgIconFacebook} alt='Connect with Tennille Consulting by Facebook'/> Facebook.com/TCBConsulting</a>
              <p className={styles.contactLink}><img className={styles.contactIcon} src={imgIconMapMarker} alt='Map marker of our address'/> 2910 Kerry Forest Pkwy, D4-293,<br/>Tallahassee, Florida 32309, USA</p>
            </div>
          </section>
          <section className={styles.contactCol}>
            <form 
              ref={form => this.formEl = form}
              onSubmit={this.handleSubmit} 
              {...props}
              className={styles.contactForm} 
              name='Contact'
              action='/thank-you'
              method='POST' 
              data-netlify-honeypot='message-bot' 
              data-netlify="true" 
              noValidate>
              <p>
                <label htmlFor='Name'>Your Name:</label>   
                <input type='text' name='Name' onChange={this.handleChange} required/>
                <span className='invalid-feedback'></span>
              </p>
              <p>
                <label htmlFor='Email'>Your Email:</label>
                <input type='email' name='Email' onChange={this.handleChange} required/>
                <span className='invalid-feedback'></span>
              </p>
              <p>
                <input type='hidden' name='Subject' value='Website Inquiry'/>
              </p>
              <p className={styles.contactHiddenField}>
                <label>Message Bots:</label>
                <textarea name='message-bot'/>
              </p>
              <p>
                <label htmlFor='Message'>Message:</label>
                <textarea name='Message' onChange={this.handleChange}></textarea>
                <span className='invalid-feedback'></span>
              </p>
              <p>
                <button className={styles.contactFormSubmit} type='submit'>Send</button>
              </p>
            </form>
          </section>
        </section>
        <GoogleMap />
      </section>
    )
  }
}

export default ContactPage

export const contactImageQuery = graphql`
  query ContactImageQuery {
    teamRobinImage: imageSharp(id: { regex: "/tennille-consulting-robin-tennille-chief-executive-officer/" }) {
      sizes(maxWidth: 800 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`