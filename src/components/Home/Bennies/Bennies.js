import React, { Component } from 'react'
import styled from "styled-components"
import BenniesContainer from "./BenniesContainer"


export default class Bennies extends Component {
    render() {
      const { version } = this.props;
      
      return (
                <BennieSectionContainer>
                    <BennieH1> A few benefits </BennieH1>
                    <BennieH2> The simplest time tracker to help you get things done. </BennieH2>
                    <BenniesContainer version="0" />
                    <BenniesContainer version="1" />
                    <BenniesContainer version="2" />
                    <BenniesContainer version="3" />
                    <BennieFooter>
                        <BennieH2> Begin your free 30 day trial now. </BennieH2>
                        <button> GET STARTED </button>
                    </BennieFooter>
                </BennieSectionContainer>
        )
    }
}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const BennieSectionContainer = styled.div`
    background: #E3E8EB;
    padding-top: 1.3rem;
`

const BennieH1 = styled.h1`
    font-size: .75rem;
    font-weight: 700;
    line-height: 1.60rem;
    margin: 0;
`
const BennieH2 = styled.h2`
    font-size: .40rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: .9rem;
`
const BennieFooter = styled.div`
    padding-top: .8rem;
    height: 4.5rem;
`