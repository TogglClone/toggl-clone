import React, { Component } from "react"
import Button from "../../Button/Button"
import styled from "styled-components"
import burger from "./img/burger.png"
import hotdog from "./img/hotdog.png"
import pizza from "./img/pizza.png"

export default class PackagesContainer extends Component {
    constructor(){
        super();
        this.state = {
            title: ["Enterprise", "Premium", "Starter"],
            description: ["Ultimate team management", "& business intelligence."
            , "Effortless team time", "management."
            , "Compact time tracking &", "reporting."],
            img: [burger, hotdog, pizza],
            btnText: "START FREE TRIAL"
        }
    }
    render() {
        const { version }  = this.props; 
        return (
            <div>
                <PackTitleContainer> {this.state.title[version]} </PackTitleContainer>
                <PackDescContainer> {this.state.description[version*2]} </PackDescContainer>
                <PackDescContainer> {this.state.description[version*2+1]} </PackDescContainer>
                <PackImg src={this.state.img[version]}/>
                <br/><Button type="white"> {this.state.btnText} </Button>
            </div>
        )
    }
}
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const PackTitleContainer = styled.h1`
    font-size: 1.3rem;
    line-height: 2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
`
const PackDescContainer = styled.h2`
    font-size: .8rem;
    line-height: .8rem;
`
const PackImg = styled.img`
    height: 77px;
    margin: 2rem 0 2rem 0;
`