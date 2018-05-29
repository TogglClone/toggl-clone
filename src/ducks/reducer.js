import axios from 'axios';

const initialState = {
    timers: []
}

const GET_TIMERS = 'GET_TIMERS';
const ADD_TIMER = 'ADD_TIMER'

export function getTimers(){
    let timers = axios.get('/api/timers').then( res => {
        return res.data
    })
    return {
        type: GET_TIMERS,
        payload: timers
    }
}
export function addTimer(start_time, end_time, total_time, timer_name){
    let timers = axios.post('/api/timer' , {start_time, end_time, total_time, timer_name})
    .then( res => {
        return res.data
    })
    return {
        type: ADD_TIMER,
        payload: timers
    }
}

export default function reducer( state = initialState, action){
    switch (action.type) {
        case GET_TIMERS + '_FULFILLED':     
            return Object.assign({}, state, {timers: action.payload})
        case ADD_TIMER + '_FULFILLED':     
            return Object.assign({}, state, {timers: action.payload})
        default:
            return state;
    }
}