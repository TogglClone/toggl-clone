import React, {Component} from 'react';
import styled from 'styled-components';

import Nav from './Nav/Nav';
import ProjectBar from './ProjectBar/ProjectBar';
import TimersList from './TimersList/TimersList';
import EyeMovement from './EyeMovement';

class Timer extends Component {
    constructor(props) {
        super(props);
    
        this.state = { x: 0, y: 0 };
      }
      _onMouseMove(e) {
          let tempX = e.screenX
          let tempY = e.screenY
        //   if(tempX < 165){
        //       tempX = 165
        //   } else if(tempX > 215){
        //       tempX = 215
        //   }
        //   if(tempY < 734){
        //       tempY = 734
        //   } else if (tempY > 838){
        //       tempY = 838
        //   }
        this.setState({ x: tempX, y: tempY });
      }
   
   render(){
       const { x, y } = this.state;
       return(
           <TimerContainer onMouseMove={this._onMouseMove.bind(this)}>
               <Nav />
               <TimerBody>
                    <ProjectBar />
                    <TimersList />
               </TimerBody>    
           </TimerContainer>
       )
   }
}
//top bottom 720-770
//left right 165-215
// styles
const PupilWrap = styled.div`
    border-radius: 50%;
    width: 80px;
    height: 94px;
    overflow: hidden;
    position: relative;
    z-index: 2;
    border: 2px solid black;
    top: 50%;
    left: 50%;
    background: ${props => props.background ? 'palevioletred' : 'white'};
    `
const Pupil = styled.div`
    border-radius: 50%;
    background-color: red;
    height: 30px;
    width: 30px;
    position: absolute;
    z-index: 2;
    top: ${props => props.top};
    left: ${props => props.left};
`
const BigContainer = styled.div`
    position: relative;
    background-color: linen;
    height: 600px;
    &:hover ${Pupil} {
        background-color: blue;
    }
`
// "transform: matrix3d(0.906308, 0, 0.422619, 0, 0, 1, 0, 0, -0.458812, 0, 0.983924, 0, -38, 0, -16.0595, 1);"
const TimerContainer = styled.div`
   background-color: #fafbfc;
   display: grid;
   grid-template-columns: 52px 1fr;
   grid-template-rows: 100vh;
   @media(min-width: 1024px){
       grid-template-columns: 180px 1fr;
   &:hover ${TimerBody}{

   }
`
const TimerBody = styled.section`
   overflow: auto;
   ::-webkit-scrollbar-thumb {
        background-color: #e20604e6;
    }
    ::-webkit-scrollbar {
        background-color: #E1E1E1;
        width: 2px;
    }
`

export default Timer;