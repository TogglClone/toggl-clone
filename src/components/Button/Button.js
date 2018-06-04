import React, { Component } from "react"
import styled, { keyframes } from "styled-components"

export default class Button extends Component {
  render() {
    const { type, children } = this.props
    const styleChoice = styles[type ? type : styles.default]
    return (
      <BtnBase style={Object.assign({}, BtnBase, styleChoice)}>
        <g
          style={Object.assign({}, styleChoice, {
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            left: 0,
            marginLeft: 0,
            bottom: 0
          })}
        >
          <LeftArrowContainer>
            <svg style={leftArrow} viewBox="0 0 13 18">
              <path d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z" />
            </svg>
          </LeftArrowContainer>
          {children}
          <RightArrowContainer>
            <svg style={rightArrow} viewBox="0 0 13 18">
              <path
                d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z"
                // fill="#fff"
              />
            </svg>
          </RightArrowContainer>
        </g>
      </BtnBase>
    )
  }
}

const ArrowAnimateIn = keyframes`
  0% {
    transform: scaleY(0.1);
    margin-right: .5rem;
    opacity: 0;
  }
  50% {
    transform: scaleY(.5);
    opacity: .5;
  }
  100% {
    transform: scaleY(1);
    margin-right: 0;
    opacity: 1;
  }
`
const ArrowAnimateOut = keyframes`
  0% {
    transform: scaleY(1);
    opacity: 1;
  }
  50% {
    transform: scaleY(.5);
    opacity: .5;
  }
  100% {
    display: none;
    transform: scaleY(0);
    opacity: 0;
    transform: translateX(7px);
  }
`

let BtnBase = styled.button`
  border-radius: 2.4rem;
  cursor: pointer;
  background: white;
  text-transform: uppercase;
  height: 51px;
  font-weight: 100;
  font-size: 0.86rem;
  min-width: 14rem;
  outline: none;
  fill: white;
`
let LeftArrowContainer = styled.section`
  display: none;
  ${BtnBase}:hover & {
    animation: ${ArrowAnimateIn} 0.3s linear;
    tranistion-delay: 0.4s;
    display: inline-block;
  }
`
let RightArrowContainer = styled.section`
  ${BtnBase}:hover & {
    animation: ${ArrowAnimateOut} 0.3s forwards;
    tranistion-delay: 0.4s;
  }
`

let leftArrow = {
  width: ".9rem",
  height: ".5rem",
  marginRight: ".3rem"
}

let rightArrow = {
  width: ".9rem",
  height: ".5rem",
  marginLeft: ".3rem"
}

let white = {
  border: ".219rem solid transparent",
  borderColor: "#f1f4f6",
  fontWeight: 700,
  fill: "black"
}

let pink = {
  backgroundColor: "#e24f54",
  color: "white",
  border: "none",
  outline: "none",
  fill: "white",
  marginLeft: "-7rem"
}
let styles = {
  white: white,
  pink: pink,
  default: BtnBase
}
