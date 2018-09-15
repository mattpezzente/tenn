import React from 'react'
import { navigateTo } from "gatsby-link";

class ThankYouPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.mounted = true
    setTimeout(() => {
      if(this.mounted) {
        navigateTo("/")
      }
    }, 4000) 
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    return (
      <section style={{textAlign: 'center', padding: '30px'}}>
        <h1>Oops! This Page Does Not Exist!</h1>
        <p>Sit tight, we'll get you back home in just a moment...</p>
      </section>
      )
    }

}

export default ThankYouPage
