import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import pipe from './pipe.png';

export default class EyeMovement extends Component{
    constructor(){
        super()

        this.state = { x: 15, y: 0, mouseActive: false, pupilAnimate: null, intervalFn: null };

    }
    _onMouseMove(e) {
        clearTimeout(this.state.intervalFn)
        let tempY = e.screenY
        let tempX = e.screenX
        tempY -= 223 // gives range from 0 to 600
        tempX -= (1717-180) // gives range from 0 to innerwidth including the side width on the timer bar
        
        tempY = (tempY / 300 * 47) -47
        tempX = (tempX / (e.view.innerWidth/2) * 40) - 40
      // top 223 bottom 822 left 1717 right 3136

      //max up 47 max down 47 max left 40 max right 40
      this.setState({ x: tempX, y: tempY, mouseActive: true });
    }
    _onMouseLeave(){
        this.setState({
            x: -15,
            y: 0,
            mouseActive: false
        })
        setTimeout(() => {
            var x =setInterval(() => {
                if(this.state.x >=40){

                } else (
                    this.setState({
                        x
                    })
                )
                    
            }, 10)
            this.setState({
                intervalFn: x
            })
        }, 8000)
    }

    render(){
        const { x, y, mouseActive} = this.state;
        console.log(mouseActive);
        
        return(
            <BigContainer onMouseMove={this._onMouseMove.bind(this)} onMouseLeave={this._onMouseLeave.bind(this)}>
            {x}, {y}
                <PupilWrap>
                        <Pupil top={y} left={x}></Pupil>       

                </PupilWrap>
           </BigContainer>
        )
    }
}

const PupilWrap = styled.div`
    border-radius: 50%;
    width: 60px;
    height: 70px;
    overflow: hidden;
    position: relative;
    border: 1px black dashed;
    top: calc(50% - 47px);
    left: calc(50% - 30px);
    `

const pupilAnimate = keyframes`
    12.5% {
      transform: translateY(0);
      transform: translateX(0)
    }
    25% {
      transform: translate(-120px, 80px);
    }
    
    37.5%{
      transform: translate (60px, -40px);
    }
    50% {
      transform: translate (120px, -80px);
    }
    ${"" /* 62.5% {
      opacity: 0;
    } */}
    65% {
      transform: translate(90px, -60px);
    }
    87.5%{
      transform: translate (-60px, 40px);
    }
    100% {
      transform: translate (-120px, 80px);
    }
    `
const normalPupil = keyframes`
    0% {}
`
const Pupil = styled.div`
    border-radius: 50%;
    background-color: red;
    height: 30px;
    width: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform: translate(${props => props.left}px,${props => props.top}px);
    animation: ${props => props.animation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`
const BigContainer = styled.div`
    position: relative;
    background-image: url(${pipe});
    background-position-x: 60%;
    background-position-y: 87%;
    background-repeat: no-repeat;
    background-size: 309px 312px;
    height: 600px;
    z-index: 3;
`