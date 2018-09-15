import React from 'react'
import Img from 'gatsby-image'

// Styles
import styles from './styles/masthead.module.sass'

// Components
import LinkBanner from '../link-banner';
import GreenBar from './green-bar'

export default class Masthead extends React.Component {
  constructor(props) {
    super(props)
    this.masthead = this.props.data ? this.props.data.mastheadHomeImage : ''
  }
  
  setMasthead() {
    if(this.props.data) {
      switch(this.props.page.pathname) {
        case('/'):
          this.masthead = this.props.data.mastheadHomeImage
          break
        case('/services-and-training'):
          this.masthead = this.props.data.mastheadServicesImage
          break
        case('/services-and-training/'):
          this.masthead = this.props.data.mastheadServicesImage
          break
        case('/resources'):
          this.masthead = this.props.data.mastheadResourcesImage
          break
        case('/resources/'):
          this.masthead = this.props.data.mastheadResourcesImage
          break
        case('/about-us'):
          this.masthead = this.props.data.mastheadAboutImage
          break
        case('/about-us/'):
          this.masthead = this.props.data.mastheadAboutImage
          break
        case('/contact'):
          this.masthead = this.props.data.mastheadContactImage
          break
        case('/contact/'):
          this.masthead = this.props.data.mastheadContactImage
          break
        case('/thank-you'):
          this.masthead = this.props.data.mastheadContactImage
          break
        case('/thank-you/'):
          this.masthead = this.props.data.mastheadContactImage
          break
      }
    }
  }

  render() {
    this.setMasthead()

    if(this.props.page.pathname === '/') {
      return(
        <section className={styles.container}>
          <section key={0} className={styles.messageContainer}>
            <ul className={styles.listContainer}>
              <li>Evaluations</li>
              <li>Consulting</li>
              <li>Planning</li>
              <li>Training</li>
            </ul>
            <h2>
              School 
              <br/>
              Meal
              <br/>
              Programs
            </h2>
          </section>
          <LinkBanner key={1}/>
          <GreenBar/>
          {this.masthead.sizes && <Img
            sizes={this.masthead.sizes}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
          />}
        </section>
      )
    } else {
      return(
        <section className={styles.container}>
          <GreenBar/>
          {this.masthead.sizes && <Img
            sizes={this.masthead.sizes}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
          />}
        </section>
      )
    }
  }
}