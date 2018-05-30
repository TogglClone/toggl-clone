import React, { Component } from "react"
import { Link } from "react-router-dom"
import Landing from "./Landing/Landing"

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home Page
        <br />
        <a href={process.env.REACT_APP_LOGIN} className="login-font">
          Login / Register
        </a>
        <Link to={"/timer"}>
          <button>Timer</button>
        </Link>
        <Landing />
      </div>
    )
  }
}

export default Home
