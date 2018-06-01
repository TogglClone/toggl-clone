import React, { Component } from "react"

export default class BottomLoginSvg extends Component {
  render() {
    return (
      <div style={svgSize}>
        <svg>
          <path
            class="sign-up-line sign-up-line--4"
            d="M6,18-2.3-.4"
            transform="translate(4.3 13.4)"
            style={svgSize}
            fill="none"
            stroke-width="4"
          />
          <path
            class="sign-up-line sign-up-line--5"
            d="M22,16.1V-11.4"
            transform="translate(4.3 13.4)"
            style={svgSize}
            fill="none"
            stroke-width="4"
          />
          <path
            class="sign-up-line sign-up-line--6"
            d="M37.9,18,46.2-1.4"
            transform="translate(4.3 13.4)"
            style={svgSize}
            fill="none"
            stroke-width="4"
          />
        </svg>
      </div>
    )
  }
}

// const svgStyle = {
//   strokeDashoffset: "0",
//   strokeMiterlimit: "4",
//   stroke: "black",
//   strokeLinecap: "round"
// }

const svgSize = {
  width: "1rem",
  height: "1rem"
}
