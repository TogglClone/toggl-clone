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
