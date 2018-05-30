import React, { Component } from 'react'
import styled from "styled-components"
import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"


export default class BenniesContainer extends Component {
    constructor(){
        super();
        this.state = {
            miniTitle: ["EASY PEASY","CHA-CHING","SO BRAINY","TOGGL EVERYWHERE"],
            title: ["Hassle-free time tracking", "Follow the Money", "Make Smarter Choices", "Toggl works where you do"],
            description: ["Toggl makes time tracking so simple you’ll actually use it. But even if you forget, our tracking reminders and idle detection have your back."
            ,"Know how much your time is worth? Break down your hours by projects, clients and tasks to see what’s making you money, and what’s holding you back."
            ,"Toggl will crunch the numbers so you can focus on the planning. Export any report into any format you need, or use our public API to move the data."
            ,"Start tracking in your browser, stop the timer on your phone - all your time entries are synced between the phone apps, desktop apps, the Toggl Chrome extension and the website."
            ],
            btnText: "ALL FEATURES",
            img: [img0, img1, img2, img3],
            side: ["r", "l", "r", "l"],
            colors: ["#FFACBA", "#F8CE6A", "#88CF8F", "#CA99D7"],
            fontColors: ["#E3677C", "#F69F09", "#31AA53", "#A857BD"]
        }
    }
    render() {
      const { version } = this.props;
      
      return (
            <BennieIndContainer color={this.state.colors[version]}>
                <BennieImg src={this.state.img[version]} /><br/>
                <BennieTextCont>
                    <BennieMiniTitle fontColor={this.state.fontColors[version]}>{this.state.miniTitle[version]}</BennieMiniTitle>
                    <BennieTitle>{this.state.title[version]}</BennieTitle>
                    <BennieDesc>{this.state.description[version]}</BennieDesc>
                    <button>{this.state.btnText}</button>
                </BennieTextCont>
            </BennieIndContainer>
        )
    }
}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const BennieIndContainer = styled.div`
    background: ${props=> props.color};
    padding-top: 1rem;
    width: 8.5rem;
    margin: auto;
    margin-bottom: .9rem;
`
const BennieImg = styled.img`
    height: 10vh;
    width: auto;
    margin-bottom: .5rem;
`
const BennieTextCont = styled.div`
    background: white;
    padding: 1rem 1rem 0 1rem;
    width: 100% -2rem;
    text-align: left;
`
const BennieMiniTitle = styled.h2`
    font-size: .3rem; 
    color: ${props=> props.fontColor};
`
const BennieTitle = styled.h1`
    font-size: .5rem;
    font-weight: 700;
    margin-bottom: .5rem;
`
const BennieDesc = styled.h3`  
    font-size: .35rem;
    line-height: .6rem;
`