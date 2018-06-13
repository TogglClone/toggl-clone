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
          <BennieH3> Begin your free 30 day trial now. </BennieH3>
          <Button type="pinkBennies"> GET STARTED </Button>
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
    margin: 0 0 .2rem 0;
    @media(min-width: 768px){
        text-align: left
        font-size: 1.65rem;
        width: 609px;
        margin: auto;
        padding-left: 8.33%;
      }
      @media(min-width: 1024px){
        text-align: left
        font-size: 1.65rem;
        width: calc(100vw - 9rem);
        margin-left: 3rem;
        padding-left: 8.33%;
        box-sizing: border-box;
    }
    @media(min-width: 1240px){
        font-size: 3.2rem;
    }
`
const BennieH2 = styled.h2`
    font-size: .8rem;
    line-height: 2.14rem;
    font-weight: 400;
    margin: 0 0 1.45rem 0;
    @media(min-width: 768px){
        text-align: left
        width: 609px;
        padding-left: 8.33%;
        margin: auto;
        margin-bottom: 4rem;
    }
    @media(min-width: 1024px){
        margin-left: 3rem;
        line-height: 3rem;
    }
    @media(min-width: 1240px){
        line-height: 3rem;
    }
`
const BennieH3 = styled.h3`
  font-size: 0.8rem;
  line-height: 2.14rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1.5rem;
`
const BennieFooter = styled.div`
  padding-top: 1.5rem;
  height: 10rem;
`