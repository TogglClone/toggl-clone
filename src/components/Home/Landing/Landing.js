import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import hatdog from "./img/hotdog.mov"
import timer_icon from "./img/timer_icon.svg"
import Button from "../../Button/Button"
import BottomLoginSvg from "./SignUpBottomSvg/SignUpBottomSvg"
//testtttttinngggg this merge request pleaseeeee

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      burgerOpen: null,
      background: "#a4cfdc",
      displayMain: "none",
      displayNav: "none",
      burger: null
    }
  }

  burgerToggle() {
    this.state.burgerOpen
      ? this.setState({
          burgerOpen: false,
          background: "#a4cfdc",
          display: "block",
          displayNav: "none"
        })
      : this.setState({
          burgerOpen: true,
          background: "white",
          display: "none",
          displayNav: "block"
        })
  }

  render() {
    return (
      <div>
        <FrontWrapper color={this.state.background}>
          <Header>
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
            <BurgerContainer onClick={_ => this.burgerToggle()}>
              <Burger />
              <Burger />
            </BurgerContainer>
          </Header>
          <TitleContainer displayTitle={this.state.display}>
            <TitleText>Everything works much better with Toggl</TitleText>
            <Ptag>
              Hassle-free time tracking so your business runs like clockwork.
            </Ptag>
            <VideoContainer>
              <video src={hatdog} style={videoSize} autoPlay loop />
            </VideoContainer>
            <Button type="pink">Get Started</Button>
            {/* <video src="">VID</video>
            <video src="">VDI</video> */}
          </TitleContainer>
          <RotateTimer src={timer_icon} alt="animated rotating timer" />
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
            <div>
              <Button type="white">DOWNLOAD THE APP</Button>
            </div>
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
  padding: 0 10.6rem;
`

const BurgerNav = styled.nav`
  border-bottom: 1.5px solid lightgray;
`

// const deskTop = styled.section`
//   display: ${props => props.display};
// `

const LoginCont = styled.a`
  text-decoration: none;
  color: black;
`

const SignUp = styled.nav`
  font-weight: 900;
`

const mobile = styled.section`
  display: ${props => props.display};
`

const FrontWrapper = styled.section`
  background: ${props => props.color}
  height: 100vh;
  letter-spacing: 0.04em;
`

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 27px 1.3rem;
  align-items: center;
`

const Logo = styled.section`
  width: 6rem;
`

const xBurger = keyframes`
  from {
    background: green;
    ${"" /* transform: translateT(0) rotate(0deg); */}
  }

  to {
    background: red;
    ${"" /* transform: translateT(15px) rotate(45deg); */}
  }
`

const BurgerContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const Burger = styled.section`
  background-color: #000;
  border-radius: 0.2rem;
  margin-top: 6px;
  height: 3px;
  width: 34px;
  ${BurgerContainer}:hover & {
    animation: ${xBurger} 0.3s linear infinite;
    tranistion-delay: 0.4s;
  }
`

// const Video = styled.video``

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
`
const Ptag = styled.p`
  font-size: 1rem;
  font-weight: 100;
  margin: 0;
  margin-top: 1rem;
  line-height: 1.52;
`

const VideoContainer = styled.section`
  display: flex;
  justify-content: center;
`
const videoSize = {
  minWidth: "17rem",
  // width: "calc(100% - (2.5rem * 2))",
  maxWidth: "39rem",
  height: "16rem",
  marginBottom: "-2%"
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const RotateTimer = styled.img`
  height: 25px;
  width: 25px;
  animation: ${rotate360} 15s linear infinite;
  @media (max-width: 768px) {
    display: none;
  }
`
