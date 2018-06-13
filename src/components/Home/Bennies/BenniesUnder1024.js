import styled, {keyframes} from "styled-components"
import eyeball from "./img/eyeball.png"
import pupil from "./img/pupil.png"

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
export const MiniIndCont = styled.div`
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin: 0rem 1.5rem 2rem 1.5rem;
    @media (min-width: 768px) {
    width: 609px;
    margin: 0rem auto 5rem auto;
    }
    @media(min-width: 1024px){
        display: none;
    }
`

export const MiniColorCont = styled.div`
    background: ${props=> props.color};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    padding-top: 1rem;
    position: relative;
}
`

export const MiniImgCont = styled.div`
    @media(min-width: 415px){
        width: 100%;
        height: 45vw;
    }
    @media(min-width: 480px){
        height: 100%;
    }
}`


export const MiniImg = styled.div`
    background-image: url(${props => props.backgroundUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    height: 9.2rem;
    width: auto;
    margin-top: 1.2rem;
    margin-bottom: 2rem;
    z-index: 3;
    position: relative;
    @media(min-width: 415px){
        margin-top: 7%;
        margin-bottom: 1.2rem;
    }
    @media(min-width: 480px){
        margin-top: 2rem;
        margin-bottom: 3.5rem;;
    }
    @media(min-width: 768px){
        margin-top: 2rem;
        margin-bottom: 3rem;
    }
`
export const MiniEyeBall = styled.div`
    border-radius: 50%;
    background: url(${eyeball});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    height: 38px;
    width: 37px;
    top: 10%;
    left: 43%;
    @media(min-width: 768px){
        top: 10%;
        left: 42%;
    }
`
export const MiniPupilWrap = styled.div`
    background: transparent;
    border-radius: 50%;
    position: absolute;
    overflow: hidden;
    z-index: 2;
    height: 38px;
    width: 37px;
    top: 10%;
    left: 43%;
    @media(min-width: 768px){
        top: 10%;
        left: 42%;
    }
`
export const MiniPupil = styled.div`
    background-image: url(${pupil});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 3;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    position: absolute;
    top: calc(36%);
    left: calc(6%);
    transform: translate(${props => props.left}px);
    transform-duration:  2s;

`
export const MiniTextCont = styled.div`
    position: relative;
    background: white;
    padding: 1.8rem 3.5rem 2rem 2.5rem;
    width: 100% -2rem;
    text-align: left;
    box-sizing: border-box;
    top: 0px;
    left: 0px;
`
const moveUp = keyframes`
    0% { top: 70px; opacity: 0; }
    100% { top: 0px; opacity: 1;}
`
export const MiniContentCont = styled.div`
    position: relative;
    box-sizing: border-box;
    background: transparent;
    width: 100%;
    text-align: left;
    opacity: 0;
    @media(min-width: 375px){
        ${( {animateCalled} ) => animateCalled && `
            animation: ${moveUp} 500ms forwards;
            animation-delay: 200ms;
            animation-timing-function: ease-in-out;
        `}
    }
`
export const MiniSubtitle = styled.h2`
    font-size: 0.6rem;
    color: ${props => props.fontColor};
`
export const MiniTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
`
export const MiniDesc = styled.h3`  
    font-size: .8rem;
    line-height: 1.4rem;
    margin-bottom: 2.8rem;
    font-weight: normal;
`
export const MiniButton = styled.div`
    text-align: center;
    widrth: 100%;
`