import React from 'react'

// Styles
import styles from './styles/news-feed.module.sass'

// Components
import Link from 'gatsby-link'
import { FontAwesomeIcon as FA, } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

// Images
import imgIconPhone from '../images/icons/tennille-consulting-icon-phone.png'

// Data Schema
const newsData = [
  {
    title: '#TEAMTCB Takes Florida Trainings by Storm!',
    link: '/news/teamtcb-takes-florida-trainings-by-storm',
  },
  {
    title: 'Child Nutrition Resources',
    link: '/news/child-nutrition-resources',
  },
  {
    title: 'Stay Current in Child Nutrition!',
    link: '/news/stay-current-in-child-nutrition',
  },
  {
    title: 'Child Nutrition Coming Together: Helping Louisiana',
    link: '/news/child-nutrition-coming-together-helping-louisiana',
  },
  {
    title: 'Not Your Average Child Nutrition Trainings!',
    link: '/news/not-your-average-child-nutrition-trainings',
  }
]

const NewsFeed =  () => {
  const newsItems = newsData.map((item, i) => {
    return (
      <Link key={i} to={item.link} className={styles.newsItem}><FA icon={faNewspaper}/>{item.title}</Link>
    )
  })
  
  return (
    <section className={styles.container}>
      {newsItems}
    </section>
  )
}

export default NewsFeed
