import React, { Component } from "react"
import styled from "styled-components"
import Button from "../../Button/Button"
import BenniesContainer from "./BenniesContainer"

export default class Bennies extends Component {
  render() {
    return (
      <BennieSectionContainer>
        <BennieH1> A few benefits </BennieH1>
        <BennieH2>
          {" "}
          The simplest time tracker to help you get things done.{" "}
        </BennieH2>
        <BenniesContainer version="0" />
        <BenniesContainer version="1" />
        <BenniesContainer version="2" />
        <BenniesContainer version="3" />
        <BennieFooter>
          <BennieH2> Begin your free 30 day trial now. </BennieH2>
          <Button type="pink"> GET STARTED </Button>
        </BennieFooter>
      </BennieSectionContainer>
    )
  }
}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const BennieSectionContainer = styled.div`
  background: #e3e8eb;
  padding-top: 4.5rem;
`

const BennieH1 = styled.h1`
    font-size: 1.65rem;
    line-height: 2.14rem;
    font-weight: 700;
    margin: 0;
    @media(min-width: 768px){
        text-align: left
        margin-left: 8rem;
    }
    @media(min-width: 1024px){
        margin-left: 11rem;
        margin-top: 7rem;
        font-size: 3.2rem;
    }
`
const BennieH2 = styled.h2`
    font-size: 1rem;
    line-height: 2.14rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 1.5rem;
    @media(min-width: 768px){
        text-align: left
        margin-left: 8rem;
        margin-bottom: 3rem;
    }
    @media(min-width: 1024px){
        margin-left:11rem;
        line-height: 3rem;
    }
`
const BennieFooter = styled.div`
  padding-top: 1.5rem;
  height: 10rem;
`
