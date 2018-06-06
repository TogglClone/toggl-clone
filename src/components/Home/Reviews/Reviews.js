import React, { Component } from "react"
import styled,{keyframes} from "styled-components"
import annika from "./img/annika.jpg"
import brad from "./img/brad.jpg"
import tasha from "./img/tasha.jpg"
import background from "./img/bg.png"
export default class Reviews extends Component {
    constructor(){
        super();
        this.state = {
            review: [`"We're using Toggl to analyze the profitability of the projects we do for our clients, and for tracking our internal ROI. But sometimes we also show the data to our clients - that makes negotiations a lot easier!"`
            ,`"Using Toggl is helping us get a handle on our time allocation for different customers and projects. Before we had no idea of what people were spending their work time on - I had to check in on that all the time. Now I can just focus on the important things, instead of micromanaging."`
            , `"It's always hard to predict how much time a project is going to take. Having stats on how much time different things have taken in the past is great for getting accurate predictions for the future."`
            ],
            img: [tasha, brad, annika]
        }
    }
    wiggleWiggle(){
        //Make the worm wiggle and maybe update user text and image.
    }
  
    render() {
         
        return(
            <ReviewsContainer>
            <ReviewTitle> Sweet Nothings </ReviewTitle>
            <ReviewMini> Some client love. </ReviewMini>
           
        <div>
        <ReviewText>{this.state.review[0]}</ReviewText>
            <ImageWormBody><Worm><Crypto xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></Crypto></Worm>
         <ImageContainer > <img style={{height:'65px',width:'65px',borderRadius:'50%',margin:'auto'}} src={this.state.img[0]}alt="tasha" /></ImageContainer></ImageWormBody>
        </div>
        <ButtonBody>
            <Button onClick={()=>this.wiggleWiggle()}></Button>
            <Button></Button>
            <Button></Button>
        </ButtonBody>
        {/* <div>
        <ReviewText>{this.state.review[1]}</ReviewText>
        <ImageWormBody><Worm ><Crypto xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></Crypto></Worm>
            <ImageContainer> <img style={{height:'65px',width:'65px',borderRadius:'50%',margin:'auto'}} src={this.state.img[1]} alt="brad"/></ImageContainer></ImageWormBody>
        </div>
        <div>
        <ReviewText>{this.state.review[2]}</ReviewText>
        <ImageWormBody><Worm><Crypto xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></Crypto></Worm>
            <ImageContainer>  <img style={{height:'65px',width:'65px',borderRadius:'50%',margin:'auto'}} src={this.state.img[2]} alt="annika" /></ImageContainer></ImageWormBody>
        </div> */}
    
   
         </ReviewsContainer>

        )
    }
}
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const Crypto =styled.svg `
    fill: white;
    stroke: black;
    stroke-dasharray: 800;
    animation: ${dash} 2s ease-in-out infinite;
    height:4.7rem;
    margin-left:auto;
    margin-right:auto;
    width:3.3rem;
  }
  
`
const dash = keyframes `
     
        from {
          stroke-dashoffset: -800;
        }
        
       to {
          stroke-dashoffset: 0;
      }
    `
const ReviewsContainer = styled.div`
    height: 43rem;
    width: 100% -4rem;
    background-color:#FEEEDE;
    background-image: url(${background});
    background-repeat: repeat;
    padding: 3rem 2rem 0 2rem;
    @media(min-width:1240px){
        padding-bottom:15rem;
        padding-top:8.5rem;
        padding-left:280px;
        padding-right:280px
    }
    @media(min-width:768px){
        padding-top:5.5rem;
        padding-left:80px;
        padding-right:80px;
        
    }
    @media(min-width:1024px){
        padding-left:200px;
        padding-right:200px;
        // max-width: 70rem;
    }
`
const ReviewTitle = styled.h1`
    font-size: 1.75rem; 
    line-height: 2rem;
    @media(min-width:1240px){
        font-size:3.4rem;
        line-height:1.03;
        font-weight:900;
        margin-bottom:.5rem;
        margin-top:6rem
    }
`
const ReviewMini = styled.h2`
    font-size: .75rem;
    margin-bottom: 1.5em;
    margin-top:0;
    line-height:1.71;
    letter-spacing:-.02em;
    @media(min-width:768px){
        font-size: .85rem;
    }
    @media(min-width:1240px){
        font-size:1.2rem;
        line-height:2rem;
        margin-bottom:5.5rem;
        font-weight:100;
    }
`
const ReviewText = styled.h3`
    font-size: 1.1rem;
    font-weight:100;
    line-height: 1.7rem;
    margin-bottom: 6rem;
    padding-left:.8rem;
    padding-right:.8rem;
    position:relative;
    display:block;
    @media(min-width:1240px){
        font-size:1.8rem;
        line-height:1.5;
        font-weight:100; 
    }
    @media(min-width:768px){
        line-height:2.3rem;
    }
`
const ImageWormBody = styled.section`
    padding-top:1.5rem;
    position:relative;
`
const Worm = styled.section`
    height:4.7rem;
    margin-left:auto;
    margin-right:auto;
    width:3.3rem;
`
const ImageContainer = styled.section`
    // height:6.4rem;
    margin-top:2rem;
    // position:relative;
`
const ButtonBody = styled.section`
    width:400px;
    height:80px;
    background-color:red;
    margin:auto;
`
const Button = styled.button`
    border-radius:50%;
    height:1px;
    width:1px;
    background-color:white;
    margin-left:2px;
    margin-right:2px
`