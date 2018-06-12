import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import hatdog from "./img/hotdog.mov"
import robot from "./img/robot.mov"
import piggy from "./img/piggy.mov"
import timer_icon from "./img/timer_icon.svg"
import Button from "../../Button/Button"
import BottomLoginSvg from "./SignUpBottomSvg/SignUpBottomSvg"
import { Link } from "react-router-dom"
import { VideoSize0, VideoSize1, VideoSize2 } from "./StyledLanding"

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      burgerOpen: null,
      background: "#A4CFDC",
      displayMain: "none",
      displayNav: "none",
      clicked: false,
      vidList: [hatdog, robot, piggy],
      beingPlayed: "0",
      hatdog: {
        trans: null,
        opac: 1
      },
      robot: {
        trans: "translateX(50%) translateY(-30%) translateZ(0)",
        opac: 0
      },
      piggy: {
        trans: "translateX(50%) translateY(-30%) translateZ(0)",
        opac: 0
      }
    }
  }

  burgerToggle() {
    this.state.burgerOpen
      ? this.setState({
          burgerOpen: false,
          background: "#A4CFDC",
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

  // animateIn transform: translateX(50%) translateY(-30%) translateZ(0)
  // animateout transform: translateX(-50%) translateY(50%) translateZ(0)

  componentDidMount() {
    console.time()
    var count = 1
    var mili = 13000
    var transIn = "translateX(50%) translateY(-30%) translateZ(0)"
    var transOut = "translateX(-50%) translateY(50%) translateZ(0)"
    var nullify = "translateX(0%) translateY(0%) translateZ(0)"
    let hatdogTime = 12500
    let robotTime = 13000
    let piggiesTime = 10500

    setTimeout(_ => {
      this.setState({
        hatdog: {
          trans: transOut, //OUT
          opac: 0
        }
      })
    }, 12200)
    setInterval(() => {
      console.log("count", count)
      this.setState({
        beingPlayed: count
      })
      if (count === 0) {
        this.setState({
          hatdog: { trans: nullify, opac: 1 }, //NULL
          piggy: { trans: transIn, opac: 0 },
          robot: {
            trans: transIn,
            opac: 0
          }
        })
        setTimeout(_ => {
          this.setState({
            hatdog: {
              trans: transOut, //OUT
              opac: 0
            }
          })
        }, 12500)
      } else if (count === 1) {
        this.setState({
          robot: {
            trans: nullify, //NULL
            opac: 1
          },
          hatdog: {
            trans: transOut, //IN
            opac: 0
          },
          piggy: {
            trans: transIn,
            opac: 0
          }
        })
        setTimeout(_ => {
          this.setState({
            robot: {
              trans: transOut, //OUT
              opac: 0
            }
          })
        }, 13000)
      } else if (count === 2) {
        this.setState({
          piggy: {
            trans: nullify, //NULL
            opac: 1
          },
          robot: {
            trans: transIn, //IN
            opac: 0
          },
          hatdog: {
            trans: transIn,
            opac: 0
          }
        })
        setTimeout(_ => {
          this.setState({
            piggy: {
              trans: transOut, //OUT
              opac: 0
            }
          })
        }, 10500)
      }
      count++
      if (count >= 3) {
        count = 0
      }
    }, mili)
  }

  render() {
    return (
      <div>
        <FrontWrapper color={this.state.background}>
          <Header>
            <Link to="/">
              <Logo>
                <svg viewBox="0 0 240 72.1">
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
              <DesktopSpan>
                <LoginCont
                  href={process.env.REACT_APP_LOGIN}
                  className="login-font"
                >
                  Log in
                </LoginCont>
              </DesktopSpan>
              <SignUp>
                <LoginCont
                  href={process.env.REACT_APP_LOGIN}
                  className="login-font"
                >
                  Sign Up
                  <SignUpLineAbove
                    xmlns="http://www.w3.org/2000/svg"
                    width="52.5"
                    height="33.4"
                    viewBox="0 0 52.5 33.4"
                  >
                    <path
                      class="sign-up-line sign-up-line--1"
                      d="M6,18-2.3-.4"
                      transform="translate(4.3 13.4)"
                      fill="#fff"
                      strokeWidth="5"
                      style={{
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeDashoffset: "0px"
                      }}
                    />
                    <path
                      class="sign-up-line sign-up-line--2"
                      d="M22,16.1V-11.4"
                      transform="translate(4.3 13.4)"
                      fill="#fff"
                      strokeWidth="5"
                    />
                    <path
                      class="sign-up-line sign-up-line--3"
                      d="M37.9,18,46.2-1.4"
                      transform="translate(4.3 13.4)"
                      fill="#fff"
                      strokeWidth="5"
                    />
                  </SignUpLineAbove>
                  <SignUpLineBelow
                    xmlns="http://www.w3.org/2000/svg"
                    width="52.5"
                    height="33.4"
                    viewBox="0 0 52.5 33.4"
                  >
                    <path
                      class="sign-up-line sign-up-line--4"
                      d="M6,18-2.3-.4"
                      transform="translate(4.3 13.4)"
                      style={{
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeDashoffset: "0px"
                      }}
                      fill="none"
                      strokeWidth="5"
                    />
                    <path
                      class="sign-up-line sign-up-line--5"
                      d="M22,16.1V-11.4"
                      transform="translate(4.3 13.4)"
                      style={{
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeDashoffset: "0px"
                      }}
                      fill="none"
                      strokeWidth="5"
                    />
                    <path
                      class="sign-up-line sign-up-line--6"
                      d="M37.9,18,46.2-1.4"
                      transform="translate(4.3 13.4)"
                      style={{
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeDashoffset: "0px"
                      }}
                      fill="none"
                      strokeWidth="5"
                    />
                  </SignUpLineBelow>
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
              <VideoSize0
                src={this.state.vidList[0]}
                transform={this.state.hatdog.trans}
                opac={this.state.hatdog.opac}
                autoPlay
                loop
              />
              <VideoSize1
                src={this.state.vidList[1]}
                transform={this.state.robot.trans}
                opac={this.state.robot.opac}
                autoPlay
                loop
              />
              <VideoSize2
                src={this.state.vidList[2]}
                transform={this.state.piggy.trans}
                opac={this.state.piggy.opac}
                autoPlay
                loop
              />
            </VideoContainer>
            <ButtonContain>
              <Button type="pink">Get Started</Button>
            </ButtonContain>
            {/* <video src="">VID</video>
            <video src="">VDI</video> */}
            <RotateTimer src={timer_icon} alt="animated rotating timer" />
            <Scroller>
              <Scrollp>Scroll</Scrollp>
              <Arrow viewBox="0 0 13 18">
                <path d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z" />
              </Arrow>
            </Scroller>
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

const arrowanim = keyframes`
0% {
  opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, -30);
}
25%{
  opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);
    
}
50% {
  opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);
    
}
75%{
  opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 60);
}
100% {
  opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 60);
    
}
`

let Arrow = styled.svg`
  width: 0.9rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  fill: white;
  transform: rotate(90deg);
  left: 1.05rem;
  position: absolute;
`

let Scrollp = styled.p`
  transform: rotate(90deg);
  margin-bottom: 1.25rem;
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
    cursor: pointer;
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
  @media (max-width: 667px) {
    width: 100%;
  }
`
const TitleText = styled.h1`
  font-size: 1.65rem;
  line-height: 2.14rem;
  margin-top: 1.2rem;
  margin: 0;
  margin-top: 1.75rem;
  position: relative;
  z-index: 5;
  @media (min-width: 414px) {
    padding: 0 12%;
    -webkit-font-smoothing: antialiased;
  }
  @media (min-width: 557px) {
    padding: 0 19%;
  }
  @media (min-width: 676px) {
    padding: 0 25.9%;
  }
  @media (min-width: 768px) {
    margin-top: 5rem;
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
    font-size: 4.2rem;
    padding: 0px 17%;
    line-height: 4.25rem;
    margin-top: 5rem;
  }
  @media (min-width: 1537px) {
    padding: 0 20%;
  }
  @media (min-width: 1580px) {
    padding: 0 25%;
  }
`
const Ptag = styled.p`
  font-size: 1rem;
  font-weight: 100;
  margin: 0;
  margin-top: 1rem;
  line-height: 1.52;
  z-index: 5;
  position: relative;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 667px) {
    padding: 0 2rem;
  }
  @media (min-width: 390px) {
    padding: 0 14%;
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

// let styleOut = {
//   transform: "translateX(-50%) translateY(50%) translateZ(0)",
//   transitionTimingFunction: "ease-in-out",
//   transitionDuration: "0.5s"
// }
// let styleIn = {
//   transform: "translateX(40%) translateY(-40%) translateZ(0)",
//   transitionTimingFunction: "ease-in-out",
//   transitionDuration: "0.5s"
// }

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
  animation: ${arrowanim} 7s infinite;
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

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1240px) {
    font-size: 1rem;
  }
`

const DesktopSpan = styled.span`
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
  @media (min-width: 1240px) {
    &:before {
      transform: scaleX(0);
      transition: transform 0.3s;
      background-color: #fff;
      border-radius: 0.1rem;
      top: 1.2rem;
      content: "";
      height: 0.1rem;
      left: 0;
      position: absolute;
      right: 0;
      transform-origin: center center;
      transition-timing-function: cubic-bezier(0.665, 0.14, 0.785, 0.285);
    }
    &:hover {
      &:before {
        transform: scaleX(1);
        transition-timing-function: cubic-bezier(0.12, 0.845, 0.305, 1);
      }
    }
  }
`

const SignUpLineAbove = styled.svg`
  stroke: #fff;
  position: absolute;
  width: 1rem;
  transform: translateX(-2rem) translateY(-1.5rem);
  @media (min-width: 1240px) {
    width: 1.2rem;
    transform: translateX(-2.4rem) translateY(-1.5rem);
  }
`
const SignUpLineBelow = styled.svg`
  stroke: #fff;
  position: absolute;
  width: 1rem;
  transform: translateX(-2rem) translateY(0.4rem) rotate(180deg);
  @media (min-width: 1240px) {
    width: 1.2rem;
    transform: translateX(-2.4rem) translateY(0.8rem) rotate(180deg);
  }
`
