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
      title={'Tennille Consulting | Child Nutrition Coming Together: Helping Louisiana'}
      meta={[
        { name: 'description', content: "Child Nutrition is an amazing career. If you've spent even a little time in the field, you know that the individuals who choose this line of work typically do so because of their desire to make a difference in people's lives." },
        { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
        { name: 'author', content: 'Tennille Consulting, LLC' },
      ]}
    />
    <GreenBar />
    <section className={styles.container}>
      <h1>Child Nutrition Coming Together: Helping Louisiana</h1>
      <p>Child Nutrition is an amazing career. If you've spent even a little time in the field, you know that the individuals who choose this line of work typically do so because of their desire to make a difference in people's lives. This heart for others starts with the students, but it doesn't stop there. Every day, Child Nutrition professionals positively impact not only the students, but teachers, coworkers, and parents, too. Today, we want to bring attention to a fellow Child Nutrition professional from Louisiana, Nadine Mann, who is the Administrative Director for the <a href="http://www.ebrschools.org/activity/business-operations/child-nutrition/">East Baton Rouge School System Child Nutrition Program</a>. Here is her story and request for help after the catastrophic flooding that occurred there recently (which included 30 inches of water in just 3 days!) [Shared with permission from a LinkedIn post]:</p>
      <p><em>Dear LinkedIn Friends, I am the Administrative Director for the EBR School System Child Nutrition Program (CNP). I have a staff of 438 employees serving meals to students in 80 locations. We provide 20,000 breakfasts and 30,000 lunches daily to students. 143 CNP staff were displaced due to the recent flood. Of the 143, one hundred lost all belongings which included their white uniforms. I established a fundraiser CNP Campaign for Uniform Replacement under the EBR School System Foundation website that will remain open for contributions during the next 19 days. I would like to provide staff who lost their white uniforms with 2 white scrub uniforms, 2 aprons, 2 pairs of socks and a pair of white shoes to replace their uniforms lost during the recent flood. I need to help my staff get back into white uniforms. A local company, S&amp;W Food Co, is providing 200 aprons to arrive in 10 days. A CNP director from a school district in Florida is sending socks. I am trying to set up an account with Payless shoes so we can purchase 100 pairs of white shoes. The campaign for uniforms has raised $5500 of the $7500 needed for uniforms and shoes. I am sharing the uniform information with this group in the event a member is looking for a way to help flood victims. My elderly mother-in-law wanted to help flood victims and welcomed this opportunity to contribute. Please pass this need along or make a contribution using the link below. Since the contribution is to a non-profit organization, it is tax deductible. Thank you, Nadine Mann </em><em><br /></em><em><a href="https://commitchange.com/la/baton-rouge/foundationebr/campaigns/child-nutrition-program" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://commitchange.com/la/baton-rouge/foundationebr/campaigns/child-nutrition-program&amp;source=gmail&amp;ust=1473783249674000&amp;usg=AFQjCNHvvFITrzylIVjnwhP0Rm-f0fHuZA">https://commitchange.com/la/<wbr />baton-rouge/foundationebr/<wbr />campaigns/child-nutrition-<wbr />program</a></em></p>
      <Link className={styles.homeLink} to='/'> {'<'} Back Home</Link>
    </section>
  </section>
)

export default NewsItem
