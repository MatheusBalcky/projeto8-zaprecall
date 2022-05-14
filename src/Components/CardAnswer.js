import React from "react"
import "../styles/CardAnswer.css"
import CardFinal from "./CardFinal"

function CardAnsComp ({selectAnswer}){

    return (

        <div className="boxAnswer">
            <p className="textAnswer">Js é uma sintaxe para escrever HTML em JSX </p>
            <div className="options">

                <div onClick={ () => selectAnswer ('red') } className="optionRed">
                    <p>Não<br />lembrei</p>
                </div>

                <div onClick={ () => selectAnswer ('orange') } className="optionOrange">
                    <p>Quase não<br />lembrei</p>
                </div>

                <div onClick={ () => selectAnswer ('green')} className="optionGreen">
                    <p>Zap!</p>
                </div>

            </div>
        </div>
    )
}
let rightAnswer = 0;
export default function CardAnswer ({ numero, plusCorrect }){

    const [Component, setComponent] = React.useState(<CardAnsComp selectAnswer={selectAnswer} />)
    
    function selectAnswer (answerClicked){
        
        setComponent(<CardFinal answerClicked={answerClicked} numero={ numero }/>);
        if (answerClicked === 'green'){
            rightAnswer++;
            plusCorrect(rightAnswer) 
        };
    }

    return (
        <>
        {Component}
        </>
    )
}