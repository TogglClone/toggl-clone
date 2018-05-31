import React, { Component } from "react"

export default class RightArrow extends Component {
  render() {
    return (
      <svg style={rightArrow} viewBox="0 0 13 18">
        <path
          d="M1.6 17.8l11-8a1 1 0 0 0 .2-1.4l-.2-.2-11-8A1 1 0 0 0 0 1v16a1 1 0 0 0 1 1z"
          // fill="#fff"
        />
      </svg>
    )
  }
}

let rightArrow = {
  width: ".9rem",
  height: ".5rem",
  marginLeft: ".3rem"
}
