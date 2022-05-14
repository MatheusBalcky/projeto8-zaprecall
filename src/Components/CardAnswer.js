import React from "react";
import "../styles/CardAnswer.css";
import '../styles/CardFinal.css';

let rightAnswer = 0;
export default function CardAnswer ({ numero, plusCorrect, pushIcon, answer }){

    const [Component, setComponent] = React.useState(<CardAnsComp answer={answer} selectAnswer={selectAnswer} />)
    
    function selectAnswer (answerClicked, ionIcon){

        setComponent(<CardFinal pushIcon={pushIcon} ionIcon={ionIcon} answerClicked={answerClicked} numero={ numero }/>);

        rightAnswer++;
        plusCorrect(rightAnswer);
        
        pushIcon(ionIcon);
    }

    return (
        <>
        {Component}
        </>
    )
}


function CardAnsComp ({selectAnswer, answer}){

    return (

        <div className="boxAnswer">
            <p className="textAnswer">{answer}</p>
            <div className="options">

                <div onClick={ () => selectAnswer ('red', <ion-icon name="close-circle"></ion-icon> ) } className="optionRed">
                    <p>Não<br />lembrei</p>
                </div>

                <div onClick={ () => selectAnswer ('orange', <ion-icon name="help-circle"></ion-icon> ) } className="optionOrange">
                    <p>Quase não<br />lembrei</p>
                </div>

                <div onClick={ () => selectAnswer ('green', <ion-icon name="checkmark-circle"></ion-icon> ) } className="optionGreen">
                    <p>Zap!</p>
                </div>

            </div>
        </div>
    )
}

function CardFinal ({numero, answerClicked, ionIcon}){

    return (
        <div className="finalBox">
            <p className={answerClicked} ><del>Pergunta {numero + 1}</del></p>
            {ionIcon}
        </div>
    )
}
