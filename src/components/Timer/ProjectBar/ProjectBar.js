import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTimer} from '../../../ducks/reducer';

class ProjectBar extends Component{
    constructor(){
        super() 

        this.state = {
            seconds: '00',
            minutes: '00',
            hours: 0,
            timer_name: '',
            timerMode: true,
            timerFn: null,
            start_time: null,
        }
        this.toggleTimer = this.toggleTimer.bind( this )
    }
    toggleTimer(){  
        //helper function for setInterval fn below arrow function so that it is implicitly bound and setState can be used inside the function
        let handleTimeDifference = (difference) => {
            let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
            let minutes = Math.floor((difference % (60 * 60)) / (60))
            let seconds = Math.floor(difference % 60)
            
            if(seconds < 10){
                seconds = '0' + seconds
            }
            if(minutes < 10){
                minutes = '0' + minutes
            }
            this.setState({
                seconds: seconds,
                minutes: minutes,
                hours: hours
            })
        }
        if(this.state.timerMode){
            let start_time = new Date()
            this.setState({
                start_time
            })
            var x = setInterval(() => {                
                let now = new Date().getTime();
                
                let difference = Math.round(now - start_time.getTime())/1000;
                handleTimeDifference(difference)
            }, 1000);
            this.setState({
                timerFn: x
            })
        } else {
            clearInterval(this.state.timerFn)
            const {hours, minutes, seconds, start_time, timer_name} = this.state
            let end_time = new Date()
            let total_time = `${hours}:${minutes}:${seconds}`
            //push the start date and end_time to server think about adding the difference as one of the table columns
            this.props.addTimer(start_time, end_time, total_time, timer_name)
            this.setState({
                seconds: '00',
                minutes: '00',
                hours: '0',
                timer_name: ''
            })
        }
        this.setState({
            timerMode: !this.state.timerMode
        })
    }
    render(){
        console.log(this.state.timer_name)
        let {seconds, minutes, hours} = this.state
        return(
            <div>
                <input type="text" placeholder='What are you working on?' onChange={(e) => this.setState({timer_name: e.target.value})}/>
                {hours}:{minutes}:{seconds}
                <button onClick={() => this.toggleTimer()}>Start</button>
            </div>
        )
    }
}

export default connect(null, {addTimer})(ProjectBar)