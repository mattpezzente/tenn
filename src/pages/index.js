import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/index.module.sass'

// Components
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { FontAwesomeIcon as FA, } from '@fortawesome/react-fontawesome'
import { faNewspaper, faHandshake } from '@fortawesome/free-solid-svg-icons'
import GreenBar from '../components/globals/green-bar'
import Testimonials from '../components/testimonials'
import ContactBlock from '../components/contact-block'
import NewsFeed from '../components/news-feed';

// Images
import imgIconMail from '../images/icons/tennille-consulting-icon-mail.png'
import imgIconFacebook from '../images/icons/tennille-consulting-icon-facebook.png'
import imgIconMapMarker from '../images/icons/tennille-consulting-icon-map-marker.png'

const IndexPage = (props) => {
  return  (
    <section className='content'>
        <Helmet
          title={'Tennille Consulting | By Robin Tennille'}
          meta={[
            { name: 'description', content: 'TCB Consulting by Robin Tennille is your number one source for assistance with all your Child Nutrition Program needs. We surpass the competition in not only service, but value as well!' },
            { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
            { name: 'author', content: 'Tennille Consulting, LLC' },
          ]}
        />
        <section className={styles.pageIntro}>
          <h1>Welcome to TCB Consulting!</h1>
          <Img outerWrapperClassName={styles.introImage} sizes={props.data.homeExpoImage.sizes} alt='School Food and Equipment Expo With the Tennille Team'/>
          <p>TCB Consulting by Robin Tennille is your number one source for assistance with all your Child Nutrition Program needs. We surpass the competition in not only service, but value as well.</p>
          <p>We have created a proven success record yielding positive results with Administrative Review preparation for over 500 schools across the country that follow recommended training plans. Our programs frequently lead to fewer findings and limited fiscal action. TCB has also conducted over 400 Administrative Reviews in the past three years, assisting State Agencies in completing their three-year cycle.</p>
          <p>Providing relevant and practical technical assistance in all aspects of Child Nutrition programs is our classic specialty. In addition, we also provide customized evaluation, training, and coaching services that meet each school’s individual needs in all areas of the National School Lunch Program and the School Breakfast Program.</p>
          <p>Your Program’s needs are unique, so take your time and browse our website for available services. If you need more information or would like a free estimate, please email us at <a href='mailto:Info@TennilleConsulting.com'>Info@TennilleConsulting.com</a>.</p>
        </section>

        <GreenBar/>

        <section className={styles.section}>
          <section className={styles.col}>
            <h2><FA icon={faHandshake}/> Connect With Us</h2>
            <p className={styles.connectText}>“You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At TCB Consulting, we provide the exceptional service we'd want to experience ourselves!”</p>
            <section className={styles.connectInner}>
              <ContactBlock img={props.data.teamRobinImage} name='Robin Tennille' contact='(844) 558 3927' type='phone'/>
              <div>
                <a className={styles.connectLink} href='mailto:Info@TennilleConsulting.com'><img className={styles.connectIcon} src={imgIconMail} alt='Contact Tennille Consulting by Email'/> Info@TennilleConsulting.com</a>
                <a className={styles.connectLink} href='https://www.facebook.com/TCBConsulting/'><img className={styles.connectIcon} src={imgIconFacebook} alt='Connect with Tennille Consulting by Facebook'/> Facebook.com/TCBConsulting</a>
                <Link className={styles.connectLink} to='/contact'><img className={styles.connectIcon} src={imgIconMapMarker} alt='Map marker of our address'/> 2910 Kerry Forest Pkwy, D4-293,<br/>Tallahassee, Florida 32309, USA</Link>
              </div>
            </section>
          </section>

          <section className={styles.col}>
            <h2><FA icon={faNewspaper}/> Latest News</h2>
            <NewsFeed/>
          </section>
        </section>
      <Testimonials background={props.data.homeTestimonialsImage}/>
    </section>
  )
}

export default IndexPage

export const homeImageQuery = graphql`
  query HomeImageQuery {
    homeExpoImage: imageSharp(id: { regex: "/tennille-consulting-school-health-expo/" }) {
      sizes(maxWidth: 800 ) {
        ...GatsbyImageSharpSizes
      }
    }
    homeTestimonialsImage: imageSharp(id: { regex: "/tennille-consulting-home-cooking-ginger/" }) {
      sizes(maxWidth: 2400 ) {
        ...GatsbyImageSharpSizes
      }
    }
    teamRobinImage: imageSharp(id: { regex: "/tennille-consulting-robin-tennille-chief-executive-officer/" }) {
      sizes(maxWidth: 800 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`