import React, { Component } from "react"
import styled from "styled-components"

export default class Button extends Component {
  render() {
    return <ButtonClass>Get Started</ButtonClass>
  }
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
