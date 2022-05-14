import React from 'react';
import '../styles/FlashcardsScreen.css';
import CardInitial from './CardInitial';
import FooterCardScreen from './FooterCardScreen';
import { deck } from './DeckApi';
 

export default function FlashcardsScreen (){

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
                answer={item.answer}>
                </CardInitial>
                )}
                
            </div>

            <FooterCardScreen numeroDePerguntas={deck.length} />
        </>
    )
}