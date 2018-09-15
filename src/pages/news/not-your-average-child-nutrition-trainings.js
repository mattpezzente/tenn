import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

// Styles
import styles from './styles/news.module.sass'

// Components
import Helmet from 'react-helmet'
import GreenBar from '../../components/globals/green-bar'

const NewsItem = (props) => (
  <section>
    <Helmet
      title={'Tennille Consulting | Not Your Average Child Nutrition Trainings'}
      meta={[
        { name: 'description', content: "A new school year is upon us! As a Director/colleague once taught me, this is when we celebrate the New Year! This awesome and progressive Florida district plans a New Year's Party for the Child Nutrition team to mark the special occasion-back to school!"},
        { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
        { name: 'author', content: 'Tennille Consulting, LLC' },
      ]}
    />
    <GreenBar />
    <section className={styles.container}>
      <h1>Not Your Average Child Nutrition Trainings!</h1>
      <p>A new school year is upon us! As a Director/colleague once taught me, this is when we celebrate the New Year! This awesome and progressive Florida district plans a New Year's Party for the Child Nutrition team to mark the special occasion-back to school!</p>
      <p>Over the years, we have gleaned numerous nuggets of amazing concepts from a myriad of National School Lunch Program Sponsors across the country. From Alaska to the U.S. Virgin Islands, we've provided trainings that almost always end with the TCB Team learning just as much as we teach. The varying perspectives from each district have always stretched our Team and challenged us. We pride ourselves with thinking out of the box. But we also relish sharing those out of the box solutions to every day challenges. We share our successes; we share our defeats. We share recipes and lessons learned. We, as Child Nutrition Professionals, are a steadfast collection of individuals working towards the betterment of Child Nutrition Programs as a whole.</p>
      <p>While Team TCB still learns from every one of our clients, we have had access to innumerable scenarios and are able to provide valuable solutions to every day challenges. These opportunities have provided us the ability to create fantastic trainings focused on the betterment and advancement of Child Nutrition Programs.</p>
      <p>Of course we can provide training regarding Free and Reduced Price Applications and Meal Pattern Requirements, but what about pushing teams to understanding why food waste is a critical component of the program. What about challenging teams to become stronger leaders to develop the teams' depth and strength! And let's not forget, the upcoming Procurement Reviews! This is a focus of USDA and State Agencies this year. As a Program Sponsor are you ready for the review? As a State Agency, are you ready to review!?</p>
      <p>Team TCB has developed its own Procurement Tool helper to assist State Agencies with the trials and struggles of implementing the new Procurement Reviews. Team TCB works with both State Agencies and School Districts because we all are reaching toward the same goal of serving delicious meals and operating a compliant Child Nutrition Program.</p>
      <p>If you have training needs, please contact TCB Consulting. Let us help brainstorm creative resolutions to your conventional challenges! For more information, please email <a href="mailto:Kathryn@TennilleConsulting.com">Kathryn@TennilleConsulting.com</a> or call <a href='tel:8445583927'>844-558-3927</a>.</p>
      <Link className={styles.homeLink} to='/'> {'<'} Back Home</Link>
    </section>
  </section>
)

export default NewsItem
