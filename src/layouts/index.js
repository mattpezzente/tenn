import React from 'react'
import PropTypes from 'prop-types'

// Styles
import '../styles/globals.sass'

// Components
import Helmet from 'react-helmet'
import Nav from '../components/globals/nav'
import Masthead from '../components/globals/masthead'
import Footer from '../components/globals/footer'
import GreenBar from '../components/globals/green-bar'

// Images
import favicon from '../images/favicon.png'

const Layout = ({location, children, data}) => (
  <section>
    <Helmet>
    <html lang="en" />
    <link rel='shortcut icon' href={favicon} />
    </Helmet>
    <Nav data={data}/>
    {location.pathname.includes('/news') || location.pathname.includes('/thank-you') ? '' : <Masthead page={location} data={data}/> }
    {children()}
    <GreenBar/>
    <Footer data={data}/>
  </section>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const imageQuery = graphql`
  query ImageQuery {
    logoImage: imageSharp(id: { regex: "logos/tennille-consulting-navigation-logo/" }) {
      sizes(maxWidth: 500 ) {
        ...GatsbyImageSharpSizes
      }
    }
    mastheadHomeImage: imageSharp(id: { regex: "/tennille-consulting-masthead-home/" }) {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
    mastheadServicesImage: imageSharp(id: { regex: "/tennille-consulting-masthead-services/" }) {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
    mastheadResourcesImage: imageSharp(id: { regex: "/tennille-consulting-masthead-resources/" }) {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
    mastheadAboutImage: imageSharp(id: { regex: "/tennille-consulting-masthead-about/" }) {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
    mastheadContactImage: imageSharp(id: { regex: "/tennille-consulting-masthead-contact/" }) {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
    footerLogoImage: imageSharp(id: { regex: "/tennille-consulting-footer-logo/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    footerBackgroundImage: imageSharp(id: { regex: "/tennille-consulting-footer-backgrou/" }) {
      sizes(maxWidth: 1920 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`