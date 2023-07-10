import React from 'react';
import styled from 'styled-components';


const WholePage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background-color: #aedcae;
    border: 10px solid #85b985;
`

const YourResult = styled.div`
    width: 350px;
    border: 4px solid #85b985;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    height: 200px;
    padding: 20px;
    border-radius: 8px;
    background-color: wheat;
    color: #57af57; 
`;

const Total = styled.div`
    font-size: large;
    font-weight: bold;
    text-align: center;
`

const Text = styled.p`
    font-size: medium;
`;

function NotEnough() {
    function getTotal(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const total = urlParams.get("total")
        console.log(total)
        return total
    }

    return(
        <WholePage>
            <YourResult>
                <Total>Your result is: {getTotal()} points out of 80 possible.</Total>
                <Text>The situation is not critical, but it could be much better.</Text>
                <Text>So you should analyze your mistakes and come back to this test later.</Text>
            </YourResult>

        </WholePage>
    )
};
export default NotEnough; 