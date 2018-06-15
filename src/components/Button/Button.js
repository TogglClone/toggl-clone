import React, { Component } from "react"
import styled from "styled-components"

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
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    margin-left 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.2s;
  transform: scaleY(0) translateX(0);
  ${BtnBase}:hover & {
    transform: scaleY(1);
    opacity: 1;
    margin-left: 1.3rem;
  }
`
let RightArrowContainer = styled.section`
  margin-right: 1.3rem;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    margin-right 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.2s;
  ${BtnBase}:hover & {
    transform: scaleY(0);
    opacity: 0;
    margin-right: 0;
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

let pinkBennies = {
  backgroundColor: "#e24f54",
  color: "white",
  border: "none",
  outline: "none",
  fill: "white"
}

let styles = {
  white: white,
  pink: pink,
  pinkBennies: pinkBennies,
  default: BtnBase
}
