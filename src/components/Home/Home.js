import React, { Component } from "react"
import Landing from "./Landing/Landing"
import Bennies from "./Bennies/Bennies"
import Reviews from "./Reviews/Reviews"
import Packages from "./Packages/Packages"
import Footer from './Footer/Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <Bennies />
        <Reviews />
        <Packages />
        <Footer />
      </div>
    )
  }
}

export default Home
