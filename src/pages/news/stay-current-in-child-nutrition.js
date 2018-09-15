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
      title={'Tennille Consulting | Stay Current in Child Nutrition'}
      meta={[
        { name: 'description', content: 'How often do you check Facebook? How frequently do you browse Pinterest? Do you have other favorite websites you visit regularly throughout the day to stay up-to-date on current news and events? Stay current!' },
        { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
        { name: 'author', content: 'Tennille Consulting, LLC' },
      ]}
    />
    <GreenBar />
    <section className={styles.container}>
      <h1>Stay Current in Child Nutrition!</h1>
      <p>Stay Current!</p>
      <p>How often do you check Facebook? How frequently do you browse Pinterest? Do you have other favorite websites you visit regularly throughout the day to stay up-to-date on current news and events?</p>
      <p>Let's be honest: it's not overly challenging to stay current when it's family, friends, or the latest news. But, when it's <em>The Federal Government and Regulatory Compliance, </em>it just doesn't seem as exciting!</p>
      <p>As professionals in the Child Nutrition Program, which has been around since 1946, we may sometimes feel like everything critically important was communicated years, perhaps even decades, ago. Yet, the truth is, changes can and do occur with some regularity. In fact, if you've been a part of the program for even a short time, you know that change is sometimes the only thing that seems constant!</p>
      <p>As we find ourselves approximately 16% of the way through the 2016-17 school year already, it's important we're current on policy and regulatory updates, industry best practices and other avenues that help maximize our effectiveness and results we deliver to our most important clients - the students.</p>
      <p>With that in mind, here are a few recent USDA releases you may find informative:</p>
      <ol>
        <li>Overcoming the Unpaid Meal Challenge: Proven Strategies from Our Nation's Schools<br />(9/16/2016)</li>
        <li><a href="http://www.fns.usda.gov/sites/default/files/cn/SP59-2016os.pdf">Policy Memorandum on Modifications to Accommodate Disabilities in the School Meal Programs</a><br />(9/27/2016)</li>
        <li><a href="http://www.fns.usda.gov/sites/default/files/cn/SP61-2016-CEP_Guidance.pdf">Fall 2016 Edition: Community Eligibility Provision: Planning and Implementation Guidance</a><br />(September 2016)</li>
        <li>These and many other USDA Resources are available here: <a href="http://www.fns.usda.gov/school-meals/child-nutrition-programs">USDA School Meals Child Nutrition Programs</a></li>
      </ol>
      <p>We'll periodically provide additional links to even more resources - so check back often! If you find you're in need of training, development, or other program support, please let us know. We're here and ready to help!</p>
      <Link className={styles.homeLink} to='/'> {'<'} Back Home</Link>
    </section>
  </section>
)

export default NewsItem
