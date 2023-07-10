import styled from 'styled-components';
import React from 'react';

const StyledTimer = styled.div`
    height: 50px;
    width: 270px;
    border: 3px solid #85b985; 
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: wheat;
    color: #85b985;
    font-size: 17px;
    font-weight: bold;
    padding: 10px;
    position: fixed;
    left: 25px;
    top: 25px;
    cursor: pointer;
`;

function Timer(props){
    const [ seconds, setSeconds ] = React.useState(4800);
    const [ timerActive, setTimerActive ] = React.useState(false);
  
    React.useEffect(() => {
      if (timerActive) {
        // setTimeout(setSeconds, 0, seconds - 1);
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setTimerActive(false);
      }
    }, [ seconds, timerActive ]);

    React.useEffect(()=>{
        console.log('seconds', seconds);
        
        if (seconds === 0){
            props.enoughAction()
        }
    }, [seconds])

    React.useEffect(()=>{
        runTimer()
    }, [])

    function convertToSeconds(value){
        const minutes = String(value / 60)
        const isDot = minutes.includes('.')
        if (isDot) {
            const donIndex = minutes.indexOf('.')
            const roundValue = minutes.slice(0, donIndex)
            const seconds = value - Number(roundValue)*60
            const res = `${roundValue}:${seconds}`
            return res
        } else {
            return minutes
        }
    };

    function runTimer() {
        setTimerActive(!timerActive)
    }

    return(
        <StyledTimer onClick={runTimer}>
           You still have {convertToSeconds(seconds)} minutes
        </StyledTimer>
    )
}

export default Timer;