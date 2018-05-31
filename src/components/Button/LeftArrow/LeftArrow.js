import styled, { keyframes } from "styled-components"
import React, { Component } from "react"

export default class LeftArrow extends Component {
  render() {
    return (
      <LeftArrowContainer>
        <svg style={leftArrow} viewBox="0 0 13 18">
          <path d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z" />
        </svg>
      </LeftArrowContainer>
    )
  }
}

let LeftArrowContainer = styled.section``

let leftArrow = {
  width: ".9rem",
  height: ".5rem",
  marginRight: ".3rem"
}
