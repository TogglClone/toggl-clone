import React, { Component } from "react"
import { HashRouter } from "react-router-dom"
import routes from "./routes"
import "./App.css"
import Footer from './components/Home/Footer/Footer'
import Sweet from './components/Home/Sweet'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">{routes}</div>
      </HashRouter>
    )
  }
}

export default App
