import React from 'react';
import '../styles/FlashcardsScreen.css';
import CardInitial from './CardInitial';
import FooterCardScreen from './FooterCardScreen';
import { deck } from './DeckApi';
 

export default function FlashcardsScreen (){

    const [rightAnswer, setCorrect] = React.useState(0);
    function plusCorrect (valor){ setCorrect(valor) };

    return (
        <>
            <div className="flashcardsContainer">

                <header className="top">
                    <img width="50px" src="./images/logo.png" alt="logoOfZapRecall Brand Thunder" />
                    <h1>ZapRecall</h1>
                </header>

                {deck.map( (item, index) =>
                <CardInitial 
                key={index}
                numero={index}
                question={item.question}
                answer={item.answer}
                plusCorrect={plusCorrect}>
                </CardInitial>
                )}
                
            </div>

            <FooterCardScreen rightAnswer={rightAnswer} numeroDePerguntas={deck.length} />
        </>
    )
}