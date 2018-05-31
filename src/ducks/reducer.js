import axios from 'axios';

const initialState = {
    timers: [],
    timerNameEdits: []
}

const TIMERS = 'TIMERS';
const TIMER_NAME_EDITS = 'TIMER_NAME_EDITS'

export function getTimers(){
    let timersObj = axios.get('/api/timers').then( res => {
        var timerNames = res.data.map( timer => {
            return timer.timer_name
        })
        let returnObj = {
            timerNames: timerNames,
            timers: res.data
        }
        return returnObj
    })
    return {
        type: TIMERS,
        payload: timersObj
    }
}
export function addTimer(start_time, end_time, total_time, timer_name){
    let timersObj = axios.post('/api/timer' , {start_time, end_time, total_time, timer_name}).then( res => {
        var timerNames = res.data.map( timer => {
            return timer.timer_name
        })
        let returnObj = {
            timerNames: timerNames,
            timers: res.data
        }
        return returnObj
    })
    return {
        type: TIMERS,
        payload: timersObj
    }
}
export function handleTimerName(timerNameEdits, value, index){
    let temp = timerNameEdits.slice()
    temp[index] = value

    return {
        type: TIMER_NAME_EDITS,
        payload: temp
    }
}
export function updateName(timer_name, timer_id){
    let timersObj = axios.put('/api/timer-name', {timer_name, timer_id}).then( res => {
        var timerNames = res.data.map( timer => {
            return timer.timer_name
        })
        let returnObj = {
            timerNames: timerNames,
            timers: res.data
        }
        return returnObj
    })
    return {
        type: TIMERS,
        payload: timersObj
    }
}
export function deleteTimer(timer_id){
    let timersObj = axios.delete(`/api/timer?timer_id=${timer_id}`).then( res => {
        var timerNames = res.data.map( timer => {
            return timer.timer_name
        })
        let returnObj = {
            timerNames: timerNames,
            timers: res.data
        }
        return returnObj
    })
    return {
        type: TIMERS,
        payload: timersObj
    }
}

export default function reducer( state = initialState, action){
    switch (action.type) {
        case TIMERS + '_FULFILLED':    
            return Object.assign({}, state, {timers: action.payload.timers, timerNameEdits:action.payload.timerNames})
        case TIMER_NAME_EDITS:
            return Object.assign({}, state, {timerNameEdits: action.payload})
        default:
            return state;
    }
}