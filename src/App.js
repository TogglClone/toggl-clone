import React, { Component } from "react"
import { HashRouter } from "react-router-dom"
import routes from "./routes"
import "./App.css"
import gwReg from "./fonts/GT-Walsheim-Pro-Regular.woff"
import gwBold from "./fonts/GT-Walsheim-Pro-Bold.woff"
import gwMed from "./fonts/GT-Walsheim-Pro-Medium.woff"
import ReactFontFace from "react-font-face"
const fontConfig = {
  file: [
    {
      fontFamily: "gwReg",
      fontStyle: "normal",
      fontWeight: 500,
      file: gwReg,
      fontType: "truetype"
    },
    {
      fontFamily: "gwMed",
      fontStyle: "normal",
      fontWeight: 500,
      file: gwMed,
      fontType: "truetype"
    },
    {
      fontFamily: "gwBold",
      fontStyle: "normal",
      file: gwBold,
      fontType: "truetype"
    }
  ]
}

const fontStyle = {
  reg: {
    fontFamily: "gwReg"
  },
  med: {
    fontFamily: "gwMed"
  },
  bold: {
    fontFamily: "gwBold"
  }
}
class App extends Component {
  render() {
    return (
      <HashRouter>
        <app className="App" style={fontStyle.reg}>
          {routes}
        </app>
      </HashRouter>
    )
  }
}

export default ReactFontFace(App, fontConfig)
