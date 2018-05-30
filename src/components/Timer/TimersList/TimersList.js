import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Moment from 'react-moment';

import {getTimers, handleTimerName, updateName, deleteTimer} from '../../../ducks/reducer';

class TimersList extends Component{
    componentDidMount(){
        this.props.getTimers()
    }
    render(){
        const {timers, timerNameEdits, handleTimerName, updateName, deleteTimer} = this.props
        console.log(timers)
        let timersList = timers.map( (e, i) => {
            return(
                <TimerItem key={i}>
                    <NameInput type="text" value={timerNameEdits[i]} onChange={(e) => handleTimerName(timerNameEdits, e.target.value, i)}/>
                    <button onClick={() => updateName(timerNameEdits[i], e.timer_id)}>Edit Name</button>
                    <div>

                    <Moment format="hh:mm a">{e.start_time}</Moment> - <Moment format="hh:mm a">{e.end_time}</Moment>
                    </div>
                    <button onClick={() => deleteTimer(e.timer_id)}>Delete</button>
                    {/* <span>{e.start_time}  </span>
                    <span>{e.end_time}</span> */}
                
                </TimerItem>
            )
        })
        return(
            <TimerEntriesList>
                (Add a total time log at the top?)
                {timersList}

            </TimerEntriesList>
        )
    }
}
const TimerEntriesList = styled.div`
    background: #fff;
    margin-bottom: 30px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
`

const TimerItem = styled.div`
    padding-left: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
const NameInput = styled.input`
    border-width: 0;
    &:focus {
        outline-width: 0;
    }
`

function mapStateToProps(state) {
    return{
        timers: state.timers,
        timerNameEdits: state.timerNameEdits
    }
}

export default connect(mapStateToProps, {getTimers, handleTimerName, updateName, deleteTimer})(TimersList)