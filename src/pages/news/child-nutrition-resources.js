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
      title={'Tennille Consulting | Child Nutrition Resources'}
      meta={[
        { name: 'description', content: "Recently, we shared Child Nutrition links and updates. Today, we're sharing a few more ways to keep current with the industry."},
        { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
        { name: 'author', content: 'Tennille Consulting, LLC' },
      ]}
    />
    <GreenBar />
    <section className={styles.container}>
      <h1>Child Nutrition Resources</h1>
      <p>Recently, we shared Child Nutrition links and updates. Today, we're sharing a few more ways to keep current with the industry.</p>
      <p>Did you know that many State Agencies provide periodic updates in the form of a newsletter sent via email? If you aren't yet receiving regular information from your State Agency, reach out to your agency contact and ask to be placed on their email newsletter list.</p>
      <p>Other helpful resources include the <a href="https://schoolnutrition.org/">School Nutrition Association</a>. If you're not a member, you can join at a relatively low cost. Once a member, you can access their offerings ranging from general news and publications to industry research and marketing tools.</p>
      <p>Sometimes, it's a challenge to find the time to train employees or to develop training materials during the hustle and bustle of feeding hungry students! For that, we recommend the hundreds of self-led learning opportunities and resources available at the <a href="http://nfsmi.org/">Institute of Child Nutrition</a>. There, you'll find resources you can use in your own training environments and even free, online classes people can sign up to take as their time allows.</p>
      <p>And as always, if you're looking for professional development opportunities, program training or other industry-related help, TCB Consulting is here and can partner with you. Just email or give us a call today to find out more.</p>
      <Link className={styles.homeLink} to='/'> {'<'} Back Home</Link>
    </section>
  </section>
)

export default NewsItem
