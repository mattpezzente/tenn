import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/services-and-training.module.sass'

// Components
import Helmet from 'react-helmet'
import GreenBar from '../components/globals/green-bar'
import imgIconMail from '../images/icons/tennille-consulting-icon-mail.png'

// Data Schema
const servicesData = [
  'Conducting Administrative Reviews',
  'Administrative Review/Audit Preparation',
  'Business Management Services for Charter Schools, Small SFAs and Private Schools',
  'Implementation of Healthy Hunger Free Kids Act regulations',
  'Fresh Fruit and Vegetable Program educational materials',
  'Financial Management, Turn Around, and Cost Control',
  'Food Safety Training (ServSafe and Serving it Safe)',
  'Food Safety 101',
  'Program Efficiency and Performance Evaluation',
  'Menu Planning and Recipe Evaluation',
  'Customized Production Records and Recipes',
  'Provision 2/CEO/Universal Feeding Recommendations and Evaluations',
  'New Sponsor Training and Mentoring',
  'New Director Training and Mentoring',
  'Compliance Training and Evaluation',
  'Free and Reduced Price Application Processing',
  'Charter School Operation',
  'National School Lunch Program Marketing 101',
  'Procurement and Cooperative Purchasing Guidance',
  'Seamless Summer and Simplified Summer',
  'Food Service Management Company (FSMC) Evaluation, Guidance, and Assistance',
  'Leadership Development',
  'Staff Development and Training'
]

const ServicesAndTrainingPage = (props) => {

  const servicesList = servicesData.map((item, i) => {
    return(<p key={i}>{item}</p>)
  })

  return(
    <section className='content'>
      <Helmet
        title={'Tennille Consulting | Services And Training'}
        meta={[
          { name: 'description', content: 'Providing over 17 years of service to Child Nutrition Programs has given us a broad range of experiences to draw our expertise from.'},
          { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
          { name: 'author', content: 'Tennille Consulting, LLC' },
        ]}
      />
      <section className={styles.intro}>
        <h1 className={styles.introTitle}>Services And Training</h1>
        <p>We at TCB Consulting have provided our services to Child Nutrition Programs for nearly two decades, thus giving us a broad range of experiences from which to draw our expertise.</p>
        <p>One of our specialties includes all aspects of Administrative Reviews. From assisting SFAs in preparation for Administrative Reviews to assisting State Agencies in conducting Administrative Reviews, 7 CFR is our language! <a href='http://conta.cc/2b8EN4Y'>Click here</a> to read more about how we assist State Agencies in completing the three year review cycle for Administrative and Procurement Reviews! Child Nutrition training is another specialty. Our training catalog includes over 75 trainings for all your Child Nutrition needs. For customized training, please contact us!</p>
        <p>TCB is proud to announce our newest service! We now offer Business Management Services for Charter Schools, Small SFAs and Private Schools. The services included in this package include, but are not limited to, Training, Verification, Free and Reduced Priced Applications, Administrative Review Preparation, Sponsor Application Renewals, Claims, Wellness Policy, Charge Policy and Procurement Recommendations</p>
      </section>
      <GreenBar/>
      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <section className={styles.servicesList}>
          {servicesList}
        </section>
        <Img 
          sizes={props.data.servicesBackgroundImage.sizes}
          alt='Services background of healthy cooking'
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </section>
      <section className={styles.contact}>
        <p className={styles.contactText}>Because failure is not an option, let our team help your program and staff succeed!
          <br/>
          For pricing on any of the listed services, please contact us at: 
        </p>
        <a className={styles.contactLink} href='mailto:Info@TennilleConsulting.com'><img className={styles.contactIcon} src={imgIconMail} alt='Contact Tennille Consulting by Email'/> Info@TennilleConsulting.com</a>
      </section>
    </section>
  )
}

export default ServicesAndTrainingPage

export const servicesImageQuery = graphql`
  query ServicesImageQuery {
    servicesBackgroundImage: imageSharp(id: { regex: "/tennille-consulting-board-cooking-healthy/" }) {
      sizes(maxWidth: 800 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`