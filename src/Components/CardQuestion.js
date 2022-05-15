import CardAnswer from "./CardAnswer";
import React from "react";
import '../styles/CardQuestion.css' ;

function CardQuestionComp ({openCard, question}){
    return (
        <div className="questionBox">
            <p>{question}</p>
            <ion-icon onClick={openCard} name="return-down-forward-outline"></ion-icon>
        </div>
    )
}

export default function CardQuestion ({numero, attCardsConcluded, pushIcon, question, answer, attFinalMessage}){

    const [isOpen, setisOpen] = React.useState(<CardQuestionComp question={question} openCard={openCard} />);
    function openCard () {
        setisOpen(<CardAnswer
        answer={answer}
        pushIcon={pushIcon}
        attCardsConcluded={attCardsConcluded}
        numero={numero}
        attFinalMessage={attFinalMessage}/> ) }

    return (
        <>
        {isOpen}
        </>
    )
}