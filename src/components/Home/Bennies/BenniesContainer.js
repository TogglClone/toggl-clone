import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import Button from "../../Button/Button"
import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import eyeball from "./img/eyeball.png"
import pupil from "./img/pupil.png"

export default class BenniesContainer extends Component {
  constructor() {
    super()
    this.state = {
      miniTitle: ["EASY PEASY", "CHA-CHING", "SO BRAINY", "TOGGL EVERYWHERE"],
      title: [
        "Hassle-free time tracking",
        "Follow the Money",
        "Make Smarter Choices",
        "Toggl works where you do"
      ],
      description: [
        "Toggl makes time tracking so simple you’ll actually use it. But even if you forget, our tracking reminders and idle detection have your back.",
        "Know how much your time is worth? Break down your hours by projects, clients and tasks to see what’s making you money, and what’s holding you back.",
        "Toggl will crunch the numbers so you can focus on the planning. Export any report into any format you need, or use our public API to move the data.",
        "Start tracking in your browser, stop the timer on your phone - all your time entries are synced between the phone apps, desktop apps, the Toggl Chrome extension and the website."
      ],
      btnText: "ALL FEATURES",
      img: [img0, img1, img2, img3],
      textMargin: ["0 4.5rem 0 52%", "0 52% 0 4.5rem"],
      textMarginBig: ["0 8% 0 59%", "0 59% 0 8%"],
      imgMargin: ["auto 52% auto 5rem", "auto 5rem auto 52%"],
      colors: ["#FFACBA", "#F8CE6A", "#88CF8F", "#CA99D7"],
      fontColors: ["#E3677C", "#F69F09", "#31AA53", "#A857BD"],
      x: -15,
      y: 0,
      topCurve: 175, //even is 250
      bottomCurve: 675, //even is 750
      animateCalled: [false, false, false, false],
      intervalFn: null
    }
    this.animateBox = this.animateBox.bind(this)
  }
  animateBox(version) {
    if (!this.state.animateCalled[version]) {
      let tempAnimate = this.state.animateCalled.slice()
      tempAnimate[version] = true
      this.setState({
        animateCalled: tempAnimate
      })
      let curves = [
        175,
        180,
        195,
        190,
        195,
        200,
        205,
        210,
        215,
        220,
        225,
        230,
        235,
        240,
        245,
        250,
        255,
        260,
        265,
        270,
        275,
        280,
        285,
        290,
        295,
        300,
        305,
        310,
        315,
        320,
        325,
        320,
        315,
        310,
        305,
        300,
        295,
        290,
        285,
        280,
        275,
        270,
        265,
        260,
        255,
        250,
        245,
        240,
        235,
        230,
        225,
        230,
        235,
        240,
        245,
        250
      ]
      let i = 0
      var x = setInterval(() => {
        this.setState({
          topCurve: curves[i],
          bottomCurve: curves[i] + 500
        })
        i++
        if (i > curves.length - 1) {
          clearInterval(this.state.intervalFn)
        }
      }, 5)
      this.setState({
        intervalFn: x
      })
    }
  }
  _onMouseMove(e) {
    let tempY = e.screenY
    let tempX = e.screenX
    tempY -= 223 // gives range from 0 to 600
    tempX -= 1717 - 180 // gives range from 0 to innerwidth including the side width on the timer bar

    tempY = (tempY / 300) * 47 - 47
    tempX = (tempX / (e.view.innerWidth / 2)) * 40 - 40
    // top 223 bottom 822 left 1717 right 3136

    //max up 47 max down 47 max left 40 max right 40
    this.setState({ x: tempX, y: tempY })
  }
  _onMouseLeave() {
    this.setState({
      x: -15,
      y: 0
    })
  }
  render() {
    const { version } = this.props
    const { x, y } = this.state
    var pathD = `M0 250 C 250 ${
      this.state.topCurve
    }, 500 250, 500 250 C 500 500, 500 750, 500 750 C 250 ${
      this.state.bottomCurve
    }, 0 750, 0 750 C 0 500, 0 750, 0 250 Z`
    return (
      <BennieIndContainer
        onMouseEnter={() => this.animateBox(this.props.version)}
      >
        <BennieColorContainer
          color={this.state.colors[version]}
          onMouseMove={version === "1" ? this._onMouseMove.bind(this) : null}
          onMouseOut={version === "1" ? this._onMouseLeave.bind(this) : null}
        >
          <BennieImgContainer side={this.state.imgMargin[version % 2]}>
            {version === "1" ? (
              <BennieImg backgroundUrl={this.state.img[version]}>
                <EyeBall />
                <PupilWrap>
                  <Pupil top={y} left={x} />
                </PupilWrap>
                <br />
              </BennieImg>
            ) : (
              <BennieImg backgroundUrl={this.state.img[version]} />
            )}
          </BennieImgContainer>
          <BennieTextCont
            side={this.state.textMargin[version % 2]}
            sideBig={this.state.textMarginBig[version % 2]}
          >
            <SvgContainer animateCalled={this.state.animateCalled[version]}>
              <svg
                opacity="1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 1000"
                width="500"
                height="1000"
                preserveAspectRatio="none"
              >
                <path fill="#fff" d={pathD} />
              </svg>
            </SvgContainer>
            <ContentContainer animateCalled={this.state.animateCalled[version]}>
              <BennieMiniTitle fontColor={this.state.fontColors[version]}>
                {this.state.miniTitle[version]}
              </BennieMiniTitle>
              <BennieTitle>{this.state.title[version]}</BennieTitle>
              <BennieDesc>{this.state.description[version]}</BennieDesc>
              <BennieButton>
                <Button type="white">{this.state.btnText}</Button>
              </BennieButton>
            </ContentContainer>
          </BennieTextCont>
        </BennieColorContainer>
      </BennieIndContainer>
    )
  }
  render() {
    const { version } = this.props
    const { x, y } = this.state

    return (
      <BennieIndContainer>
        <BennieColorContainer
          color={this.state.colors[version]}
          onMouseMove={this._onMouseMove.bind(this)}
        >
          <BennieImgContainer side={this.state.imgMargin[version % 2]}>
            <BennieImg backgroundUrl={this.state.img[version]}>
              {version === "1" ? (
                <EyeBall>
                  <Pupil top={y} left={x} />
                </EyeBall>
              ) : null}
              <br />
            </BennieImg>
          </BennieImgContainer>
          <BennieTextCont
            side={this.state.textMargin[version % 2]}
            sideBig={this.state.textMarginBig[version % 2]}
          >
            <BennieMiniTitle fontColor={this.state.fontColors[version]}>
              {this.state.miniTitle[version]}
            </BennieMiniTitle>
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
  background: ${props => props.color};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 100%;
  padding-top: 1rem;
  @media (min-width: 1024px) {
    width: calc(100vw - 9rem);
    height: 22rem;
    border-radius: 3px;
    margin-top: 4.5rem;
    padding-top: 0;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  @media (min-width: 1240px) {
    height: 40rem;
  }
`
const BennieImgContainer = styled.div`
  @media (min-width: 415px) {
    width: calc(100%);
    height: 50vw;
  }
  @media (min-width: 480px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1024px) {
    height: 300px;
    margin: ${props => props.side};
    position: relative;
    z-index: 2;
  }
`
const BennieImg = styled.div`
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 5;
  height: 9.4rem;
  width: auto;
  @media (min-width: 415px) {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 1024px) {
    height: 200px;
    margin-top: 20%;
  }
  @media (min-width: 1240px) {
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    height: 9.4rem;
    width: auto;
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
        height: 100%;
        width: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        margin: 0;
        z-index: 3;
    }
`

const EyeBall = styled.div`
  @media (min-width: 1240px) {
    border-radius: 50%;
    height: 74px;
    width: 68px;
    background: url(${eyeball});
    background-repeat: no-repeat;
    position: absolute;
    top: calc(5%);
    left: calc(29.5%);
    overflow: hidden;
    z-index: 1;
  }
`
const PupilWrap = styled.div`
  @media (min-width: 1240px) {
    border-radius: 50%;
    height: 74px;
    width: 68px;
    background: url(${eyeball});
    background-repeat: no-repeat;
    position: absolute;
    top: calc(5%);
    left: calc(29.5%);
    overflow: hidden;
    z-index: 2;
  }
`
const Pupil = styled.div`
  @media (min-width: 1240px) {
    border-radius: 50%;
    background-image: url(${pupil});
    background-size: contain;
    height: 30px;
    width: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform: translate(${props => props.left}px, ${props => props.top}px);
    z-index: 3;
  }
`
const BennieTextCont = styled.div`
  background: white;
  padding: 1.8rem 3.5rem 2rem 2.5rem;
  width: 100% -2rem;
  text-align: left;
  @media (min-width: 1024px) {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    margin: ${props => props.side};
    top: -30px;
    background: transparent;
    width: 25rem;
  }
  @media (min-width: 1240px) {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    margin: ${props => props.sideBig};
    padding: 5rem;
    top: -35px;
  }
`
const moveDown = keyframes`
  0% { top: -400px; opacity: 0; }
  // 25%
  // 50%
  // 75%
  100% { top: -300px; opacity: 1;}
`
const SvgContainer = styled.div`
  position: absolute;
  opacity: 0;
  ${({ animateCalled }) =>
    animateCalled &&
    `
    animation: ${moveDown} 200ms forwards;
  `};
`
const moveUp = keyframes`
0% { top: -75px; opacity: 0; }
// 25%
// 50%
// 75%
100% { top: -175px; opacity: 1;}
`
const ContentContainer = styled.div`
  position: absolute;
  padding: 9.5rem 7.65rem 9.25rem;
  opacity: 0;
  ${({ animateCalled }) =>
    animateCalled &&
    `
  animation: ${moveUp} 500ms forwards;
  animation-delay: 200ms;
`};
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
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.4rem;
  @media (min-width: 1240px) {
    font-size: 1.5rem;
  }
`
const BennieDesc = styled.h3`
  font-size: 0.8rem;
  line-height: 1.4rem;
  margin-bottom: 2.8rem;
  font-weight: normal;
  @media (min-width: 1240px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin-bottom: 4rem;
  }
`
const BennieButton = styled.div`
  text-align: center;
  widrth: 100%;
`
