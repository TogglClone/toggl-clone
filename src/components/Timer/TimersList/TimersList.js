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
                    <NameInput placeholder='Add Description' type="text" value={timerNameEdits[i]} onChange={(e) => handleTimerName(timerNameEdits, e.target.value, i)}/>
                    <EditName onClick={() => updateName(timerNameEdits[i], e.timer_id)}>Edit Name</EditName>
                    <div>
                    <Moment format="hh:mm A">{e.start_time}</Moment> - <Moment format="h:mm A">{e.end_time}</Moment>
                    </div>
                    <div>{e.total_time}</div>
                    <span onClick={() => deleteTimer(e.timer_id)}>Delete</span>                
                </TimerItem>
            )
        })
        return(
            <TimerEntriesList>
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
    box-shadow: inset 0 -1px 0 0 #f3f3f3;
    &:hover {
        background-color: #fafbfc;
    }
`
const NameInput = styled.input`
    border-width: 0;
    background-color: inherit;
    &:focus {
        outline-width: 0;
    }
`
const EditName = styled.span`
    cursor: pointer;
`

function mapStateToProps(state) {
    return{
        timers: state.timers,
        timerNameEdits: state.timerNameEdits
    }
}

export default connect(mapStateToProps, {getTimers, handleTimerName, updateName, deleteTimer})(TimersList)