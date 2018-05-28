import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Timer extends Component {
    
    render(){
        return(
            <div className="Timer">
                Timer
                <br/>
                <Link to={'/'}><button>Home</button></Link>
            </div>
        )
    }
}

export default Timer;