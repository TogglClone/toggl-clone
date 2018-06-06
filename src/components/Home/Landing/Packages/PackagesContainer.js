import React, { Component } from "react"
import Button from "../../Button/Button"
import styled from "styled-components"
import burger from "./img/burger.png"
import hotdog from "./img/hotdog.png"
import pizza from "./img/pizza.png"
import shadow from "./img/shadow.png"

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
            <IndividPack>
                <PackTitleContainer> {this.state.title[version]} </PackTitleContainer>
                <PackDescContainer> {this.state.description[version*2]} </PackDescContainer>
                <PackDescContainer> {this.state.description[version*2+1]} </PackDescContainer>
                <PackImg src={this.state.img[version]}/>
                <ShadowImg />
                <br/><Button type="white"> {this.state.btnText} </Button>
            </IndividPack>
        )
    }
}
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const IndividPack = styled.div`
    height: auto;
    width: 15rem;
    margin: auto;
    position: relative;
    @media(min-width: 1024px){
        box-sizing: border-box;
        margin: 0;
        height: 20rem;
    }
    @media(min-width: 1240px){
        width: 18rem;
    }
`
const PackTitleContainer = styled.h1`
    font-size: 1.3rem;
    line-height: 2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    @media(min-width: 1024px){
        margin: .2rem 2rem .2rem 2rem;
    }
    @media(min-width: 1240px){
        font-size: 1.7rem;
    }
`
const PackDescContainer = styled.h2`
    font-size: .8rem;
    line-height: .8rem;
    @media(min-width: 1024px){
        margin: 0rem 2rem 0rem 2rem;
        line-height: 1.3rem;
    }
    @media(min-width: 1240px){
        font-size: 1rem;
        line-height: 1.65rem;
    }
`
const PackImg = styled.img`
    transition: transform .5s;
    transition-timing-function: cubic-bezier(.12,.845,.305,1);
    height: 69px;
    margin: 2.8rem 0 0 0;
    @media(min-width: 1024px){
        height: 75px;
    }
    @media(min-width: 1240px){
        height: 70px;
    }
    ${IndividPack}:hover &{
        transform: rotate(8deg) translate(0,-1.6rem);
    }

`
const ShadowImg = styled.div`
    background-image: url(${shadow});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: .9rem;
    left: 50%;
    margin: -.4rem auto 1.4rem auto;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .35s transform;
    transition: .35s transform;
    width: 4.0rem;
    transition-timing-function: cubic-bezier(.12,.845,.305,1);
    ${IndividPack}:hover &{
        transform: scale(.75);
    }
`