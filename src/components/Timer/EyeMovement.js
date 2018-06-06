import React, {Component} from 'react';
import styled from 'styled-components';
import pipe from './pipe.png';

export default class EyeMovement extends Component{
    constructor(){
        super()

        this.state = { x: 0, y: 0 };

    }
    _onMouseMove(e) {
        let tempY = e.screenY
        let tempX = e.screenX
        tempY -= 223 // gives range from 0 to 600
        tempX -= (1717-180) // gives range from 0 to innerwidth including the side width on the timer bar
        
        tempY = (tempY / 300 * 47) -47
        tempX = (tempX / (e.view.innerWidth/2) * 40) - 40
      // top 223 bottom 822 left 1717 right 3136

      //max up 47 max down 47 max left 40 max right 40
      this.setState({ x: tempX, y: tempY });
    }
    _onMouseLeave(){
        this.setState({
            x: 0,
            y: 0
        })
    }

    render(){
        const { x, y } = this.state;
        return(
            <BigContainer onMouseMove={this._onMouseMove.bind(this)} onMouseOut={this._onMouseLeave.bind(this)}>
            {x}, {y}
                <PupilWrap>
                        <Pupil top={y} left={x}></Pupil>       

                </PupilWrap>
           </BigContainer>
        )
    }
}

const PupilWrap = styled.div`
    border-radius: 50%;
    width: 60px;
    height: 70px;
    overflow: hidden;
    position: relative;
    border: 1px black dashed;
    top: calc(50% - 47px);
    left: calc(50% - 30px);
    `
const Pupil = styled.div`
    border-radius: 50%;
    background-color: red;
    height: 30px;
    width: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform: translate(${props => props.left}px,${props => props.top}px)
`
const BigContainer = styled.div`
    position: relative;
    background-image: url(${pipe});
    background-position-x: 60%;
    background-position-y: 87%;
    background-repeat: no-repeat;
    background-size: 309px 312px;
    height: 600px;

`