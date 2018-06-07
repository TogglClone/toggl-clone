import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import hatdog from "./img/hotdog.mov"
import robot from "./img/robot.mov"
import piggy from "./img/piggy.mov"
import timer_icon from "./img/timer_icon.svg"
import Button from "../../Button/Button"
import BottomLoginSvg from "./SignUpBottomSvg/SignUpBottomSvg"
import { Link } from "react-router-dom"

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      burgerOpen: null,
      background: "#a1cbde",
      displayMain: "none",
      displayNav: "none",
      clicked: false,
      vidList: [hatdog, robot, piggy],
      beingPlayed: 0,
      vidTran: null
    }
  }

  burgerToggle() {
    this.state.burgerOpen
      ? this.setState({
          burgerOpen: false,
          background: "#a4cfdc",
          display: "block",
          displayNav: "none",
          clicked: false
        })
      : this.setState({
          burgerOpen: true,
          background: "white",
          display: "none",
          displayNav: "block",
          clicked: true
        })
  }

  componentDidMount() {
    // console.time()
    var count = 1
    var mili = 12545
    var miliTran = 12250
// hotdog 12500
// robot 13000
// piggies 10500
    setInterval(() => {
      // console.log("mili", mili)
      this.setState({
        beingPlayed: count
      })
      count++
      if (count >= 3) {
        count = 0
      }
      if (count === 0) {
        mili = 12545
        miliTran = 12545
        // console.log('count 0', mili, miliTran)        
      } else if (count === 1) {
        mili = 13000
        miliTran = 13000
        // console.log('count 1', mili, miliTran)        
      } else if (count === 2) {
        mili = 10500
        miliTran = 10500
        // console.log('count 2', mili, miliTran)        
      }
      setTimeout(() => {
        this.setState({
          vidTran: null
        })
      }, 1000)
    }, mili)

    setInterval(_ => {
      // console.log(miliTran)
      this.setState({
        vidTran: testingBro
      })
    }, miliTran)
  }

  render() {
    return (
      <div>
        <FrontWrapper color={this.state.background}>
          <Header>
            <Link to="/">
              <Logo>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 72.1">
                  <path d="M234.9 57.6c-3.5 0-5.2-2.5-5.2-7.5V14.7c0-5.1 1.6-7.5 5.2-7.5s5.1 2.5 5.1 7.5v35.4c0 5-1.6 7.5-5.1 7.5zm-30.8 14.5c-9.5 0-15.2-3.5-15.2-7.5a4.4 4.4 0 0 1 4.2-4.5h.3c2.6 0 5.7 2.8 11.1 2.8s8.1-3.1 8.1-8.7c0-.4-.1-.8-.1-1.3a10.8 10.8 0 0 1-9.4 4.9c-8.2 0-15-7.5-15-18s7.3-18.3 16.1-18.3a10.1 10.1 0 0 1 8.3 3.7 5.6 5.6 0 0 1 4.6-3.3c3.5 0 5.2 2.4 5.2 7.5v20.7c0 6.2-.4 11-2.4 14.3-3.1 5-8.5 7.7-15.8 7.7zm1.5-40.9c-3.8 0-6.8 3.3-6.8 8.5s2.9 8.7 6.8 8.7 6.8-3.4 6.8-8.7-3-8.5-6.8-8.5zm-40.8 40.9c-9.5 0-15.2-3.5-15.2-7.5a4.4 4.4 0 0 1 4.2-4.5h.3c2.6 0 5.7 2.8 11.1 2.8s8.1-3.1 8.1-8.7c0-.4-.1-.8-.1-1.3a10.8 10.8 0 0 1-9.4 4.9c-8.1 0-15-7.5-15-18s7.3-18.3 16.1-18.3a10.1 10.1 0 0 1 8.3 3.7 5.6 5.6 0 0 1 4.6-3.3c3.5 0 5.2 2.4 5.2 7.5v20.7c0 6.2-.4 11-2.4 14.3-3 5-8.4 7.7-15.8 7.7zm1.5-40.9c-3.8 0-6.8 3.3-6.8 8.5s2.9 8.7 6.8 8.7 6.8-3.4 6.8-8.7-3-8.5-6.8-8.5zm-38.1 27c-10.2 0-17.5-7.7-17.5-18.5s7.4-18.5 17.5-18.5 17.5 7.7 17.5 18.5-7.2 18.5-17.4 18.5zm0-27.3c-3.8 0-6.8 3.3-6.8 8.7s2.9 8.8 6.8 8.8 6.8-3.4 6.8-8.8-3-8.7-6.8-8.7zm-24.1.9h-.9v18.3c0 5-1.6 7.5-5.1 7.5S93 55.1 93 50.1V31.8h-.4c-3.7 0-5.8-1.8-5.8-4.5s2.1-4.4 6.2-4.6v-4.5c0-5 1.6-7.5 5.2-7.5s5.1 2.5 5.1 7.5v4.5h.9c4.1 0 6.5 1.8 6.5 4.6s-2.2 4.5-6.6 4.5z" />
                  <circle cx="35.6" cy="35.6" r="35.6" fill="#e1393f" />
                  <path
                    d="M38 14.1h-5v25h5zm-2.5 40A17.5 17.5 0 0 1 31 19.7v5.2a12.5 12.5 0 1 0 9 0v-5.2a17.5 17.5 0 0 1-4.5 34.4z"
                    fill="#fff"
                  />
                </svg>
              </Logo>
            </Link>
            <BurgerContainer onClick={_ => this.burgerToggle()}>
              <div style={this.state.clicked ? Clicked1 : Burger1} />
              <div style={this.state.clicked ? Clicked2 : Burger2} />
            </BurgerContainer>
            <DesktopNav>
              <DesktopSpan>Features</DesktopSpan>
              <DesktopSpan>Pricing</DesktopSpan>
              <DesktopSpan>Training</DesktopSpan>
              <LoginCont
                href={process.env.REACT_APP_LOGIN}
                className="login-font"
              >
                Log in
              </LoginCont>
              <SignUp>
                <LoginCont
                  href={process.env.REACT_APP_LOGIN}
                  className="login-font"
                >
                  Sign Up
                </LoginCont>
              </SignUp>
            </DesktopNav>
          </Header>
          <TitleContainer displayTitle={this.state.display}>
            <TitleText>Everything works much better with Toggl</TitleText>
            <Ptag>
              Hassle-free time tracking so your business runs like clockwork.
            </Ptag>
            <VideoContainer>
              <VideoSize
                vidTran={this.state.vidTran}
                src={this.state.vidList[this.state.beingPlayed]}
                autoPlay
              />
            </VideoContainer>
            <ButtonContain>
              <Button type="pink">Get Started</Button>
            </ButtonContain>
            {/* <video src="">VID</video>
            <video src="">VDI</video> */}
            <RotateTimer src={timer_icon} alt="animated rotating timer" />
            <Scroller>Scroll</Scroller>
          </TitleContainer>
          <BurgerWrapper displayNav={this.state.displayNav}>
            <BurgerNav>Features</BurgerNav>
            <BurgerNav>Pricing</BurgerNav>
            <BurgerNav>Training</BurgerNav>

            <LoginCont
              href={process.env.REACT_APP_LOGIN}
              className="login-font"
            >
              Log in
            </LoginCont>
            <BottomLoginSvg />
            <SignUp>
              <LoginCont
                href={process.env.REACT_APP_LOGIN}
                className="login-font"
              >
                Sign Up
              </LoginCont>
            </SignUp>
            <NavButtonContainer>
              <Button type="white">DOWNLOAD THE APP</Button>
            </NavButtonContainer>
          </BurgerWrapper>
        </FrontWrapper>
      </div>
    )
  }
}

export default Landing

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓

const BurgerWrapper = styled.section`
  background: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 4rem;
  letter-spacing: -0.02rem;
  line-height: 3.16;
  text-decoration: none;
  display: ${props => props.displayNav};
  padding: 4.7rem;
`

const ButtonContain = styled.section`
  position: absolute;
  left: 50%;
  bottom: 2.5rem;
`

const NavButtonContainer = styled.section`
  display: flex;
  justify-content: center;
`

const BurgerNav = styled.nav`
  border-bottom: 1px solid lightgray;
`

const LoginCont = styled.a`
  text-decoration: none;
  color: black;
  @media (min-width: 770px) {
    margin-right: 1rem;
  }
`

const SignUp = styled.nav`
  font-weight: 900;
`

const mobile = styled.section`
  display: ${props => props.display};
`

const FrontWrapper = styled.section`
  background: ${props => props.color};
  height: 100vh;
  letter-spacing: 0.04em;
`

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 27px 1.3rem;
  align-items: center;
  position: relative;
  @media (min-width: 1024px) {
    padding: 27px 1.75rem;
    padding-bottom: 0;
  }
  @media (min-width: 1240px) {
    padding: 27px 2.1rem;
    padding-bottom: 0;
  }
`

const Logo = styled.section`
  width: 6rem;
  cursor: pointer;
  @media (min-width: 1240px) {
    width: 7.75rem;
  }
`

const BurgerContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  height: 2rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

const Burger1 = {
  backgroundColor: "#000",
  // position: "absolute",
  // right: "10px",
  borderRadius: "0.2rem",
  marginTop: "6px",
  height: "3px",
  width: "34px",
  transitionDuration: ".3s"
}

const Burger2 = {
  backgroundColor: "#000",
  borderRadius: "0.2rem",
  // right: "10px",
  marginTop: "6px",
  height: "3px",
  width: "34px",
  transitionDuration: ".3s"
  // position: "absolute"
}

let Clicked1 = {
  backgroundColor: "#000",
  borderRadius: "0.2rem",
  position: "absolute",
  height: "3px",
  right: "25px",
  width: "34px",
  transition: "all .3s",
  transform: "rotate(45deg)"
}

let Clicked2 = {
  backgroundColor: "#000",
  position: "absolute",
  borderRadius: "0.2rem",
  right: "25px",
  height: "3px",
  width: "34px",
  transition: "all .3s",
  transform: "rotate(-45deg)"
}

const TitleContainer = styled.section`
  width: calc(100% - (2.2rem * 2));
  margin-left: auto;
  margin-right: auto;
  color: white;
  display: ${props => props.displayTitle};
`
const TitleText = styled.h1`
  font-size: 1.65rem;
  line-height: 2.14rem;
  margin-top: 1.2rem;
  margin: 0;
  margin-top: 1.75rem;
  @media (min-width: 454px) {
    padding: 0 11%;
  }
  @media (min-width: 557px) {
    padding: 0 19%;
  }
  @media (min-width: 676px) {
    padding: 0 25.9%;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3.25rem;
    padding: 0 5%;
  }
  @media (min-width: 813px) {
    padding: 0 15%;
  }
  @media (min-width: 1020px) {
    padding: 0 21%;
    margin-top: 1rem;
  }
  @media (min-width: 1214px) {
    padding: 0 27%;
  }
  @media (min-width: 1240px) {
    font-size: 3.2rem;
    padding: 0 26%;
  }
  @media (min-width: 1580px) {
    padding: 0 33%;
  }
`
const Ptag = styled.p`
  font-size: 1rem;
  font-weight: 100;
  margin: 0;
  margin-top: 1rem;
  line-height: 1.52;
  @media (min-width: 390px) {
    padding: 0 9%;
  }
  @media (min-width: 440px) {
    padding: 0 13%;
  }
  @media (min-width: 530px) {
    padding: 0 21%;
  }
  @media (min-width: 651px) {
    padding: 0 27%;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
    font-weight: 100;
  }
  @media (min-width: 676px) {
    padding: 0;
  }
`

// const testingBro = keyframes`
// 0% {
//   transform: translateY(0);
//   transform: translateX(0)
// }
// 25% {
//   transform: translate(-120px, 80px);
// opacity: 0;
// }

// 75%{
//   transform: translate (60px, -40px);
//   opacity: 0;
// }
// 100% {
//   transform: translate (120px, -80px);
//   opacity: 1;
// }
// `

const testingBro = keyframes`
12.5% {
  transform: translateY(0);
  transform: translateX(0)
}
25% {
  transform: translate(-120px, 80px);
opacity: 0;
}

37.5%{
  transform: translate (60px, -40px);
  opacity: 0;
}
50% {
  transform: translate (120px, -80px);
  opacity: 0;
}
${"" /* 62.5% {
  opacity: 0;
} */}
65% {
  transform: translate(90px, -60px);
opacity: .1;
}
87.5%{
  transform: translate (-60px, 40px);
  opacity: .5;
}
100% {
  transform: translate (-120px, 80px);
  opacity: 1;
}
`

const VideoSize = styled.video`
  min-width: 17rem;
  max-width: 90%;
  left: 50%;
  margin-left: -45%;
  position: absolute;
  bottom: 11.5rem;
  margin-bottom: -2%;
  animation: ${props => props.vidTran};
  // animation-delay: 0.1s;
  // animation-timing-function: ease-in-out;
  animation-duration: 1s;
  @media (min-width: 651px) {
    max-width: 80%;
    margin-left: -40%;
  }
  @media (min-width: 735px) {
    max-width: 75%;
    margin-left: -38%;
  }
  @media (min-width: 769px) {
    max-width: 55%;
    margin-left: -26%;
  }
  @media (min-width: 917px) {
    max-width: 50%;
    margin-left: -25%;
  }
  @media (min-width: 1230px) {
    max-width: 43%;
    margin-left: -22%;
  }
  @media (min-width: 1300px) {
    max-width: 40%;
    margin-left: -20%;
  }
  @media (min-width: 1485px) {
    max-width: 36%;
    margin-left: -17%;
  }
`

let VideoContainer = styled.section`
  display: flex;
  justify-content: center;

  @media (min-width: 370px) {
    width: calc(100% - (2.2rem * 2));
  }
  @media (min-width: 651px) {
    padding: 0 27%;
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const RotateTimer = styled.img`
  width: 1.25rem;
  position: absolute;
  bottom: 2.6rem;
  right: 2.7rem;
  animation: ${rotate360} 15s linear infinite;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1241px) {
    width: 2rem;
  }
`

const Scroller = styled.span`
  transform: rotate(90deg);
  position: absolute;
  bottom: 4rem;
  left: 0.7rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1241px) {
    left: 1.5rem;
  }
`

const DesktopNav = styled.section`
  display: flex;
  font-size: 0.75rem;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1240px) {
    font-size: 1rem;
  }
`

const DesktopSpan = styled.span`
  margin-right: 1rem;
`
