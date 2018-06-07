import React, { Component } from "react"
import { HashRouter } from "react-router-dom"
import routes from "./routes"
import styled from "styled-components"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppCont>{routes}</AppCont>
      </HashRouter>
    )
  }
}

export default App

const AppCont = styled.section`
  text-align: center;
`
//Things to do for Footer- Make top button transition in on scroll and positioning 
//Things to do for Reviews- Make text body and image/animation body responsive, Worm animates on click and after reviewie changes, all elements fade in and 