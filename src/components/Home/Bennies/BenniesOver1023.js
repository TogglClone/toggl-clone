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
`

export const BigColorCont = styled.div`
  box-sizing: border-box;
  background: ${props=> props.color};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: calc(100vw - 9rem);
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
`
export const BigImg = styled.div`
    background-image: url(${props => props.backgroundUrl});
    background-size: contain;
    background-repeat: no-repeat;
    width: auto;       
    height: 200px;
    margin-bottom: 2.5rem;
    margin-top: 20%;
    @media(min-width: 1240px){
        height: 100%;
        width: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        margin: 0;
        z-index: 3;
    }
`
export const BigEyeBall = styled.div`
    @media(min-width: 1240px){
        border-radius: 50%;
        height: 74px;
        width: 68px;
        background: url(${eyeball});
        background-repeat: no-repeat;
        position: absolute;
        top: calc(5%);
        left: calc(29.5%);
        overflow: hidden;
        z-index: -2;
    }
`
export const BigPupilWrap = styled.div`
@media(min-width: 1240px){
    border-radius: 50%;
    height: 74px;
    width: 68px;
    background: url(${eyeball});
    background-repeat: no-repeat;
    position: absolute;
    top: calc(5%);
    left: calc(29.5%);
    overflow: hidden;
    z-index: -1;
}
`
export const BigPupil = styled.div`
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
    padding: 1.8rem 3.5rem 2rem 2.5rem;
    text-align: left;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    margin: ${props=> props.side};
    top: -30px;
    background: transparent;
    width: 25rem;
    @media(min-width: 1240px){
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        position: absolute;
        margin: ${props=> props.sideBig};
        padding: 5rem;
        top: -35px;
    }
`
const moveDown = keyframes`
  0% { top: -400px; opacity: 0; }
  // 25%
  // 50%
  // 75%
  100% { top: -300px; opacity: 1;}
`
export const SvgContainer = styled.div`
    position: absolute;
    opacity: 0;
    ${( {animateCalled} ) => animateCalled && `
    animation: ${moveDown} 200ms forwards;
    `} 
`

const moveUp = keyframes`
0% { top: -75px; opacity: 0; }
// 25%
// 50%
// 75%
100% { top: -175px; opacity: 1;}
`
export const BigContentCont = styled.div`
  position: absolute;
  padding: 9.5rem 7.65rem 9.25rem;
  opacity: 0;
  ${( {animateCalled} ) => animateCalled && `
  animation: ${moveUp} 500ms forwards;
  animation-delay: 200ms;
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