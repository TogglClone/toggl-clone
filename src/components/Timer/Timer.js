import React, {Component} from 'react';
import styled from 'styled-components';

import Nav from './Nav/Nav';
import ProjectBar from './ProjectBar/ProjectBar';
import TimersList from './TimersList/TimersList';

class Timer extends Component {
   
   render(){
       return(
           <TimerContainer>
               <Nav />
               <TimerBody>
                    <ProjectBar />
                    <TimersList />
               </TimerBody>               
           </TimerContainer>
       )
   }
}

// styles
const TimerContainer = styled.div`
   background-color: #fafbfc;
   display: grid;
   grid-template-columns: 52px 1fr;
   grid-template-rows: 100vh;
   @media(min-width: 1024px){
       grid-template-columns: 180px 1fr;
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