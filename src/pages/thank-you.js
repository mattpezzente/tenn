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
        navigateTo("/contact")
      }
    }, 5000) 
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    return (
      <section style={{textAlign: 'center', padding: '30px'}}>
        <h1>Thank you for your submission!</h1>
        <p>You will be returned to the previous page in just a moment...</p>
      </section>
      )
    }

}

export default ThankYouPage
