import styled, { css, keyframes } from "styled-components"

// const animateVid = keyframes`
//   0%{
//     opacity: 0;
//     transform: "translateX(50%) translateY(-30%) translateZ(0)";
//   }
//   50% {
//     opacity: 1;
//     transform: "translateX(0%) translateY(0%) translateZ(0)";
//   }
//   100%{
//     opacity: 0;
//     transform: "translateX(-50%) translateY(50%) translateZ(0)";
//   }
// `

export const VideoSize0 = styled.video`
  min-width: 17rem;
  max-width: 90%;
  left: 50%;
  margin-left: -45%;
  position: absolute;
  bottom: 11.5rem;
  margin-bottom: -2%;
  transition-delay: 1s;
  transition: opacity 0.5s, transform 1s;
  transform: ${props => props.transform};
  opacity: ${props => props.opac};
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  z-index: 1;
  ${direction => direction === "in" && css``} ${direction =>
    direction === "out" && css``}

  @media (min-width: 651px) {
    max-width: 80%;
    margin-left: -40%;
  }
  @media (min-width: 735px) {
    max-width: 75%;
    margin-left: -38%;
  }
  @media (min-width: 769px) {
    max-width: 55%;
    margin-left: -26%;
  }
  @media (min-width: 917px) {
    max-width: 47%;
    margin-left: -25%;
  }
  @media (min-width: 1230px) {
    max-width: 43%;
    margin-left: -22%;
  }
  @media (min-width: 1300px) {
    max-width: 40%;
    margin-left: -20%;
  }
  @media (min-width: 1485px) {
    max-width: 36%;
    margin-left: -17%;
  }
`
export const VideoSize1 = styled.video`
  min-width: 17rem;
  max-width: 90%;
  left: 50%;
  margin-left: -45%;
  position: absolute;
  bottom: 11.5rem;
  margin-bottom: -2%;
  z-index: 1;
  transition-delay: 1s;
  transition: opacity 0.5s, transform 1s;
  transform: ${props => props.transform};
  opacity: ${props => props.opac};
  transition-timing-function: ease-in-out;
  ${"" /* transition-duration: 1s; */} @media (min-width: 651px) {
    max-width: 80%;
    margin-left: -40%;
  }
  @media (min-width: 735px) {
    max-width: 75%;
    margin-left: -38%;
  }
  @media (min-width: 769px) {
    max-width: 55%;
    margin-left: -26%;
  }
  @media (min-width: 917px) {
    max-width: 50%;
    margin-left: -25%;
  }
  @media (min-width: 1230px) {
    max-width: 43%;
    margin-left: -22%;
  }
  @media (min-width: 1300px) {
    max-width: 40%;
    margin-left: -20%;
  }
  @media (min-width: 1485px) {
    max-width: 36%;
    margin-left: -17%;
  }
`
export const VideoSize2 = styled.video`
  min-width: 17rem;
  max-width: 90%;
  left: 50%;
  margin-left: -45%;
  position: absolute;
  bottom: 11.5rem;
  margin-bottom: -2%;
  transition: opacity 0.5s, transform 1s;
  transition-delay: 1s;
  transform: ${props => props.transform};
  opacity: ${props => props.opac};
  transition-timing-function: ease-in-out;
  z-index: 1;
  @media (min-width: 651px) {
    max-width: 80%;
    margin-left: -40%;
  }
  @media (min-width: 735px) {
    max-width: 75%;
    margin-left: -38%;
  }
  @media (min-width: 769px) {
    max-width: 55%;
    margin-left: -26%;
  }
  @media (min-width: 917px) {
    max-width: 50%;
    margin-left: -25%;
  }
  @media (min-width: 1230px) {
    max-width: 43%;
    margin-left: -22%;
  }
  @media (min-width: 1300px) {
    max-width: 40%;
    margin-left: -20%;
  }
  @media (min-width: 1485px) {
    max-width: 36%;
    margin-left: -17%;
  }
`
