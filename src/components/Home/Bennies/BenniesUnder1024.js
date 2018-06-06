import styled, {keyframes} from "styled-components"

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
export const MiniIndCont = styled.div`
border-top-left-radius: 3px;
border-top-right-radius: 3px;
margin: 0rem 1.5rem 2rem 1.5rem;
@media (min-width: 768px) {
  width: 609px;
  margin: 0rem auto 2rem auto;
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
}
`

export const MiniImgCont = styled.div`
    @media(min-width: 415px){
        width: 100%;
        height: 50vw;
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
    height: 9.4rem;
    width: auto;
    @media(min-width: 415px){
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }
    @media(min-width: 768px){
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }
`
export const MiniTextCont = styled.div`
    background: white;
    padding: 1.8rem 3.5rem 2rem 2.5rem;
    width: 100% -2rem;
    text-align: left;
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