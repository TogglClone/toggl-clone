import React, {Component} from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class Sweet extends Component {

    render(){
        return(
            <div>
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
            </div>
        )
    }
}
export default Sweet;
