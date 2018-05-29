import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTimers, handleTimerName, updateName, deleteTimer} from '../../../ducks/reducer';

class TimersList extends Component{
    componentDidMount(){
        this.props.getTimers()
    }
    render(){
        const {timers, timerNameEdits, handleTimerName, updateName, deleteTimer} = this.props
        let timersList = timers.map( (e, i) => {
            return(
                <div key={i}>
                    <input type="text" value={timerNameEdits[i]} onChange={(e) => handleTimerName(timerNameEdits, e.target.value, i)}/>
                    <button onClick={() => updateName(timerNameEdits[i], e.timer_id)}>Edit Name</button>
                    <button onClick={() => deleteTimer(e.timer_id)}>Delete</button>
                    {/* <span>{e.start_time}  </span>
                    <span>{e.end_time}</span> */}
                
                </div>
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
        timers: state.timers,
        timerNameEdits: state.timerNameEdits
    }
}

export default connect(mapStateToProps, {getTimers, handleTimerName, updateName, deleteTimer})(TimersList)