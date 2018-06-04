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
            alignItems: "center"
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

const ArrowAnimateRightIn = keyframes`
  0% {
    margin-right: 0;
    opacity: 0;
  }
  50% {
    transform: scaleY(0);
    opacity: 0;
  }
  75%{
    transform: scaleY(.65)
  }
  100% {
    transform: scaleY(1);
    margin-right: 1rem;
    opacity: 1;
  }
`
const ArrowAnimateRightOut = keyframes`
  0% {
    transform: scaleY(1);
    opacity: 1;
    margin-right: 1rem;
  }
  25% {
    transform: scaleY(.35)
    opacity: .25;
  }
  50% {
    transform: scaleY(0);
    opacity: .5;
  }
  100% {
    opacity: 0;
    margin-right: 0;
  }
`
const ArrowAnimateLeftIn = keyframes`
0% {
  margin-left: 0;
  opacity: 0;
  transform: scaleY(0)
}
50% {
  transform: scaleY(0);
  opacity: 0;
}
75%{
  transform: scaleY(.65)
}
100% {
  transform: scaleY(1);
  opacity: 1;
  margin-left: 1rem;
}
`

const ArrowAnimateLeftOut = keyframes`
0% {
  transform: scaleY(1);
  opacity: 1;
  margin-left: 1rem;
}
25% {
  transform: scaleY(.35)
  opacity: .25;
}
50% {
  transform: scaleY(0);
  opacity: .5;
}
100% {
  opacity: 0;
  margin-left: 0;
}
`

let BtnBase = styled.button`
  border-radius: 2.4rem;
  cursor: pointer;
  background: white;
  text-transform: uppercase;
  height: 52px;
  font-weight: 100;
  font-size: 0.86rem;
  min-width: 14rem;
  outline: none;
  fill: white;
`
let LeftArrowContainer = styled.section`
  // animation: ${ArrowAnimateLeftOut} 0.3s ease-in;
  // animation-fill-mode: both;
  // animation-delay: 0.2s;
  transition: transform .4s cubic-bezier(.755,.050,.855,.060),
  ${BtnBase}:hover & {
    // animation: ${ArrowAnimateLeftIn} 0.3s ease-in;
    // animation-fill-mode: both;
    // animation-delay: 0.2s;
    // display: inline-block;
    transform: translateX(1.3rem) translateY(-.1rem) scaleY(0);
  }
`
let RightArrowContainer = styled.section`
  margin-right: .5rem;
  animation: ${ArrowAnimateRightIn} 0.3s ease-in;
  animation-fill-mode: both;
  animation-delay: 0.2s;
  display: none;
  ${BtnBase}:hover & {
    animation: ${ArrowAnimateRightOut} 0.3s ease-in;
    animation-fill-mode: both;
    animation-delay: 0.2s;
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
  fill: "white"
}
let styles = {
  white: white,
  pink: pink,
  default: BtnBase
}
