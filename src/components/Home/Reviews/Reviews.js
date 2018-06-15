import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import annika from "./img/annika.jpg"
import brad from "./img/brad.jpg"
import tasha from "./img/tasha.jpg"
import background from "./img/bg.png"
import { loadavg } from "os";
export default class Reviews extends Component {
    constructor(){
        super();
        this.state = {
            tasha:[tasha,`"We're using Toggl to analyze the profitability of the projects we do for our clients, and for tracking our internal ROI. But sometimes we also show the data to our clients - that makes negotiations a lot easier!"`],
            brad:[brad,`"Using Toggl is helping us get a handle on our time allocation for different customers and projects. Before we had no idea of what people were spending their work time on - I had to check in on that all the time. Now I can just focus on the important things, instead of micromanaging."`],
            annika:[annika,`"It's always hard to predict how much time a project is going to take. Having stats on how much time different things have taken in the past is great for getting accurate predictions for the future."`],
            currentReviewie:[tasha,"We're using Toggl to analyze the profitability of the projects we do for our clients, and for tracking our internal ROI. But sometimes we also show the data to our clients - that makes negotiations a lot easier!"],
            wiggle: null,
            buttonBackgroundTasha:false,
            buttonBackgroundBrad:true,
            buttonBackgroundAnnika:true,
            animateCalled:null,
            animateCalledBrad:null,
            animateCalledAnnika:null,
            animateCalledTasha:null,
            animateSlideBrad: null,
            animateSlideAnnika: null,
            animateSlideTasha: null,
            tashaPosition: 0,
            bradPosition: 1,
            annikaPosition: 2,
            animateReviewTasha: null,
            animateReviewAnnika: null,
            animateReviewBrad: null,
            tashaReviewPosition: 2,
            bradReviewPosition: 1,
            annikaReviewPosition: 0
        }
    }
    reset() {
        this.setState({
            wiggle: null
        })
    }
    handleButtonOne(){
        this.setState({
            buttonBackgroundTasha:false,
            buttonBackgroundBrad:true,
            buttonBackgroundAnnika:true
        })
    }
    handleButtonTwo(){
        this.setState({
            buttonBackgroundBrad:false,
            buttonBackgroundAnnika:true,
            buttonBackgroundTasha:true
        })
    }
    handleButtonThree(){
        this.setState({
            buttonBackgroundAnnika:false,
            buttonBackgroundBrad:true,
            buttonBackgroundTasha:true
        })
    }
    wiggle(){
        this.setState({
            wiggle: dash
        })
        setTimeout(_ => {
            this.reset()
        }, 2000)
    }
     updateReviewie(reviewie){
        this.setState({currentReviewie:reviewie})
    }
    mouseEnter(){
        this.setState({
            animateCalled:TopBounceIn,
            animateCalledBrad:BradLoad,
            animateCalledAnnika:AnnikaLoad,
            animateCalledTasha:TashaLoad,
            })
    }
    handleReviewPosition(position){        
        function shiftRight(position){
            if(position === 0){
                position = 1
            } else if (position === 1){
                position = 2
            } else if (position === 2){
                position = 0
            }
            return position
        }
        function shiftLeft(position){
            if(position === 0){
                position = 2
            } else if (position === 1){
                position = 0
            } else if (position === 2){
                position = 1
            }
            return position
        }

        const animateImagesLeftKey = [ShiftImageLeftPosition0, ShiftImageLeftPosition1, ShiftImageLeftPosition2]
        const animateImagesRightKey = [ShiftImagesRightPosition0, ShiftImagesRightPosition1, ShiftImagesRightPosition2]
        const animateReviewsLeftKey = [ShiftReviewsLeftPosition0, ShiftReviewsLeftPosition1, ShiftReviewsLeftPosition2]
        const animateReviewsRightKey = [ShiftReviewsRightPosition0, ShiftReviewsRightPosition1, ShiftReviewsRightPosition2]
        if(position === 0){            
            let tempTasha = shiftRight(this.state.tashaPosition)
            let tempBrad = shiftRight(this.state.bradPosition)
            let tempAnnika = shiftRight(this.state.annikaPosition) 
            
            let tempTashaReview = shiftLeft(this.state.tashaReviewPosition)
            let tempBradReview = shiftLeft(this.state.bradReviewPosition) 
            let tempAnnikaReview = shiftLeft(this.state.annikaReviewPosition)
            this.setState({
                tashaPosition: tempTasha,
                bradPosition: tempBrad,
                annikaPosition: tempAnnika, 
                animateSlideTasha: animateImagesRightKey[tempAnnika],
                animateSlideBrad: animateImagesRightKey[tempTasha],
                animateSlideAnnika: animateImagesRightKey[tempBrad],
                tashaReviewPosition: tempTashaReview,
                bradReviewPosition: tempBradReview,
                annikaReviewPosition: tempAnnikaReview,
                animateReviewTasha: animateReviewsLeftKey[tempAnnikaReview],
                animateReviewBrad: animateReviewsLeftKey[tempTashaReview],
                animateReviewAnnika: animateReviewsLeftKey[tempBradReview],
            })
            
            
        } else if(position === 2){
            let tempTasha = shiftLeft(this.state.tashaPosition)
            let tempBrad = shiftLeft(this.state.bradPosition)
            let tempAnnika = shiftLeft(this.state.annikaPosition)   
            let tempTashaReview = shiftRight(this.state.tashaReviewPosition)
            let tempBradReview = shiftRight(this.state.bradReviewPosition) 
            let tempAnnikaReview = shiftRight(this.state.annikaReviewPosition)                     
            this.setState({
                tashaPosition: tempTasha,
                bradPosition: tempBrad,
                annikaPosition: tempAnnika,
                animateSlideTasha: animateImagesLeftKey[tempBrad],
                animateSlideBrad: animateImagesLeftKey[tempAnnika],
                animateSlideAnnika: animateImagesLeftKey[tempTasha],
                tashaReviewPosition: tempTashaReview,
                bradReviewPosition: tempBradReview,
                annikaReviewPosition: tempAnnikaReview,
                animateReviewTasha: animateReviewsRightKey[tempBradReview],
                animateReviewBrad: animateReviewsRightKey[tempAnnikaReview],
                animateReviewAnnika: animateReviewsRightKey[tempTashaReview],
                
            })
        }
        
    }
    render() {
         const {tasha,brad,annika,wiggle}=this.state
         console.log(this.state);
         
        return(
        <ReviewsContainer onMouseEnter={() => this.mouseEnter()}>
                <ReviewTitle> Sweet Nothings </ReviewTitle>
                <ReviewMini> Some client love. </ReviewMini>
                <ReviewTextWrap entered ={this.state.animateCalled}>

                    <ReviewTextTasha animate={this.state.animateReviewTasha}>{this.state.tasha[1]}</ReviewTextTasha>
                    <ReviewTextBrad animate={this.state.animateReviewBrad}>{this.state.brad[1]}</ReviewTextBrad>
                    <ReviewTextAnnika animate={this.state.animateReviewAnnika}>{this.state.annika[1]}</ReviewTextAnnika>

                </ReviewTextWrap>
            <AvatarContainer>
                <ImageWormBody entered ={this.state.animateCalled}>
                    <Worm ><Crypto wiggle={wiggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></Crypto></Worm>
                    <ImageContainer entered ={this.state.animateCalled} > 
                        <Image src={this.state.currentReviewie[0]}alt="current"/>
                        <Tasha entered ={this.state.animateCalledTasha} slide={this.state.animateSlideTasha} onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleReviewPosition(this.state.tashaPosition)}} image={tasha[0]} ></Tasha>
                        <Brad entered ={this.state.animateCalledBrad} slide={this.state.animateSlideBrad} onClick={()=>{this.wiggle(),this.updateReviewie(brad),this.handleReviewPosition(this.state.bradPosition)}} image={brad[0]}></Brad>
                        <Annika entered ={this.state.animateCalledAnnika} slide={this.state.animateSlideAnnika} onClick={()=>{this.wiggle(),this.updateReviewie(annika),this.handleReviewPosition(this.state.annikaPosition)}} image={annika[0]}></Annika>
                    </ImageContainer>
                </ImageWormBody>
        
             <ButtonBody>
                    {this.state.buttonBackgroundTasha ? 
                        <ButtonWhite onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonOne()}}></ButtonWhite>:
                        <ButtonRed onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonOne()}}></ButtonRed>}
                    {this.state.buttonBackgroundBrad ? 
                        <ButtonWhite onClick={()=>{this.wiggle(),this.updateReviewie(brad),this.handleButtonTwo()}}></ButtonWhite>:
                        <ButtonRed onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonTwo()}}></ButtonRed>}
                    {this.state.buttonBackgroundAnnika ? 
                        <ButtonWhite onClick={()=>{this.wiggle(),this.updateReviewie(annika),this.handleButtonThree()}}></ButtonWhite>:
                        <ButtonRed onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonThree()}}></ButtonRed>}
                </ButtonBody>
            </AvatarContainer>
        </ReviewsContainer>
        )
    }
  }
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const dash = keyframes`
        from {
          stroke-dashoffset: -800;
        }
        
       to {
          stroke-dashoffset: 0;
      }
    `
const Crypto = styled.svg`
    fill: white;
    stroke: black;
    stroke-dasharray: 800;
    repeat:2;
    animation: ${props => props.wiggle};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    // animation-iteration-count: 2;
    height:4.7rem;
    margin-left:auto;
    margin-right:auto;
    width:3.3rem;
  }
  
`
const ReviewsContainer = styled.div`
  width: 100% -4rem;
  background-color: #feeede;
  background-image: url(${background});
  background-repeat: repeat;
  padding: 3rem 2rem 0 2rem;
  position: relative;
  @media (min-width: 1240px) {
    padding-bottom: 15rem;
    padding-top: 8.5rem;
    padding-left: 280px;
    padding-right: 280px;
  }
  @media (min-width: 768px) {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
    padding-bottom: 12rem;
  }
`
const ReviewTitle = styled.h1`
  font-size: 1.75rem;
  line-height: 2rem;
  @media (min-width: 1240px) {
    font-size: 3.4rem;
    line-height: 1.03;
    font-weight: 900;
    margin-bottom: 0.5rem;
    margin-top: 6rem;
  }
`
const ReviewMini = styled.h2`
  font-size: 0.75rem;
  margin-bottom: 1.5em;
  margin-top: 0;
  line-height: 1.71;
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
  @media (min-width: 1240px) {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 5.5rem;
    font-weight: 100;
  }
`
const ShiftReviewsLeftPosition0 = keyframes`
0%{opacity: 0; transform: translate(-50px, 0);}
100%{opacity: 0; transform: translate(50px, 0);}
`
const ShiftReviewsLeftPosition1 = keyframes`
0%{opacity: 1; transform: translate(0px, 0);}
60%{opacity: 0;}
100%{opacity: 0; transform: translate(-50px, 0);}
`
const ShiftReviewsLeftPosition2 = keyframes`
0%{opacity: 0; transform: translate(50px, 0);}
40%{opacity: 0;}
100%{opacity: 1; transform: translate(0px, 0);}
`
const ShiftReviewsRightPosition0 = keyframes`
0%{opacity: 0; transform: translate(-50px, 0);}
40%{opacity: 0;}
100%{opacity: 1; transform: translate(0px, 0);}
`
const ShiftReviewsRightPosition1 = keyframes`
0%{opacity: 1; transform: translate(0px, 0);}
60%{opacity: 0;}
100%{opacity: 0; transform: translate(50px, 0);}
`
const ShiftReviewsRightPosition2 = keyframes`
0%{opacity: 0; transform: translate(50px, 0);}
100%{opacity: 0; transform: translate(-50px, 0);}
`

const ShiftImageLeftPosition0 = keyframes`
0%{ left: calc(50% - 182px); opacity: 1;}
30%{left: calc(50% - 182px); opacity: 0;}
55%{ left: calc(50% + 250px); opacity: 0;}
75%{left: calc(50% + 118px); opacity: 1;}
100%{ left: calc(50% + 118px); opacity: 1;}
`
const ShiftImageLeftPosition1 = keyframes`
0%{ left: calc(50% - 32px);}
20%{ left: calc(50% - 32px);}
45%{left: calc(50% - 182px);}
100%{ left: calc(50% - 182px)}
`
const ShiftImageLeftPosition2 = keyframes`
0% {left: calc(50% + 118px);}
30%{ left: calc(50% + 118px);}
55%{left: calc(50% - 32px);}
100%{left: calc(50% - 32px);}
`
const ShiftImagesRightPosition0 = keyframes`
0%{ left: calc(50% - 182px);}
30%{ left: calc(50% - 182px);}
55%{left: calc(50% - 32px);}
100%{left: calc(50% - 32px);}
`
const ShiftImagesRightPosition1 = keyframes`
0%{left: calc(50% - 32px);}
20%{ left: calc(50% - 32px);}
45%{left: calc(50% + 118px);}
100%{left: calc(50% + 118px);}
`
const ShiftImagesRightPosition2 = keyframes`
0%{left: calc(50% + 118px); opacity: 1;}
30%{left: calc(50% + 118px); opacity: 0;}
55%{ left: calc(50% - 300px); opacity: 0;}
75%{left: calc(50% - 182px); opacity: 1;}
100%{left: calc(50% - 182px); opacity: 1;}
`

const TopBounceIn = keyframes`
0% { top: 100px; opacity: 0; }
100% { top:0px; opacity: 1;}
`
const BradLoad = keyframes`
0% { top: 100px; left: calc(50% - 32px); opacity: 0; }
100% { top:0px; left: calc(50% - 32px); opacity: 1;}
`
const AnnikaLoad = keyframes`
0% { top: 100px; left: calc(50% - 32px); opacity: 0; }
100% { top:0px; left: calc(50% + 118px); opacity: 1;}
`
const TashaLoad = keyframes`
0% { top: 100px; left: calc(50% - 32px); opacity: 0; }
100% { top:0px; left: calc(50% - 182px); opacity: 1;}
`
const ReviewTextWrap = styled.div`
    font-size: 1.1rem;
    font-weight:100;
    line-height: 1.7rem;
    padding-left:.8rem;
    padding-right:.8rem;
    position:relative;
    display:block;
    opacity:0;
    animation:${props =>props.entered};
    animation-duration:0.6s;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    animation-delay:0.2s;
    animation-iteration-count:1;
    animation-direction:initial;
    animation-fill-mode:forwards;
    animation-play-state:initial; 
    height: 144px;
    @media(min-width:768px){
        line-height:2.3rem;
    }
    @media(min-width:1240px){
        height: 240px;
        font-size:1.8rem;
        line-height:1.5;
        font-weight:100; 
        min-width:62%;
        max-width: 700px;
        margin:auto;
    }
`
const ReviewTextTasha = styled.div`
    position: absolute;
    opacity: 0;
    animation: ${props =>props.animate} ease-in-out 1.2s 0s 1 forwards;
    `
const ReviewTextBrad = styled.div`
    position: absolute;
    opacity: 1;
    animation: ${props =>props.animate} ease-in-out 1.2s 0s 1 forwards;
`
const ReviewTextAnnika = styled.div`
    position: absolute;
    opacity: 0;
    animation: ${props =>props.animate} ease-in-out 1.2s 0s 1 forwards;

`

const AvatarContainer = styled.section `
    margin-top:1px
`
const ImageWormBody = styled.section`
    padding-top:1.5rem;
    position:relative;
    // opacity:0;
    // animation:${props => props.entered};
    // animation-duration:0.6s;
    // animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    // animation-delay:1.2s;
    // animation-iteration-count:1;
    // animation-direction:initial;
    // animation-fill-mode:forwards;
    // animation-play-state:initial; 
`
const Worm = styled.section`
  height: 4.7rem;
  margin-left: auto;
  margin-right: auto;
  width: 3.3rem;
  animation: ${props => props.entered};
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: initial;
  animation-fill-mode: forwards;
  animation-play-state: initial;
`
const ImageContainer = styled.section`
  margin-top: 2rem;
  position: relative;
  height: 80px;
  width: 100%;
`
const Image = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
const Tasha = styled.button`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: contain;
  outline: none;
  position: absolute;
  border: none;
  display: none;
  top: 0px;
  left: calc(50% - 182px);
  opacity: 1;
  animation: ${props => props.entered} cubic-bezier(0.455, 0.03, 0.515, 0.955)
      0.6s 1s 1 forwards,
    ${props => props.slide} cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s 0s 1
      forwards;
  // animation-duration:0.6s;
  // animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  // animation-delay:1s;
  // animation-iteration-count:1;
  // animation-direction:initial;
  // animation-fill-mode:forwards;
  // animation-play-state:initial;
  opacity: 0;
  @media (min-width: 768px) {
    display: inline-block;
  }
`
const Brad = styled.button`
    height:65px;
    width:65px;
    border-radius:50%;
    cursor:pointer;
    background-image:url(${props => props.image});
    background-size:contain
    outline:none;
    border:none;
    display:none;
    position:absolute;
    animation:${props =>
      props.entered} cubic-bezier(0.455, 0.03, 0.515, 0.955) .6s 1s 1 forwards, ${props =>
  props.slide} cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s 0s 1 forwards;
    // animation-duration:0.6s;
    // animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    // animation-delay:1s;
    // animation-iteration-count:1;
    // animation-direction:initial;
    // animation-fill-mode:forwards;
    // animation-play-state:initial; 
    opacity:0;
    @media(min-width: 768px){
        display:inline-block;
    
    }
`
const Annika = styled.button`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: contain;
  outline: none;
  position: absolute;
  border: none;
  display: none;
  animation: ${props => props.entered} cubic-bezier(0.455, 0.03, 0.515, 0.955)
      0.6s 1s 1 forwards,
    ${props => props.slide} cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s 0s 1
      forwards;
  // animation-duration:0.6s;
  // animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  // animation-delay:1s;
  // animation-iteration-count:1;
  // animation-direction:initial;
  // animation-fill-mode:forwards;
  // animation-play-state:initial;
  opacity: 0;
  @media (min-width: 768px) {
    display: inline-block;
  }
`
const ButtonBody = styled.section`
  width: 100%;
  height: 80px;
  margin: auto;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`
const ButtonWhite = styled.div`
  border-radius: 50%;
  height: 8px;
  width: 8px;
  cursor: pointer;
  background-color: white;
  margin-left: 2px;
  margin-right: 2px;
`
const ButtonRed = styled.div`
  border-radius: 50%;
  height: 8px;
  width: 8px;
  cursor: pointer;
  background-color: red;
  margin-left: 2px;
  margin-right: 2px;
`
