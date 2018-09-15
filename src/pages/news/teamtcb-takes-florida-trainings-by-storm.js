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
      title={'Tennille Consulting | TeamTCB Takes Florida Trainings By Storm'}
      meta={[
        { name: 'description', content: 'Great news for your training needs! TCB Consulting, LLC was awarded a contract with the Florida Department of Agriculture!' },
        { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
        { name: 'author', content: 'Tennille Consulting, LLC' },
      ]}
    />
    <GreenBar />
    <section className={styles.container}>
      <h1>#TEAMTCB Takes Florida Trainings by Storm!</h1>
      <h2>Hello Florida!</h2>
      <p>Great news for your training needs! TCB Consulting, LLC was awarded a contract with the <a href="http://www.freshfromflorida.com/Divisions-Offices/Food-Nutrition-and-Wellness">Florida Department of Agriculture</a>. Through this awarded RFP, TCB will provide training to SFAs covering a variety of topics including, but not limited to: Food safety, ServSafe, Basic Compliance, Menu Planning, and OVS, as well as how to market your program, and many more!</p>
      <p>Back to School has been an amazing time for TCB and sponsors of Child Nutrition Programs. From Pensacola to Key West, TCB has provided trainings to assist with professional development, program development, and implementation. In the two weeks prior to school starting, TCB has conducted over 35 training sessions across the state!</p>
      <p>It is our pleasure to serve the State of Florida with our amazing team! Team TCB includes our top rate trainers: Robin Tennille, Kathryn Rippee, and Michael Jestus. In addition to our regular staff, we are honored to work with <a href="https://www.frla.org/training-certification/">Florida Restaurant and Lodging Association (FRLA)</a>, <a href="http://rcstraining.com/">Regulatory Compliance Services (RCS)</a>, and many independent consultants such as: Sherri Webber <a href="http://lavongroup.com/">(Lavonn Group)</a>, Cindy Belcher, <a href="http://www.chgilbert.com/">Carol Gilbert</a>, Dayana Bray, Beth Rice, Susan Wood, and <a href="http://americasmeal.com/">JoAnne Robinett</a>!</p>
      <p>If you are interested in providing training to your team that meets USDA's Professional Standards Requirements, and are located in Florida, please contact TCB via internet request at <a href="https://form.jotform.us/70747137610151">JotForm</a>!</p>
      <p>Happy New School Year to you all!</p>
      <Link className={styles.homeLink} to='/'> {'<'} Back Home</Link>
    </section>
  </section>    
)

export default NewsItem
