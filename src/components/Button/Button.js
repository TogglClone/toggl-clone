import React, { Component } from "react"
// import styled from "styled-components"

export default class Button extends Component {
  render() {
    const { type, children } = this.props
    const styleChoice = styles[type ? type : styles.default]
    return (
      <button style={Object.assign({}, btnBase, styleChoice)}>
        <g
          style={Object.assign({}, styleChoice, {
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 18"
            width=".9rem"
            height=".5rem"
            marginLeft="1rem"
          >
            <path d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z" />
          </svg>
          {children}
          <svg width=".9rem" height=".5rem" viewBox="0 0 13 18">
            <path
              d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z"
              // fill="#fff"
            />
          </svg>
        </g>
      </button>
    )
  }
}

let leftArrow = {
  marginRight: "1rem",
  display: "none"
}

let rightArrow = {
  marginLeft: "1rem"
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
  outline: "none",
  fill: "white"
}

let white = {
  border: ".219rem solid transparent",
  borderColor: "#f1f4f6",
  fontWeight: "bold",
  fill: "black"
}

let pink = {
  backgroundColor: "#e24f54",
  color: "white",
  border: "none",
  outline: "none",
  fill: "white"
}
let styles = {
  white: white,
  pink: pink,
  default: btnBase
}
