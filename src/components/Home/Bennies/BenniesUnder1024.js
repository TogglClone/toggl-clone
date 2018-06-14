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
    position: relative;
    padding-top: 2rem;
    @media(min-width: 480px){
        padding-top: 3rem;
    }
}
`

export const MiniImgCont = styled.div`
    height: 36vw;
    position: relative;
    margin-bottom: 3rem;
    @media(min-width: 415px){
        width: 100%;
        position: relative;
        margin-bottom: 2rem;
    }
    @media(min-width: 480px){
        height: 190px;
        margin-bottom: 0.5rem;
    }
}`
export const MiniPeriscope = styled.div`
    position: absolute;
    width: 250px;
    height: 9.2rem;
    left: calc(50% - 125px);
`

export const MiniImg = styled.div`
    background-image: url(${props => props.backgroundUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    height: 9.2rem;
    width: auto;
    // margin-bottom: 2rem;
    z-index: 3;
    position: relative;
    @media(min-width: 415px){
        // margin-top: 7%;
        // margin-bottom: 1.2rem;
    }
    @media(min-width: 480px){
        // margin-top: 2rem;
        // margin-bottom: 3.5rem;
    }
    @media(min-width: 768px){
        // margin-top: 2rem;
        // margin-bottom: 3rem;
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
    top: 4%;
    left: 31%;
    @media(min-width: 768px){
        top: 5%;
        left: 31%;
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
    top: 4%;
    left: 31%;
    @media(min-width: 768px){
        top: 5%;
        left: 31%;
    }
`
const AlternatePupil = keyframes`
    0%{ transform: translate(0px, 0);}
    10%{ transform: translate(17px, 0);}
    20%{ transform: translate(0px, 0);}
    100%{ transform: translate(0px, 0);}
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
    top: calc(30%);
    left: calc(5%);
    animation: ${AlternatePupil} ease-in-out 6s 2s infinite forwards;

`
export const MiniTextCont = styled.div`
    // position: block;
    background: white;
    padding: 1.8rem 3.5rem 2rem 2.5rem;
    width: 100% -2rem;
    text-align: left;
    box-sizing: border-box;
    top: 0px;
    left: 0px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
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
    width: 100%;
    margin-bottom: .4rem;
`