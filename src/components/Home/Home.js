import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {

    render(){
        return(
            <div className="Home">
                Home Page
                <br/>
                <Link to={'/timer'}><button>Timer</button></Link>
            </div>
        )
    }
}

export default Home;