import styled, {keyframes} from "styled-components"
import eyeball from "./img/eyeball.png"
import pupil from "./img/pupil.png"

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
export const BigIndCont = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display:none;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    display: block;
    width: calc(100vw - 9rem);
    margin: auto;
  }
  @media(min-width: 1546px) {
      max-width: 1422px
  }
`

export const BigColorCont = styled.div`
  box-sizing: border-box;
  background: ${props=> props.color};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 100%;
  height: 22rem;
  border-radius: 3px;
  margin-top: 4.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  @media(min-width: 1240px){
    height: 40rem;
  }
`
export const BigImgCont = styled.div`
    height: 300px;
    width: 100%;
    margin: ${props=> props.side};
    position: relative;
    z-index: 3;
    background: transparent;
`
export const BigImg = styled.div`
    position: absolute;
    background-image: url(${props => props.backgroundUrl});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 225px;       
    height: 200px;
    top: 50px;
    left: 112px;
    z-index: 5;
    @media(min-width: 1240px){
        height: 100%;
        width: 100%;
        margin: 0;
    }
`
export const BigEyeBall = styled.div`
    border-radius: 50%;
    height: 58px;
    width: 42px;
    background: url(${eyeball});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: calc(5%);
    left: calc(21.5%);
    overflow: hidden;
    z-index: -3;
    @media(min-width: 1240px){
        top: calc(5%);
        left: calc(29.5%);
        overflow: hidden;
    }
`
export const BigPupilWrap = styled.div`
    background: transparent;
    border-radius: 50%;
    height: 48px;
    width: 42px;
    position: absolute;
    top: calc(5%);
    left: calc(21.5%);
    overflow: hidden;
    z-index: -1;
    @media(min-width: 1240px){
        border-radius: 50%;
        height: 74px;
        width: 68px;
        position: absolute;
        top: calc(5%);
        left: calc(29.5%);
        overflow: hidden;
        z-index: -1;
    }
`
export const BigPupil = styled.div`
border-radius: 50%;
background-image: url(${pupil});
background-size: contain;
background-repeat: no-repeat;
height: 20px;
width: 18px;
position: absolute;
top: calc(50% - 10px);
left: calc(50% - 15px);
z-index: -1;
    @media(min-width: 1240px){
        border-radius: 50%;
        background-image: url(${pupil});
        background-size: contain;
        height: 30px;
        width: 30px;
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
        transform: translate(${props => props.left}px,${props => props.top}px);
        z-index: -1;
    }
`
export const BigTextCont = styled.div`
    background: white;
    text-align: left;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    // margin: ${props=> props.side};
    left: ${props => props.left};
    right: ${props => props.right};
    top: -30px;
    background: transparent;
    width: 43%;
    @media(min-width: 1240px){
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        position: absolute;
        // margin: ${props=> props.sideBig};
        top: -35px;
        width: 30%;
    }
`
export const AnimationWrapper = styled.div`
    position: relative;
    height: auto;
    width: 100%;
    @media(min-width: 1240px){
        position: relative;
        height: auto;
        width: 100%;
    }
`
const moveDown = keyframes`
  0% { top: -65%; opacity: 0; }
  // 25%
  // 50%
  // 75%
  100% { top: -50%; opacity: 1;}
`
export const SvgContainer = styled.div`
width: 100%;
height: 200%;
position: absolute;
opacity: 0;
bottom: 0;
left: 0;
right: 0;
top: 0;
pointer-events: none;
${( {animateCalled} ) => animateCalled && `
animation: ${moveDown} 200ms forwards;
`}
@media(min-width: 1240px){
    width: 100%;
    height: 200%;
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none;

`

const moveUp = keyframes`
0% { top: 100px; opacity: 0; }
// 25%
// 50%
// 75%
100% { top: 0px; opacity: 1;}
`
export const BigContentCont = styled.div`
  position: relative;
  padding: 2.5rem 3rem;
  opacity: 0;
  ${( {animateCalled} ) => animateCalled && `
  animation: ${moveUp} 500ms forwards;
  animation-delay: 200ms;
  @media(min-width: 1240px){
    padding: 5rem 5rem;
  }
`}
`
export const BigSubtitle = styled.h2`
  font-size: 0.6rem;
  color: ${props => props.fontColor};
  @media (min-width: 1240px) {
    font-size: 0.8rem;
    font-weight: 800;
  }
`
export const BigTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
    @media(min-width: 1240px){
        font-size: 1.5rem;
    }
`
export const BigDesc = styled.h3`  
    font-size: .8rem;
    line-height: 1.4rem;
    margin-bottom: 2.8rem;
    font-weight: normal;
    @media(min-width: 1240px){
        font-size: 1.1rem;
        line-height: 1.8rem;
        margin-bottom: 4rem;
    }
`
export const BigButton = styled.div`
  text-align: center;
  width: 100%;
`