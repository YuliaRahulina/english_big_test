import React from 'react';
import styled from 'styled-components';

const WholePage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    padding-top: 50px;
    background-color: #aedcae;
    position: relative;
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
    position: absolute; 
    z-index: 3;
`;

const Total = styled.div`
    font-size: large;
    font-weight: bold;
    text-align: center;
`

const Text = styled.p`
    font-size: medium;
`;

const Salute = styled.div`
    position: absolute;
    z-index: 4;
    left: 450px;
    top: 40px;
    img {
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: salute;
        @keyframes salute {
            from {
                width: 5px;
                opacity: 0.2;
            }

            to {
                width: 370px;
                opacity: 1.0;
            }
        }
    }
`;

const SaluteFirst = styled.div`
    position: absolute;
    z-index: 1;
    right: 90px;
    bottom: 80px;
    img {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: saluteFirst;
        @keyframes saluteFirst {
            from {
                width: 5px;
                opacity: 0.2;
            }

            to {
                width: 330px;
                opacity: 1.0;
            }
        }
    }
`;

const SaluteSecond = styled.div`
    position: absolute;
    z-index: 4;
    right: 390px;
    top: 130px;
    img {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: saluteSecond;
        @keyframes saluteSecond {
            from {
                width: 5px;
                opacity: 0.2;
            }

            to {
                width: 390px;
                opacity: 1.0;
            }
        }
    }
`;

const SaluteThird = styled.div`
    position: absolute;
    z-index: 1;
    left: 90px;
    bottom: 40px;
    img {
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: saluteThird;
        @keyframes saluteThird {
            from {
                width: 5px;
                opacity: 0.2;
            }

            to {
                width: 410px;
                opacity: 1.0;
            }
        }
    }
`;

const SaluteFourth = styled.div`
    position: absolute;
    z-index: 4;
    right: 60px;
    top: 30px;
    img {
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: saluteFourth;
        @keyframes saluteFourth {
            from {
                width: 5px;
                opacity: 0.2;
            }

            to {
                width: 370px;
                opacity: 1.0;
            }
        }
    }
`;

function Excellent() {
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
                <Text>Congratulations. This is a great result.</Text>
                <Text>You have a high level of knowledge of basic English grammar.</Text>
                <Text></Text>
            </YourResult>

            <Salute>
                <img src="salute.png" alt="" />
            </Salute>

            <SaluteFirst>
                <img src="salute.png" alt="" />
            </SaluteFirst>

            <SaluteSecond>
                <img src="salute.png" alt="" />
            </SaluteSecond>

            <SaluteThird>
                <img src="salute.png" alt="" />
            </SaluteThird>

            <SaluteFourth>
                <img src="salute.png" alt="" />
            </SaluteFourth>
        </WholePage>
    )
};

export default Excellent; 