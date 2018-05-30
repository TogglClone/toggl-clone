import React, { Component } from "react"
// import styled from "styled-components"

export default class Button extends Component {
  render() {
    const { type, children } = this.props
    const styleChoice = styles[type ? type : styles.default]
    return (
      <button style={Object.assign({}, btnBase, styleChoice)}>
        {children}
      </button>
    )
  }
}

let btnBase = {
  padding: 12,
  borderRadius: "2.4rem",
  cursor: "pointer",
  textTransform: "uppercase",
  height: 50,
  fontWeight: 100,
  fontSize: ".86rem",
  minWidth: "14rem",
  outline: "none"
}

let white = {
  border: ".219rem solid transparent",
  borderColor: "#f1f4f6",
  fontWeight: "bold"
}

let pink = {
  backgroundColor: "#e24f54",
  color: "white",
  border: "none",
  outline: "none"
}
let styles = {
  white: white,
  pink: pink,
  default: btnBase
}
