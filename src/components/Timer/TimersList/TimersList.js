import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTimers} from '../../../ducks/reducer';

class TimersList extends Component{
    constructor(){
        super()

        this.state = {
            timers: []
        }
    }
    componentDidMount(){
        this.props.getTimers()
    }
    render(){
        let timersList = this.props.timers.map( e => {
            return(
                <div key={e.timer_id}>{e.start_time} {e.end_time} {e.timer_name}</div>
            )
        })
        return(
            <div>
                {timersList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        timers: state.timers
    }
}

export default connect(mapStateToProps, {getTimers})(TimersList)