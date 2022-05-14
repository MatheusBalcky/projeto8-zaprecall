import React from 'react';
import '../styles/FlashcardsScreen.css';
import CardInitial from './CardInitial';
import FooterCardScreen from './FooterCardScreen';
import { deck } from './DeckApi';
 

export default function FlashcardsScreen (){
    
    function comparador (){
        return Math.random() - 0.5;
    }
    deck.sort(comparador);

    const [rightAnswer, setCorrect] = React.useState(0);
    function plusCorrect (valor){    setCorrect(valor)     };

    let icons = ['teste'];
    function pushIcon (icon){ console.log(icon); icons = [...icons, 'icon']; console.log(icons) };

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
                plusCorrect={plusCorrect}
                pushIcon={pushIcon}>
                </CardInitial>
                )}
                <FooterCardScreen icons={icons} rightAnswer={rightAnswer} numeroDePerguntas={deck.length} />
            </div>

            
        </>
    )
}