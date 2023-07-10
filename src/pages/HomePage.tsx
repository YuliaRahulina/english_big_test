import React from 'react'
import styled from 'styled-components';

import StartPage from '../components/StartPage';


const HomePageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    border: 7px solid #85b985;
    background-color: #aedcae;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

function HomePage() { 

    return (
        <HomePageStyled>

            <StartPage/>

        </HomePageStyled>
    )
}

export default HomePage;
