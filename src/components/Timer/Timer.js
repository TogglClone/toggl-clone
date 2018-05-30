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
`
const TimerBody = styled.section`

`

export default Timer;