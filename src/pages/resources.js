import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/resources.module.sass'

// Components
import Helmet from 'react-helmet'
import GreenBar from '../components/globals/green-bar'

const linksData = [
  {
    title: 'USDA Food and Nutrition Services',
    link: 'http://www.fns.usda.gov/'
  },
  {
    title: 'Florida Department of Agriculture and Consumer Services, Food Nutrition and Wellness',
    link: 'http://www.freshfromflorida.com/Divisions-Offices/Food-Nutrition-and-Wellness'
  },
  {
    title: 'Texas Department of Agriculture, Food and Nutrition',
    link: 'http://www.squaremeals.org/'
  },
  {
    title: 'The Institute of Child Nutrition',
    link: 'http://www.theicn.org/Templates/TemplateDivision.aspx?qs=cElEPTE='
  },
  {
    title: 'School Nutrition Association',
    link: 'http://schoolnutrition.org/'
  }
]

const ResourcesPage = (props) => {
  const links = linksData.map((item, i) => {
    return(<a key={i} href={item.link} className={styles.resourcesLink}>{item.title}</a>)
  })

  return(
    <section className='content'>
      <Helmet
        title={'Tennille Consulting | Resources'}
        meta={[
          { name: 'description', content: 'These sites provide great resources for the Child Nutrition industry. Be sure to stay up to date on the latest news, regulations, and guidance!'},
          { name: 'keywords', content: 'child nutrition, tennille, robin tennille, tcb consulting, school meal programs' },
          { name: 'author', content: 'Tennille Consulting, LLC' },
        ]}
      />
      <section className={styles.intro}>
        <h1>Resources</h1>
        <p>These sites provide great resources for the Child Nutrition industry. Be sure to stay up to date on the latest news, regulations, and guidance!</p>
      </section>
      <GreenBar/>
      <section className={styles.resources}>
        {links}
      </section>
      <section className={styles.banner}>
        <Img 
          sizes={props.data.resourcesBackgroundImage.sizes}
          outerWrapperClassName={styles.gatsbyWrapper}
          alt='Healhy fresh fruit footer background'
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </section>
    </section>
  )
}

export default ResourcesPage

export const resourcesImageQuery = graphql`
  query ResourcesImageQuery {
    resourcesBackgroundImage: imageSharp(id: { regex: "/tennille-consulting-healthy-fresh-food/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`