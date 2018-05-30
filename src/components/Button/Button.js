import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export default class Button extends Component {
  render() {
    const { type, children } = this.props
    const styleChoice = styles[type ? type : "default"]
    return (
      <Button style={Object.assign({}, ButtonClass, ButtonClass)}>
        {children}
      </Button>
    )
  }
}

let styles = {
  // primary: primaryStyle,
  // default: defaultStyle,
  // danger: danger,
  // dashed: dashed,
  // green: {
  //   backgroundColor: "green"
  // }
}

const ButtonClass = styled.button`
  background: #db5b61;
  height: 48px;
  min-width: 217px;
  font-size: 1rem;
  text-transform: uppercase;
  color: white;
  border-radius: 2.4rem;
  font-weight: 500;
  outline: none;
`
