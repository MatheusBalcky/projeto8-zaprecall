import React from 'react';
import '../styles/FlashcardsScreen.css';
import CardInitial from './CardInitial';
import FooterCardScreen from './FooterCardScreen';
import { deck } from './DeckApi';

export default function FlashcardsScreen (){
    
    function comparador (){ return Math.random() - 0.5 }
    deck.sort(comparador);

    const [cardsConcluded, setCorrect] = React.useState(0);
    function attCardsConcluded (valor) { setCorrect(valor)  };

    let icons = [];
    const [iconsFooter, seticonsFooter] = React.useState([]);
    function pushIcon (icon){
        icons = [...icons, icon];
        seticonsFooter(icons)}

    const [finalMessage, setfinalMessage] = React.useState('');
    function attFinalMessage (clicks, rightAnswer){
        if (clicks === deck.length && rightAnswer === deck.length){
            setfinalMessage(<p className='finalMessage'>Você não esqueceu de<br/>nenhum flashcard!</p>)

        } else if (clicks === deck.length && rightAnswer < deck.length){
            setfinalMessage(<p className='finalMessage'>Ainda faltam alguns...<br/>Mas não desanime!</p>)
        }
    }

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
                pushIcon={pushIcon}
                attCardsConcluded={attCardsConcluded}
                attFinalMessage={attFinalMessage}>
                </CardInitial> )}

                <FooterCardScreen icons={iconsFooter} finalMessage={finalMessage} cardsConcluded={cardsConcluded} numeroDePerguntas={deck.length} />
            </div>
            
        </>
    )
}