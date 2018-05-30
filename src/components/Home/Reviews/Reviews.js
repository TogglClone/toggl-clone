import React, { Component } from "react"
import styled from "styled-components"
import annika from "./img/annika.jpg"
import brad from "./img/brad.jpg"
import tasha from "./img/tasha.jpg"
import background from "./img/bg.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
        return(
            <ReviewsContainer>
                <ReviewTitle> Sweet Nothings </ReviewTitle>
                <ReviewMini> Some client love. </ReviewMini>
                <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                totalSlides={3}
                                className='carousel'
                            >
                                <Slider style={{height:'200px',width:'100%'}}>
                                <Slide  index=''><img  src='https://files.slack.com/files-pri/T039C2PUY-FAY9WP00J/annika_2x-c866df477ed2e77a109a22d64193df69.jpg' alt="Profile Image" /></Slide>
                                <Slide  index=''><img src='https://files.slack.com/files-pri/T039C2PUY-FAXJUB4KA/brad_2x-b55bf1cded49d029b980097e2c438d12.jpg' alt="Profile Image" /></Slide>
                                <Slide  index=''><img src='https://files.slack.com/files-pri/T039C2PUY-FAY6YFNUT/tasha_2x-78c9d2020a6a35b7f39a6e60915f0b26.jpg' alt="Profile Image" /></Slide>
                                </Slider>
                                <ButtonBack >Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
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
`