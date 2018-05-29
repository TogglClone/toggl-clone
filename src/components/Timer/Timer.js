import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav/Nav';
import ProjectBar from './ProjectBar/ProjectBar';
import TimersList from './TimersList/TimersList';

class Timer extends Component {
   
   render(){
       return(
           <TimerContainer>
               <Nav />
               Timer
               <br/>
               <Link to={'/'}><button>Home</button></Link>
               <ProjectBar />
               <TimersList />
               
           </TimerContainer>
       )
   }
}

// styles
const TimerContainer = styled.div`
   background-color: #fafbfc;
`

export default Timer;