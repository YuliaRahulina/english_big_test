import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const QuestionsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background-color: #aedcae;
    border: 7px solid #85b985;
    width: 100%;
    height: 100%;
    position: relative;
`;

const FirstQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-content: center;
    width: 550px;
    background-color: wheat;
    border-radius: 10px;
    color: #57af57;
    padding:5px;
    border: 2px solid #57af57;
`;

const SecondQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-content: center;
    width: 550px;
    background-color: #ebc4e3;
    border-radius: 10px;
    color: #57af57;
    padding:5px;
    border: 2px solid #57af57;
`;

const ThirdQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-content: center;
    width: 550px;
    background-color: #f0f6c0;
    border-radius: 10px;
    color: #57af57;
    padding:5px;
    border: 2px solid #57af57;
`;

const FourthQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-content: center;
    width: 550px;
    background-color: #f5cccc;
    border-radius: 10px;
    color: #57af57;
    padding:5px;
    border: 2px solid #57af57;
`;

const FifthQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-content: center;
    width: 550px;
    background-color: #fad0ab;
    border-radius: 10px;
    color: #57af57;
    padding:5px;
    border: 2px solid #57af57;
`;

const SixthQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    justify-content: center;
    width: 550px;
    background-color: #c4dfeb;
    border-radius: 10px;
    color: #57af57;
    padding:5px;
    border: 2px solid #57af57;
`;

const Answers = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    font-size: smaller;
`

const Summery = styled.button`
    background-color: #85b985;
    height: 50px;
    width: 270px;
    color: #eedcb9;
    font-size: 17px;
    font-weight: bold;
    border-radius: 10px;
    position: fixed;
    right: 25px;
    bottom: 25px;
    cursor: pointer;
    &:hover {
        width: 274px;
    }
    border: 3px solid wheat;
`

const Label = styled.p`
    color: #4d9f4d;
    font-size: 30px;
    font-weight: bold;
`


function Questions()  {
    const [result, setResult] = React.useState(0);

    function summeryButton(){
        let total = 0
        let array = document.getElementsByClassName("correctAnswer");
        for (const item of array){
            // @ts-ignore//
            console.log(item.checked)
            // @ts-ignore//
            if (item.checked===true) {
                total = total + 1
            } else {
                item.parentElement.style.color = "red"
            }
        }
        setResult(total)

        if (total<55) {
            window.open(`http://localhost:5173/NotEnough?total=${total}`)
        } else {
            window.open(`http://localhost:5173/Excellent?total=${total}`)
        }
    }

    const [redResult, redSetResult] = React.useState(0);

    let wrongArray = document.getElementsByClassName("answers");


    return (
        <QuestionsList>
            <Timer enoughAction={summeryButton} />
            <Summery onClick={summeryButton}>
                .. I want to know the result ..
            </Summery>
            <Label>I part. Tenses </Label>
            <FirstQuestion>
                1. I always _____ late in the morning, but it is evening now so _____ I tea.
                <Answers>
                    <label htmlFor="input51"><input type="radio" name="input51"/> drinking + drink</label>
                    <label htmlFor="input51"><input className='correctAnswer' type="radio" name="input51"/> drink + drinking</label>
                    <label htmlFor="input51"><input type="radio" name="input51"/> drinking + drinking</label>
                    <label htmlFor="input51"><input type="radio" name="input51"/> drink + drink</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                2. I _____ born in 1993.
                <Answers>
                    <label htmlFor="input52"><input className='correctAnswer' type="radio" name="input52"/> was</label>
                    <label htmlFor="input52"><input type="radio" name="input52"/> were</label>
                    <label htmlFor="input52"><input type="radio" name="input52"/> did</label>
                    <label htmlFor="input52"><input type="radio" name="input52"/> have</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                3. Why _____ you always late? I hate it.
                <Answers>
                    <label htmlFor="input53"><input type="radio" name="input53"/> is</label>
                    <label htmlFor="input53"><input className='correctAnswer' type="radio" name="input53"/> are</label>
                    <label htmlFor="input53"><input type="radio" name="input53"/> did</label>
                    <label htmlFor="input53"><input type="radio" name="input53"/> have</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                4. We _____ in Montenegro several years ago. It _____ beautifull.
                <Answers>
                    <label htmlFor="input54"><input type="radio" name="input54"/> was + was</label>
                    <label htmlFor="input54"><input type="radio" name="input54"/> did + was</label>
                    <label htmlFor="input54"><input className='correctAnswer' type="radio" name="input54"/> were + was</label>
                    <label htmlFor="input54"><input type="radio" name="input54"/> was + were</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                5. _____ you have any brothers or sisters?
                <Answers>
                    <label htmlFor="input55"><input className='correctAnswer' type="radio" name="input55"/> do</label>
                    <label htmlFor="input55"><input type="radio" name="input55"/> does</label>
                    <label htmlFor="input55"><input type="radio" name="input55"/> are</label>
                    <label htmlFor="input55"><input type="radio" name="input55"/> is</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                6. I _____ English yesterday from 5 pm to 6 pm.
                <Answers>
                    <label htmlFor="input56"><input type="radio" name="input56"/> learned</label>
                    <label htmlFor="input56"><input className='correctAnswer' type="radio" name="input56"/> was learning</label>
                    <label htmlFor="input56"><input type="radio" name="input56"/> ware learning</label>
                    <label htmlFor="input56"><input type="radio" name="input56"/> did learn</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                7. _____ the Sun rise in the east?
                <Answers>
                    <label htmlFor="input57"><input type="radio" name="input57"/> do</label>
                    <label htmlFor="input57"><input type="radio" name="input57"/> is</label>
                    <label htmlFor="input57"><input className='correctAnswer' type="radio" name="input57"/> does</label>
                    <label htmlFor="input57"><input type="radio" name="input57"/> are</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                8. I _____ at work the day before yesterday.
                <Answers>
                    <label htmlFor="input58"><input type="radio" name="input58"/> did</label>
                    <label htmlFor="input58"><input type="radio" name="input58"/> were</label>
                    <label htmlFor="input58"><input type="radio" name="input58"/> am</label>
                    <label htmlFor="input58"><input className='correctAnswer' type="radio" name="input58"/> was</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                9. Shut up, please. He _____ .
                <Answers>
                    <label htmlFor="input59"><input className='correctAnswer' type="radio" name="input59"/> is sleeping</label>
                    <label htmlFor="input59"><input type="radio" name="input59"/> sleep</label>
                    <label htmlFor="input59"><input type="radio" name="input59"/> sleeps</label>
                    <label htmlFor="input59"><input type="radio" name="input59"/> sleeped</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                10. We _____ the house all day yesterday.
                <Answers>
                    <label htmlFor="input60"><input type="radio" name="input60"/> cleaned</label>
                    <label htmlFor="input60"><input className='correctAnswer' type="radio" name="input60"/> were cleaning</label>
                    <label htmlFor="input60"><input type="radio" name="input60"/> are cleaning</label>
                    <label htmlFor="input60"><input type="radio" name="input60"/> did clean</label>
                </Answers>
            </FirstQuestion>


            <FirstQuestion>
                11. I _____ in Kyiv since 2016.
                <Answers>
                    <label htmlFor="input61"><input type="radio" name="input61"/> lived</label>
                    <label htmlFor="input61"><input className='correctAnswer' type="radio" name="input61"/> have lived</label>
                    <label htmlFor="input61"><input type="radio" name="input61"/> live</label>
                    <label htmlFor="input61"><input type="radio" name="input61"/> have live</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                12. She has already _____ the coffee, so it is enough for today.
                <Answers>
                    <label htmlFor="input62"><input type="radio" name="input62"/> drink</label>
                    <label htmlFor="input62"><input type="radio" name="input62"/> drinks</label>
                    <label htmlFor="input62"><input type="radio" name="input62"/> drank</label>
                    <label htmlFor="input62"><input className='correctAnswer' type="radio" name="input62"/> drunk</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                13. I _____ my task yet, so you need to wait some time.
                <Answers>
                    <label htmlFor="input63"><input type="radio" name="input63"/> did not do</label>
                    <label htmlFor="input63"><input className='correctAnswer' type="radio" name="input63"/> have not done</label>
                    <label htmlFor="input63"><input type="radio" name="input63"/> did not did</label>
                    <label htmlFor="input63"><input type="radio" name="input63"/> has not done</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                14. We _____ such a wonderful time outside, before we went on a sea cruise.
                <Answers>
                    <label htmlFor="input64"><input type="radio" name="input64"/> did not spent</label>
                    <label htmlFor="input64"><input type="radio" name="input64"/> have not spent</label>
                    <label htmlFor="input64"><input className='correctAnswer' type="radio" name="input64"/> had not spent</label>
                    <label htmlFor="input64"><input type="radio" name="input64"/> did not spend</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                15. I _____ to my office yestrday, so for this week it is enough.
                <Answers>
                    <label htmlFor="input65"><input className='correctAnswer' type="radio" name="input65"/> went</label>
                    <label htmlFor="input65"><input type="radio" name="input65"/> have gone</label>
                    <label htmlFor="input65"><input type="radio" name="input65"/> had gone</label>
                    <label htmlFor="input65"><input type="radio" name="input65"/> go</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                16. We _____ each other for two years.
                <Answers>
                    <label htmlFor="input66"><input type="radio" name="input66"/> did not see</label>
                    <label htmlFor="input66"><input className='correctAnswer' type="radio" name="input66"/> have not seen</label>
                    <label htmlFor="input66"><input type="radio" name="input66"/> has not seen</label>
                    <label htmlFor="input66"><input type="radio" name="input66"/> saw</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                17. Have you ever _____ to Montenegro?
                <Answers>
                    <label htmlFor="input67"><input type="radio" name="input67"/> be</label>
                    <label htmlFor="input67"><input type="radio" name="input67"/> was</label>
                    <label htmlFor="input67"><input className='correctAnswer' type="radio" name="input67"/> been</label>
                    <label htmlFor="input67"><input type="radio" name="input67"/> were</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                18. Had Dmytro _____ when you started work?
                <Answers>
                    <label htmlFor="input68"><input type="radio" name="input68"/> comes</label>
                    <label htmlFor="input68"><input type="radio" name="input68"/> coming</label>
                    <label htmlFor="input68"><input type="radio" name="input68"/> came</label>
                    <label htmlFor="input68"><input className='correctAnswer' type="radio" name="input68"/> come</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                19. They _____ a new car yet.
                <Answers>
                    <label htmlFor="input69"><input className='correctAnswer' type="radio" name="input69"/> have not bought</label>
                    <label htmlFor="input69"><input type="radio" name="input69"/> has not bought</label>
                    <label htmlFor="input69"><input type="radio" name="input69"/> had not bought</label>
                    <label htmlFor="input69"><input type="radio" name="input69"/> did not buy</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                20. I _____ English for a week.
                <Answers>
                    <label htmlFor="input70"><input type="radio" name="input70"/> has not studied</label>
                    <label htmlFor="input70"><input className='correctAnswer' type="radio" name="input70"/> have not studied</label>
                    <label htmlFor="input70"><input type="radio" name="input70"/> had not studied</label>
                    <label htmlFor="input70"><input type="radio" name="input70"/> did not study</label>
                </Answers>
            </FirstQuestion>


            <FirstQuestion>
                21. I _____ a new mobile phone for me.
                <Answers>
                    <label htmlFor="input71"><input type="radio" name="input71"/> buy</label>
                    <label htmlFor="input71"><input className='correctAnswer' type="radio" name="input71"/> am going to buy</label>
                    <label htmlFor="input71"><input type="radio" name="input71"/> will buy</label>
                    <label htmlFor="input71"><input type="radio" name="input71"/> am buying</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                22. I _____ a new mobile phone for me today in the afternoon.
                <Answers>
                    <label htmlFor="input72"><input type="radio" name="input72"/> buy</label>
                    <label htmlFor="input72"><input type="radio" name="input72"/> am going to buy</label>
                    <label htmlFor="input72"><input type="radio" name="input72"/> will buy</label>
                    <label htmlFor="input72"><input className='correctAnswer' type="radio" name="input72"/> am buying</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                23. We hope it _____ warm next week.
                <Answers>
                    <label htmlFor="input73"><input type="radio" name="input73"/> is going to be</label>
                    <label htmlFor="input73"><input className='correctAnswer' type="radio" name="input73"/> will be</label>
                    <label htmlFor="input73"><input type="radio" name="input73"/> is being</label>
                    <label htmlFor="input73"><input type="radio" name="input73"/> been</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                24. It _____ tomorrow. I am not sure, but it is possible.
                <Answers>
                    <label htmlFor="input74"><input type="radio" name="input74"/> will rain</label>
                    <label htmlFor="input74"><input type="radio" name="input74"/> is going to rain</label>
                    <label htmlFor="input74"><input className='correctAnswer' type="radio" name="input74"/> may rain</label>
                    <label htmlFor="input74"><input type="radio" name="input74"/> is raining</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                25. We _____ the park tomorrow in the evening about 6 pm.
                <Answers>
                    <label htmlFor="input75"><input className='correctAnswer' type="radio" name="input75"/> are visiting</label>
                    <label htmlFor="input75"><input type="radio" name="input75"/> are going to visit</label>
                    <label htmlFor="input75"><input type="radio" name="input75"/> will visit</label>
                    <label htmlFor="input75"><input type="radio" name="input75"/> visit</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                26. Yulia _____ on Saturday, because she want to take day-off.
                <Answers>
                    <label htmlFor="input76"><input type="radio" name="input76"/> will not work</label>
                    <label htmlFor="input76"><input className='correctAnswer' type="radio" name="input76"/> is not going to work</label>
                    <label htmlFor="input76"><input type="radio" name="input76"/> is not working</label>
                    <label htmlFor="input76"><input type="radio" name="input76"/> may not work</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                27. Dmytro _____ his exams if he does not study better.
                <Answers>
                    <label htmlFor="input77"><input type="radio" name="input77"/> will not pass</label>
                    <label htmlFor="input77"><input type="radio" name="input77"/> is not going to pass</label>
                    <label htmlFor="input77"><input className='correctAnswer' type="radio" name="input77"/> may not pass</label>
                    <label htmlFor="input77"><input className='correctAnswer' type="radio" name="input77"/> might not pass</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                28. I believe I _____ Italy some day.
                <Answers>
                    <label htmlFor="input78"><input type="radio" name="input78"/> am going to visit</label>
                    <label htmlFor="input78"><input type="radio" name="input78"/> am visiting</label>
                    <label htmlFor="input78"><input type="radio" name="input78"/> visit</label>
                    <label htmlFor="input78"><input className='correctAnswer' type="radio" name="input78"/> will visit</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                29. I _____ Italy this year. It is my goal.
                <Answers>
                    <label htmlFor="input79"><input className='correctAnswer' type="radio" name="input79"/> am going to visit</label>
                    <label htmlFor="input79"><input type="radio" name="input79"/> am visiting</label>
                    <label htmlFor="input79"><input type="radio" name="input79"/> visit</label>
                    <label htmlFor="input79"><input type="radio" name="input79"/> will visit</label>
                </Answers>
            </FirstQuestion>
            <FirstQuestion>
                30. I  _____ Italy next month, I have already bought a ticket.
                <Answers>
                    <label htmlFor="input80"><input type="radio" name="input80"/> am going to visit</label>
                    <label htmlFor="input80"><input className='correctAnswer' type="radio" name="input80"/> am visiting</label>
                    <label htmlFor="input80"><input type="radio" name="input80"/> visit</label>
                    <label htmlFor="input80"><input type="radio" name="input80"/> will visit</label>
                </Answers>
            </FirstQuestion>




            <Label>II part. Modal Verbs </Label>
            <SecondQuestion>
                31. I _____ swim well now, but I _____ not do it when I was five.
                <Answers>
                    <label htmlFor="input41"><input type="radio" name="input41"/> could + can</label>
                    <label htmlFor="input41"><input className='correctAnswer' type="radio" name="input41"/> can + could</label>
                    <label htmlFor="input41"><input type="radio" name="input41"/> can + can</label>
                    <label htmlFor="input41"><input type="radio" name="input41"/> could + could</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                32. Sorry I _____ not call you last week. I was very busy.
                <Answers>
                    <label htmlFor="input42"><input className='correctAnswer' type="radio" name="input42"/> could</label>
                    <label htmlFor="input42"><input type="radio" name="input42"/> can</label>
                    <label htmlFor="input42"><input type="radio" name="input42"/> do</label>
                    <label htmlFor="input42"><input type="radio" name="input42"/> have</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
               33. You _____ pay for yourself. It is your duty.
                <Answers>
                    <label htmlFor="input43"><input type="radio" name="input43"/> have</label>
                    <label htmlFor="input43"><input className='correctAnswer' type="radio" name="input43"/> must</label>
                    <label htmlFor="input43"><input type="radio" name="input43"/> have to</label>
                    <label htmlFor="input43"><input type="radio" name="input43"/> must to</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                34. You _____ not eat so much fast food if you want to wear your favourite close, but it is your choise of course.
                <Answers>
                    <label htmlFor="input44"><input type="radio" name="input44"/> must</label>
                    <label htmlFor="input44"><input type="radio" name="input44"/> can</label>
                    <label htmlFor="input44"><input className='correctAnswer' type="radio" name="input44"/> should</label>
                    <label htmlFor="input44"><input type="radio" name="input44"/> could</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                35. You _____ drink alcohol when you become 18.
                <Answers>
                    <label htmlFor="input45"><input className='correctAnswer' type="radio" name="input45"/> can</label>
                    <label htmlFor="input45"><input type="radio" name="input45"/> could</label>
                    <label htmlFor="input45"><input type="radio" name="input45"/> should</label>
                    <label htmlFor="input45"><input type="radio" name="input45"/> must</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                36. You _____ learn English, because you need it for your job.
                <Answers>
                    <label htmlFor="input46"><input type="radio" name="input46"/> can</label>
                    <label htmlFor="input46"><input className='correctAnswer' type="radio" name="input46"/> have to</label>
                    <label htmlFor="input46"><input type="radio" name="input46"/> must</label>
                    <label htmlFor="input46"><input type="radio" name="input46"/> could</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                37. You _____ respect me! Because I am your mother!
                <Answers>
                    <label htmlFor="input47"><input type="radio" name="input47"/> can</label>
                    <label htmlFor="input47"><input type="radio" name="input47"/> should</label>
                    <label htmlFor="input47"><input className='correctAnswer' type="radio" name="input47"/> must</label>
                    <label htmlFor="input47"><input type="radio" name="input47"/> have to</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                38. I _____ to drive the car, so do not worry and relax. It is easy.
                <Answers>
                    <label htmlFor="input48"><input type="radio" name="input48"/> must</label>
                    <label htmlFor="input48"><input type="radio" name="input48"/> have to</label>
                    <label htmlFor="input48"><input className='correctAnswer' type="radio" name="input48"/> can</label>
                    <label htmlFor="input48"><input className='correctAnswer' type="radio" name="input48"/> am able to</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                39. He _____ answer the questions at the exam yesterday,but he _____ not do it because he was nervous.
                <Answers>
                    <label htmlFor="input49"><input className='correctAnswer' type="radio" name="input49"/> was able to + could</label>
                    <label htmlFor="input49"><input type="radio" name="input49"/> could + can</label>
                    <label htmlFor="input49"><input type="radio" name="input49"/> should + could</label>
                    <label htmlFor="input49"><input type="radio" name="input49"/> had to + should</label>
                </Answers>
            </SecondQuestion>
            <SecondQuestion>
                40. I _____ help you with your task. I have free time, so let us do it.
                <Answers>
                    <label htmlFor="input50"><input type="radio" name="input50"/> could</label>
                    <label htmlFor="input50"><input className='correctAnswer' type="radio" name="input50"/> can</label>
                    <label htmlFor="input50"><input type="radio" name="input50"/> have to</label>
                    <label htmlFor="input50"><input type="radio" name="input50"/> must</label>
                </Answers>
            </SecondQuestion>



            <Label>III part. Degrees of Adjective Comparison </Label>
            <ThirdQuestion>
                41. Today I am _____ than yesterday, so I need some rest.
                <Answers>
                    <label htmlFor="input31"><input type="radio" name="input31"/> tireder</label>
                    <label htmlFor="input31"><input className='correctAnswer' type="radio" name="input31"/> more tired</label>
                    <label htmlFor="input31"><input type="radio" name="input31"/> most tired</label>
                    <label htmlFor="input31"><input type="radio" name="input31"/> the most tired</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                42. Ukraine is _____ country in the world.
                <Answers>
                    <label htmlFor="input32"><input className='correctAnswer' type="radio" name="input32"/> the best</label>
                    <label htmlFor="input32"><input type="radio" name="input32"/> the better</label>
                    <label htmlFor="input32"><input type="radio" name="input32"/> better</label>
                    <label htmlFor="input32"><input type="radio" name="input32"/> goodest</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                43. I have never been _____ in my entire life than now.
                <Answers>
                    <label htmlFor="input33"><input type="radio" name="input33"/> happy</label>
                    <label htmlFor="input33"><input className='correctAnswer' type="radio" name="input33"/> happier</label>
                    <label htmlFor="input33"><input type="radio" name="input33"/> more happy</label>
                    <label htmlFor="input33"><input type="radio" name="input33"/> pappiest</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                44. Could you be _____ with me?
                <Answers>
                    <label htmlFor="input34"><input type="radio" name="input34"/> politest</label>
                    <label htmlFor="input34"><input className='correctAnswer' type="radio" name="input34"/> politer</label>
                    <label htmlFor="input34"><input className='correctAnswer' type="radio" name="input34"/> more polite</label>
                    <label htmlFor="input34"><input type="radio" name="input34"/> most polite</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                45. russia is _____ country in the world, it is just _____.
                <Answers>
                    <label htmlFor="input35"><input className='correctAnswer' type="radio" name="input35"/> the most awful + the worst</label>
                    <label htmlFor="input35"><input type="radio" name="input35"/> the awfullest + the worst</label>
                    <label htmlFor="input35"><input type="radio" name="input35"/> the most awful + the baddest</label>
                    <label htmlFor="input35"><input type="radio" name="input35"/> the awfullest + the baddest</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                46. I am _____ than my brother Maksim.
                <Answers>
                    <label htmlFor="input36"><input type="radio" name="input36"/> old</label>
                    <label htmlFor="input36"><input className='correctAnswer' type="radio" name="input36"/> older</label>
                    <label htmlFor="input36"><input type="radio" name="input36"/> more old</label>
                    <label htmlFor="input36"><input type="radio" name="input36"/> the oldest</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                47. My last job was _____ from my home than my current job.
                <Answers>
                    <label htmlFor="input37"><input type="radio" name="input37"/> farer</label>
                    <label htmlFor="input37"><input type="radio" name="input37"/> further</label>
                    <label htmlFor="input37"><input className='correctAnswer' type="radio" name="input37"/> farther</label>
                    <label htmlFor="input37"><input type="radio" name="input37"/> the farther</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                48. Sometimes I feel like I am _____ person in the world.
                <Answers>
                    <label htmlFor="input38"><input type="radio" name="input38"/> most stupid</label>
                    <label htmlFor="input38"><input type="radio" name="input38"/> more stupid</label>
                    <label htmlFor="input38"><input className='correctAnswer' type="radio" name="input38"/> the most stupid</label>
                    <label htmlFor="input38"><input className='correctAnswer' type="radio" name="input38"/> the stupidest</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                49. The appartment of my dream is _____ than my possibilities.
                <Answers>
                    <label htmlFor="input39"><input className='correctAnswer' type="radio" name="input39"/> more expensive</label>
                    <label htmlFor="input39"><input type="radio" name="input39"/> most expensive</label>
                    <label htmlFor="input39"><input type="radio" name="input39"/> expensiver</label>
                    <label htmlFor="input39"><input type="radio" name="input39"/> the most expensive</label>
                </Answers>
            </ThirdQuestion>
            <ThirdQuestion>
                50. Dnipro river is much more _____ than Temza.
                <Answers>
                    <label htmlFor="input40"><input type="radio" name="input40"/> big</label>
                    <label htmlFor="input40"><input className='correctAnswer' type="radio" name="input40"/> bigger</label>
                    <label htmlFor="input40"><input type="radio" name="input40"/> the biggest</label>
                    <label htmlFor="input40"><input type="radio" name="input40"/> the bigger</label>
                </Answers>
            </ThirdQuestion>



            <Label>IV part. Articles and Quantifiers </Label>
            <FourthQuestion>
                51. Do you have _____ hour for me? I need your help.
                <Answers>
                    <label htmlFor="input21"><input type="radio" name="input21"/> a</label>
                    <label htmlFor="input21"><input className='correctAnswer' type="radio" name="input21"/> an</label>
                    <label htmlFor="input21"><input type="radio" name="input21"/> the</label>
                    <label htmlFor="input21"><input type="radio" name="input21"/> -</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                52. I bought for you _____ apple, _____ banana and _____ apricot.
                <Answers>
                    <label htmlFor="input22"><input className='correctAnswer' type="radio" name="input22"/> an + a + an</label>
                    <label htmlFor="input22"><input type="radio" name="input22"/> an + an + an</label>
                    <label htmlFor="input22"><input type="radio" name="input22"/> a + a + a</label>
                    <label htmlFor="input22"><input type="radio" name="input22"/> an + an + a</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                53. I need _____ bananas, do you have _____ bananas?
                <Answers>
                    <label htmlFor="input23"><input type="radio" name="input23"/> any + some</label>
                    <label htmlFor="input23"><input className='correctAnswer' type="radio" name="input23"/> some + any</label>
                    <label htmlFor="input23"><input type="radio" name="input23"/> some + some</label>
                    <label htmlFor="input23"><input type="radio" name="input23"/> any + any</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                54. What time is it now? It is _____ half past ten pm.
                <Answers>
                    <label htmlFor="input24"><input type="radio" name="input24"/> a</label>
                    <label htmlFor="input24"><input type="radio" name="input24"/> the</label>
                    <label htmlFor="input24"><input className='correctAnswer' type="radio" name="input24"/> -</label>
                    <label htmlFor="input24"><input type="radio" name="input24"/> an</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                55. What time is it now? It is _____ quarter to ten pm.
                <Answers>
                    <label htmlFor="input25"><input className='correctAnswer' type="radio" name="input25"/> a</label>
                    <label htmlFor="input25"><input type="radio" name="input25"/> the</label>
                    <label htmlFor="input25"><input type="radio" name="input25"/> an</label>
                    <label htmlFor="input25"><input type="radio" name="input25"/> -</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                56. How _____ sugar did you put in my late? I can not drink it.
                <Answers>
                    <label htmlFor="input26"><input type="radio" name="input26"/> many</label>
                    <label htmlFor="input26"><input className='correctAnswer' type="radio" name="input26"/> much</label>
                    <label htmlFor="input26"><input type="radio" name="input26"/> a lot of</label>
                    <label htmlFor="input26"><input type="radio" name="input26"/> -</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                57. I do not have _____ close friends in my life. But I have _____ pals-приятелів.
                <Answers>
                    <label htmlFor="input27"><input type="radio" name="input27"/> much + a lot of</label>
                    <label htmlFor="input27"><input type="radio" name="input27"/> a lot of + many</label>
                    <label htmlFor="input27"><input className='correctAnswer' type="radio" name="input27"/> many + a lot of</label>
                    <label htmlFor="input27"><input type="radio" name="input27"/> many + much</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                58. I need _____ apples for my pie and _____ sugar.
                <Answers>
                    <label htmlFor="input28"><input type="radio" name="input28"/> a few + a few</label>
                    <label htmlFor="input28"><input type="radio" name="input28"/> a little + a little</label>
                    <label htmlFor="input28"><input type="radio" name="input28"/> a little + a few</label>
                    <label htmlFor="input28"><input className='correctAnswer' type="radio" name="input28"/> a few + a little</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                59. I am from _____ Ukraine, and you are from _____ UK.
                <Answers>
                    <label htmlFor="input29"><input className='correctAnswer' type="radio" name="input29"/> - + the</label>
                    <label htmlFor="input29"><input type="radio" name="input29"/> the + -</label>
                    <label htmlFor="input29"><input type="radio" name="input29"/> - + a</label>
                    <label htmlFor="input29"><input type="radio" name="input29"/> - + -</label>
                </Answers>
            </FourthQuestion>
            <FourthQuestion>
                60. I live _____ Kyiv, I think it is _____ best city in the world.
                <Answers>
                    <label htmlFor="input30"><input type="radio" name="input30"/> the + the</label>
                    <label htmlFor="input30"><input className='correctAnswer' type="radio" name="input30"/> - + the</label>
                    <label htmlFor="input30"><input type="radio" name="input30"/> a + the</label>
                    <label htmlFor="input30"><input type="radio" name="input30"/> - + a</label>
                </Answers>
            </FourthQuestion>



            <Label>V part. Questions </Label>
            <FifthQuestion>
                61. _____ can we go to the town center? Today or tomorrow?
                <Answers>
                    <label htmlFor="input1"><input type="radio" name="input1"/> What</label>
                    <label htmlFor="input1"><input className='correctAnswer' type="radio" name="input1"/> When</label>
                    <label htmlFor="input1"><input type="radio" name="input1"/> Where</label>
                    <label htmlFor="input1"><input type="radio" name="input1"/> Why</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                62. _____ do you prefer to do in your free time?
                <Answers>
                    <label htmlFor="input2"><input className='correctAnswer' type="radio" name="input2"/> What</label>
                    <label htmlFor="input2"><input type="radio" name="input2"/> How</label>
                    <label htmlFor="input2"><input type="radio" name="input2"/> Where</label>
                    <label htmlFor="input2"><input type="radio" name="input2"/> Which</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                63. _____ is that? I didn`t see him here before.
                <Answers>
                    <label htmlFor="input3"><input type="radio" name="input3"/> What</label>
                    <label htmlFor="input3"><input className='correctAnswer' type="radio" name="input3"/> Who</label>
                    <label htmlFor="input3"><input type="radio" name="input3"/> Which</label>
                    <label htmlFor="input3"><input type="radio" name="input3"/> Why</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                64. _____ are your friends? We are waiting them for too long.
                <Answers>
                    <label htmlFor="input4"><input type="radio" name="input4"/> What</label>
                    <label htmlFor="input4"><input type="radio" name="input4"/> When</label>
                    <label htmlFor="input4"><input className='correctAnswer' type="radio" name="input4"/> Where</label>
                    <label htmlFor="input4"><input type="radio" name="input4"/> Why</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                65. _____ time is it now?
                <Answers>
                    <label htmlFor="input5"><input className='correctAnswer' type="radio" name="input5"/> What</label>
                    <label htmlFor="input5"><input type="radio" name="input5"/> Which</label>
                    <label htmlFor="input5"><input type="radio" name="input5"/> Where</label>
                    <label htmlFor="input5"><input type="radio" name="input5"/> Who</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                66. _____ do you usually get up in the morning? Early or late?
                <Answers>
                    <label htmlFor="input6"><input type="radio" name="input6"/> What</label>
                    <label htmlFor="input6"><input className='correctAnswer' type="radio" name="input6"/> When</label>
                    <label htmlFor="input6"><input type="radio" name="input6"/> Where</label>
                    <label htmlFor="input6"><input type="radio" name="input6"/> Why</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                67. _____ can I learn English? It`s so hard!
                <Answers>
                    <label htmlFor="input7"><input type="radio" name="input7"/> Why</label>
                    <label htmlFor="input7"><input type="radio" name="input7"/> Which</label>
                    <label htmlFor="input7"><input className='correctAnswer' type="radio" name="input7"/> How</label>
                    <label htmlFor="input7"><input type="radio" name="input7"/> What</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                68. _____ did you get there? By bus or buy train?
                <Answers>
                    <label htmlFor="input8"><input type="radio" name="input8"/> Where</label>
                    <label htmlFor="input8"><input type="radio" name="input8"/> When</label>
                    <label htmlFor="input8"><input type="radio" name="input8"/> Why</label>
                    <label htmlFor="input8"><input className='correctAnswer' type="radio" name="input8"/> How</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                69. _____ are you so sad? What happened?
                <Answers>
                    <label htmlFor="input9"><input className='correctAnswer' type="radio" name="input9"/> Why</label>
                    <label htmlFor="input9"><input type="radio" name="input9"/> When</label>
                    <label htmlFor="input9"><input type="radio" name="input9"/> What</label>
                    <label htmlFor="input9"><input type="radio" name="input9"/> Which</label>
                </Answers>
            </FifthQuestion>
            <FifthQuestion>
                70. _____ telephone is this? Yours or mine?
                <Answers>
                    <label htmlFor="input10"><input type="radio" name="input10"/> What</label>
                    <label htmlFor="input10"><input className='correctAnswer' type="radio" name="input10"/> Whose</label>
                    <label htmlFor="input10"><input type="radio" name="input10"/> Which</label>
                    <label htmlFor="input10"><input type="radio" name="input10"/> How</label>
                </Answers>
            </FifthQuestion>



            <Label>VI part. Dates and Times</Label>
            <SixthQuestion>
                71. My birthday is _____ 19th _____ October.
                <Answers>
                    <label htmlFor="input11"><input type="radio" name="input11"/> on + in</label>
                    <label htmlFor="input11"><input className='correctAnswer' type="radio" name="input11"/> on + of</label>
                    <label htmlFor="input11"><input type="radio" name="input11"/> at + in</label>
                    <label htmlFor="input11"><input type="radio" name="input11"/> in + of</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                72. I was born _____ 1993.
                <Answers>
                    <label htmlFor="input12"><input type="radio" name="input12"/> at</label>
                    <label htmlFor="input12"><input type="radio" name="input12"/> -</label>
                    <label htmlFor="input12"><input className='correctAnswer' type="radio" name="input12"/> in</label>
                    <label htmlFor="input12"><input type="radio" name="input12"/> on</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                73. I am going to visit Konotop _____ June.
                <Answers>
                    <label htmlFor="input13"><input className='correctAnswer' type="radio" name="input13"/> in</label>
                    <label htmlFor="input13"><input type="radio" name="input13"/> on</label>
                    <label htmlFor="input13"><input type="radio" name="input13"/> at</label>
                    <label htmlFor="input13"><input type="radio" name="input13"/> -</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                74. I usually get up _____ 9 oclock in the morning.
                <Answers>
                    <label htmlFor="input14"><input type="radio" name="input14"/> by</label>
                    <label htmlFor="input14"><input type="radio" name="input14"/> on</label>
                    <label htmlFor="input14"><input className='correctAnswer' type="radio" name="input14"/> at</label>
                    <label htmlFor="input14"><input type="radio" name="input14"/> in</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                75. I like to be free _____ spring, because it is one of my favourite season.
                <Answers>
                    <label htmlFor="input15"><input className='correctAnswer' type="radio" name="input15"/> in</label>
                    <label htmlFor="input15"><input type="radio" name="input15"/> at</label>
                    <label htmlFor="input15"><input type="radio" name="input15"/> on</label>
                    <label htmlFor="input15"><input type="radio" name="input15"/> -</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                76. _____ the morning I like to drink late, and _____ night I prefer herbal tea.
                <Answers>
                    <label htmlFor="input16"><input type="radio" name="input16"/> in + in</label>
                    <label htmlFor="input16"><input className='correctAnswer' type="radio" name="input16"/> in + at</label>
                    <label htmlFor="input16"><input type="radio" name="input16"/> at + at</label>
                    <label htmlFor="input16"><input type="radio" name="input16"/> at + in</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                77. My birthday is _____ October.
                <Answers>
                    <label htmlFor="input17"><input type="radio" name="input17"/> on</label>
                    <label htmlFor="input17"><input type="radio" name="input17"/> at</label>
                    <label htmlFor="input17"><input className='correctAnswer' type="radio" name="input17"/> in</label>
                    <label htmlFor="input17"><input type="radio" name="input17"/> -</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                78. I met him yesterday _____ six past nine in the evening.
                <Answers>
                    <label htmlFor="input18"><input type="radio" name="input18"/> -</label>
                    <label htmlFor="input18"><input type="radio" name="input18"/> in</label>
                    <label htmlFor="input18"><input type="radio" name="input18"/> on</label>
                    <label htmlFor="input18"><input className='correctAnswer' type="radio" name="input18"/> at</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                79. I got this present _____ Christmas day.
                <Answers>
                    <label htmlFor="input19"><input className='correctAnswer' type="radio" name="input19"/> on</label>
                    <label htmlFor="input19"><input type="radio" name="input19"/> in</label>
                    <label htmlFor="input19"><input type="radio" name="input19"/> for</label>
                    <label htmlFor="input19"><input type="radio" name="input19"/> at</label>
                </Answers>
            </SixthQuestion>
            <SixthQuestion>
                80. I hope our victory comes _____ 2023.
                <Answers>
                    <label htmlFor="input20"><input type="radio" name="input20"/> by</label>
                    <label htmlFor="input20"><input className='correctAnswer' type="radio" name="input20"/> in</label>
                    <label htmlFor="input20"><input type="radio" name="input20"/> on</label>
                    <label htmlFor="input20"><input type="radio" name="input20"/> at</label>
                </Answers>
            </SixthQuestion>
        </QuestionsList>
    )
}

export default Questions;
