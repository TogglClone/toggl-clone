import styled, { css } from "styled-components"

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


  @media (max-width: 850px) {
    position: none;
    min-width: 16rem;
    margin-left: -45%;
    transform: none;
  }
  @media (min-width: 551px) {
    bottom: 8.5rem;
    min-width: 17rem;
    max-width: 30rem;
    margin-left: calc(40% - (40% * 2));
  }
  @media (min-width: 660px) {
    bottom: 8.5rem;
    min-width: 17rem;
    max-width: 30rem;
    margin-left: calc(45% - (40% * 2));
  }
  @media (min-width: 813px) {
    margin-left: calc(50% - (40% * 2));
  }
  @media (min-width: 940px) {
    margin-left: calc(55% - (40% * 2));
  }
  @media (min-width: 1024px) {
    margin-left: calc(55% - (40% * 2));
    max-width: 36rem;
  }
  @media (min-width: 1240px) {
    margin-left: calc(58% - (40% * 2));
    max-width: 32rem;
  }
  @media (min-width: 1341px) {
    margin-left: calc(62% - (40% * 2));
    max-width: 32rem;
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
  transition-delay: 1s;
  transition: opacity 0.5s, transform 1s;
  transform: ${props => props.transform};
  opacity: ${props => props.opac};
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  z-index: 1;
  ${direction => direction === "in" && css``} ${direction =>
    direction === "out" && css``}


  @media (max-width: 850px) {
    position: none;
    min-width: 16rem;
    margin-left: -45%;
    transform: none;
  }
  @media (min-width: 551px) {
    bottom: 8.5rem;
    min-width: 17rem;
    max-width: 30rem;
    margin-left: calc(40% - (40% * 2));
  }
  @media (min-width: 660px) {
    bottom: 8.5rem;
    min-width: 17rem;
    max-width: 30rem;
    margin-left: calc(45% - (40% * 2));
  }
  @media (min-width: 813px) {
    margin-left: calc(50% - (40% * 2));
  }
  @media (min-width: 940px) {
    margin-left: calc(55% - (40% * 2));
  }
  @media (min-width: 1024px) {
    margin-left: calc(55% - (40% * 2));
    max-width: 36rem;
  }
  @media (min-width: 1240px) {
    margin-left: calc(58% - (40% * 2));
    max-width: 32rem;
  }
  @media (min-width: 1341px) {
    margin-left: calc(62% - (40% * 2));
    max-width: 32rem;
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
  transition-delay: 1s;
  transition: opacity 0.5s, transform 1s;
  transform: ${props => props.transform};
  opacity: ${props => props.opac};
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  z-index: 1;
  ${direction => direction === "in" && css``} ${direction =>
    direction === "out" && css``}


  @media (max-width: 850px) {
    position: none;
    min-width: 16rem;
    margin-left: -45%;
    transform: none;
  }
  @media (min-width: 551px) {
    bottom: 8.5rem;
    min-width: 17rem;
    max-width: 30rem;
    margin-left: calc(40% - (40% * 2));
  }
  @media (min-width: 660px) {
    bottom: 8.5rem;
    min-width: 17rem;
    max-width: 30rem;
    margin-left: calc(45% - (40% * 2));
  }
  @media (min-width: 813px) {
    margin-left: calc(50% - (40% * 2));
  }
  @media (min-width: 940px) {
    margin-left: calc(55% - (40% * 2));
  }
  @media (min-width: 1024px) {
    margin-left: calc(55% - (40% * 2));
    max-width: 36rem;
  }
  @media (min-width: 1240px) {
    margin-left: calc(58% - (40% * 2));
    max-width: 32rem;
  }
  @media (min-width: 1341px) {
    margin-left: calc(62% - (40% * 2));
    max-width: 32rem;
  }
`
