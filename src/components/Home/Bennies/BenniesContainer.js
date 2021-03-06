import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import Button from "../../Button/Button"
import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"

import { MiniIndCont, MiniColorCont, MiniImgCont, MiniPeriscope, MiniImg, MiniEyeBall, MiniPupilWrap, MiniPupil, MiniTextCont, MiniContentCont, MiniSubtitle, MiniTitle, MiniDesc, MiniButton } from "./BenniesUnder1024"
import { BigIndCont, BigColorCont, BigImgCont, ImagePeriscope, BigImg, BigEyeBall, BigPupilWrap, BigPupil, BigTextCont, AnimationWrapper, SvgContainer, BigContentCont, BigSubtitle, BigTitle, BigDesc, BigButton, AlternatePupil} from "./BenniesOver1023"

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
            textLeftBig: ["null", "5%"],
            textRightBig: ["5%", "null"],
            imgMargin: ["auto 52% auto 2.5%", "auto 2.5% auto 52%" ],
            biggestImgMargin: ["auto 52% auto 10%", "auto 10% auto 52%" ],
            colors: ["#FFACBA", "#F8CE6A", "#88CF8F", "#CA99D7"],
            fontColors: ["#E3677C", "#F69F09", "#31AA53", "#A857BD"],
            x: -15,
            y: 0,
            topCurve: 175, //even is 250
            bottomCurve: 675, //even is 750
            animateCalled: [false, false, false, false],
            intervalFn: null,
            bigAnimation: `${AlternatePupil} ease-in-out 6s 2s infinite forwards`
        }
        this.animateBox = this.animateBox.bind( this )
    }
    animateBox(version){
      if(!this.state.animateCalled[version]){
          let tempAnimate = this.state.animateCalled.slice()
          tempAnimate[version] = true
        this.setState({
          animateCalled: tempAnimate
        })
        let curves = [175, 180, 195, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 320, 315, 310, 305, 300, 295, 290, 285, 280, 275, 270, 265, 260, 255, 250, 245, 240, 235, 230, 225, 230, 235, 240, 245, 250]
        let i=0;
        var x = setInterval( () =>{
            this.setState({
              topCurve: curves[i],
              bottomCurve: curves[i] + 500,
            })
            i++
          if(i>curves.length-1){
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
        tempX -= (e.view.innerWidth) // gives range from 0 to innerwidth including the side width on the timer bar
        
        tempY = (tempY / 320 * 35)
        tempX = (tempX / (e.view.innerWidth/2) * 32) + 32
      // top 223 bottom 822 left 1717 right 3136

      //max up 47 max down 47 max left 40 max right 40
      this.setState({ x: tempX, y: tempY, bigAnimation: "none" });
    }
    
    _onMouseLeave(){
      this.setState({
          x: -15,
          y: 0,
          bigAnimation: `${AlternatePupil} ease-in-out 6s 2s infinite forwards`
      })
  }
  render() {
    console.log(this.state)
    const { version } = this.props
    const { x, y, x2 } = this.state
    var pathD = `M0 250 C 250 ${
      this.state.topCurve
    }, 500 250, 500 250 C 500 500, 500 750, 500 750 C 250 ${
      this.state.bottomCurve
    }, 0 750, 0 750 C 0 500, 0 750, 0 250 Z`
    return (
      <div>
        {/******************************** Media < 1024 **********************************/}
        <MiniIndCont onMouseEnter={() => this.animateBox(this.props.version)}>
          <MiniColorCont color={this.state.colors[version]}>
            <MiniImgCont>
              { version === '1' ? (
                <MiniPeriscope>
                  <MiniImg backgroundUrl={this.state.img[version]} />
                  <MiniEyeBall />
                  <MiniPupilWrap>
                    <MiniPupil left={x2}/>
                  </MiniPupilWrap>
                </MiniPeriscope>
              ) : 
                <MiniPeriscope>
                  <MiniImg backgroundUrl={this.state.img[version]} />
                </MiniPeriscope>
              }
            </MiniImgCont>
            <MiniTextCont>
              <MiniContentCont
                animateCalled={this.state.animateCalled[version]}
              >
                <MiniSubtitle fontColor={this.state.fontColors[version]}>
                  {this.state.miniTitle[version]}
                </MiniSubtitle>
                <MiniTitle>{this.state.title[version]}</MiniTitle>
                <MiniDesc>{this.state.description[version]}</MiniDesc>
                <MiniButton>
                  <Button type="white">{this.state.btnText}</Button>
                </MiniButton>
              </MiniContentCont>
            </MiniTextCont>
          </MiniColorCont>
        </MiniIndCont>
        {/******************************* Media >= 1024 *********************************/}
            <BigIndCont onMouseEnter={() => this.animateBox(this.props.version)} >
                <BigColorCont color={this.state.colors[version]} onMouseMove={version === '1' ? this._onMouseMove.bind(this) : null}  onMouseOut={version === '1' ? this._onMouseLeave.bind(this) : null}>
                    <BigImgCont side={this.state.imgMargin[version%2]} biggestSide={this.state.biggestImgMargin[version%2]} >
                        { version === '1' ? (
                        <ImagePeriscope>
                          <BigImg backgroundUrl={this.state.img[version]}>
                          </BigImg>
                          <BigEyeBall/>
                          <BigPupilWrap>
                            <BigPupil animashe={this.state.bigAnimation} top={y} left={x}/>
                          </BigPupilWrap>
                        </ImagePeriscope>
                        ) :
                        <ImagePeriscope>
                          <BigImg backgroundUrl={this.state.img[version]}>
                          </BigImg>
                        </ImagePeriscope>
                        }
                    </BigImgCont>
                    <BigTextCont side={this.state.textMargin[version%2]} sideBig={this.state.textMarginBig[version%2]} left={this.state.textLeftBig[version%2]} right={this.state.textRightBig[version%2]}>
                        <AnimationWrapper>
                            <SvgContainer animateCalled={this.state.animateCalled[version]}>
                                <svg opacity="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 1000" width="100%" height="100%" preserveAspectRatio="none"><path fill="#fff"  d={pathD}/></svg>
                            </SvgContainer>
                            <BigContentCont animateCalled={this.state.animateCalled[version]}>
                                <BigSubtitle fontColor={this.state.fontColors[version]}>{this.state.miniTitle[version]}</BigSubtitle>
                                <BigTitle>{this.state.title[version]}</BigTitle>
                                <BigDesc>{this.state.description[version]}</BigDesc>
                                <BigButton>
                                    <Button type="white">{this.state.btnText}</Button>
                                </BigButton>
                            </BigContentCont>
                        </AnimationWrapper>
                    </BigTextCont>
                </BigColorCont>
            </BigIndCont>
            </div>
        )
    }
}
