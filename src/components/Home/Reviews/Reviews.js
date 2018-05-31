import React, { Component } from "react"
import styled from "styled-components"
import annika from "./img/annika.jpg"
import brad from "./img/brad.jpg"
import tasha from "./img/tasha.jpg"
import background from "./img/bg.png"
import './Slick.css'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import Slider from 'react-slick'

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
    render() {
        var settings = {
            fade:true,
            dots: true,
            speed: 2000,
            swipe: true,
            slidesToShow:1,
            slidesToScroll: 1,
            arrows:false,
            // dotsClass:'Dot'
          };
        return(
            <ReviewsContainer>
                <ReviewTitle> Sweet Nothings </ReviewTitle>
                <ReviewMini> Some client love. </ReviewMini>
                <Slider {...settings}>
            <div>
            <ReviewText>{this.state.review[0]}</ReviewText>
                <ImageWormBody><Worm><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></svg></Worm>
             <ImageContainer> <img style={{height:'65px',width:'65px',borderRadius:'50%',margin:'auto'}} src={this.state.img[0]}alt="tasha" /></ImageContainer></ImageWormBody>
            </div>
            <div>
            <ReviewText>{this.state.review[1]}</ReviewText>
            <ImageWormBody><Worm><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></svg></Worm>
                <ImageContainer> <img style={{height:'65px',width:'65px',borderRadius:'50%',margin:'auto'}} src={this.state.img[1]} alt="brad" /></ImageContainer></ImageWormBody>
            </div>
            <div>
            <ReviewText>{this.state.review[2]}</ReviewText>
            <ImageWormBody><Worm><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></svg></Worm>
                <ImageContainer>  <img style={{height:'65px',width:'65px',borderRadius:'50%',margin:'auto'}} src={this.state.img[2]} alt="annika" /></ImageContainer></ImageWormBody>
            </div>
           
          </Slider>
                {/* <Dots>
                    <Dot style={{left:'0'}}></Dot>
                    <Dot style={{left:'1.6rem'}}></Dot>
                    <Dot style={{left:'3.2rem'}}></Dot>
                </Dots> */}
       
                {/* <ReviewContent>  */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" style="stroke-dashoffset: 0px;"></path></svg> */}
            </ReviewsContainer>
        )
    }
}
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const ReviewsContainer = styled.div`
    height: 45rem;
    width: 100% -4rem;
    background-color:#FEEEDE;
    background-image: url(${background});
    background-repeat: repeat;
    padding: 3rem 2rem 0 2rem;
`
const ReviewTitle = styled.h1`
    font-size: 1.75rem; 
    line-height: 2rem;
`
const ReviewMini = styled.h2`
    font-size: .75rem;
    margin-bottom: 1.5em;
    margin-top:0;
    line-height:1.71;
    letter-spacing:-.02em;
`
const ReviewText = styled.h3`
    font-size: 1.1rem;
    font-weight:300;
    line-height: 1.5;
    margin-bottom: 0;
    padding-left:.8rem;
    padding-right:.8rem;
    position:relative;
    display:block;
    
`
const ImageWormBody = styled.section`
    padding-top:1.5rem;
    position:relative;
`
const Worm = styled.section`
    height:7.7rem;
    margin-left:auto;
    margin-right:auto;
    width:3.3rem;
`
const ImageContainer = styled.section`
    height:6.4rem;
    margin-top:2rem;
    position:relative;
`
