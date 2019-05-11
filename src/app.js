import React, { Component, Fragment } from 'react'
import './app.css'
import ShippingLabelMaker from './features/shipping-label-maker/shipping-label-maker'
import Footer from './features/components/footer'
import Header from './features/components/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ShippingLabelMaker />
        <Footer />
      </Fragment>
    )
  }
}

export default App
