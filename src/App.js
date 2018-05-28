import React, { Component } from "react"
import "./App.css"

class App extends Component {
  render() {
    return <div className="App">app
    <a href={process.env.REACT_APP_LOGIN} className='login-font'>Login / Register</a>
    </div>
  }
}

export default App
