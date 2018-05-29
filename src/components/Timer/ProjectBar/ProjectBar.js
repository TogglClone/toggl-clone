import React, {Component} from 'react';
// import Moment from 'react-moment';

export default class ProjectBar extends Component{
    constructor(){
        super() 

        this.state = {
            seconds: '00',
            minutes: '00',
            hours: 0,
            timerMode: true,
            timerFn: null,
            startDate: null,
            endDate: null
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
            let startDate = new Date()
            this.setState({
                startDate
            })
            var x = setInterval(() => {                
                let now = new Date().getTime();
                
                let difference = Math.round(now - startDate.getTime())/1000;
                handleTimeDifference(difference)
            }, 1000);
            this.setState({
                timerFn: x
            })
        } else {
            clearInterval(this.state.timerFn)
            let endDate = new Date()
            
            //push the start date and enddate to server think about adding the difference as one of the table columns
            
            this.setState({
                seconds: '00',
                minutes: '00',
                hours: '0',
                endDate
            })
        }
        this.setState({
            timerMode: !this.state.timerMode
        })
    }
    render(){
        console.log(this.state.startDate, this.state.endDate)
        let {seconds, minutes, hours} = this.state
        return(
            <div>
                
                {hours}:{minutes}:{seconds}
                <button onClick={() => this.toggleTimer()}>Start</button>
            </div>
        )
    }
}