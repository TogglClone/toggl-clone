import React, { Component } from "react"
import styled from "styled-components"
import Button from "../../Button/Button"
import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import eyeball from "./img/eyeball.png"
import pupil from "./img/pupil.png"

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
            textMargin: ["0 4.5rem 0 52%", "0 52% 0 4.5rem" ],
            textMarginBig: ["0 8% 0 59%", "0 59% 0 8%" ],
            imgMargin: ["auto 52% auto 5rem", "auto 5rem auto 52%" ],
            colors: ["#FFACBA", "#F8CE6A", "#88CF8F", "#CA99D7"],
            fontColors: ["#E3677C", "#F69F09", "#31AA53", "#A857BD"],
            x: 0,
            y: 0
        }
    }
    _onMouseMove(e) {
        console.log(e.view.innerWidth)
        let tempY = e.screenY
        let tempX = e.screenX
        tempY -= 223 // gives range from 0 to 600
        tempX -= (1717-180) // gives range from 0 to innerwidth including the side width on the timer bar
        
        tempY = (tempY / 300 * 47) -47
        tempX = (tempX / (e.view.innerWidth/2) * 40) - 40
      // top 223 bottom 822 left 1717 right 3136

      //max up 47 max down 47 max left 40 max right 40
      this.setState({ x: tempX, y: tempY });
    }
    render() {
        const { version } = this.props;
        const {x, y} = this.state
        
        return (
            <BennieIndContainer>
                <BennieColorContainer color={this.state.colors[version]} onMouseMove={this._onMouseMove.bind(this)}>
                    <BennieImgContainer side={this.state.imgMargin[version%2]} >
                        <BennieImg src={this.state.img[version]} />
                        { version === '1' ? (
                            <EyeBall>
                                <Pupil top={y} left={x}/>
                            </EyeBall>
                        ) : null}
                        <br/>
                    </BennieImgContainer>
                <BennieTextCont side={this.state.textMargin[version%2]} sideBig={this.state.textMarginBig[version%2]}>
                    <BennieMiniTitle fontColor={this.state.fontColors[version]}>{this.state.miniTitle[version]}</BennieMiniTitle>
                    <BennieTitle>{this.state.title[version]}</BennieTitle>
                    <BennieDesc>{this.state.description[version]}</BennieDesc>
                    <BennieButton>
                        <Button type="white">{this.state.btnText}</Button>
                    </BennieButton>
                </BennieTextCont>
                </BennieColorContainer>
            </BennieIndContainer>
        )
    }
  }
}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const BennieIndContainer = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin: 0rem 1.5rem 2rem 1.5rem;
  @media (min-width: 768px) {
    width: 609px;
    margin: 0rem auto 2rem auto;
  }
  @media (min-width: 1024px) {
    width: calc(100vw - 9rem);
    margin: 2rem 6.2rem 2 6.2rem;
  }
`
const BennieColorContainer = styled.div`
<<<<<<< HEAD
  background: ${props => props.color};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 100%;
  padding-top: 1rem;
  @media (min-width: 1024px) {
    width: calc(100vw - 9rem);
    height: 22rem;
    border-radius: 3px;
    // margin: 0rem 6.2rem 2 6.2rem;
    margin-top: 4.5rem;
    padding-top: 0;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  @media (min-width: 1240px) {
    height: 41rem;
  }
`
const BennieImgContainer = styled.div`
  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
    margin: ${props => props.side};
  }
`
const BennieImg = styled.img`
  height: 153px;
  width: auto;
  margin: 1rem 0 1.5 rem 0;
  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 1024px) {
    height: 200px;
    margin-top: 20%;
  }
  @media (min-width: 1240px) {
    height: 325px;
    margin-top: 35%;
  }
`
const BennieTextCont = styled.div`
  background: white;
  padding: 2rem 3rem 0 3rem;
  width: 100% -2rem;
  text-align: left;
  padding-bottom: 2rem;
  @media (min-width: 1024px) {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    margin: ${props => props.side};
    top: -30px;
  }
  @media (min-width: 1240px) {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    margin: ${props => props.sideBig};
    padding: 5rem;
    top: -20px;
  }
=======
    background: ${props=> props.color};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    padding-top: 1rem;
    @media(min-width: 1024px){
        width: calc(100vw - 9rem);
        height: 22rem;
        border-radius: 3px;
        margin-top: 4.5rem;
        padding-top: 0;
        display: flex;
        flex-direction: row;
        position: relative;
    }
    @media(min-width: 1240px){
        height: 40rem;
    }
`
const BennieImgContainer = styled.div`
    @media(min-width: 415px){
        width: calc(100%);
        height: 50vw;
    }
    @media(min-width: 480px){
        height: 100%;
        width: 100%;
    }
    @media(min-width: 1024px){
       height: 100%;
       width: 50%;
       margin: ${props=> props.side};
       position: relative;
    }
`
const BennieImg = styled.img`
    z-index: 5;
    height: 9.4rem;
    width: auto;
    margin: 1rem 0 1.8rem 0;
    @media(min-width: 415px){
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }
    @media(min-width: 768px){
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }
    @media(min-width: 1024px){
        height: 200px;
        margin-top: 20%;
    }
    @media(min-width: 1240px){
        height: 325px;
        margin-top: 18vh;
    }
`

const EyeBall = styled.div`
    border-radius: 50%;
    height: 74px;
    width: 68px;
    background: url(${eyeball});
    background-repeat: no-repeat;
    position: absolute;
    top: calc(28.5%);
    left: calc(29.5%);
    overflow: hidden;
`
const Pupil = styled.div`
    @media(min-width: 1240px){
        border-radius: 50%;
        background-image: url(${pupil});
        height: 30px;
        width: 30px;
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
        transform: translate(${props => props.left}px,${props => props.top}px)
    }
`
const BennieTextCont = styled.div`
    background: white;
    padding: 1.8rem 3.5rem 2rem 2.5rem;
    width: 100% -2rem;
    text-align: left;
    @media(min-width: 1024px){
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        position: absolute;
        margin: ${props=> props.side};
        top: -30px;
    }
    @media(min-width: 1240px){
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        position: absolute;
        margin: ${props=> props.sideBig};
        padding: 5rem;
        top: -35px;
    }
>>>>>>> master
`
const BennieMiniTitle = styled.h2`
  font-size: 0.6rem;
  color: ${props => props.fontColor};
  @media (min-width: 1240px) {
    font-size: 0.8rem;
    font-weight: 800;
  }
`
const BennieTitle = styled.h1`
<<<<<<< HEAD
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  @media (min-width: 1240px) {
    font-size: 1.5rem;
  }
`
const BennieDesc = styled.h3`
  font-size: 0.8rem;
  line-height: 1.4rem;
  margin-bottom: 3rem;
  @media (min-width: 1240px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
=======
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
    @media(min-width: 1240px){
        font-size: 1.5rem;
    }
`
const BennieDesc = styled.h3`  
    font-size: .8rem;
    line-height: 1.4rem;
    margin-bottom: 2.8rem;
    font-weight: normal;
    @media(min-width: 1240px){
        font-size: 1.1rem;
        line-height: 1.8rem;
        margin-bottom: 4rem;
    }
>>>>>>> master
`
const BennieButton = styled.div`
  text-align: center;
  widrth: 100%;
`