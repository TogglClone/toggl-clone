import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProjectBar from './ProjectBar/ProjectBar';

class Timer extends Component {
    
    render(){
        return(
            <div className="Timer">
                Timer
                <br/>
                <Link to={'/'}><button>Home</button></Link>
                <ProjectBar />
            </div>
        )
    }
}

export default Timer;