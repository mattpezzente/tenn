import React, { Component } from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/testimonials.module.sass'

// Components
import { FontAwesomeIcon as FA, } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

// Data Schema
const testimonialData = [
  {
    text: 'TCB Consulting comes with my strongest recommendation. The Santa Rosa County School District will retain the services of this fine company again to train our food service staff and prepare for future audits. I know of no one who is a greater expert in the National School Lunch Program than Robin Tennille.',
    author: 'Judson C. Crane Santa Rosa County School District'
  },
  {
    text: 'I can tell you she has done a better job on a part-time basis than previous administrators who were full-time. She does outstanding work. Due to her efforts, our country is the only school district in the state which provides ALL its students with breakfast and lunch at no cost. Under her direction, our school food service program is 100% self supporting. It no longer requires subsidization from the general operating fund as it did in the past. Our audits have been almost 100% flawless since she came on board. I can say, without reservation, that she is highly qualified in the school food service field. But having someone like her to advise you is not the whole solution. Your administrators and staff must be willing to accept guidance to implement and support her recommendations to the fullest extent.',
    author: 'Sam Carnley,Chief Financial Officer'
  },
  {
    text: 'The Orange County Public Schools Food and Nutrition Services program has relied upon the expertise of TCB Consulting to conduct an audit of USDA Regulation compliance in our schools. TCB Consulting maintains a working knowledge of not only the current USDA Regulations but the future and also our state\'s interpretation of regulations. The audit is conducted in a professional manner with appropriate seriousness applied to required criteria. After the audit, a complete report is submitted so that training can be planned to address the areas where corrections are needed.',
    author: 'Lora Gilbert MS, RD, FADA, SNS Sr. Director, Food and Nutrition Services'
  },
  {
    text: 'Robin Tennille\'s expertise truly covers the entire gamut of food services. I have had the pleasure of interacting with or utilizing Robin\'s expertise at the state level, as a fellow Food Service Director, as an auditor for the POWER Buying Group and as a consultant helping school districts with training or preparing for USDA audits. In each of these instances, I have found Ms. Tennille to be very knowledgeable and customer service oriented. As the incoming Chairman for the POWER Buying Group, I have a great deal of confidence in Robin\'s ability to perform our yearly audits with our distributor. The reports she provides the group are very informative and concise. As one of the largest food service buying co-ops in the country, I can be rest assured that Robin will continue to keep our co-op in the good graces of federal procurement guidelines.',
    author: 'Roy R. Pistone II, RD Med, SNS, Director of Food Services, Citrus County'
  }
]

const Testimonials = (props) => {

  const testimonialItems = testimonialData.map((item, i) => {
    return (
      <section key={i} className={styles.item}>
        <p className={styles.itemText}><FA icon={faQuoteLeft}/>&ensp;{item.text}&ensp;<FA icon={faQuoteRight}/></p>
        <p className={styles.itemAuthor}>{item.author}</p>
      </section>
    )
  })

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>What our clients are saying</h2>
      {testimonialItems}
      <Img 
        sizes={props.background.sizes}
        outerWrapperClassName={styles.backgroundImage}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </section>
  )
}

export default Testimonials