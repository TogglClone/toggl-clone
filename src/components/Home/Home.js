import React, { Component } from "react"
import { Link } from "react-router-dom"
import Landing from "./Landing/Landing"
import Bennies from "./Bennies/Bennies"
import Reviews from "./Reviews/Reviews"
import Packages from "./Packages/Packages"

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <Bennies />
        <Reviews />
        <Packages />
      </div>
    )
  }
}

export default Home
