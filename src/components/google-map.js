import React from 'react'
import GoogleMapReact from 'google-map-react';

// Styles
import styles from './styles/google-map.module.sass'

class GoogleMap extends React.Component {  
  static defaultProps = {
    center: {
      lat: 30.542555,
      lng: -84.224708
    },
    zoom: 16,
    text: 'TCB Consulting'
  }

  render() {
    return (
      <section style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBm5FyRHIfgUZVbC7voUAn23aHGttl8woU'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <div 
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          className={styles.marker}
        >
        </div>
        </GoogleMapReact>
    </section>
    )
  }
}

export default GoogleMap