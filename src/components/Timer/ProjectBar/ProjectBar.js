import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { addTimer } from "../../../ducks/reducer"
import fns from "./../../../utils/functions"

import start_icon from "./img/start_icon.svg"
import stop_icon from "./img/stop_icon.svg"
import folder_icon from "./img/folder_icon.svg"
import tag_icon from "./img/tag_icon.svg"
import billable_icon from "./img/billable_icon.svg"
import timer_mode_icon from "./img/timer_mode_icon.svg"
import manual_mode_icon from "./img/manual_mode_icon.svg"

class ProjectBar extends Component {
  constructor() {
    super()

    this.state = {
      seconds: "00",
      minutes: "00",
      hours: 0,
      timer_name: "",
      timerMode: true,
      timerFn: null,
      start_time: null
    }
    this.toggleTimer = this.toggleTimer.bind(this)
  }
  toggleTimer() {
    //helper function for setInterval fn below arrow function so that it is implicitly bound and setState can be used inside the function
    if (this.state.timerMode) {
      let start_time = new Date()
      this.setState({
        start_time
      })
      var x = setInterval(() => {
        let now = new Date().getTime()

        let difference = Math.round(now - start_time.getTime()) / 1000
        let newSt = fns.handleTimeDifference(difference)
        this.setState({
          seconds: newSt.seconds,
          minutes: newSt.minutes,
          hours: newSt.hours
        })
      }, 1000)
      this.setState({
        timerFn: x
      })
    } else {
      clearInterval(this.state.timerFn)
      const { hours, minutes, seconds, start_time, timer_name } = this.state
      let end_time = new Date()
      let total_time = `${hours}:${minutes}:${seconds}`
      //push the start date and end_time to server think about adding the difference as one of the table columns
      this.props.addTimer(start_time, end_time, total_time, timer_name)
      this.setState({
        seconds: "00",
        minutes: "00",
        hours: "0",
        timer_name: ""
      })
    }
    this.setState({
      timerMode: !this.state.timerMode
    })
  }
  render() {
    let { seconds, minutes, hours, timer_name, timerMode } = this.state
    return (
      <MainBar>
        <NameInput
          type="text"
          value={timer_name}
          placeholder="What are you working on?"
          onChange={e => this.setState({ timer_name: e.target.value })}
          className="ProjectTest"
        />
        <TimerContainer>
          <FolderIcon />
          <TagIcon />
          <BillableIcon />
          <TimeDisplay>
            {hours}:{minutes}:{seconds}
          </TimeDisplay>
          {/* Start/Stop button section */}
          {timerMode ? (
            <StartButton
              onClick={() => this.toggleTimer()}
              className="startTest"
            />
          ) : (
            <StopButton
              onClick={() => this.toggleTimer()}
              className="stopTest"
            />
          )}
          <ModeOptionsContainer>
            <TimerModeIcon />
            <ManualModeIcon />
          </ModeOptionsContainer>
        </TimerContainer>
      </MainBar>
    )
  }
}

const MainBar = styled.section`
  height: 120px;
  width: 100%;
  display: grid;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    height: 66px;
  }
`

const NameInput = styled.input`
  border-width: 0;
  margin-left: 20px;
  font-size: 16px;
  &:focus {
    outline-width: 0;
  }
  @media (mix-width: 768px) {
    margin: auto;
  }
`

const TimerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`
const TimeDisplay = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7b7b7b;
`
const StartButton = styled.div`
  width: 42px;
  height: 42px;
  padding: 2px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: url(${start_icon}) no-repeat 50%;
  cursor: pointer;
  user-select: none;
`
const StopButton = styled.div`
  width: 42px;
  height: 42px;
  padding: 2px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: url(${stop_icon}) no-repeat 50%;
  cursor: pointer;
  user-select: none;
`
const FolderIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${folder_icon});
  cursor: pointer;
`
const TagIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${tag_icon});
  cursor: pointer;
`
const BillableIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${billable_icon});
  cursor: pointer;
`
const ModeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 66px;
  padding-left: 14px;
  padding-right: 2px;
`
const TimerModeIcon = styled.span`
  width: 28px;
  height: 28px;
  margin-top: 4px;
  background: url(${timer_mode_icon}) no-repeat 50%;
  cursor: pointer;
`
const ManualModeIcon = styled.span`
  width: 28px;
  height: 28px;
  margin-top: 4px;
  background: url(${manual_mode_icon}) no-repeat 50%;
  cursor: pointer;
`
export default connect(
  null,
  { addTimer }
)(ProjectBar)
