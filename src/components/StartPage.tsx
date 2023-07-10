import styled from 'styled-components';

const WholeStartPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    color: #85b985;
    gap: 20px;
`;

const Button = styled.button`
    background-color: #85b985;
    height: 40px;
    width: 165px;
    color: wheat;
    font-size: 17px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        width: 170px;
    }
    border: 3px solid #eedcb9;
`
const GreetingText = styled.div`
    width: 465px;
    border: 4px solid #85b985;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    height: 320px;
    padding: 20px;
    border-radius: 8px;
    background-color: wheat;
    color: #57af57;
`
const PartGreetingText = styled.p`
    font-size: large;
`
const MainPartGreetingText = styled.p`
    font-size: x-large;
    text-align: center;
    font-weight: bold;
`

function StartPage() {
    function StartTest() {
        location.href = 'http://localhost:5173/Questions';
    }

    return (
        <WholeStartPage>
            <GreetingText>
                <PartGreetingText>
                Hello. You have an opportunity to test your knowledge of the English language.
                </PartGreetingText>
                <PartGreetingText>
                The test covers the following grammar topics: Tenses, Modal verbs, Degrees of adjective comparison, Articles and Quantifiers, Questions, Dates and Times.
                </PartGreetingText>
                <PartGreetingText>
                You`ll have 80 minutes, 1 minute for each question.
                </PartGreetingText>
                <PartGreetingText>
                You need to choose one correct answer from the proposed ones.
                </PartGreetingText>
                <MainPartGreetingText>
                Good luck.
                </MainPartGreetingText>
            </GreetingText>
            <Button onClick={StartTest}>.. S T A R T ..</Button>
        </WholeStartPage>
    )
}

export default StartPage;
